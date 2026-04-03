import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { cardStyles, cardVariants } from './card.styles';
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardTitleProps,
  CardDescriptionProps,
} from './card.types';

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'outline', color, interactive, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        data-variant={variant}
        data-color={color}
        className={cn(
          cardVariants({ variant, color, interactive: !!interactive }),
          className
        )}
        {...(interactive ? { tabIndex: 0, role: 'button' } : {})}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="card-header" className={cn(cardStyles.header, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'Card.Header';

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="card-body" className={cn(cardStyles.body, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="card-footer" className={cn(cardStyles.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'Card.Footer';

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} data-slot="card-title" className={cn(cardStyles.title, className)} {...props}>
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'Card.Title';

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} data-slot="card-description" className={cn(cardStyles.description, className)} {...props}>
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'Card.Description';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
});
