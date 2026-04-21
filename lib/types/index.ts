export interface Stat {
  label: string;
  sub: string;
  bg?: string;
  text?: string;
  value?: string; // Some use value/label instead of label/sub
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export type Value = Feature;

export interface ServiceDetail {
  phase: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Plan {
  name: string;
  features: readonly string[];
  image: string;
  popular: boolean;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface FacilityCard {
  title: string;
  specs: readonly SpecRow[];
}

export type TalentFeature = Feature;
