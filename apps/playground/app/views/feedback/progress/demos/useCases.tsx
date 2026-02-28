import { useReducer, useEffect } from "react";
import { Progress } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

type UploadState = { progress: number; isUploading: boolean };
type UploadAction = { type: 'start' } | { type: 'tick' } | { type: 'done' };

function uploadReducer(state: UploadState, action: UploadAction): UploadState {
  switch (action.type) {
    case 'start': return { progress: 0, isUploading: true };
    case 'tick': return { ...state, progress: Math.min(state.progress + 10, 100) };
    case 'done': return { ...state, isUploading: false };
    default: return state;
  }
}

export default function UseCases() {
  const [{ progress: uploadProgress, isUploading }, dispatch] = useReducer(
    uploadReducer,
    { progress: 0, isUploading: false }
  );

  useEffect(() => {
    if (isUploading && uploadProgress < 100) {
      const timer = setTimeout(() => dispatch({ type: 'tick' }), 500);
      return () => clearTimeout(timer);
    }
    if (uploadProgress >= 100) {
      dispatch({ type: 'done' });
    }
    return undefined;
  }, [isUploading, uploadProgress]);

  const startUpload = () => dispatch({ type: 'start' });

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* File Upload */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">File Upload</h4>
        <div className="border border-base-300 rounded-lg p-4 space-y-3">
          <Progress
            value={uploadProgress}
            showValue
            labelPosition="top"
            color={uploadProgress >= 100 ? "success" : "primary"}
            label="Uploading document.pdf"
          />
          <Button
            size="sm"
            color="primary"
            onClick={startUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : uploadProgress >= 100 ? "Upload Again" : "Start Upload"}
          </Button>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Storage Usage</h4>
        <div className="border border-base-300 rounded-lg p-4 space-y-2">
          <Progress
            value={7.5}
            max={10}
            showValue
            labelPosition="right"
            color="warning"
            formatLabel={(value, max) => `${value}GB / ${max}GB`}
          />
          <p className="text-xs text-base-content/70">
            You are using 75% of your storage. Consider upgrading your plan.
          </p>
        </div>
      </div>

      {/* Multi-step Form */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Multi-step Form Progress</h4>
        <div className="border border-base-300 rounded-lg p-4 space-y-3">
          <Progress
            value={2}
            max={4}
            showValue
            labelPosition="top"
            color="info"
            label="Complete your profile"
            formatLabel={(value, max) => `Step ${value} of ${max}`}
          />
          <div className="flex gap-2 text-xs text-base-content/70">
            <span className="text-primary">✓ Personal Info</span>
            <span className="text-primary">✓ Contact</span>
            <span className="font-medium">→ Preferences</span>
            <span>Review</span>
          </div>
        </div>
      </div>

      {/* Loading State */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Loading Content</h4>
        <div className="border border-base-300 rounded-lg p-4 space-y-2">
          <Progress indeterminate color="primary" size="sm" />
          <p className="text-sm text-base-content/70">Loading your dashboard...</p>
        </div>
      </div>

      {/* Skill Levels */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Skill Levels</h4>
        <div className="border border-base-300 rounded-lg p-4 space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-base-content/70">React</span>
              <span className="text-base-content/70">90%</span>
            </div>
            <Progress value={90} color="primary" size="sm" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-base-content/70">TypeScript</span>
              <span className="text-base-content/70">85%</span>
            </div>
            <Progress value={85} color="secondary" size="sm" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-base-content/70">Node.js</span>
              <span className="text-base-content/70">75%</span>
            </div>
            <Progress value={75} color="success" size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
