
import { toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

export default function VariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.success({
            title: 'Soft Variant',
            description: 'This toast uses the soft variant.',
            variant: 'soft',
          });
        }}
      >
        Soft
      </Button>
      <Button
        variant="solid"
        onClick={() => {
          toast.success({
            title: 'Solid Variant',
            description: 'This toast uses the solid variant.',
            variant: 'solid',
          });
        }}
      >
        Solid
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.success({
            title: 'Outline Variant',
            description: 'This toast uses the outline variant.',
            variant: 'outline',
          });
        }}
      >
        Outline
      </Button>
    </div>
  );
}
