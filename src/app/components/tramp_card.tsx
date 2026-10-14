import { Card, Chip, Button } from "@heroui/react";
import BookTrampModal from "./book_tramp_modal";
import { tramps } from "../utils/data";

interface TrampCardProps {
  tramp: number;
  onClick?: () => void;
  selected?: boolean;
}

export default function TrampCard({ tramp, onClick, selected }: TrampCardProps) {
  const trampInfo = tramps[tramp];

  return (
    <Card className="h-full w-full min-h-0 overflow-hidden" onClick={onClick}>
      <Card.Header>
        <Card.Title>{trampInfo.name}</Card.Title>
        <Card.Description>{trampInfo.description}</Card.Description>
      </Card.Header>

      <Card.Content className="min-h-0 flex-1">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={trampInfo.images[0]}
          alt={trampInfo.name}
        />
      </Card.Content>
      <Card.Footer className="gap-2">
        <Chip className={
          trampInfo.difficulty === "Easy"
            ? "bg-green-100 text-green-800"
            : trampInfo.difficulty === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
        }>
          Difficulty: {trampInfo.difficulty}
        </Chip>

        <Chip>
          Distance: {trampInfo.distanceKm} km
        </Chip>

        <BookTrampModal className="block lg:hidden h-8 ml-auto" defaultView={tramp} />
      </Card.Footer>
    </Card>
  );
}