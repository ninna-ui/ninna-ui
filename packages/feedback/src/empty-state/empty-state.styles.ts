import type { EmptyStateSize } from './empty-state.types';

/**
 * EmptyState styles configuration
 */

export const emptyStateStyles = {

  /**

   * Base styles for the container

   */

  base: "flex flex-col items-center justify-center text-center",



  /**

   * Size variants for container padding

   */

  sizes: {

    sm: "py-6 px-4",

    md: "py-10 px-6",

    lg: "py-16 px-8",

  } as Record<EmptyStateSize, string>,



  /**

   * Icon container styles

   */

  iconContainer: {

    base: "flex items-center justify-center rounded-full bg-base-100 text-base-content/70 mb-4",

    sizes: {

      sm: "w-10 h-10",

      md: "w-14 h-14",

      lg: "w-20 h-20",

    } as Record<EmptyStateSize, string>,

  },



  /**

   * Icon sizes

   */

  iconSizes: {

    sm: "w-5 h-5",

    md: "w-7 h-7",

    lg: "w-10 h-10",

  } as Record<EmptyStateSize, string>,



  /**

   * Title styles

   */

  title: {

    base: "font-semibold text-base-content",

    sizes: {

      sm: "text-sm",

      md: "text-base",

      lg: "text-lg",

    } as Record<EmptyStateSize, string>,

  },



  /**

   * Description styles

   */

  description: {

    base: "text-base-content/70 mt-1",

    sizes: {

      sm: "text-xs",

      md: "text-sm",

      lg: "text-base",

    } as Record<EmptyStateSize, string>,

  },



  /**

   * Action container styles

   */

  action: "mt-4",



  /**

   * Children container styles

   */

  children: "mt-4",

};



/**

 * Get size class for container

 */

export function getSizeClass(size: EmptyStateSize): string {

  return emptyStateStyles.sizes[size];

}



/**

 * Get icon container size class

 */

export function getIconContainerSizeClass(size: EmptyStateSize): string {

  return emptyStateStyles.iconContainer.sizes[size];

}



/**

 * Get icon size class

 */

export function getIconSizeClass(size: EmptyStateSize): string {

  return emptyStateStyles.iconSizes[size];

}



/**

 * Get title size class

 */

export function getTitleSizeClass(size: EmptyStateSize): string {

  return emptyStateStyles.title.sizes[size];

}



/**

 * Get description size class

 */

export function getDescriptionSizeClass(size: EmptyStateSize): string {

  return emptyStateStyles.description.sizes[size];

}

