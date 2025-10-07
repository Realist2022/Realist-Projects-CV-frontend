import React, { useEffect, useMemo, useRef } from "react";
import styles from "./MainContent.module.css";

const escTech = (s) =>
  window.CSS && CSS.escape
    ? CSS.escape(s)
    : String(s).replace(/["\\]/g, "\\$&");
const findNearestNode = (track, tech) => {
  const nodes = track.querySelectorAll(`[data-tech="${escTech(tech)}"]`);
  if (!nodes.length) return null;
  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;
  let best = null,
    bestDist = Infinity;
  nodes.forEach((n) => {
    const r = n.getBoundingClientRect();
    const c = r.left + r.width / 2;
    const d = Math.abs(c - trackCenter);
    if (d < bestDist) {
      bestDist = d;
      best = n;
    }
  });
  return { node: best, trackRect };
};
const centerOnNode = (track, node, trackRect, smooth = true) => {
  if (!track || !node || !trackRect) return;
  const itemRect = node.getBoundingClientRect();
  const deltaToCenter =
    itemRect.left - trackRect.left + itemRect.width / 2 - trackRect.width / 2;
  const targetLeft = Math.min(
    track.scrollWidth - track.clientWidth,
    Math.max(0, track.scrollLeft + deltaToCenter)
  );
  track.scrollTo({ left: targetLeft, behavior: smooth ? "smooth" : "auto" });
};
const centerTech = (track, tech, smooth = true) => {
  if (!track || !tech) return;
  const res = findNearestNode(track, tech);
  if (!res) return;
  centerOnNode(track, res.node, res.trackRect, smooth);
};
const centerSecondAll = (track, smooth = true) => {
  if (!track) return;
  const nodes = track.querySelectorAll(`[data-tech="__ALL__"]`);
  const targetNode = nodes.length > 1 ? nodes[1] : nodes[0];
  if (!targetNode) return;
  const trackRect = track.getBoundingClientRect();
  centerOnNode(track, targetNode, trackRect, smooth);
};

export default function TechScrollBar({ filters, selectedFilter, onSelect }) {
  const trackRef = useRef(null);
  const lastScrollYRef = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const lastCenterTsRef = useRef(0);
  const isInitialLoad = useRef(true);
  const ARROW_STEP = 100;

  const baseItems = useMemo(() => ["__ALL__", ...filters], [filters]);
  const loopItems = useMemo(() => [...baseItems, ...baseItems], [baseItems]);

  // Initial and selection centering
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (isInitialLoad.current) {
      centerSecondAll(track, false);
      isInitialLoad.current = false;
      return;
    }
    if (selectedFilter) {
      centerTech(track, selectedFilter, true);
    } else {
      centerSecondAll(track, true);
    }
  }, [selectedFilter]);

  // Re-center on page scroll (throttled)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let rafId = 0;

    const recenter = () => {
      const now = performance.now();
      if (now - lastCenterTsRef.current <= 150) return;
      lastCenterTsRef.current = now;
      if (selectedFilter) centerTech(track, selectedFilter, true);
      else centerSecondAll(track, true);
    };

    const onWindowScroll = () => {
      if (!track || track.scrollWidth <= track.clientWidth) return;
      const currY = window.scrollY || document.documentElement.scrollTop || 0;
      const rawDelta = currY - lastScrollYRef.current;
      lastScrollYRef.current = currY;
      if (rawDelta !== 0) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(recenter);
      }
    };

    const onResize = () => {
      if (!track) return;
      if (selectedFilter) centerTech(track, selectedFilter, false);
      else centerSecondAll(track, false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [selectedFilter]);

  return (
    <div className={styles.techScrollBarWrapper}>
      <button
        className={styles.scrollArrow}
        onClick={() =>
          trackRef.current?.scrollBy({ left: -ARROW_STEP, behavior: "smooth" })
        }
        aria-label="Scroll left"
      >
        ‹
      </button>
      <div
        className={styles.techScrollBar}
        ref={trackRef}
        tabIndex={0}
        aria-label="Technology filters"
      >
        {loopItems.map((tech, i) => {
          const isAll = tech === "__ALL__";
          const isActive =
            (isAll && !selectedFilter) || (!isAll && selectedFilter === tech);
          return (
            <span
              key={`${i}-${tech}`}
              className={`${styles.techScrollItem} ${
                isActive ? styles.active : ""
              }`}
              onClick={() =>
                onSelect(isAll ? "" : selectedFilter === tech ? "" : tech)
              }
              role="button"
              aria-pressed={isActive}
              title={isAll ? "Show all" : `Filter by ${tech}`}
              data-tech={isAll ? "__ALL__" : tech}
            >
              {isAll ? "All" : tech}
            </span>
          );
        })}
      </div>
      <button
        className={styles.scrollArrow}
        onClick={() =>
          trackRef.current?.scrollBy({ left: ARROW_STEP, behavior: "smooth" })
        }
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
