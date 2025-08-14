import { supabase } from '@/lib/supabaseClient';
import type { ContactRequest } from '@/types';

export const getResumeInfo = async () => {
  try {
    const resumeInfo = [
      supabase.from('experience').select('*, from:from::date, to:to::date').order('order', { ascending: false }),
      supabase.from('skills').select(),
      supabase.from('projects').select(),
    ];

    const [experienceData, skillsData, projectsData] = await Promise.all(resumeInfo);

    return {
      experience: experienceData.data,
      skills: skillsData.data,
      projects: projectsData.data,
    };
  } catch (error) {
    console.error({ error });
    throw new Error('Something went wrong while fetching resume information');
  }
};

export const postContactInformation = async (contactData: ContactRequest) => {
  try {
    const response = await supabase.from('contact').insert(contactData);

    return {
      ok: !response.error,
    };
  } catch (error) {
    console.error({ error });
    throw new Error('Something went wrong while submitting the contact form');
  }
};
