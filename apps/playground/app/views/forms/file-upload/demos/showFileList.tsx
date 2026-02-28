
import { FileUpload } from '@ninna-ui/forms';

export default function ShowFileListDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">showFileList=true (default)</p>
        <FileUpload 
          label="With file list" 
          showFileList 
          multiple
          helperText="Upload files to see them listed below"
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">showFileList=false</p>
        <FileUpload 
          label="Without file list" 
          showFileList={false}
          multiple
          helperText="Files won't be displayed after upload"
        />
      </div>
    </div>
  );
}
