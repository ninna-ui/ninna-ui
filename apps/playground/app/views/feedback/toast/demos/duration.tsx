import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function DurationDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Quick toast',
            description: 'This disappears in 2 seconds.',
            duration: 2000,
          });
        }}
      >
        2 Seconds
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Long toast',
            description: 'This stays for 10 seconds.',
            duration: 10000,
          });
        }}
      >
        10 Seconds
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Persistent toast',
            description: 'This stays until dismissed.',
            duration: 0,
            closable: true,
          });
        }}
      >
        Persistent
      </Button>
    </div>
  );
}
