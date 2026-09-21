import { Modal, Button } from "@heroui/react";
import TrampCard from "./tramp_card";
import { tramps } from "../utils/data";

export default function BookTrampModal() {
  return (
    <Modal>
      <Button>Book Tramp</Button>
      <Modal.Backdrop>
        <Modal.Container size="md">
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              Book Tramp
            </Modal.Header>
            <Modal.Body>
              <TrampCard 
                name={tramps[0].name}
                description={tramps[0].description}
              />
            </Modal.Body>
            <Modal.Footer>
              Footer
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}