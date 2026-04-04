import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function DismissDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.create({ title: 'Toast 1', color: 'success' });
          toast.create({ title: 'Toast 2', color: 'info' });
          toast.create({ title: 'Toast 3', color: 'warning' });
        }}
      >
        Show Multiple
      </Button>
      <Button
        variant="outline"
        color="danger"
        onClick={() => {
          toast.dismissAll();
        }}
      >
        Dismiss All
      </Button>
    </div>
  );
}
