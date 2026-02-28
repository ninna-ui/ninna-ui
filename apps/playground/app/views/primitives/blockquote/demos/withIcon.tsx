import { Blockquote } from "@ninna-ui/primitives";

export default function WithIcon() {
  return (
    <div className="space-y-6">
      <Blockquote showIcon color="primary" variant="solid" citeSource="Oscar Wilde">
        Be yourself; everyone else is already taken.
      </Blockquote>

      <Blockquote showIcon color="secondary" variant="solid" citeSource="Mark Twain">
        The secret of getting ahead is getting started.
      </Blockquote>
    </div>
  );
}
