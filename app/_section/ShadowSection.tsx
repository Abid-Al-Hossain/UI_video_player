"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function ShadowSection({ state, update }: Props) {
  return <SectionCard title="Shadow" subtitle="Shadow controls for native video generation."><Slider label="Shadow" value={state.shadow} min={0} max={80} step={1} onChange={(value) => update("shadow", value)} /></SectionCard>;
}
