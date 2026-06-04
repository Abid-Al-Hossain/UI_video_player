"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function RadiusSection({ state, update }: Props) {
  return <SectionCard title="Radius" subtitle="Radius controls for native video generation."><Slider label="Radius" value={state.radius} min={0} max={56} step={1} onChange={(value) => update("radius", value)} /></SectionCard>;
}
