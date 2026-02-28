import { Modal } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function ModalLongContent() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button variant="outline" size="sm">Scrollable Content</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>Long Content</Modal.Header>
        <Modal.Body>
          {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
            <p key={n} className="text-base-content/70 mb-4">
              Paragraph {n}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">Close</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
