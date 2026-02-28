import type React from "react";

export type ErrorTemplate = {
  title: string;
  description?: string | string[];
  ctaButtons?: ErrorMessageCTA[];
  icon?: React.JSX.Element;
  onReload?: () => void;
};
 
export type ErrorMessageCTA = {
  text: string;
  url?: string | null; 
  action: "redirect" | "reload";
};
