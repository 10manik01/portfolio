import { useSyncExternalStore } from 'react';

export type ThemeMode = 'light' | 'dark';

export const PORTFOLIO_THEME_STORAGE_KEY = 'theme-preference';
export const QUARTO_THEME_STORAGE_KEY = 'quarto-color-scheme';
export const THEME_CHANGE_EVENT = 'theme-change';

const themeListeners = new Set<() => void>();

let activeTheme: ThemeMode = 'light';
let hasInitializedTheme = false;
let hasAttachedStorageListener = false;

function safeLocalStorageGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeLocalStorageSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage write failures in restricted browser contexts.
  }
}

function prefersDarkMode() {
  try {
    return typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  } catch {
    return false;
  }
}

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function quartoValueToTheme(value: string | null): ThemeMode | null {
  if (value === 'alternate') return 'dark';
  if (value === 'default') return 'light';
  return null;
}

function themeToQuartoValue(theme: ThemeMode): 'default' | 'alternate' {
  return theme === 'dark' ? 'alternate' : 'default';
}

export function getPreferredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  const portfolioTheme = safeLocalStorageGet(PORTFOLIO_THEME_STORAGE_KEY);
  if (isThemeMode(portfolioTheme)) return portfolioTheme;

  const quartoTheme = quartoValueToTheme(safeLocalStorageGet(QUARTO_THEME_STORAGE_KEY));
  if (quartoTheme) return quartoTheme;

  return prefersDarkMode() ? 'dark' : 'light';
}

export function persistTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;

  safeLocalStorageSet(PORTFOLIO_THEME_STORAGE_KEY, theme);
  safeLocalStorageSet(QUARTO_THEME_STORAGE_KEY, themeToQuartoValue(theme));
}

export function applyThemeToDocument(theme: ThemeMode) {
  if (typeof document === 'undefined') return;

  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function broadcastTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }));
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

function applyThemeState(theme: ThemeMode, shouldPersist = true) {
  activeTheme = theme;
  applyThemeToDocument(theme);

  if (shouldPersist) {
    persistTheme(theme);
  }

  broadcastTheme(theme);
  notifyThemeListeners();
}

function syncThemeFromStorage() {
  const nextTheme = getPreferredTheme();

  if (nextTheme === activeTheme) {
    applyThemeToDocument(nextTheme);
    return;
  }

  applyThemeState(nextTheme, false);
}

function handleStorage(event: StorageEvent) {
  if (
    event.key !== PORTFOLIO_THEME_STORAGE_KEY &&
    event.key !== QUARTO_THEME_STORAGE_KEY
  ) {
    return;
  }

  syncThemeFromStorage();
}

function initializeThemeState() {
  if (typeof window === 'undefined') return;

  if (!hasInitializedTheme) {
    activeTheme = getPreferredTheme();
    hasInitializedTheme = true;
  }
}

function attachStorageListener() {
  if (typeof window === 'undefined') return;

  if (!hasAttachedStorageListener) {
    window.addEventListener('storage', handleStorage);
    hasAttachedStorageListener = true;
  }
}

function getThemeSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  initializeThemeState();
  return activeTheme;
}

export function initializeTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  initializeThemeState();
  attachStorageListener();
  applyThemeToDocument(activeTheme);
  persistTheme(activeTheme);
  return activeTheme;
}

export function setTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;

  initializeThemeState();
  attachStorageListener();

  if (theme === activeTheme) {
    applyThemeToDocument(theme);
    persistTheme(theme);
    return;
  }

  applyThemeState(theme);
}

export function toggleTheme() {
  setTheme(getThemeSnapshot() === 'dark' ? 'light' : 'dark');
}

function subscribeToTheme(listener: () => void) {
  initializeThemeState();
  attachStorageListener();
  themeListeners.add(listener);

  return () => {
    themeListeners.delete(listener);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => 'light');

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
