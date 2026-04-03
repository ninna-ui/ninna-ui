import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function SimpleMessagesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'File uploaded successfully!', color: 'success' })}>
        Success
      </Button>
      <Button variant="soft" color="danger" onClick={() => toast.create({ title: 'Failed to save changes.', color: 'danger' })}>
        Error
      </Button>
      <Button variant="soft" color="warning" onClick={() => toast.create({ title: 'Your session expires soon.', color: 'warning' })}>
        Warning
      </Button>
      <Button variant="soft" color="info" onClick={() => toast.create({ title: 'New updates available.', color: 'info' })}>
        Info
      </Button>
    </div>
  );
}
