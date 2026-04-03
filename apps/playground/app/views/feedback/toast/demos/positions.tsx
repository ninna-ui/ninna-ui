import { toast, Toaster } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

const POSITIONS: Position[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export default function Positions() {
  const showToast = (pos: Position) => {
    toast.create({
      title: `Position: ${pos}`,
      description: 'Toast appears at this position.',
      color: 'primary',
      variant: 'solid',
      duration: 3000,
      toasterId: pos,
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {POSITIONS.map((pos) => (
        <Toaster key={pos} id={pos} position={pos} max={1} />
      ))}
      <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
        {POSITIONS.map((pos) => (
          <Button
            key={pos} 
            variant="outline"
            color="primary"
            onClick={() => showToast(pos)}
          >
            {pos}
          </Button>
        ))}
      </div>
    </div>
  );
}
