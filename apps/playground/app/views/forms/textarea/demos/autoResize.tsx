import { Textarea } from "@ninna-ui/forms";

export default function AutoResize() {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Auto-resize (min 2 rows)</span>
        <Textarea 
          autoResize 
          minRows={2} 
          placeholder="Type to see auto-resize..." 
        />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Auto-resize with max rows</span>
        <Textarea 
          autoResize 
          minRows={2} 
          maxRows={6} 
          placeholder="Max 6 rows..." 
        />
      </div>
    </div>
  );
}
