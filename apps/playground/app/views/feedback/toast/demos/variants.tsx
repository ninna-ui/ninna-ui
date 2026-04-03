import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function VariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Soft', description: 'Soft variant toast.', color: 'success', variant: 'soft' })}>
        Soft
      </Button>
      <Button variant="solid" color="success" onClick={() => toast.create({ title: 'Solid', description: 'Solid variant toast.', color: 'success', variant: 'solid' })}>
        Solid
      </Button>
      <Button variant="outline" color="success" onClick={() => toast.create({ title: 'Outline', description: 'Outline variant toast.', color: 'success', variant: 'outline' })}>
        Outline
      </Button>
    </div>
  );
}
