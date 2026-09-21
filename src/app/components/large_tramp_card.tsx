import { TrampCardInfo } from "../utils/types";
import { Card } from "@heroui/react";
import BookTrampModal from "./book_tramp_modal";

export default function LargeTrampCard({ name, description }: TrampCardInfo) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Content />
      <Card.Footer>
        <BookTrampModal />
      </Card.Footer>
    </Card>
  );
}