import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalWithCloseButton() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button variant="outline" size="sm">Open with Close Icon</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Close />
        <Modal.Header>With Close Icon</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">
            This modal has a close icon button in the top corner.
          </p>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
