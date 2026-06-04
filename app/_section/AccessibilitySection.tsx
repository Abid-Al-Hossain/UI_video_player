"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { VideoPlayerState } from "../types";

type Props = { state: VideoPlayerState; update: <K extends keyof VideoPlayerState>(key: K, value: VideoPlayerState[K]) => void };

export default function AccessibilitySection({ state, update }: Props) {
  return <SectionCard title="Accessibility" subtitle="Accessibility controls for native video generation."><Input label="Accessible label" value={state.ariaLabel} onChange={(value) => update("ariaLabel", value)} /></SectionCard>;
}
