import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalWithDescription() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Delete Item</Button>
      </Modal.Trigger>
      <Modal.Content description="This action cannot be undone. Please confirm you want to permanently delete this item.">
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Modal.Close>
          <Button color="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
