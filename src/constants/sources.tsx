interface Assets {
  profile: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  resume: {
    en: string;
  };
}

export const ASSETS: Assets = {
  profile: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/photo-profile.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/chrxsdev',
    github: 'https://github.com/chrxsdev',
    email: 'cristhian.martinezlara@gmail.com',
  },
  resume: {
    en: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/resume/CV_CristhianMartinez_SoftwareEngineer.pdf',
  },
};
