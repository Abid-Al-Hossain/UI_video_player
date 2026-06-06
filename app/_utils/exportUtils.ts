import type { VideoPlayerState } from "../types";

export type ExportPayload = { fileName: string; mimeType: "text/plain;charset=utf-8"; content: string };

export function buildExportPayload(state: VideoPlayerState, fileName = "video-player") : ExportPayload {
  return { fileName: `${fileName || "video-player"}.jsx`, mimeType: "text/plain;charset=utf-8", content: buildReactCode(state) };
}

export function buildReactCode(state: VideoPlayerState) {
  return [
    "import * as React from \"react\";",
    "",
    "const state = " + JSON.stringify(state, null, 2) + ";",
    "",
    "const progressByState = { default: 28, hover: 34, focus: 38, active: 55, open: 28, closed: 0, selected: 68, loading: 10, empty: 0, error: 0, success: 100 };",
    "const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, \"0\")}`;",
    "",
    "export default function VideoPlayerComponent() {",
    "  const progress = progressByState[state.previewState] ?? 28;",
    "  const duration = 96;",
    "  const current = Math.round((duration * progress) / 100);",
    "  const volume = state.muted ? 0 : 72;",
    "  const captionsSrc = `data:text/vtt;charset=utf-8,${encodeURIComponent(`WEBVTT\\n\\n00:00:00.000 --> 00:00:04.000\\n${state.label || state.title}\\n`)}`;",
    "  return (",
    "    <section id={state.id} role={state.role} aria-label={state.ariaLabel} tabIndex={state.tabIndex} style={{ width: state.width, minHeight: state.height, display: \"grid\", alignContent: \"center\", gap: state.gap, padding: state.padding, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily, opacity: state.disabled ? 0.55 : 1 }}>",
    "      <div style={{ display: \"grid\", gap: 8 }}>",
    "        <p style={{ margin: 0, color: state.accent, fontSize: 12, letterSpacing: \".2em\", textTransform: \"uppercase\" }}>{state.label}</p>",
    "        <h3 style={{ margin: 0, fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</h3>",
    "        <p style={{ margin: 0, fontSize: state.bodySize, opacity: 0.72 }}>{state.description}</p>",
    "      </div>",
    "      <div style={{ overflow: \"hidden\", borderRadius: 16, border: `1px solid ${state.border}`, background: \"#020617\" }}>",
    "        <video controls src={state.src || undefined} poster={state.poster || undefined} muted={state.muted} loop={state.loop} autoPlay={state.autoplay} preload={state.preload} aria-label={state.ariaLabel} style={{ display: \"block\", width: \"100%\", aspectRatio: \"16 / 9\", objectFit: state.objectFit, accentColor: state.accent }}>",
    "          {state.showCaptions && <track kind=\"captions\" srcLang=\"en\" label={state.label || \"English captions\"} src={captionsSrc} default />}",
    "        </video>",
    "      </div>",
    "      <div aria-label={`${state.title} timeline preview`} style={{ display: \"grid\", gap: 8 }}>",
    "        <progress value={progress} max={100} style={{ width: \"100%\", accentColor: state.accent }} />",
    "        <div style={{ display: \"flex\", justifyContent: \"space-between\", fontSize: 12, opacity: 0.74 }}>",
    "          <span>{formatTime(current)}</span>",
    "          <span>{formatTime(duration)}</span>",
    "        </div>",
    "      </div>",
    "      <div style={{ display: \"flex\", flexWrap: \"wrap\", justifyContent: \"space-between\", gap: 12, fontSize: 12, opacity: 0.78 }}>",
    "        <span>{state.previewState === \"loading\" ? \"Buffering preview\" : state.previewState === \"error\" ? \"Source unavailable\" : state.previewState === \"success\" ? \"Finished playback\" : `Playback: ${state.previewState}`}</span>",
    "        <span>Volume {volume}% {state.muted ? \"(muted)\" : \"\"}</span>",
    "        <span>{state.showCaptions ? \"Captions on\" : \"Captions off\"}</span>",
    "        <span>Fit {state.objectFit}</span>",
    "      </div>",
    "    </section>",
    "  );",
    "}",
    ""
  ].join("\n");
}
