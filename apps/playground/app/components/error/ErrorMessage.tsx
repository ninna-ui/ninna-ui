import type { ErrorTemplate } from "./types";
import { Link } from "react-router";
import { Button } from "@ninna-ui/primitives";

export const ErrorMessage = ({
  title,
  description,
  icon,
  ctaButtons,
  onReload,
}: ErrorTemplate) => {
  const defaultOnReload = () => {
    window.location.reload();
  };

  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="shadow-sm w-10/12 mx-auto">
        <div
          className="flex flex-col items-center justify-center p-10 space-y-6"
          data-testid="error-message">
          {icon}

          {title && (
            <h2
              className="text-2xl font-semibold text-primary"
              data-testid="error-title">
              {title}
            </h2>
          )}

          {description && (
            <div
              className="text-base text-center"
              data-testid="error-description">
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description.map((value) => <p key={value}>{value}</p>)
              )}
            </div>
          )}

          {!!ctaButtons?.length && (
            <div className="flex flex-wrap gap-3 justify-center">
              {ctaButtons.map((cta) =>
                cta.action === "redirect" && cta.url ? (
                  <Link
                    key={`${cta.action}-${cta.text}`}
                    to={cta.url}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-secondary text-secondary-content hover:bg-secondary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                    data-testid="btn-error-cta">
                    {cta.text}
                  </Link>
                ) : (
                  <Button
                    key={`${cta.action}-${cta.text}`}
                    variant="solid"
                    color="primary"
                    onClick={cta.action === "reload" ? onReload ?? defaultOnReload : undefined}
                    data-testid="btn-error-cta">
                    {cta.text}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
