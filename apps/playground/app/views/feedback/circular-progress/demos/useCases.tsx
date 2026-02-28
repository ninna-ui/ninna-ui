import { useReducer, useEffect } from "react";
import { CircularProgress } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

type DownloadState = { progress: number; isDownloading: boolean };
type DownloadAction = { type: 'start' } | { type: 'tick' } | { type: 'done' };

function downloadReducer(state: DownloadState, action: DownloadAction): DownloadState {
  switch (action.type) {
    case 'start': return { progress: 0, isDownloading: true };
    case 'tick': return { ...state, progress: Math.min(state.progress + 5, 100) };
    case 'done': return { ...state, isDownloading: false };
    default: return state;
  }
}

export default function UseCases() {
  const [{ progress: downloadProgress, isDownloading }, dispatch] = useReducer(
    downloadReducer,
    { progress: 0, isDownloading: false }
  );

  useEffect(() => {
    if (isDownloading && downloadProgress < 100) {
      const timer = setTimeout(() => dispatch({ type: 'tick' }), 200);
      return () => clearTimeout(timer);
    }
    if (downloadProgress >= 100) {
      dispatch({ type: 'done' });
    }
    return undefined;
  }, [isDownloading, downloadProgress]);

  const startDownload = () => dispatch({ type: 'start' });

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Download Progress */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Download Progress</h4>
        <div className="border border-base-300 rounded-lg p-6 flex flex-col items-center gap-4">
          <CircularProgress
            value={downloadProgress}
            showValue
            labelPosition="center"
            color={downloadProgress >= 100 ? "success" : "primary"}
            size="xl"
          />
          <Button
            size="sm"
            color="primary"
            onClick={startDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Downloading..." : downloadProgress >= 100 ? "Download Again" : "Start Download"}
          </Button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Dashboard Stats</h4>
        <div className="border border-base-300 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <CircularProgress value={92} color="success" size="lg">
                <span className="text-sm font-bold text-base-content/70">92%</span>
              </CircularProgress>
              <span className="mt-2 text-sm text-base-content/70">Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress value={67} color="warning" size="lg">
                <span className="text-sm font-bold text-base-content/70">67%</span>
              </CircularProgress>
              <span className="mt-2 text-sm text-base-content/70">CPU</span>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress value={45} color="info" size="lg">
                <span className="text-sm font-bold text-base-content/70">45%</span>
              </CircularProgress>
              <span className="mt-2 text-sm text-base-content/70">Memory</span>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress value={78} color="primary" size="lg">
                <span className="text-sm font-bold text-base-content/70">78%</span>
              </CircularProgress>
              <span className="mt-2 text-sm text-base-content/70">Storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Loading State</h4>
        <div className="border border-base-300 rounded-lg p-6 flex flex-col items-center gap-3">
          <CircularProgress indeterminate color="primary" size="lg" />
          <p className="text-sm text-base-content/70">Loading your data...</p>
        </div>
      </div>
    </div>
  );
}
