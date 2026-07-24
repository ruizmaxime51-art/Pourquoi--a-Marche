'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const recipeLinks = [
  { href: '/recettes', label: 'Toutes les recettes', strong: true },
  { href: '/cosmetique', label: 'Cosmétique' },
  { href: '/entretien', label: 'Entretien' },
  { href: '/conservation', label: 'Conservation' },
  { href: '/fermentation', label: 'Fermentation' },
];

const mainLinks = [
  { href: '/comprendre', label: 'Comprendre', strong: true },
  { href: '/outils', label: 'Outils' },
  { href: '/bien-sequiper', label: 'Bien s’équiper', strong: true },
  { href: '/a-propos', label: 'À propos' },
];

export default function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  const renderLink = ({ href, label, strong }) => (
    <Link
      key={href}
      href={href}
      className={isActive(href) ? 'is-current' : undefined}
      aria-current={isActive(href) ? 'page' : undefined}
      tabIndex={open ? 0 : -1}
      onClick={() => closeMenu(false)}
    >
      {strong ? <strong>{label}</strong> : label}
    </Link>
  );

  return (
    <div className={`mobile-nav${open ? ' is-open' : ''}`}>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav-trigger"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span>Menu</span>
        <span className="mobile-nav-trigger-icon" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="mobile-nav-backdrop"
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        onClick={() => closeMenu(true)}
      />

      <nav
        id="mobile-navigation-panel"
        className="mobile-nav-panel"
        aria-label="Navigation mobile"
        aria-hidden={!open}
      >
        <div className="mobile-nav-panel-head">
          <span>Navigation</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fermer le menu"
            tabIndex={open ? 0 : -1}
            onClick={() => closeMenu(true)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mobile-nav-group">
          <span className="mobile-nav-group-label">Recettes</span>
          {recipeLinks.map(renderLink)}
        </div>

        <div className="mobile-nav-group mobile-nav-group-main">
          {mainLinks.map(renderLink)}
        </div>
      </nav>
    </div>
  );
}
