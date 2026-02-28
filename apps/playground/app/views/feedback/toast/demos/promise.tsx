import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function PromiseDemo() {
  const handlePromise = () => {
    const promise = new Promise<{ name: string }>((resolve) => {
      setTimeout(() => resolve({ name: 'John' }), 2000);
    });

    toast.promise(promise, {
      loading: 'Saving changes...',
      success: (data) => `Welcome, ${data.name}!`,
      error: 'Failed to save changes.',
    });
  };

  const handlePromiseError = () => {
    const promise = new Promise<void>((_, reject) => {
      setTimeout(() => reject(new Error('Network error')), 2000);
    });

    toast.promise(promise, {
      loading: 'Connecting to server...',
      success: 'Connected!',
      error: 'Connection failed. Please try again.',
    }).catch(() => {
      // Handle the error silently
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" onClick={handlePromise}>
        Promise (Success)
      </Button>
      <Button variant="soft" color="danger" onClick={handlePromiseError}>
        Promise (Error)
      </Button>
    </div>
  );
}
