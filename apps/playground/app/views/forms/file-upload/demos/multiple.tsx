import { FileUpload } from '@ninna-ui/forms';

export default function MultipleDemo() {
  return (
    <FileUpload
      label="Upload documents"
      accept=".pdf,.doc,.docx"
      multiple
      maxFiles={5}
      helperText="Upload up to 5 documents"
    />
  );
}
