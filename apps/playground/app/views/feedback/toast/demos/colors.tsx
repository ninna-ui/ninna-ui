import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function ColorsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color='neutral' onClick={() => toast.create({ title: 'Neutral', description: 'A neutral notification.', color: 'neutral' })}>
        Neutral
      </Button>
      <Button variant="soft" color="primary" onClick={() => toast.create({ title: 'Primary', description: 'A primary notification.', color: 'primary' })}>
        Primary
      </Button>
      <Button variant="soft" color="secondary" onClick={() => toast.create({ title: 'Secondary', description: 'A secondary notification.', color: 'secondary' })}>
        Secondary
      </Button>
      <Button variant="soft" color="accent" onClick={() => toast.create({ title: 'Accent', description: 'An accent notification.', color: 'accent' })}>
        Accent
      </Button>
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Success!', description: 'Your action was successful.', color: 'success' })}>
        Success
      </Button>
      <Button variant="soft" color="danger" onClick={() => toast.create({ title: 'Error!', description: 'Something went wrong.', color: 'danger' })}>
        Error
      </Button>
      <Button variant="soft" color="warning" onClick={() => toast.create({ title: 'Warning', description: 'Please be careful.', color: 'warning' })}>
        Warning
      </Button>
      <Button variant="soft" color="info" onClick={() => toast.create({ title: 'Info', description: 'Here is some information.', color: 'info' })}>
        Info
      </Button>  
    </div>
  );
}
