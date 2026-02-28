import { Avatar, AvatarGroup } from "@ninna-ui/primitives";

export default function Group() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-3">Basic Group</p>
        <AvatarGroup>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="User 1"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            alt="User 2"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User 3"
          />
        </AvatarGroup>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">With Max Limit (max=3)</p>
        <AvatarGroup max={3}>
          <Avatar name="John Doe" color="primary" />
          <Avatar name="Jane Smith" color="secondary" />
          <Avatar name="Bob Wilson" color="success" />
          <Avatar name="Alice Brown" color="info" />
          <Avatar name="Charlie Davis" color="warning" />
        </AvatarGroup>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Different Sizes</p>
        <div className="flex flex-col gap-4">
          <AvatarGroup size="sm">
            <Avatar name="A" color="primary" />
            <Avatar name="B" color="secondary" />
            <Avatar name="C" color="success" />
          </AvatarGroup>
          <AvatarGroup size="md">
            <Avatar name="A" color="primary" />
            <Avatar name="B" color="secondary" />
            <Avatar name="C" color="success" />
          </AvatarGroup>
          <AvatarGroup size="lg">
            <Avatar name="A" color="primary" />
            <Avatar name="B" color="secondary" />
            <Avatar name="C" color="success" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
