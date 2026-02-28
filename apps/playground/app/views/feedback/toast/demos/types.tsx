
import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function TypesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Default',
            description: 'This is a default toast.',
            type: 'default',
          });
        }}
      >
        Default
      </Button>
      <Button
        variant="soft"
        color="success"
        onClick={() => {
          toast.success({
            title: 'Success!',
            description: 'Your action was successful.',
          });
        }}
      >
        Success
      </Button>
      <Button
        variant="soft"
        color="danger"
        onClick={() => {
          toast.error({
            title: 'Error!',
            description: 'Something went wrong.',
          });
        }}
      >
        Error
      </Button>
      <Button
        variant="soft"
        color="warning"
        onClick={() => {
          toast.warning({
            title: 'Warning',
            description: 'Please be careful.',
          });
        }}
      >
        Warning
      </Button>
      <Button
        variant="soft"
        color="info"
        onClick={() => {
          toast.info({
            title: 'Info',
            description: 'Here is some information.',
          });
        }}
      >
        Info
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          toast.loading({
            title: 'Loading...',
            description: 'Please wait while we process.',
          });
        }}
      >
        Loading
      </Button>
    </div>
  );
}
