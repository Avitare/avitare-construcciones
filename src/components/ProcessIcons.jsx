const SearchDocIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M15 3.5V6a1 1 0 0 0 1 1h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="10.5" cy="14" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <path d="m12.6 16.1 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const BlueprintIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 4h14l4 4v12H3V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M17 4v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6.5 12h6M6.5 15.5h9M6.5 8.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const GearCheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.9 5.4l1.6 1.6M17.5 17l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.9 18.6l1.6-1.6M17.5 7l1.6-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const KeyHandoverIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="15.5" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.2 13.3 17 6.5M15 8.5l2 2M17.5 6l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4.5 20.5 2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const PROCESS_ICONS = [SearchDocIcon, BlueprintIcon, GearCheckIcon, KeyHandoverIcon];
