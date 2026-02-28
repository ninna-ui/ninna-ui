
import { FileUpload } from '@ninna-ui/forms';

export default function AllowDragDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">allowDrag=true (default)</p>
        <FileUpload 
          label="Drag and drop enabled" 
          allowDrag 
          helperText="Click to upload or drag and drop"
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">allowDrag=false</p>
        <FileUpload 
          label="Click only" 
          allowDrag={false}
          helperText="Drag and drop is disabled"
        />
      </div>
    </div>
  );
}
