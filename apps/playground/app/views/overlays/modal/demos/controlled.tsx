import { useState } from "react";
import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4">
      <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
      <p className="text-sm text-base-content/70">
        Modal is {open ? "open" : "closed"}
      </p>
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Content>
          <Modal.Header>Controlled Modal</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">
              This modal is controlled via React state.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}
