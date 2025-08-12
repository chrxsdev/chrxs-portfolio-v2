interface Assets {
  profile: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  resume: string;
}

export const ASSETS: Assets = {
  profile: 'https://hirperwidquunyjvtkjb.supabase.co/storage/v1/object/public/personal/assets/FotoCV%20-%20Editada.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/chrxsdev',
    github: 'https://github.com/chrxsdev',
    email: 'cristhian.martinezlara@gmail.com',
  },
  resume: ''
};
