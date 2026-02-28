import { Blockquote } from "@ninna-ui/primitives";

export default function Citation() {
  return (
    <div className="space-y-6">
      <Blockquote citeSource="Steve Jobs">
        The only way to do great work is to love what you do.
      </Blockquote>

      <Blockquote 
        variant="solid" 
        color="primary"
        citeSource="Albert Einstein"
        cite="https://example.com/einstein-quotes"
      >
        Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>

      <Blockquote 
        variant="soft" 
        color="secondary"
        citeSource="Maya Angelou, I Know Why the Caged Bird Sings"
      >
        There is no greater agony than bearing an untold story inside you.
      </Blockquote>
    </div>
  );
}
