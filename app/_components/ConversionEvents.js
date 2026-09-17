'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// Option Pro/Enterprise seulement. Aucun texte saisi, query string, email ou identifiant.
// Les liens restent directs et fonctionnels si le suivi est indisponible.
export default function ConversionEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[data-cm-event]') : null;
      if (!link || !['affiliate_click', 'journey_click', 'equipment_guide_click'].includes(link.dataset.cmEvent)) return;
      const target = link.dataset.cmTarget || '';
      if (!/^[a-z0-9-]{1,90}$/.test(target)) return;
      try { track(link.dataset.cmEvent, { page: window.location.pathname, target }); } catch { /* Navigation indépendante du suivi. */ }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
