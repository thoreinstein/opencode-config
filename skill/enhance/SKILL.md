---
name: enhance
description: "Audit and enhance frontend UI to pixel-perfect standards with consistent design tokens, mobile responsiveness, and accessibility. Use when fixing visual inconsistencies, establishing a design system, improving responsive behavior, or polishing component states across a web project."
---

# Frontend Enhancement

Audit and improve the frontend of `$ARGUMENTS` (or entire project if not specified) across spacing, color, typography, responsiveness, and accessibility.

## Workflow

### Step 1: Audit Current State

Scan the codebase for inconsistencies before making changes:

```bash
# Extract all unique color values from CSS/SCSS
grep -rhoP '#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsl\([^)]+\)' src/ --include="*.css" --include="*.scss" --include="*.tsx" | sort -u

# Find hardcoded spacing values (not using design tokens)
grep -rn 'margin:\|padding:' src/ --include="*.css" --include="*.scss" | grep -v 'var(--' | head -20

# Check for missing responsive breakpoints
grep -rn '@media' src/ --include="*.css" --include="*.scss" | head -20

# Find images missing alt text
grep -rn '<img' src/ --include="*.tsx" --include="*.jsx" --include="*.html" | grep -v 'alt=' | head -10
```

Record the audit findings as the baseline.

### Step 2: Establish Design Tokens

Create or update CSS custom properties for consistency:

```css
:root {
  /* Spacing scale (8px grid) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 1rem;     /* 16px */
  --space-4: 1.5rem;   /* 24px */
  --space-6: 3rem;     /* 48px */

  /* Typography scale */
  --text-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
  --text-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
  --text-lg: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
  --text-xl: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);

  /* Color palette — adjust to project */
  --color-primary: #2563eb;
  --color-error: #dc2626;
  --color-success: #16a34a;
}
```

Replace hardcoded values throughout the codebase with token references.

### Step 3: Fix Spacing & Alignment

1. **Grid system** — Align all elements to an 8px grid. Replace arbitrary margins/padding with spacing tokens.
2. **Visual hierarchy** — Ensure consistent vertical rhythm between sections, headings, and body content.
3. **Component alignment** — Verify cards, buttons, and form elements align on a shared grid.

### Step 4: Typography & Color Consistency

1. **Typography** — Limit to 2–3 font families. Apply the typographic scale from design tokens. Set body line-height to 1.5–1.7.
2. **Color audit** — Replace one-off color values with palette tokens. Validate contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text).
3. **Semantic colors** — Map colors to purpose: primary actions, error states, success feedback, warning indicators.

### Step 5: Mobile Responsiveness

1. **Breakpoints** — Use consistent breakpoints (e.g., 640px, 768px, 1024px, 1280px). Apply mobile-first `min-width` media queries.
2. **Touch targets** — Ensure interactive elements are at least 44×44px on mobile.
3. **Fluid typography** — Use `clamp()` for font sizes that scale between breakpoints.
4. **Test** — Verify layout at 320px, 768px, 1024px, and 1440px widths.

### Step 6: Component States & Accessibility

1. **Interactive states** — Add hover, focus, active, and disabled styles to all buttons, links, and form inputs.
2. **Focus indicators** — Ensure visible focus rings (minimum 2px outline) for keyboard navigation.
3. **Loading/error states** — Add skeleton loaders or spinners for async content. Design clear error messages with recovery actions.
4. **Semantic HTML** — Replace generic `<div>` wrappers with `<main>`, `<nav>`, `<section>`, `<article>` where appropriate.
5. **ARIA** — Add `aria-label` to icon-only buttons and `aria-live` to dynamic content regions.

### Step 7: Validate Changes

```bash
# Check contrast ratios (requires axe-core or similar)
npx @axe-core/cli http://localhost:3000 --rules color-contrast

# Verify no remaining hardcoded colors
grep -rn '#[0-9a-fA-F]\{3,8\}' src/ --include="*.css" --include="*.scss" | grep -v 'var(' | grep -v '//' | head -10

# Run Lighthouse accessibility audit
npx lighthouse http://localhost:3000 --only-categories=accessibility --output=json --quiet
```

### Step 8: Document Changes

Write enhancement summary to `docs/tasks/frontend/DD-MM-YYYY/<semantic-task-id>/README.md` covering:
- Before/after findings for each area (spacing, color, typography, responsiveness, accessibility)
- Design token definitions and usage guide
- Remaining items for follow-up

$ARGUMENTS
