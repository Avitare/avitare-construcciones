const SplitBuildingIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 21V6l8-3 8 3v15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2.4 2.4" />
    <path d="M7.5 10.5h2M7.5 14.5h2M14.5 10.5h2M14.5 14.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <rect x="17" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M19 19v.5A3.5 3.5 0 0 1 15.5 23H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M8.7 12.2l2.2 2.2 4.4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LandPlotIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 4h18v16H3V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 12h18M11 4v16" stroke="currentColor" strokeWidth="1.6" />
    <path d="M11 12 17 4M11 12 17 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 21V5.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M15 21v-9.5A1.5 1.5 0 0 1 16.5 10H18a1.5 1.5 0 0 1 1.5 1.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 8h2M8 12h2M8 16h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ClipboardCheckIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="5" y="4.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 4.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M8.5 13.5 11 16l4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StampIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 4.5a3 3 0 1 1 6 0c0 1.8-1.5 2.4-1.5 4.5v1H10.5v-1c0-2.1-1.5-2.7-1.5-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 14h10l1.5 6h-13L7 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const SERVICE_ICONS = {
  "independizacion-de-inmuebles": SplitBuildingIcon,
  "asesorias-personalizadas": HeadsetIcon,
  "saneamiento-fisico-legal": ShieldIcon,
  "subdivisiones-y-particiones": LandPlotIcon,
  "declaratoria-de-fabrica": BuildingIcon,
  "regularizacion-de-edificaciones": ClipboardCheckIcon,
  "inscripcion-de-predios": StampIcon,
};

export const DefaultServiceIcon = BuildingIcon;
