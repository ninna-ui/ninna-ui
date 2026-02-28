import { IconButton } from "@ninna-ui/primitives";
import {
  Heart,
  Share2,
  Bookmark,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Sun,
  Moon,
  Copy,
  Check,
  Maximize2,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Plus,
} from "lucide-react";
import { useState } from "react";

export default function UseCases() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Social Actions */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Social Actions</p>
        <div className="flex items-center gap-2 p-4 rounded-lg border border-base-300">
          <IconButton
            icon={<Heart className={liked ? "fill-current" : ""} />}
            variant={liked ? "solid" : "ghost"}
            color={liked ? "danger" : "neutral"}
            aria-label={liked ? "Unlike" : "Like"}
            onClick={() => setLiked(!liked)}
          />
          <IconButton
            icon={<Share2 />}
            variant="ghost"
            color="neutral"
            aria-label="Share"
          />
          <IconButton
            icon={<Bookmark className={bookmarked ? "fill-current" : ""} />}
            variant={bookmarked ? "solid" : "ghost"}
            color={bookmarked ? "warning" : "neutral"}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
            onClick={() => setBookmarked(!bookmarked)}
          />
          <IconButton
            icon={<MoreHorizontal />}
            variant="ghost"
            color="neutral"
            aria-label="More options"
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Navigation Controls</p>
        <div className="flex items-center gap-2">
          <IconButton
            icon={<ChevronLeft />}
            variant="outline"
            color="neutral"
            aria-label="Previous"
          />
          <span className="px-4 text-sm text-base-content/70">Page 1 of 10</span>
          <IconButton
            icon={<ChevronRight />}
            variant="outline"
            color="neutral"
            aria-label="Next"
          />
        </div>
      </div>

      {/* Modal/Dialog Header */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Modal Header</p>
        <div className="flex items-center justify-between p-4 rounded-lg border border-base-300 bg-base-100">
          <h4 className="font-semibold text-base-content">Dialog Title</h4>
          <IconButton
            icon={<X />}
            variant="ghost"
            color="neutral"
            size="sm"
            aria-label="Close dialog"
          />
        </div>
      </div>

      {/* Toolbar */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Toolbar</p>
        <div className="flex items-center gap-1 p-2 rounded-lg border border-base-300 bg-base-200">
          <IconButton icon={<Menu />} variant="ghost" color="neutral" size="sm" aria-label="Menu" />
          <div className="w-px h-6 bg-base-400 mx-1" />
          <IconButton icon={<RefreshCw />} variant="ghost" color="neutral" size="sm" aria-label="Refresh" />
          <IconButton icon={<Download />} variant="ghost" color="neutral" size="sm" aria-label="Download" />
          <IconButton icon={<Upload />} variant="ghost" color="neutral" size="sm" aria-label="Upload" />
          <div className="w-px h-6 bg-base-400 mx-1" />
          <IconButton icon={<Maximize2 />} variant="ghost" color="neutral" size="sm" aria-label="Fullscreen" />
        </div>
      </div>

      {/* Theme Toggle */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Theme Toggle</p>
        <IconButton
          icon={darkMode ? <Sun /> : <Moon />}
          variant="soft"
          color={darkMode ? "warning" : "secondary"}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Copy Button */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Copy to Clipboard</p>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-base-200 font-mono text-sm">
          <code className="flex-1 text-base-content/70">npm install @ninna-ui/primitives</code>
          <IconButton
            icon={copied ? <Check /> : <Copy />}
            variant="ghost"
            color={copied ? "success" : "neutral"}
            size="sm"
            aria-label={copied ? "Copied!" : "Copy to clipboard"}
            onClick={handleCopy}
          />
        </div>
      </div>

      {/* CRUD Actions */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">CRUD Actions</p>
        <div className="flex items-center gap-2">
          <IconButton icon={<Plus />} variant="solid" color="primary" aria-label="Create" />
          <IconButton icon={<Edit />} variant="soft" color="info" aria-label="Edit" />
          <IconButton icon={<Trash2 />} variant="soft" color="danger" aria-label="Delete" />
        </div>
      </div>

      {/* Floating Action Button Style */}
      <div>
        <p className="text-sm font-medium text-base-content/70 mb-3">Floating Action Button</p>
        <IconButton
          icon={<Plus />}
          variant="solid"
          color="primary"
          size="xl"
          radius="full"
          aria-label="Add new item"
          className="shadow-lg"
        />
      </div>
    </div>
  );
}
