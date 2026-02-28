import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function DismissDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.success('Toast 1');
          toast.info('Toast 2');
          toast.warning('Toast 3');
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
