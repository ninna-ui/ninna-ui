import { FileUpload } from '@ninna-ui/forms';

export default function ImageOnlyDemo() {
  return (
    <FileUpload
      label="Upload images"
      accept="image/*"
      helperText="Only image files (PNG, JPG, GIF) are accepted"
    />
  );
}
