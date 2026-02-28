import { EmptyState } from "@ninna-ui/feedback";

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
}

export default function Sizes() {
  return (
    <div className="space-y-8">
      <div className="p-4 border border-base-300 rounded-lg">
        <EmptyState
          size="sm"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
      
      <div className="p-4 border border-base-300 rounded-lg">
        <EmptyState
          size="md"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
      
      <div className="p-4 border border-base-300 rounded-lg">
        <EmptyState
          size="lg"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
    </div>
  );
}
