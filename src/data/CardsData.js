import { Store, Utensils, Users, HeartPlus, Toolbox, GraduationCap, Database, BrainCircuit, Headset, Clock, LifeBuoy, Shield, CreditCard, ShieldCheck, Globe, ShieldAlert } from 'lucide-react';

export const LowRiskCards = [
  {
    icon: Store,
    title: 'Retail Businesses:',
    description: 'Retail store offering physical products with clear pricing, minimal chargebacks, and safe payment processing.'
  },
  {
    icon: Utensils,
    title: 'Food & Beverage:',
    description: 'Sells food or drinks like cafes, bakeries, or small restaurants with clear pricing and easy payment processing.'
  },
  {
    icon: Users,
    title: 'Personal & Professional Services:',
    description: 'Delivers local personal or professional services, like salons, spas, or home repairs, with transparent pricing and easy payment handling.'
  },
  {
    icon: HeartPlus,
    title: 'Health & Wellness:',
    description: 'Health-focused services offering classes, training, or coaching with easy-to-manage payments.'
  },
  {
    icon: Toolbox,
    title: 'Services & Home Improvement:',
    description: 'Offers hands-on home improvement solutions, from plumbing to electrical work, with easy checkout.'
  },
  {
    icon: GraduationCap,
    title: 'Education & Training:',
    description: 'Delivers skill-building programs, from tutoring to workshops, with seamless payment options.'
  },
];

export const HighRiskCards = [
  {
    image: './HighRisk/travel.png',
    title: 'Travel Agencies Industry',
  },
  {
    image: './HighRisk/tech.png',
    title: 'Tech Support Industry',
  },
  {
    image: './HighRisk/CallCenter.png',
    title: 'Call Centers Industry',
  },
  {
    image: './HighRisk/Insurance.png',
    title: 'Insurance / Register Industry',
  },
  {
    image: './HighRisk/Eccomerce.png',
    title: 'E-commerce Industry',
  },
  {
    image: './HighRisk/Vape.png',
    title: 'Vape Shops Industry',
  },
  {
    image: './HighRisk/Grocery.png',
    title: 'Groceries Industry',
  },
  {
    image: './HighRisk/GasStation.png',
    title: 'Gas stations Industry',
  },
  {
    image: './HighRisk/digitalbook.png',
    title: 'Digital Books Industry',
  },
  {
    image: './HighRisk/Seo.png',
    title: 'SEO / Design Industry',
  },
];

export const MerchantProviderCards = [
  {
    icon: Database,
    title: 'Secure Processing',
    description: 'Advanced fraud protection and secure payment processing.'
  },
  {
    icon: BrainCircuit,
    title: 'Fast Integration',
    description: 'Quick and easy integration with your existing systems and platforms.'
  },
  {
    icon: Headset,
    title: 'Expert Support',
    description: 'Dedicated team of experts to help you navigate high-risk processing.'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Continuous transaction monitoring and risk management.'
  },
  {
    icon: LifeBuoy,
    title: 'Reliable Assistance',
    description: 'Access professional guidance whenever you encounter challenges.'
  },
  {
    icon: Shield,
    title: 'Fraud Prevention',
    description: 'Protect your business and customers with top-tier security measures.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Streamline operations with multi-user access and permission controls.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    description: 'Support multiple payment methods for a seamless customer experience.'
  }
];


export const Faqs = [
  {
    title: 'Do you provide accounts for high-risk businesses?',
    description: 'Yes, we support both high-risk and low-risk industries with specialized underwriting and stable processing solutions tailored to business needs.'
  },
  {
    title: 'How long does approval take?',
    description: 'Most merchant accounts are reviewed and approved within a few business days, depending on documentation and business type.',
  },
  {
    title: 'What payment methods are supported?',
    description: 'We support major credit and debit cards, international payments, and multi-currency processing to help businesses operate globally.',
  },
  {
    title: 'Is your payment processing secure?',
    description: 'Yes, our system includes advanced fraud monitoring, encryption, and chargeback management tools to protect your transactions and revenue',
  },
  {
    title: 'Can I integrate it with my existing system?',
    description: 'Absolutely. Our merchant accounts are designed for quick integration with websites, billing systems, and other platforms',
  },
];


export const HR_MerchantProviderCards = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed High-Risk Approvals',
    description: 'We specialize in merchant accounts for businesses declined by traditional banks, including restricted and high-chargeback industries.'
  },
  {
    icon: Globe,
    title: 'Offshore & Domestic Solutions',
    description: 'Flexible offshore and domestic high-risk merchant accounts structured for stability, scalability, and long-term processing success.'
  },
  {
    icon: ShieldAlert,
    title: 'Chargeback Protection & Fraud Tools',
    description: 'Advanced fraud filters, 3D Secure, monitoring systems, and chargeback management built specifically for high-risk merchants.'
  },
  {
    icon: Users,
    title: 'Dedicated High-Risk Support Team',
    description: 'Payment experts who understand high-risk industries and guide you through approvals, compliance, and ongoing risk management.'
  },
];

export const HR_Faqss = [
  {
    title: 'What is a high-risk merchant account?',
    description: 'A high-risk merchant account is designed for businesses that banks consider risky due to industry type, high chargebacks, low credit, or prior processing history. These accounts allow you to securely accept credit card and ACH payments. '
  },
  {
    title: 'Why was my business declined by other payment processors?',
    description: 'Traditional processors often reject businesses in restricted industries, companies with high chargeback ratios, or merchants with poor credit history. We specialize in structuring approvals where others decline. ',
  },
  {
    title: 'Do you offer offshore high-risk merchant accounts?',
    description: 'Yes. We provide both domestic and offshore high-risk merchant account solutions tailored to your business model and processing needs. ',
  },
  {
    title: ' How do you help reduce chargebacks?',
    description: 'We offer advanced fraud filters, 3D Secure authentication, transaction monitoring, and chargeback management tools to protect your merchant account.',
  },
];