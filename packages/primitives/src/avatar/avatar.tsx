import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  avatarVariants,
  AVATAR_TEXT_SIZES,
  AVATAR_ICON_SIZES,
  AVATAR_RING_COLORS,
  AVATAR_IMAGE_CLASS,
  AVATAR_FALLBACK_CLASS,
} from './avatar.styles';
import type { AvatarProps } from './avatar.types';
import type { Color, Size } from '@ninna-ui/core';

/**
 * Get initials from a name string
 * Takes first letter of first and last word
 */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return '';
  }
  const firstWord = words[0] ?? "";
  const lastWord = words[words.length - 1] ?? "";
  if (words.length === 1) {
    return firstWord.charAt(0).toUpperCase();
  }
  return (firstWord.charAt(0) + lastWord.charAt(0)).toUpperCase();
}

/**
 * Default fallback icon (user silhouette)
 */
function DefaultFallbackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 4.5a3 3 0 100 6 3 3 0 000-6zm-4.5 9.75a4.002 4.002 0 014.5-3.98 4.002 4.002 0 014.5 3.98.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * AvatarFallback component for rendering fallback content
 */
const AvatarFallback = ({ 
  fallback, 
  initials, 
  showFallbackIcon, 
  size, 
  color 
}: { 
  fallback?: React.ReactNode; 
  initials: string | null; 
  showFallbackIcon?: boolean; 
  size: Size; 
  color: Color; 
}) => {
  if (fallback) {
    return fallback;
  }

  if (showFallbackIcon || !initials) {
    return (
      <DefaultFallbackIcon
        className={cn(
          AVATAR_ICON_SIZES[size],
          `text-${color}`
        )}
      />
    );
  }

  return (
    <span className={cn(AVATAR_TEXT_SIZES[size], `text-${color}`)}>  
      {initials}
    </span>
  );
};

/**
 * Avatar component for displaying user profile pictures or initials.
 * Pure UI component - no internal state management.
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar name="John Doe" />
 * <Avatar name="Jane" color="primary" size="lg" />
 * ```
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = 'md',
      shape = 'circle',
      radius = 'md',
      color = 'neutral',
      showRing = false,
      ringColor,
      fallback,
      showFallbackIcon = false,
      loading = 'lazy',
      className,
      ...props
    },
    ref
  ) => {
    const showImage = !!src;
    const showFallback = !showImage;
    const initials = name ? getInitials(name) : null;
    const effectiveRingColor = ringColor ?? color;

    return (
      <span
        ref={ref}
        data-slot="avatar"
        role="img"
        aria-label={alt || name || 'Avatar'}
        className={cn(
          avatarVariants({ size, color: showFallback ? color : undefined, shape, radius: shape === 'square' ? radius : undefined, withRing: showRing }),
          showRing && AVATAR_RING_COLORS[effectiveRingColor],
          className
        )}
        {...props}
      >
        {showImage && (
          <img
            data-slot="image"
            src={src}
            alt={alt || name || ''}
            loading={loading}
            className={cn(
              AVATAR_IMAGE_CLASS,
              shape === 'circle' ? 'rounded-full' : radius ? `rounded-${radius}` : 'rounded-md'
            )}
          />
        )}

        {showFallback && (
          <span data-slot="fallback" className={AVATAR_FALLBACK_CLASS}>
            <AvatarFallback
              fallback={fallback}
              initials={initials}
              showFallbackIcon={showFallbackIcon}
              size={size}
              color={color}
            />
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
