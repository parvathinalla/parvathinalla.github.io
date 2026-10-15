# Test report — October 15, 2026

## Verified

- Four HTML pages created: homepage and three project case studies.
- HTML references: 76 href/src references inspected across pages; all local paths and section targets resolve.
- All pages have exactly one H1, description and viewport tags.
- Project images include alt text.
- CSS parsed successfully with `tinycss2` (204 top-level rules; 0 syntax errors).
- JS passed `node --check`.
- General PDF resume compiles to 1 page, with selectable text and generic document metadata.
- No third-party scripts or analytics.
- GitHub Pages subpath-safe relative links used throughout the site.

## Not verified

- External GitHub repositories verified active: Goodwill Atlas, PointLab (Release v0.2.0 live), and Distributed Social Platform (reddit_gleam).
- Pre-deployment checks passed for GitHub Pages on `parvathinalla.github.io`.

These limitations are intentional disclosures, not claims that the site is defective.
