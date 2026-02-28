/**
 * LinkOverlay and LinkBox styles configuration
 */
export const linkOverlayStyles = {
  /**
   * LinkBox base styles - container that makes the entire area clickable
   */
  linkBox: 'relative',

  /**
   * LinkOverlay base styles - stretches to cover the entire LinkBox
   */
  linkOverlay: [
    'static',
    'before:content-[""]',
    'before:cursor-pointer',
    'before:block',
    'before:absolute',
    'before:inset-0',
    'before:z-0',
  ].join(' '),

  /**
   * Elevated link styles - for links inside LinkBox that should be clickable above the overlay
   */
  elevatedLink: 'relative z-10',
};
