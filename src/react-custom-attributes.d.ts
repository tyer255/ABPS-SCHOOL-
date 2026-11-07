import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    shown?: string;
    updated?: string;
    initialized?: string;
  }
}
