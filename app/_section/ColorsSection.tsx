"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import ColorControl from "@/components/shared/color/ColorControl";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function ColorsSection({ state, update }: Props) {
  return <SectionCard title="Colors" subtitle="Colors controls for native video generation."><ColorControl label="Accent" value={state.accent} onChange={(value) => update("accent", value)} />
<ColorControl label="Background" value={state.background} onChange={(value) => update("background", value)} />
<ColorControl label="Foreground" value={state.foreground} onChange={(value) => update("foreground", value)} /></SectionCard>;
}
