import { TrampCardInfo } from "../utils/types";

export default function LargeTrampCard({ name, description }: TrampCardInfo) {
  return (
    <div className="rounded-lg shadow-md p-4 w-full grow">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}