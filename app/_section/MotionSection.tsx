"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Switch from "@/components/shared/input/Switch";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function MotionSection({ state, update }: Props) {
  return <SectionCard title="Motion" subtitle="Motion controls for native video generation."><Switch label="Motion safe" checked={state.motion} onChange={(value) => update("motion", value)} /></SectionCard>;
}
