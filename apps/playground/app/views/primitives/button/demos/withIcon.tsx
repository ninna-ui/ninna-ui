import { Button } from "@ninna-ui/primitives";
import {
  ArrowRight,
  Plus,
  Bell,
  Heart, 
  Mail,
  Settings,
} from "lucide-react";

export default function WithIcon() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button color="neutral" leftIcon={<Plus />}>
          Neutral
        </Button>
        <Button color="primary" leftIcon={<Plus />}>
          Primary
        </Button>
        <Button color="secondary" leftIcon={<Plus />}>
          Secondary
        </Button>
        <Button color="accent" leftIcon={<Plus />}>
          Accent
        </Button>
        <Button color="info" leftIcon={<Plus />}>
          Info
        </Button>
        <Button color="success" leftIcon={<Plus />}>
          Success
        </Button>
        <Button color="warning" leftIcon={<Plus />}>
          Warning
        </Button>
        <Button color="danger" leftIcon={<Plus />}>
          Danger
        </Button>
      </div>

      {/* Basic Icon Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button color="primary" leftIcon={<Plus />}>
          Add New
        </Button>
        <Button color="secondary" rightIcon={<ArrowRight />}>
          Next
        </Button>
        <Button color="success" leftIcon={<Plus />} rightIcon={<ArrowRight />}>
          Both Icons
        </Button>
      </div>

      {/* Icon Only Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button color="primary" className="p-2" aria-label="Notifications">
          <Bell className="size-5" aria-hidden="true" />
        </Button>
        <Button variant="outline" color="secondary" className="p-2" aria-label="Favorites">
          <Heart className="size-5" aria-hidden="true" />
        </Button>
        <Button variant="soft" color="success" className="p-2" aria-label="Settings">
          <Settings className="size-5" aria-hidden="true" />
        </Button>
        <Button variant="ghost" color="danger" className="p-2" aria-label="Messages">
          <Mail className="size-5" aria-hidden="true" />
        </Button>
      </div>

      {/* Rounded Icon Only Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button radius="full" color="primary" className="p-2" aria-label="Notifications">
          <Bell className="size-5" aria-hidden="true" />
        </Button>
        <Button radius="full" variant="outline" color="secondary" className="p-2" aria-label="Favorites">
          <Heart className="size-5" aria-hidden="true" />
        </Button>
        <Button radius="full" variant="soft" color="success" className="p-2" aria-label="Settings">
          <Settings className="size-5" aria-hidden="true" />
        </Button>
        <Button radius="full" variant="ghost" color="danger" className="p-2" aria-label="Messages">
          <Mail className="size-5" aria-hidden="true" />
        </Button>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs" color="primary" leftIcon={<Plus />}>
          Extra Small
        </Button>
        <Button size="sm" color="primary" leftIcon={<Plus />}>
          Small
        </Button>
        <Button size="lg" color="primary" leftIcon={<Plus />}>
          Large
        </Button>
        <Button size="xl" color="primary" leftIcon={<Plus />}>
          Extra Large
        </Button>
      </div>
    </div>
  );
} 
