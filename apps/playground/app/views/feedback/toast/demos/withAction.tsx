
import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function WithActionDemo() {
  return (
    <Button
      onClick={() => {
        toast.create({
          title: 'New message',
          description: 'You have a new message from John.',
          action: {
            label: 'View',
            onClick: () => alert('Viewing message...'),
          },
        });
      }}
    >
      Show Toast with Action
    </Button>
  );
}
