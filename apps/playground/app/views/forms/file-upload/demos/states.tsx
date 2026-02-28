import { FileUpload } from '@ninna-ui/forms';

export default function StatesDemo() {
  return (
    <div className="flex flex-col gap-6">
      <FileUpload label="Normal" />
      <FileUpload label="Disabled" disabled />
      <FileUpload label="Required" required />
      <FileUpload label="Invalid" invalid required />
    </div>
  );
}
