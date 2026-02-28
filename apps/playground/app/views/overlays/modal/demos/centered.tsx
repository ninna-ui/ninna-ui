import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalCentered() {
  return (
    <div className="flex gap-2">
      <Modal>
        <Modal.Trigger asChild>
          <Button variant="outline" size="sm">Centered</Button>
        </Modal.Trigger>
        <Modal.Content centered>
          <Modal.Header>Centered Modal</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">This modal is vertically centered.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="ghost">Close</Button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal>
        <Modal.Trigger asChild>
          <Button variant="outline" size="sm">Top Aligned</Button>
        </Modal.Trigger>
        <Modal.Content centered={false}>
          <Modal.Header>Top Aligned Modal</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">This modal is aligned to the top.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="ghost">Close</Button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}
