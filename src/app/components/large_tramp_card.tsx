import { TrampCardInfo } from "../utils/types";
import { Card } from "@heroui/react";
import BookTrampModal from "./book_tramp_modal";
import { tramps } from "../utils/data";
export default function LargeTrampCard({ selectedTramp }: TrampCardInfo) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{tramps[selectedTramp].name}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Content />
      <Card.Footer>
        <BookTrampModal defaultView={}/>
      </Card.Footer>
    </Card>
  );
}