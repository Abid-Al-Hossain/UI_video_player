"use client";

import type { CSSProperties } from "react";
import type { VideoPlayerState } from "../types";

function shell(state: VideoPlayerState): CSSProperties {
  return { width: state.width, minHeight: state.height, padding: state.padding, gap: state.gap, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily, opacity: state.disabled ? 0.55 : 1 };
}

export default function LivePreview({ state }: { state: VideoPlayerState }) {
  const panel = shell(state);
  const progressByState: Record<VideoPlayerState["previewState"], number> = { default: 28, hover: 34, focus: 38, active: 55, open: 28, closed: 0, selected: 68, loading: 10, empty: 0, error: 0, success: 100 };
  const progress = progressByState[state.previewState];
  const duration = 96;
  const current = Math.round((duration * progress) / 100);
  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const volume = state.muted ? 0 : 72;
  const captionsSrc = `data:text/vtt;charset=utf-8,${encodeURIComponent(`WEBVTT\n\n00:00:00.000 --> 00:00:04.000\n${state.label || state.title}\n`)}`;

  return <section id={state.id} role={state.role} aria-label={state.ariaLabel} tabIndex={state.tabIndex} style={panel} className="grid content-center gap-4">
    <div className="grid gap-2">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: state.accent }}>{state.label}</p>
      <h3 style={{ fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</h3>
      <p style={{ color: "color-mix(in oklab, currentColor 70%, transparent)", fontSize: state.bodySize }}>{state.description}</p>
    </div>
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: state.border, background: "#020617" }}>
      <video controls src={state.src || undefined} poster={state.poster || undefined} muted={state.muted} loop={state.loop} autoPlay={state.autoplay} preload={state.preload} aria-label={state.ariaLabel} className="block w-full" style={{ aspectRatio: "16 / 9", objectFit: state.objectFit as CSSProperties["objectFit"], accentColor: state.accent }}>
        {state.showCaptions && <track kind="captions" srcLang="en" label={state.label || "English captions"} src={captionsSrc} default />}
      </video>
    </div>
    <div className="grid gap-2" aria-label={`${state.title} timeline preview`}>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "color-mix(in oklab, currentColor 14%, transparent)" }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full" style={{ width: `${progress}%`, background: state.accent, transition: state.motion ? "width 0.1s linear" : "none" }} />
      </div>
      <div className="flex justify-between text-xs" style={{ color: "color-mix(in oklab, currentColor 72%, transparent)" }}>
        <span>{formatTime(current)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: "color-mix(in oklab, currentColor 74%, transparent)" }}>
      <span>{state.previewState === "loading" ? "Buffering preview" : state.previewState === "error" ? "Source unavailable" : state.previewState === "success" ? "Finished playback" : `Playback: ${state.previewState}`}</span>
      <span>Volume {volume}% {state.muted ? "(muted)" : ""}</span>
      <span>{state.showCaptions ? "Captions on" : "Captions off"}</span>
      <span>Fit {state.objectFit}</span>
    </div>
  </section>;
}
