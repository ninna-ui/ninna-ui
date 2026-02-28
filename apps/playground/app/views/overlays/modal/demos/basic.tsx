import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function BasicModal() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">
            This is a basic modal dialog with default settings.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Modal.Close>
          <Button>Confirm</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
