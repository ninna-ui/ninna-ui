import { FileUpload } from '@ninna-ui/forms';

export default function SizesDemo() {
  return (
    <div className="flex flex-col gap-6">
      <FileUpload size="xs" label="Extra Small" />
      <FileUpload size="sm" label="Small" />
      <FileUpload size="md" label="Medium (Default)" />
      <FileUpload size="lg" label="Large" />
      <FileUpload size="xl" label="Extra Large" />
    </div>
  );
}
