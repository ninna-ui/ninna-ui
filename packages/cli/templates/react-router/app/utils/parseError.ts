import { isRouteErrorResponse } from "react-router";

export function parseError(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return {
      status: error.status,
      statusText: error.statusText,
      message: error.data?.message || error.statusText,
    };
  }

  if (error instanceof Error) {
    return {
      status: 500,
      statusText: "Internal Server Error",
      message: error.message,
    };
  }

  return {
    status: 500,
    statusText: "Internal Server Error",
    message: "An unknown error occurred",
  };
}
