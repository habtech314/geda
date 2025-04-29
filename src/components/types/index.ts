export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  education: string;
  experience: string;
  image?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image?: string; // Added image property
};

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
};

export type Partner = {
  id: number;
  name: string;
  description: string;
  logo?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type LanguageOption = {
  code: string;
  name: string;
  flag: string;
};
