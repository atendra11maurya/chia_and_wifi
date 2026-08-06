export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companySlug: string;
  location: string;
  period: string;
  duration: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship' | 'Trainee';
  summary: string;
  highlights: string[];
  keyTools: string[];
  keyNodes: string[];
}

export interface TechNodeItem {
  id: string;
  node: string; // e.g. "4nm"
  name: string;
  category: 'FinFET' | 'EUV' | 'Planar' | 'Advanced Sub-Micron';
  description: string;
  transistorDensityRelative: string;
  keyChallenges: string[];
  verificationScope: string[];
  isHighlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  codename: string;
  category: string;
  node: string;
  status: string;
  overview: string;
  challenge: string;
  methodology: string;
  impact: string;
  technologies: string[];
  isConfidential: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: string;
  badge?: string;
}
