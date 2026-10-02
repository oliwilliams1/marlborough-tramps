import { Card } from "@heroui/react";
import { useState } from "react";
import BookTrampModal from "./book_tramp_modal";
import { tramps } from "../utils/data";

interface LargeTrampCardProps {
  selectedTramp: number;
}

export default function LargeTrampCard({ selectedTramp }: LargeTrampCardProps) {
  const [expanded, setExpanded] = useState(true);

  const tramp = tramps[selectedTramp];

  return (
    <Card className="
      w-full
      border border-white/40
      bg-white/20
      backdrop-blur-2xl
      shadow-0
      rounded-2xl
    ">
      <Card.Header className="flex flex-row items-center justify-between gap-4 p-4">
        <Card.Title className="min-w-0 text-lg font-semibold">
          {tramp.name}
        </Card.Title>

        <div className="flex shrink-0 items-center gap-2">
          <BookTrampModal />

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="rounded-full p-2 transition-colors hover:bg-black/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </Card.Header>

      {expanded && (
        <>
          <Card.Content className="border-t border-white/30 p-4">
            <Card.Description className="whitespace-pre-line text-sm leading-relaxed">
              {tramp.longDescription}
            </Card.Description>
          </Card.Content>
        </>
      )}
    </Card>
  );
}