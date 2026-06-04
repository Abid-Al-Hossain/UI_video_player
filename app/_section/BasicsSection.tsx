"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function BasicsSection({ state, update }: Props) {
  return <SectionCard title="Basics" subtitle="Basics controls for native video generation."><Input label="Title" value={state.title} onChange={(value) => update("title", value)} />
<Input label="Label" value={state.label} onChange={(value) => update("label", value)} />
<Input label="Description" value={state.description} onChange={(value) => update("description", value)} />
<Input label="Helper" value={state.helper} onChange={(value) => update("helper", value)} /></SectionCard>;
}
