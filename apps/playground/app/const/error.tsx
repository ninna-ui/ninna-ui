import { CircleQuestionMark, Frown } from "lucide-react";
import type { ErrorMessageCTA, ErrorTemplate } from "~/components/error/types";

export const DEFAULT_ERROR_CTA_RELOAD: ErrorMessageCTA = {
  text: "Reload",
  action: "reload",
};


const DEFAULT_ERROR_ICON_CTA_SUPPORT = {
  icon: (
    <Frown className="text-info opacity-80 mb-[-0.25rem] text-4xl" />
  ),
  ctaButtons: [DEFAULT_ERROR_CTA_RELOAD], // Use ctaButtons consistently
};

export const DEFAULT_ERROR_GENERIC: ErrorTemplate = {
  title: "An error has been encountered.",
  ...DEFAULT_ERROR_ICON_CTA_SUPPORT,
};

export const DEFAULT_ERROR_404: ErrorTemplate = {
  title: "Page doesn't exist.",
  description:
    "The page you're looking for doesn't exist, but you can return to the casino lobby by clicking below.",
  icon: (
    <CircleQuestionMark className="text-info opacity-80 mb-[-0.25rem] text-4xl" />
  ),
  ctaButtons: [DEFAULT_ERROR_CTA_RELOAD],
};

