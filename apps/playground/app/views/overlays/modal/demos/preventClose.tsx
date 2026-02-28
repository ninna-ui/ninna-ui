import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalPreventClose() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button variant="outline" size="sm">Cannot Dismiss</Button>
      </Modal.Trigger>
      <Modal.Content closeOnOverlayClick={false} closeOnEscape={false}>
        <Modal.Header>Persistent Modal</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">
            This modal cannot be closed by clicking the overlay or pressing
            Escape. You must use the button below.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button>Got it</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
