import { useState } from "react";

import { Modal, Button, TextField, Form, Tabs, Label, Input, FieldError } from "@heroui/react";
import { tramps } from "../utils/data";

interface BookTrampProps {
  defaultView?: number;
}

export default function BookTrampModal({ defaultView } : BookTrampProps) {
  const [currentTramp, setCurrentTramp] = useState<number>(defaultView || 0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

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
              <Tabs className="w-full max-w-md">
                <Tabs.ListContainer>
                  <Tabs.List aria-label="Options">
                    {tramps.map((tramp, index) => (
                      <Tabs.Tab id={index} key={index}>
                        {tramp.name}
                        <Tabs.Indicator />
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                </Tabs.ListContainer>
                {tramps.map((tramp, index) => (
                  <Tabs.Panel className="pt-4" id={index} key={index}>
                    <p>{tramp.description}</p>
                  </Tabs.Panel>
                ))}
              </Tabs>
              
              <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                  isRequired
                  name="Name"
                >
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                  <FieldError />
                </TextField>
                
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="age"
                  type="number"
                >
                  <Label>Age of Organiser</Label>
                  <Input placeholder="21" />
                  <FieldError />
                </TextField>

                <div className="flex gap-4">
                  <TextField
                    isRequired
                    name="adults"
                  >
                    <Label>Number of Adults</Label>
                    <Input placeholder="1" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="children"
                  >
                    <Label>Number of Children (9-16)</Label>
                    <Input placeholder="0" />
                    <FieldError />
                  </TextField>
                </div>
              </Form>
              
            </Modal.Body>
            <Modal.Footer>
              <Button>
                Book Now
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}