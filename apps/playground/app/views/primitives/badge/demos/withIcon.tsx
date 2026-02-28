import { Badge } from "@ninna-ui/primitives";
import { Check, X, AlertCircle, Info, Star, Zap } from "lucide-react";

export default function WithIcon() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge color="success" className="flex items-center gap-1">
          <Check className="size-3" />
          Verified
        </Badge>
        <Badge color="danger" className="flex items-center gap-1">
          <X className="size-3" />
          Rejected
        </Badge>
        <Badge color="warning" className="flex items-center gap-1">
          <AlertCircle className="size-3" />
          Warning
        </Badge>
        <Badge color="info" className="flex items-center gap-1">
          <Info className="size-3" />
          Info
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="soft" color="primary" className="flex items-center gap-1">
          <Star className="size-3" />
          Featured
        </Badge>
        <Badge variant="soft" color="secondary" className="flex items-center gap-1">
          <Zap className="size-3" />
          New
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" color="success" className="flex items-center gap-1">
          <Check className="size-3" />
          Active
        </Badge>
        <Badge variant="outline" color="danger" className="flex items-center gap-1">
          <X className="size-3" />
          Inactive
        </Badge>
      </div>
    </div>
  );
}
