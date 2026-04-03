import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function DurationDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        color='primary'
        onClick={() => {
          toast.create({
            title: 'Quick toast',
            description: 'This disappears in 2 seconds.',
            color: 'primary',
            duration: 2000,
          });
        }}
      >
        2 Seconds
      </Button>

      <Button
        variant="soft"
        color='primary'
        onClick={() => {
          toast.create({
            title: 'Long toast',
            description: 'This stays for 10 seconds.',
            color: 'primary',
            duration: 10000,
          });
        }}
      >
        10 Seconds
      </Button>

      <Button
        variant="soft"
        color='primary'
        onClick={() => {
          toast.create({
            title: 'Persistent toast',
            description: 'This stays until dismissed.',
            color: 'primary',
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
