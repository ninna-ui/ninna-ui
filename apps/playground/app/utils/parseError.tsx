import { isRouteErrorResponse } from "react-router";
import type { ErrorTemplate } from "~/components/error/types";
import {
  DEFAULT_ERROR_404,
  DEFAULT_ERROR_CTA_RELOAD,
  DEFAULT_ERROR_GENERIC,
} from "~/const/error";

export const parseError = (error: Error | unknown): ErrorTemplate => {
  if (isRouteErrorResponse(error)) {
    return error.status === 404
      ? DEFAULT_ERROR_404
      : {
          title: `${error.status} ${error.statusText}`,
          description: error.data as string,
          icon: DEFAULT_ERROR_GENERIC.icon,
          ctaButtons: [DEFAULT_ERROR_CTA_RELOAD],
        };
  } else if (error instanceof Error) {
    return {
      title: error.name,
      description: error.message,
      icon: DEFAULT_ERROR_GENERIC.icon,
      ctaButtons: [DEFAULT_ERROR_CTA_RELOAD],
    };
  } else {
    return DEFAULT_ERROR_GENERIC;
  }
};
