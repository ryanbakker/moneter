"use client";

import { useEffect, useRef } from "react";

interface VantaEffect {
  destroy: () => void;
}

interface VantaTopologyOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  color?: number;
  backgroundColor?: number | null;
}

interface VantaInstance {
  TOPOLOGY: (options: VantaTopologyOptions) => VantaEffect;
}

declare global {
  interface Window {
    VANTA?: VantaInstance;
    p5?: unknown;
  }
}

interface VantaProps {
  color?: number;
  backgroundColor?: number | null;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
}

export default function VantaTopology({
  color = 0x4338ca,
  backgroundColor = null,
  mouseControls = true,
  touchControls = true,
  gyroControls = true,
  minHeight = 720,
  minWidth = 200,
}: VantaProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;
    if (vantaEffectRef.current) return;

    // Load scripts sequentially: p5 → vanta
    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    async function initVanta() {
      await loadScript("/p5.min.js");
      await loadScript("/vanta.topology.min.js");

      if (!window.VANTA || !vantaRef.current) return;

      const effect = window.VANTA.TOPOLOGY({
        el: vantaRef.current,
        mouseControls,
        touchControls,
        gyroControls,
        minHeight,
        minWidth,
        color,
        backgroundColor: backgroundColor !== null ? backgroundColor : 0x000000,
      });

      // Ensure canvas is transparent (Vanta creates canvas asynchronously)
      const makeCanvasTransparent = () => {
        if (vantaRef.current) {
          const canvas = vantaRef.current.querySelector("canvas");
          if (canvas) {
            canvas.style.backgroundColor = "transparent";
          } else {
            // Retry if canvas not yet created
            requestAnimationFrame(makeCanvasTransparent);
          }
        }
      };
      makeCanvasTransparent();

      vantaEffectRef.current = effect;
    }

    initVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [
    color,
    backgroundColor,
    mouseControls,
    touchControls,
    gyroControls,
    minHeight,
    minWidth,
  ]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 opacity-55 dark:opacity-80"
      style={{ backgroundColor: "transparent" }}
    />
  );
}
