import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function SimpleMessagesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        color="success"
        onClick={() => {
          toast.success('File uploaded successfully!');
        }}
      >
        Success Message
      </Button>
      <Button
        variant="soft"
        color="danger"
        onClick={() => {
          toast.error('Failed to save changes.');
        }}
      >
        Error Message
      </Button>
      <Button
        variant="soft"
        color="info"
        onClick={() => {
          toast.info('New updates available.');
        }}
      >
        Info Message
      </Button>
    </div>
  );
}
