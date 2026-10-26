## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

Keep page files focused on composition. Put every page section in its own Astro component under `src/components/sections/<page>/`; for example, home-page sections belong in `src/components/sections/home/` and are imported by `src/pages/index.astro`.

Use `src/components/layout/Container.astro` for the shared page width and horizontal gutters, and `src/components/layout/Section.astro` for the standard vertical section rhythm. Change recurring layout values in those components instead of repeating their utility classes across sections.

## Styling

Use Tailwind utility classes for layout, typography, colors, responsive states, and interactions. Do not add component-scoped `<style>` blocks or standalone CSS for styles Tailwind can express. Keep `src/styles/global.css` for Tailwind imports, design tokens, font declarations, and genuinely global rules only. Prefer Tailwind even for animations when practical.

Use semantic Tailwind `@theme` tokens for the project color palette and complete typography roles. Use Tailwind's standard utilities for containers, spacing, sizing, gaps, and radii instead of creating aliases for standard values. Keep one-off complex layout calculations local to the component and express fixed values in rem. Do not place raw hex colors, pixel values, or arbitrary typography values in component class lists.

Define each typography role as one complete Tailwind font-size token with its associated line-height, letter-spacing, and font-weight variables, so components can use a single class such as `text-h1`, `text-h2`, or `text-body`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
