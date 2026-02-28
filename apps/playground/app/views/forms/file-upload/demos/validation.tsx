import { useState } from "react";
import { FileUpload } from "@ninna-ui/forms";
import type { FileRejection } from "@ninna-ui/forms";

export default function Validation() {
  const [rejections, setRejections] = useState<FileRejection[]>([]);

  return (
    <div className="flex flex-col gap-4 w-96">
      <FileUpload
        label="Upload images (max 2MB each)"
        accept="image/*"
        maxFileSize={2 * 1024 * 1024}
        maxFiles={3}
        multiple
        onFilesRejected={(rejected) => setRejections(rejected)}
        helperText="Only images, max 2MB, up to 3 files"
      />
      {rejections.length > 0 && (
        <div className="text-sm text-danger">
          <p className="font-medium">Rejected files:</p>
          <ul className="list-disc list-inside">
            {rejections.map((r) => (
              <li key={r.file.name}>{r.file.name}: {r.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
