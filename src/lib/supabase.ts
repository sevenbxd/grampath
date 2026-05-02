import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface UserProgress {
  id: string;
  user_id: string;
  streak: number;
  last_access_date: string | null;
  total_xp: number;
  gems: number;
  current_walkthrough_step: number;
  walkthrough_progress: Record<string, number>;
  skill_mastery: Record<string, number>;
  step_progress: Record<string, unknown>;
  achievements: Record<string, unknown>[];
  daily_stats: Record<string, unknown>[];
  completed_challenges: string[];
  has_seen_onboarding: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  equipped_icon: string;
  equipped_frame: string;
  avatar_items: string[];
  created_at: string;
  updated_at: string;
}