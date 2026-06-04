"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Switch from "@/components/shared/input/Switch";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function BehaviorSection({ state, update }: Props) {
  return <SectionCard title="Behavior" subtitle="Behavior controls for native video generation."><Switch label="Autoplay" checked={state.autoplay} onChange={(value) => update("autoplay", value)} />
<Switch label="Loop" checked={state.loop} onChange={(value) => update("loop", value)} />
<Switch label="Muted" checked={state.muted} onChange={(value) => update("muted", value)} />
<Switch label="Disabled" checked={state.disabled} onChange={(value) => update("disabled", value)} /></SectionCard>;
}
