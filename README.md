# Jack Scoular Portfolio

Static, multi-page portfolio for Jack Scoular (designer). Includes a hero overview, featured projects, full portfolio listing, individual case studies, and a collaborate/contact page.

## Overview
- **Pages**: `index.html` (home + featured projects), `about.html`, `portfolio.html`, `project-1.html` … `project-4.html`, `collaborate-contact.html`.
- **Styles/JS**: `styles.css` for theme/layout, responsive tweaks, and carousels; `main.js` for mobile nav toggle, dropdown behavior, reveal-on-scroll, and carousel controls.
- **Typography**: Playfair Display (headings), Inter (body), Space Grotesk (hero H1s) via Google Fonts.
- **Icons**: Font Awesome CDN for social and UI icons.
- **Media**: project/hero assets live in `media/`.

## Run locally
1. Clone or download the repo.
2. Open `index.html` (or any page) directly in your browser.  
   - Optional: start a local server with `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Quick customization
- Replace copy/images in the HTML pages.
- Swap project/hero images in `/media` and update `project-*.html` or `portfolio.html` copy.
- Adjust colors/typography tokens in `styles.css` under `:root`.
- Mobile nav and carousels rely on `main.js`; keep classes/structure (`has-dropdown`, `dropdown`, `project-carousel`) intact if you modify markup.

## License
Internal/portfolio use. Update if publishing publicly.
