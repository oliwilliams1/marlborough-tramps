import { Card } from "@heroui/react";
import BookTrampModal from "./book_tramp_modal";
import { tramps } from "../utils/data";

interface LargeTrampCardProps {
  selectedTramp: number;
}

export default function LargeTrampCard({ selectedTramp }: LargeTrampCardProps) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{tramps[selectedTramp].name}</Card.Title>
        <Card.Description>{tramps[selectedTramp].description}</Card.Description>
      </Card.Header>
      <Card.Content />
      <Card.Footer>
        <BookTrampModal />
      </Card.Footer>
    </Card>
  );
}