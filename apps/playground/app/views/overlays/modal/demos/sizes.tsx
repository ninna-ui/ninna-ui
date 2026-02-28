import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalSizes() {
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <Modal key={size}>
          <Modal.Trigger asChild>
            <Button variant="outline" size="sm">
              {size}
            </Button>
          </Modal.Trigger>
          <Modal.Content size={size}>
            <Modal.Header>Size: {size}</Modal.Header>
            <Modal.Body>
              <p className="text-base-content/70">
                Modal with <code className="text-primary font-mono">size=&quot;{size}&quot;</code>.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button variant="ghost">Close</Button>
              </Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      ))}
    </div>
  );
}
