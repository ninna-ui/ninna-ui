import { Button, Badge } from "@ninna-ui/primitives";
import { Bell, Mail, ShoppingBag } from "lucide-react";

export default function WithBadge() {
  return (
    <div className="flex flex-col gap-4">
      {/* Notification badges — contrasting colors for visibility */}
      <div className="flex flex-wrap gap-3">
        <Button color="primary" className="relative">
          Notifications
          <Badge variant="solid" color="danger" className="absolute -top-3 -right-3">5</Badge>
        </Button>
        <Button color="secondary" className="relative">
          Messages
          <Badge variant="solid" color="success" className="absolute -top-3 -right-3">3</Badge>
        </Button>
        <Button color="neutral" className="relative">
          Updates
          <Badge variant="solid" color="primary" className="absolute -top-3.5 -right-3.5">New</Badge>
        </Button>
      </div>

      {/* Icon buttons with badge */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" color="neutral" className="relative p-2" aria-label="Notifications, 8 unread">
          <Bell className="size-5" aria-hidden="true" />
          <Badge variant="solid" color="danger" className="absolute -top-3 -right-3" aria-hidden="true">8</Badge>
        </Button>
        <Button variant="outline" color="neutral" className="relative p-2" aria-label="Messages, 4 unread">
          <Mail className="size-5" aria-hidden="true" />
          <Badge variant="solid" color="primary" className="absolute -top-3 -right-3" aria-hidden="true">4</Badge>
        </Button>
        <Button variant="outline" color="neutral" className="relative p-2" aria-label="Cart, 2 items">
          <ShoppingBag className="size-5" aria-hidden="true" />
          <Badge variant="solid" color="success" className="absolute -top-3 -right-3" aria-hidden="true">2</Badge>
        </Button>
      </div>
    </div>
  );
}
