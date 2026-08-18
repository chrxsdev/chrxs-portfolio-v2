interface SectionHeadingProps {
  title: string;
  description?: string;
}

export const SectionHeading = ({ title, description }: SectionHeadingProps) => (
  <header className='section-heading'>
    <h2>{title}</h2>
    {description ? <p className='section-description'>{description}</p> : null}
  </header>
);
