import { Card, Chip } from "@heroui/react";
import { TrampCardInfo } from "../utils/types";

interface TrampCardProps {
  tramp: TrampCardInfo;
  onClick?: () => void;
  selected?: boolean;
}

export default function TrampCard({ tramp, onClick, selected }: TrampCardProps) {
  return (
    <Card className="h-full w-full min-h-0 overflow-hidden" onClick={onClick}>
      <Card.Header>
        <Card.Title>{tramp.name}</Card.Title>
        <Card.Description>{tramp.description}</Card.Description>
      </Card.Header>

      <Card.Content className="min-h-0 flex-1">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={tramp.images[0]}
          alt={tramp.name}
        />
      </Card.Content>
      <Card.Footer className="gap-2">
        <Chip className={
          tramp.difficulty === "Easy"
            ? "bg-green-100 text-green-800"
            : tramp.difficulty === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
        }>
          Difficulty: {tramp.difficulty}
        </Chip>

        <Chip>
          Distance: {tramp.distanceKm} km
        </Chip>
      </Card.Footer>
    </Card>
  );
}