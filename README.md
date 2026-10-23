# Just Video — Website

Camera rental and post-production site for Just Video Broadcast Pvt Ltd / Origin Picture Studioz, Mumbai.
Plain HTML, CSS and JavaScript. No build step, no installs.

## Run it
Double-click `index.html`, or host the whole folder on any static host (Netlify, Vercel, GitHub Pages, cPanel).

## Files
| File | What it does |
|---|---|
| `index.html` | Page shell: header, footer, WhatsApp button |
| `style.css` | All styling (dark theme, red/navy brand colours) |
| `features.js` | Content and page templates: categories, videos, services, rental items |
| `main.js` | Router, enquiry form (opens email), hide-on-scroll header |
| `assets/logo.png`, `assets/hero.mp4` | Logo and homepage background video |

## Pages
Home, Services, Rentals, Work categories (4), Video pages (12), Contact, Privacy, Terms.

## Common edits
- **Add a YouTube video:** in `features.js`, put the video ID in the `YT` object, e.g. `"feature-film-showreel":"VIDEO_ID"`.
- **Change services / rental items:** edit the `services` and `items` arrays in `features.js`.
- **Phone / email / address:** edit `index.html` footer and the `contact` template in `features.js`.
- **Brand colours:** CSS variables at the top of `style.css`.

## Before going live
- Replace the placeholder camera and lens names in `items` with real models.
- Have the Privacy and Terms text reviewed (marked as drafts).
- The enquiry form opens the visitor's email app. For a real form backend, connect Formspree or similar.
