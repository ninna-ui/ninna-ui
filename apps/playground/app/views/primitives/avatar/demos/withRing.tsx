import { Avatar } from "@ninna-ui/primitives";

export default function WithRing() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="User"
        showRing
        ringColor="primary"
        size="lg"
      />
      <Avatar name="JD" showRing ringColor="secondary" size="lg" />
      <Avatar name="AS" showRing ringColor="success" size="lg" />
      <Avatar name="MK" showRing ringColor="danger" size="lg" />
      <Avatar name="RP" showRing ringColor="warning" size="lg" />
      <Avatar name="TL" showRing ringColor="info" size="lg" />
      <Avatar name="AL" showRing ringColor="accent" size="lg" />
    </div>
  );
}
