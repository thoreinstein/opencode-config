---
name: seo
description: "Audit and implement SEO optimizations for specified pages or entire site. Use when adding meta tags, structured data, improving Core Web Vitals, fixing crawlability issues, or running a full SEO audit on a web project."
---

# SEO Optimization

Audit the current SEO state of `$ARGUMENTS` (or entire site if not specified), then implement targeted fixes across technical, performance, and content dimensions.

## Workflow

### Step 1: Audit Current State

Scan the target for existing SEO setup before making changes:

```bash
# Find pages missing meta descriptions
grep -rL '<meta name="description"' src/ --include="*.html" --include="*.tsx" --include="*.jsx"

# Check for existing structured data
grep -r 'application/ld+json' src/ --include="*.html" --include="*.tsx" --include="*.jsx"

# Verify robots.txt and sitemap exist
ls -la public/robots.txt public/sitemap.xml 2>/dev/null || echo "Missing robots.txt or sitemap.xml"

# Check heading hierarchy
grep -rn '<h[1-6]' src/ --include="*.html" --include="*.tsx" --include="*.jsx" | head -20
```

Record findings before implementing changes.

### Step 2: Technical SEO Fixes

Apply fixes in priority order:

1. **Meta tags** — Add/optimize `<title>` and `<meta name="description">` for each page. Keep titles under 60 chars, descriptions under 160 chars.
2. **Structured data** — Add JSON-LD schema markup matching page content type (Article, Product, FAQ, etc.).
3. **Crawlability** — Create or update `robots.txt` and `sitemap.xml`. Set canonical URLs on all pages.
4. **Social tags** — Add Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags.
5. **Heading hierarchy** — Ensure single `<h1>` per page with logical `<h2>`–`<h6>` nesting.

Example structured data for an article page:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Page Title Here",
  "author": { "@type": "Person", "name": "Author Name" },
  "datePublished": "2024-01-15"
}
```

### Step 3: Performance SEO

1. **Core Web Vitals** — Measure LCP, FID/INP, CLS. Target LCP < 2.5s, INP < 200ms, CLS < 0.1.
2. **Images** — Add `loading="lazy"`, use WebP/AVIF formats, include `width`/`height` attributes to prevent layout shift.
3. **Bundle size** — Minimize JS/CSS. Check for unused imports and dead code.
4. **Caching** — Set appropriate `Cache-Control` headers for static assets.

### Step 4: Content & Accessibility SEO

1. **Alt text** — Add descriptive `alt` attributes to all `<img>` elements.
2. **Internal linking** — Identify orphan pages and add contextual internal links.
3. **Semantic HTML** — Replace generic `<div>` wrappers with `<main>`, `<article>`, `<nav>`, `<section>` where appropriate.
4. **ARIA labels** — Add `aria-label` or `aria-labelledby` to interactive elements missing visible labels.

### Step 5: Validate Changes

```bash
# Verify no duplicate meta descriptions
grep -rn '<meta name="description"' src/ --include="*.html" --include="*.tsx" --include="*.jsx" | sort

# Validate JSON-LD syntax
node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('path/to/schema.json','utf8'))"

# Run Lighthouse audit if available
npx lighthouse http://localhost:3000 --only-categories=seo,performance --output=json --quiet
```

### Step 6: Document Changes

Write an SEO audit summary to `docs/tasks/frontend/DD-MM-YYYY/<semantic-seo-id>/README.md` covering:
- Before/after findings for each area (meta tags, structured data, Core Web Vitals, accessibility)
- Implementation decisions and trade-offs
- Remaining items for follow-up

$ARGUMENTS
