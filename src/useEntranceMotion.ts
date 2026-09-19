import { useEffect } from 'react';

/** A single, progressively-enhanced reveal system for the whole page. */
export function useEntranceMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    const groups = [...document.querySelectorAll<HTMLElement>('[data-motion-group]')];
    const reveal = (group: HTMLElement) => {
      if (group.dataset.visible === 'true') return;
      group.dataset.visible = 'true';
      group.querySelectorAll<HTMLElement>('[data-motion-item]').forEach((item, index) => {
        item.style.setProperty('--i', String(index));
      });
    };

    const observer = new IntersectionObserver(
      entries => entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => groups.indexOf(a.target as HTMLElement) - groups.indexOf(b.target as HTMLElement))
        .forEach(entry => {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }),
      { threshold: 0.08, rootMargin: '0px 0px -8%' },
    );

    root.dataset.motion = 'on';
    const firstFrame = requestAnimationFrame(() => {
      const secondFrame = requestAnimationFrame(() => groups.forEach(group => observer.observe(group)));
      root.dataset.motionFrame = String(secondFrame);
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      if (root.dataset.motionFrame) cancelAnimationFrame(Number(root.dataset.motionFrame));
      observer.disconnect();
      delete root.dataset.motion;
      delete root.dataset.motionFrame;
    };
  }, []);
}
