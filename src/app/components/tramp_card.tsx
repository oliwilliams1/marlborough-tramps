import { Card } from "@heroui/react/card";
import { TrampCardInfo } from "../utils/types";

interface TrampCardProps extends TrampCardInfo {
  onClick?: () => void;
  selected?: boolean;
}

export default function TrampCard({ name, description, onClick, selected }: TrampCardProps) {
  return (
    <Card onClick={onClick}>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card>
  );
}