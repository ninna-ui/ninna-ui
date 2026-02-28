
import { useState } from 'react';
import { Slider } from '@ninna-ui/forms';

export default function WithTooltip() {
  const [value, setValue] = useState([50]);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-6 max-w-sm">
      <p className="text-sm text-base-content/70">
        Composition recipe: Wrap Slider with tooltip using pointer events on a container.
      </p>
      
      <div
        className="relative py-4"
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
      >
        {isDragging && (
          <div
            className="absolute -top-2 px-2 py-1 bg-base-content text-base-100 text-xs rounded shadow-lg pointer-events-none z-10"
            style={{
              left: `calc(${value[0]}% - 16px)`,
            }}
          >
            {value[0]}
          </div>
        )}
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
        />
      </div>

      <div className="text-sm text-base-content/70">
        Current value: <span className="font-medium">{value[0]}</span>
      </div>
    </div>
  );
}
