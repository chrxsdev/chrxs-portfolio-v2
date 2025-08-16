import { createClient } from '@supabase/supabase-js';
import { config } from '../config/env';

const options = {
  db: {
    schema: 'portfolio',
  }
};

export const supabase = createClient(config.supabase.url, config.supabase.key, options);
