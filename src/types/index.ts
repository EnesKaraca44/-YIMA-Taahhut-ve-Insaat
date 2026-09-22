export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: 'Building2' | 'HardHat' | 'Briefcase' | 'Ruler' | 'ShieldCheck' | 'Layers';
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  locationPlaceholder: string;
  yearPlaceholder: string;
  statusPlaceholder: 'Tamamlandı' | 'Devam Ediyor' | 'Planlanan';
  description: string;
  tags: string[];
  imagePlaceholderUrl?: string;
  galleryImages?: string[];
  videoUrl?: string;
  details?: {
    scope: string;
    highlights: string[];
  };
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  legalName: string;
  shortName: string;
  sloganProposal: string;
  descriptionShort: string;
  descriptionLong: string;
  missionStatement: string;
  visionStatement: string;
  contact: {
    addressPlaceholder: string;
    addressNote: string;
    phonePlaceholder: string;
    phoneNote: string;
    emailPlaceholder: string;
    emailNote: string;
    workingHoursPlaceholder: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
