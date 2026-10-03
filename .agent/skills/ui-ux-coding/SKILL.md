---
name: ui-ux-coding
description: "Use when building or fixing frontend UI/UX in React/Vite/Tailwind apps. Covers product analysis, component design, implementation, accessibility, and validation before shipping."
---

# ui-ux-coding

Practical skill for turning product goals into polished frontend code. Use this for landing pages, dashboards, marketing sites, and interface improvements that need both visual quality and implementation discipline.

## Core workflow

### 1. Define the user outcome

Before writing code, identify:
- product type: landing page, dashboard, ecommerce, SaaS, portfolio, app shell
- primary user action: book, explore, buy, sign up, contact, compare
- brand tone: minimal, premium, playful, bold, corporate, editorial
- technical context: React, Vite, Tailwind, Radix, shadcn-like patterns

If the request is vague, ask a few clarifying questions before implementing.

### 2. Inspect the existing codebase

Review the current app structure and patterns before editing:
- look for shared components and styling conventions
- locate layouts, sections, and navigation structure
- identify whether the app already uses utility classes, theme tokens, or design-system patterns
- avoid duplicating patterns already present in the repo

For this project specifically, prefer existing React + Vite conventions and Tailwind-based utility styling.

### 3. Plan the UI structure

Design the view around clear hierarchy:
- hero with clear message and CTA
- supporting content blocks with scannable spacing
- trust signals, proof, and benefits
- reusable cards, buttons, badges, and sections
- mobile-first layout with responsive breakpoints

Keep structure simple and avoid visual noise. Strong interfaces usually have fewer, more intentional elements.

### 4. Implement in code

When building UI:
- use semantic HTML and accessible control states
- prefer utility-first classes and shared component composition
- maintain consistent spacing, alignment, and typography
- ensure hover, focus, and active states feel intentional
- avoid layout shifts caused by transforms or unstable sizing
- use SVG icons instead of emoji-based UI
- add `cursor-pointer` to clickable elements
- maintain consistent color contrast in light and dark modes

Use small, reusable components instead of one-off markup whenever possible.

### 5. Apply UX quality standards

Keep the interface polished by following these rules:
- no emoji as UI icons
- hover states should provide clear feedback without shifting layout
- transitions should be smooth and brief
- cards and buttons should have consistent shadows, radii, and borders
- fixed navbars must not hide content
- mobile layouts should not create horizontal overflow
- forms should have labels, clear state messaging, and visible focus rings

### 6. Validate the implementation

Before finishing a UI task, run the relevant verification:

```bash
npm run build
```

For visual verification during development:

```bash
npm run dev
```

Check:
- layout at common breakpoints
- contrast and legibility in light mode
- focus states and keyboard navigation
- page flow and CTA prominence
- no obvious console errors or broken imports

### 7. Final quality gate

Before delivery, confirm:
- [ ] the feature matches the requested product goal
- [ ] spacing and hierarchy are consistent
- [ ] the interface is responsive and accessible
- [ ] text contrast is readable in both modes
- [ ] all interactivity has clear states
- [ ] build passes without errors

## Default implementation style for this repo

This workspace is a React + Vite app, so prefer:
- component-driven structure
- Tailwind utility classes
- consistent design tokens and spacing scale
- polished CTA patterns and marketing section layouts
- accessible interaction states and semantic structure

## Example prompts

- “Build a premium SaaS landing page for an AI product company”
- “Improve this hero section to feel more modern and conversion-focused”
- “Add a pricing section with better hierarchy and responsiveness”
- “Refactor this dashboard card layout to be more polished and accessible”
- “Fix the mobile layout issues in the current homepage”

## Quick rule of thumb

Design first, then implement, then validate. UI quality is not only visual—it is also maintainable, accessible, responsive, and production-ready.
