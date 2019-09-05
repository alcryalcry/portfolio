export const MEDIA = {
  DESKTOP: window.matchMedia('screen and (min-width: 1025px)').matches,
  MOBILE: window.matchMedia('screen and (max-width: 767px)').matches,
  TABLET: window.matchMedia('screen and (min-width: 768px) and (max-width: 1024px)').matches
};