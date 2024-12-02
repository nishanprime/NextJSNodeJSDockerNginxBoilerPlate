// HERO CONTENT
export interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
}

export interface HeroContentProps {
  title: string;
  description: string;
  cta: ButtonProps;
}

// TESTIMONIALS
export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle: () => void;
}

export interface NavItemProps {
  label: string;
  isActive?: boolean;
}

export interface SocialLinkProps {
  platform: string;
}

// FOOTER

export interface FooterLinkProps {
  text: string;
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}

export interface SocialLinkProps {
  name: string;
}

export interface NewsletterFormData {
  email: string;
}

// IMPACT

export interface ImpactHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

// PROCESS

export interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface ProcessTabProps {
  label: string;
  isActive?: boolean;
}

// TESTIMONIAL

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

export interface TestimonialCardProps extends TestimonialProps {
  className?: string;
}

// FAQ

export interface FAQItem {
  question: string;
  answer?: string;
}

export interface UserAvatarProps {
  size?: number;
}

export interface CTAButtonProps {
  label: string;
  onClick?: () => void;
}
