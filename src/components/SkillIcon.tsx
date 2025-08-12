import type { IconName } from '@/types';
import {
  ReactDark,
  Nextjs,
  JavaScript,
  TypeScript,
  Java,
  Nodejs,
  ExpressjsDark,
  NestJS,
  Spring,
  PostgreSQL,
  MySQL,
  MongoDB,
  AmazonWebServicesDark,
  Firebase,
  Docker,
} from '@ridemountainpig/svgl-react';

interface SvgIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const ICONS: Record<IconName, React.ComponentType<SvgIconProps>> = {
  react: ReactDark,
  nextjs: Nextjs,
  javascript: JavaScript,
  typescript: TypeScript,
  java: Java,
  nodejs: Nodejs,
  express: ExpressjsDark,
  nestjs: NestJS,
  spring: Spring,
  postgresql: PostgreSQL,
  mysql: MySQL,
  mongodb: MongoDB,
  aws: AmazonWebServicesDark,
  firebase: Firebase,
  docker: Docker,
};

interface IconProps {
  name: IconName;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const SkillIcon = ({ name, width = '1.5em', height = '1.5em', className = '' }: IconProps) => {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return <Icon width={width} height={height} className={className} />;
};
