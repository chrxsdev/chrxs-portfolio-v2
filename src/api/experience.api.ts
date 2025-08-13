import { supabase } from '@/lib/supabaseClient';
import type { ResumeResponse } from '@/types';

export const getResumeInfo = async () => {
  try {
    const resumenResponse = {} as ResumeResponse;

    const resumeInfo = [
      supabase
        .from('experience')
        .select('*, from:from::date, to:to::date')
        .order('order', { ascending: false }),
      supabase.from('skills').select(),
    ];

    const [experienceData, skillsData] = await Promise.all(resumeInfo);

    if (!experienceData.error) {
      resumenResponse.experience = experienceData.data
    }

    if (!skillsData.error) {
      resumenResponse.skills = skillsData.data
    }

    return resumenResponse;
  } catch (error) {
    console.error({ error });
    throw new Error('Something went wrong while fetching resume information');
  }
};
