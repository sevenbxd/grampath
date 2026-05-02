-- Execute este SQL no Supabase (SQL Editor)

-- Tabela de progresso do usuário
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT UNIQUE NOT NULL,
  streak INTEGER DEFAULT 0,
  last_access_date TEXT,
  total_xp INTEGER DEFAULT 0,
  gems INTEGER DEFAULT 0,
  current_walkthrough_step INTEGER DEFAULT 1,
  walkthrough_progress JSONB DEFAULT '{}',
  skill_mastery JSONB DEFAULT '{}',
  step_progress JSONB DEFAULT '{}',
  achievements JSONB DEFAULT '[]',
  daily_stats JSONB DEFAULT '[]',
  completed_challenges JSONB DEFAULT '[]',
  has_seen_onboarding BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de perfil do usuário
CREATE TABLE IF NOT EXISTS user_profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT UNIQUE NOT NULL,
  equipped_icon TEXT DEFAULT '👽',
  equipped_frame TEXT DEFAULT 'blue',
  avatar_items JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profile ENABLE ROW LEVEL SECURITY;

-- Criar políticas de acesso (permite acesso sem autenticação para desenvolvimento)
DROP POLICY IF EXISTS "Allow all for user_progress" ON user_progress;
CREATE POLICY "Allow all for user_progress" ON user_progress FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for user_profile" ON user_profile;
CREATE POLICY "Allow all for user_profile" ON user_profile FOR ALL USING (true) WITH CHECK (true);