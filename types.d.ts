/// <reference path=".astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale: string
    theme: import("./lib/design/theme/types.d").Theme
  }
}
