interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ index, label, title, description }: SectionHeadingProps) => (
  <header className='section-heading'>
    <p className='section-index font-mono'>
      <span>{index}</span>
      {label}
    </p>
    <div>
      <h2>{title}</h2>
      {description ? <p className='section-description'>{description}</p> : null}
    </div>
  </header>
);
