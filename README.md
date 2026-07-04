# Varazi — Restaurant & Beer Garden Website

A clean, multi-page website for **Varazi**, the Georgian restaurant & beer garden in Tbilisi.
Built from the Varazi brand book and the Framer reference design — no Framer, no build step, no dependencies. Plain HTML, CSS and JavaScript that you fully own.

## Pages
- `index.html` — Home (hero, menu categories, signature dishes, gallery, story, testimonials, reservation CTA)
- `menu.html` — Full menu with category tabs (Appetizers, Salads, Soups, Georgian, Mangal, Fish, Pasta & Pizza, Desserts, Drinks)
- `about.html` — Story timeline (1995 → 2025), highlights, team
- `reservations.html` — Booking form + contact details
- `blog.html` — Journal / articles

## How to preview locally
Double-click `index.html` to open it in a browser — that's it.

For a proper local server (recommended, so all links behave):
```
cd "C:\Users\Erekle\Desktop\varazi restaurant website\website"
python -m http.server 5599
```
Then visit http://localhost:5599

## How to publish (free)
This is a static site, so it hosts anywhere for free:
- **Netlify** — drag the `website` folder onto https://app.netlify.com/drop
- **GitHub Pages** — push the folder to a repo and enable Pages
- **Cloudflare Pages / Vercel** — point them at the folder

## Brand
- **Colors:** forest green `#2A3F23` + gold `#D6CB9D` (from the brand book)
- **Fonts:** Playfair Display (display), Poppins (body), Noto Serif Georgian — loaded from Google Fonts
- **Logo:** inline SVG star mark + "VARAZI" wordmark (`.brand` in each page)

## Customising
- **Text & prices:** edit directly in the `.html` files.
- **Colors & spacing:** all design tokens live at the top of `assets/css/styles.css` (`:root`).
- **Photos:** optimised web copies live in `assets/img/`. Swap a file (keep the same name) or update the `src=""` in the HTML. Originals are in the project's `../images` folder.
- **Form / newsletter:** currently demo handlers in `assets/js/main.js`. To receive real bookings, connect the form to a service like Formspree, or your own backend.

## Notes
- The reservation and newsletter forms are front-end demos — they show a confirmation but don't send anywhere yet. Wire them up before going live.
- Team names, testimonials and blog posts are placeholders styled on-brand — replace with real content when ready.
