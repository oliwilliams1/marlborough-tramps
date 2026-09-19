import { TrampCardInfo } from "../utils/types";

interface TrampCardProps extends TrampCardInfo {
  onClick: () => void;
  selected: boolean;
}

export default function TrampCard({ name, description, onClick, selected }: TrampCardProps) {
  return (
    <div
      className=
      {`
        rounded-lg shadow-md p-4 w-full grow cursor-pointer
        transition-all duration-200 hover:cursor-pointer
        ${selected ? "ring-2 ring-blue-500" : ""}
      `}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}