"use client";

import { useId, useState } from "react";
import type { DiagramStage } from "@/lib/content";
import { RichText } from "@/components/RichText";

type FlowDiagramProps = {
  caption: string;
  stages: DiagramStage[];
  parallel?: DiagramStage[];
  parallelLabel?: string;
  aside?: DiagramStage[];
  asideLabel?: string;
};

export function FlowDiagram({
  caption,
  stages,
  parallel,
  parallelLabel,
  aside,
  asideLabel,
}: FlowDiagramProps) {
  const baseId = useId();
  const noteId = `${baseId}-note`;
  const [selected, setSelected] = useState<string | null>(null);
  const stagesById = new Map(
    [...(parallel ?? []), ...stages, ...(aside ?? [])].map((stage) => [
      stage.id,
      stage,
    ]),
  );
  const current = selected ? stagesById.get(selected) : undefined;

  function toggle(id: string) {
    setSelected((currentId) => (currentId === id ? null : id));
  }

  return (
    <figure className="diagram">
      <figcaption>{caption}</figcaption>
      {parallel && parallel.length > 0 ? (
        <div className="diagram-parallel">
          {parallelLabel ? (
            <p className="diagram-kicker">{parallelLabel}</p>
          ) : null}
          <ul className="diagram-parallel-list">
            {parallel.map((stage) => (
              <li key={stage.id}>
                <StageButton
                  stage={stage}
                  pressed={selected === stage.id}
                  noteId={noteId}
                  onToggle={toggle}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <ol className="diagram-flow">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            {index > 0 || (parallel && parallel.length > 0) ? (
              <span className="diagram-arrow" aria-hidden="true" />
            ) : null}
            <StageButton
              stage={stage}
              index={index + 1}
              pressed={selected === stage.id}
              noteId={noteId}
              onToggle={toggle}
            />
          </li>
        ))}
      </ol>
      {aside && aside.length > 0 ? (
        <div className="diagram-aside">
          {asideLabel ? <p className="diagram-kicker">{asideLabel}</p> : null}
          <ul className="diagram-aside-list">
            {aside.map((stage) => (
              <li key={stage.id}>
                <StageButton
                  stage={stage}
                  pressed={selected === stage.id}
                  noteId={noteId}
                  onToggle={toggle}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p id={noteId} className="diagram-note" aria-live="polite">
        {current ? (
          <RichText text={current.note} />
        ) : (
          "Select a stage to read its role in this system."
        )}
      </p>
    </figure>
  );
}

function StageButton({
  stage,
  index,
  pressed,
  noteId,
  onToggle,
}: {
  stage: DiagramStage;
  index?: number;
  pressed: boolean;
  noteId: string;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      className="diagram-stage"
      aria-pressed={pressed}
      aria-controls={noteId}
      onClick={() => onToggle(stage.id)}
    >
      {index ? (
        <span className="diagram-index">{String(index).padStart(2, "0")}</span>
      ) : null}
      <span>{stage.label}</span>
    </button>
  );
}
