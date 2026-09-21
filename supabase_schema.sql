-- ==========================================
-- LOCKERSEA PHASE 1 SQL DATABASE SCHEMA
-- ==========================================

-- 1. WAITLIST TABLE (For Landing Page Signups)
CREATE TABLE public.waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    company TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row-Level Security (RLS) for Waitlist
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous insert for signups (landing page)
CREATE POLICY "Allow public signups" 
ON public.waitlist 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow admins to read waitlist
CREATE POLICY "Allow authenticated read access" 
ON public.waitlist 
FOR SELECT 
TO authenticated 
USING (true);


-- 2. AIS: IDENTITIES TABLE (Cryptographic identities for autonomous systems)
CREATE TABLE public.identities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    did_uri TEXT UNIQUE NOT NULL, -- e.g. "did:lockersea:node-identity-prod-01"
    public_key TEXT NOT NULL,     -- Post-quantum cryptographic public key
    status TEXT NOT NULL DEFAULT 'active', -- 'active', 'suspended', 'revoked'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- 3. ADS: SERVICES REGISTRY (Trust-aware service discovery endpoint registry)
CREATE TABLE public.discovery_services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    capability TEXT NOT NULL,       -- e.g. "payment-v2", "order-retrieval"
    endpoint_url TEXT NOT NULL,     -- API endpoint/route location
    trust_score NUMERIC(5,2) DEFAULT 100.00,
    owner_identity_id UUID REFERENCES public.identities(id) ON DELETE SET NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index capability for quick DNS-style lookups
CREATE INDEX idx_services_capability ON public.discovery_services(capability) WHERE is_active = true;


-- 4. AZT: ZERO-TRUST POLICIES (Least-privilege authorization policies)
CREATE TABLE public.policies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_identity_id UUID NOT NULL REFERENCES public.identities(id) ON DELETE CASCADE,
    target_service_id UUID NOT NULL REFERENCES public.discovery_services(id) ON DELETE CASCADE,
    allowed_scopes TEXT[] NOT NULL DEFAULT '{}', -- e.g. '{"read", "create"}'
    budget_limit NUMERIC(10,2),                  -- Dollar/volume budget limits if applicable
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- 5. ATL: TRUST LEDGER LOGS (Cryptographically verifiable append-only audit ledger)
CREATE TABLE public.ledger_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    initiator_identity_id UUID REFERENCES public.identities(id) ON DELETE SET NULL,
    target_service_id UUID REFERENCES public.discovery_services(id) ON DELETE SET NULL,
    action TEXT NOT NULL,                        -- e.g. "Read Order #54821", "Access Payroll"
    result TEXT NOT NULL,                        -- "ALLOWED" or "DENIED"
    payload_hash TEXT NOT NULL,                  -- Tamper-proof SHA256 payload signature
    signature TEXT NOT NULL                      -- Cryptographic signature of this ledger log block
);

-- Create index for audits and compliance reviews
CREATE INDEX idx_ledger_initiator ON public.ledger_logs(initiator_identity_id);
CREATE INDEX idx_ledger_timestamp ON public.ledger_logs(timestamp DESC);
