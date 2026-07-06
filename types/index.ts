export interface Course {
  id: string;
  title: string;
  slug: string;
  instructor: string;
  provider: string;
  imageUrl: string;
  badge?: string;
  rating: number;
  ratingsCount: number;
  price: number;
  originalPrice?: number;
  skills: string[];
  overview: string;
  youWillLearn: string[];
  modules: string[];
  requirements: string[];
  careerOpportunities: string[];
}

export interface CareerAccelerator {
  id: string;
  title: string;
  imageUrl: string;
  bgGradient: string;
  iconBg: string;
  iconColor: string;
  rating: number;
  ratingsCount: string;
  duration: string;
  themeColor: string;
}

export interface Degree {
  id: string;
  universityName: string;
  universityLogoUrl: string;
  degreeName: string;
  imageUrl: string;
  type: string;
}

export interface Certificate {
  id: string;
  title: string;
  provider: string;
  logoUrl: string;
  imageUrl: string;
  badges: string[];
  type: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
