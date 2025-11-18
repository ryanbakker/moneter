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
    const loadScript = (src: string, forceReload = false) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        
        // If script exists and we're not forcing reload, check if it's loaded
        if (existing && !forceReload) {
          // Check if the script has loaded by checking for the expected global
          if (src.includes("p5.min.js") && window.p5) {
            return resolve();
          }
          if (src.includes("vanta.topology.min.js") && window.VANTA) {
            return resolve();
          }
        }

        // Remove existing script if forcing reload
        if (existing && forceReload) {
          existing.remove();
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });

    async function initVanta() {
      try {
        // Reset VANTA if it exists but TOPOLOGY is not a function
        if (window.VANTA && typeof window.VANTA.TOPOLOGY !== "function") {
          // Clear the bad state by removing scripts and reloading
          const p5Script = document.querySelector('script[src="/p5.min.js"]');
          const vantaScript = document.querySelector('script[src="/vanta.topology.min.js"]');
          if (p5Script) p5Script.remove();
          if (vantaScript) vantaScript.remove();
          delete window.VANTA;
          delete window.p5;
          // Wait a bit for cleanup to complete
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        await loadScript("/p5.min.js");
        await loadScript("/vanta.topology.min.js");

        // Wait a bit for VANTA to fully initialize
        let retries = 0;
        while ((!window.VANTA || typeof window.VANTA.TOPOLOGY !== "function") && retries < 20) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          retries++;
        }

        if (!vantaRef.current) return;

        if (!window.VANTA) {
          console.error("[VANTA] VANTA not available after loading scripts");
          return;
        }

        // Verify TOPOLOGY is actually a function before calling
        if (typeof window.VANTA.TOPOLOGY !== "function") {
          console.error("[VANTA] TOPOLOGY is not a function. VANTA state:", window.VANTA);
          return;
        }

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
      } catch (error) {
        console.error("[VANTA] Init error", error);
      }
    }

    initVanta();

    return () => {
      if (vantaEffectRef.current) {
        try {
          vantaEffectRef.current.destroy();
        } catch (error) {
          console.error("[VANTA] Cleanup error", error);
        }
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
