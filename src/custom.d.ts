declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

// Allow importing raw CSS as side-effect in TypeScript projects without CSS modules
interface ImportMeta {
  readonly env: Record<string, any>;
}

export {};
