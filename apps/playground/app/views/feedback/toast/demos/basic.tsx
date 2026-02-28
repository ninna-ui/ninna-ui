import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function BasicDemo() {
  return (
    <Button
      onClick={() => {
        toast.create({
          title: 'Toast notification',
          description: 'This is a basic toast message.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}
