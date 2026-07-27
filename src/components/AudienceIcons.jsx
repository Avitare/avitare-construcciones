const HouseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M10 20v-5.5h4V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const LandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 20 9 5l4 8 3-5 5 12H3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CompanyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="7" width="9" height="13" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <rect x="13" y="3.5" width="7" height="16.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 10.5h2M7 14h2M16 7h2M16 10.5h2M16 14h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CraneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 21V6l0 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 9h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 9v4l3 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 21h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17" cy="17.5" r="1.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const InvestIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 19V9M9.5 19V5M15 19v-7M20 19V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 21h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const FamilyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8.5" cy="7" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19.5v-1.8a3.7 3.7 0 0 1 3.7-3.7h2.6a3.7 3.7 0 0 1 3.7 3.7v1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 19.5v-1.4a3.2 3.2 0 0 1 3.2-3.2h.6a3.2 3.2 0 0 1 3.2 3.2v1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AUDIENCE_ICONS = {
  house: HouseIcon,
  land: LandIcon,
  company: CompanyIcon,
  crane: CraneIcon,
  invest: InvestIcon,
  family: FamilyIcon,
};
