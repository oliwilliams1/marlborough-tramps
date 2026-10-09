"use client"

import { useState } from "react";

import { Modal, Button, TextField, Form, Tabs, Label, Input, FieldError, Separator, toast, useOverlayState } from "@heroui/react";
import { tramps } from "../utils/data";

interface BookTrampProps {
  defaultView?: number;
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const FORM_ID = "book-tramp-form";

/* Validators. Each returns an error message, or null when the value is valid */
const validateName = (value: string) => {
  if (value.trim().length < 2) {
    return "Please enter your full name";
  }
  if (!/^[\p{L}][\p{L}\s'.-]*$/u.test(value.trim())) {
    return "Name can only contain letters, spaces, apostrophes, hyphens and full stops";
  }
  return null;
};

const validateEmail = (value: string) => {
  if (!EMAIL_REGEX.test(value.trim())) {
    return "Please enter a valid email address";
  }
  return null;
};

const validateWholeNumber = (value: string, min: number, max: number, what: string) => {
  if (value.trim() === "" || !/^\d+$/.test(value.trim())) {
    return `${what} must be a whole number`;
  }
  const n = Number(value);
  if (n < min || n > max) {
    return `${what} must be between ${min} and ${max}`;
  }
  return null;
};

const validateAge = (value: string) =>
  validateWholeNumber(value, 18, 120, "Age of organiser (organisers must be 18 or older)");

const validateAdults = (value: string) =>
  validateWholeNumber(value, 1, 20, "Number of adults");

const validateChildren = (value: string) =>
  validateWholeNumber(value, 0, 20, "Number of children");

export default function BookTrampModal({ defaultView } : BookTrampProps) {
  const modalState = useOverlayState();
  // Which tramp is currently chosen in the tabs, this is booked when the form is submitted
  const [selectedTramp, setSelectedTramp] = useState<number>(defaultView || 0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString().trim();
    });

    const adults = Number(data.adults);
    const children = Number(data.children);
    const people = adults + children;
    const tramp = tramps[selectedTramp];

    console.log("Booking request:", { tramp: tramp.name, ...data });

    toast.success("Booking request sent", {
      description: `Thanks ${data.name.split(" ")[0]}, we've received your request for ${tramp.name} (${people} ${people === 1 ? "person" : "people"}) and will email you at ${data.email}.`,
      timeout: 6000,
    });

    form.reset();
    modalState.close();
  };

  return (
    <Modal>
      <Button onPress={modalState.open}>Book Tramp</Button>
      <Modal.Backdrop isOpen={modalState.isOpen} onOpenChange={modalState.setOpen}>
        <Modal.Container size="lg">
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              Book Tramp
            </Modal.Header>
            <Modal.Body>
              <Tabs
                className="w-full"
                variant="secondary"
                selectedKey={selectedTramp}
                onSelectionChange={(key) => setSelectedTramp(Number(key))}
              >
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

              <Separator className="my-4" />

              <Form id={FORM_ID} className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                  isRequired
                  name="name"
                  autoComplete="name"
                  validate={validateName}
                >
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="email"
                  type="email"
                  autoComplete="email"
                  validate={validateEmail}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="age"
                  type="number"
                  inputMode="numeric"
                  validate={validateAge}
                >
                  <Label>Age of Organiser</Label>
                  <Input placeholder="21" />
                  <FieldError />
                </TextField>

                <div className="flex gap-4 w-full">
                  <TextField
                    className="w-full"
                    isRequired
                    name="adults"
                    type="number"
                    inputMode="numeric"
                    validate={validateAdults}
                  >
                    <Label>Number of Adults</Label>
                    <Input placeholder="1" />
                    <FieldError />
                  </TextField>

                  <TextField
                    className="w-full"
                    isRequired
                    name="children"
                    type="number"
                    inputMode="numeric"
                    validate={validateChildren}
                  >
                    <Label>Number of Children (9-16)</Label>
                    <Input placeholder="0" />
                    <FieldError />
                  </TextField>
                </div>
              </Form>

            </Modal.Body>
            <Modal.Footer>
              {/* The button sits outside the <form>, so the form attribute links it to the form */}
              <Button type="submit" form={FORM_ID}>
                Book Now
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}