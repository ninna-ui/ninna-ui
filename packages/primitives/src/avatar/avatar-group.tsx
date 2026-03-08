import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { cn } from '@ninna-ui/utils';
import { avatarGroupStyles, avatarVariants } from './avatar.styles';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';

/**
 * AvatarGroup component for displaying multiple avatars with overlap.
 *
 * @example
 * ```tsx
 * <AvatarGroup max={3}>
 *   <Avatar src="/user1.jpg" name="John" />
 *   <Avatar src="/user2.jpg" name="Jane" />
 *   <Avatar src="/user3.jpg" name="Bob" />
 *   <Avatar src="/user4.jpg" name="Alice" />
 * </AvatarGroup>
 * ```
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      max,
      size = 'md',
      spacing = 'normal',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const childArray = Children.toArray(children).filter(isValidElement);
    const totalCount = childArray.length;
    const displayCount = max && max < totalCount ? max : totalCount;
    const overflowCount = totalCount - displayCount;

    const displayedChildren = childArray.slice(0, displayCount);

    return (
      <div
        ref={ref}
        data-slot="avatar-group"
        role="group"
        aria-label={`Avatar group with ${totalCount} members`}
        className={cn(
          avatarGroupStyles.base,
          avatarGroupStyles.spacing[spacing],
          className
        )}
        {...props}
      >
        {displayedChildren.map((child, index) => {
          if (isValidElement<AvatarProps>(child)) {
            return cloneElement(child, {
              key: child.key || `avatar-${index}`,
              size: size,
              className: cn(avatarGroupStyles.item, child.props.className),
            });
          }
          return child;
        })}

        {overflowCount > 0 && (
          <span
            data-slot="overflow"
            className={cn(
              avatarVariants({ size }),
              'rounded-full',
              avatarGroupStyles.item,
              avatarGroupStyles.overflow
            )}
            aria-label={`${overflowCount} more members`}
          >
            +{overflowCount}
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
