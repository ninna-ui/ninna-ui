import { Avatar } from "@ninna-ui/primitives";

export default function Basic() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="John Doe"
      />
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" color="primary" />
      <Avatar showFallbackIcon />
    </div>
  );
}
