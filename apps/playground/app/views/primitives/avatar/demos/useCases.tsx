import { Avatar, AvatarGroup, Badge } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="flex flex-col gap-8">
      {/* User Profile Card */}
      <div className="flex items-center gap-4 p-4 rounded-lg border border-base-300 bg-base-100">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
          size="xl"
        />
        <div>
          <h4 className="font-semibold text-base-content">John Doe</h4>
          <p className="text-sm text-base-content/70">Software Engineer</p>
          <p className="text-xs text-success">Online</p>
        </div>
      </div>

      {/* Comment Thread */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-base-content/70">Comment Thread</p>
        <div className="flex gap-3">
          <Avatar name="Alice Brown" size="sm" color="primary" />
          <div className="flex-1 p-3 rounded-lg bg-base-200">
            <p className="text-sm font-medium text-base-content">Alice Brown</p>
            <p className="text-sm text-base-content/70">Great work on this feature!</p>
          </div>
        </div>
        <div className="flex gap-3 ml-8">
          <Avatar name="Bob Wilson" size="sm" color="secondary" />
          <div className="flex-1 p-3 rounded-lg bg-base-200">
            <p className="text-sm font-medium text-base-content">Bob Wilson</p>
            <p className="text-sm text-base-content/70">Thanks! Happy to help.</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Team Members</p>
        <div className="flex items-center justify-between p-4 rounded-lg border border-base-300">
          <AvatarGroup max={4} size="md">
            <Avatar name="John Doe" color="primary" />
            <Avatar name="Jane Smith" color="secondary" />
            <Avatar name="Bob Wilson" color="success" />
            <Avatar name="Alice Brown" color="info" />
            <Avatar name="Charlie Davis" color="warning" />
            <Avatar name="Diana Evans" color="danger" />
          </AvatarGroup>
          <span className="text-sm text-base-content/70">6 team members</span>
        </div>
      </div>

      {/* Notification List */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Notifications</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
            <div className="relative">
              <Avatar name="Sarah" size="sm" color="primary" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-danger rounded-full border-2 border-base-100" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-base-content"><strong>Sarah</strong> mentioned you in a comment</p>
              <p className="text-xs text-base-content/70">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
            <Avatar name="Mike" size="sm" color="success" />
            <div className="flex-1">
              <p className="text-sm text-base-content"><strong>Mike</strong> approved your request</p>
              <p className="text-xs text-base-content/70">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar with Badge */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">With Badge</p>
        <div className="flex items-center gap-6">
          <div className="relative inline-block">
            <Avatar name="Admin" size="lg" color="primary" />
            <Badge color="success" size="sm" className="absolute -bottom-1 -right-1">
              Pro
            </Badge>
          </div>
          <div className="relative inline-block">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              alt="Verified User"
              size="lg"
            />
            <Badge color="primary" size="sm" className="absolute -bottom-1 -right-1">
              ✓
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
