interface Assets {
  profile: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  resume: {
    es: string;
    en: string;
  };
}

export const ASSETS: Assets = {
  profile: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/FotoCV%20-%20Editada.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/chrxsdev',
    github: 'https://github.com/chrxsdev',
    email: 'cristhian.martinezlara@gmail.com',
  },
  resume: {
    es: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/resume/CV_Cristhian_Martinez_es.pdf',
    en: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/resume/CV_Cristhian_Martinez_en.pdf',
  },
};
