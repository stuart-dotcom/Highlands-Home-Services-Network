# Highlands Home Services Network
### Contractor Lead Generation Website — Highlands County, Florida
**Operated by:** Obsidian Peak Holdings LLC  
**Website:** highlandshomeservicesnetwork.com  
**Last Updated:** March 2026

---

## Project Overview

Highlands Home Services Network is a hyperlocal contractor lead generation and referral service serving licensed tradespeople in Highlands County, FL. This repository contains the complete static website codebase including all HTML pages, CSS, JavaScript, sitemap, and robots.txt.

This is a **static website** — no backend, no database, no server-side code. It is deployable to GitHub Pages, Netlify, or any standard web host with zero configuration.

---

## File Structure

```
/
├── index.html              # Homepage — hero, trust badges, verticals, testimonials
├── hvac.html               # HVAC vertical — lead types, pricing, contractor application
├── how-it-works.html       # Full lead delivery process walkthrough
├── apply.html              # General contractor application form
├── get-service.html        # Homeowner-facing lead capture page
├── about.html              # About page — E-E-A-T, business identity, legal info
├── contact.html            # Contact form + NAP block
├── privacy.html            # Privacy Policy (noindex)
├── terms.html              # Terms of Use (noindex)
├── 404.html                # Custom 404 error page
├── styles.css              # Complete stylesheet — all variables, components, responsive
├── main.js                 # Navigation, FAQ accordion, waitlist forms, smooth scroll
├── sitemap.xml             # XML sitemap — all 9 URLs with priority and changefreq
├── robots.txt              # Crawl rules + sitemap reference
└── images/                 # (folder — not included, see Images section below)
```

---

## Brand & Design System

### Color Palette

| Name             | Hex       | Usage                                      |
|------------------|-----------|--------------------------------------------|
| Deep Lake Blue   | `#1B3A5C` | Nav, headers, footers, primary buttons     |
| Cypress Green    | `#2D6A4F` | Accent sections, badge backgrounds         |
| Florida Sunrise  | `#E07B39` | All CTAs, icons, hover states, highlights  |
| Limestone White  | `#F5F2ED` | Page backgrounds, card backgrounds         |
| Palmetto Charcoal| `#2C2C2C` | All body text                              |
| Sawgrass Tan     | `#C4A882` | Borders, dividers, form field borders      |

### Typography
- **Headings / Logo:** Montserrat ExtraBold (800) / Bold (700)
- **Body copy:** Inter Regular / Medium (400 / 500)
- Both fonts loaded via Google Fonts CDN

### CSS Custom Properties
All brand values are defined as CSS variables in `styles.css`:
```css
:root {
  --color-primary:    #1B3A5C;
  --color-secondary:  #2D6A4F;
  --color-accent:     #E07B39;
  --color-light:      #F5F2ED;
  --color-dark:       #2C2C2C;
  --color-muted:      #C4A882;
}
```

---

## Images Required

Create an `/images/` folder in the root and populate with the following assets:

### Logos (PNG)
| Filename               | Dimensions  | Usage                        |
|------------------------|-------------|------------------------------|
| `logo-light.png`       | 260 × 60px  | Nav bar — light backgrounds  |
| `logo-dark.png`        | 260 × 60px  | Footer — dark backgrounds    |
| `logo-icon.png`        | 32 × 32px   | Browser favicon              |
| `logo-apple-touch.png` | 180 × 180px | Apple touch / mobile icon    |

### Trust Badges (PNG) — Complete
| Filename               | Dimensions  | Label                        |
|------------------------|-------------|------------------------------|
| `badge-local.png`      | 200 × 200px | Highlands County Focused     |
| `badge-verified.png`   | 200 × 200px | Verified Leads               |
| `badge-exclusive.png`  | 200 × 200px | No Shared Leads              |
| `badge-licensed.png`   | 200 × 200px | Licensed Contractors Only    |

### Photography (JPG)
| Filename               | Dimensions    | Usage                              |
|------------------------|---------------|------------------------------------|
| `hero-homepage.jpg`    | 1600 × 900px  | Homepage hero background           |
| `hero-hvac.jpg`        | 1600 × 900px  | HVAC page hero background          |
| `bg-how-it-works.jpg`  | 1400 × 600px  | How It Works section background    |
| `bg-testimonials.jpg`  | 1400 × 500px  | Testimonials section background    |
| `contact-header.jpg`   | 1400 × 400px  | Contact page header banner         |
| `sebring-aerial.jpg`   | 800 × 600px   | Apply page sidebar + About page    |
| `lead-delivery.jpg`    | 800 × 600px   | HVAC page content image            |


---

## Before Going Live — Required Placeholders

Search every HTML file for `[INSERT ...]` and replace:

| Placeholder             | Replace With                                      |
|-------------------------|---------------------------------------------------|
| `[INSERT PHONE]`        | Business phone number e.g. `(863) 555-0100`       |
| `[INSERT EMAIL]`        | Business email address                            |
| `[INSERT HOURS]`        | Response hours e.g. `Mon–Fri 8am–6pm EST`         |
| `[INSERT FORM ENDPOINT]`| Formspree URL e.g. `https://formspree.io/f/xxxxx` |
| `[INSERT PRICING]`      | Per-lead price in `hvac.html`                     |
| `[INSERT DATE]`         | Date in `privacy.html` and `terms.html`           |
| `sameAs` array          | Add GBP, BBB, Yelp, Facebook, LinkedIn URLs       |

---

## Form Handling Setup (Formspree)

This site uses no backend. All forms must be connected to a third-party form processor.

**Recommended: Formspree (free tier)**
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form for each of the following:
   - Contractor application (used in `apply.html` and `hvac.html`)
   - Homeowner service request (used in `get-service.html`)
   - Contact form (used in `contact.html`)
3. Replace each `[INSERT FORM ENDPOINT]` with the corresponding Formspree URL
4. In Formspree dashboard, configure email notifications for each form

---

## Deployment — GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site will be live at: `https://[username].github.io/[repo-name]/`

### Custom Domain Setup
1. Add a file named `CNAME` to the root of this repository
2. File contents: `highlandshomeservicesnetwork.com`
3. In your domain registrar DNS settings, add:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
4. Wait 24–48 hours for DNS propagation

---

## SEO Configuration

- **Sitemap:** `/sitemap.xml` — submit to Google Search Console after launch
- **Robots:** `/robots.txt` — allows all crawlers, references sitemap
- **Schema:** LocalBusiness / ProfessionalService JSON-LD on every page
- **Canonical tags:** Set on every page
- **Open Graph + Twitter Card:** Configured on every page
- **`privacy.html` and `terms.html`:** Set to `noindex`

### After Launch Checklist
- [ ] Submit sitemap in Google Search Console
- [ ] Create Google Business Profile (Service Area Business — Highlands County)
- [ ] Create Yelp business listing
- [ ] Create Facebook Business Page
- [ ] Create LinkedIn Company Page
- [ ] Apply for BBB accreditation (Sebring chapter)
- [ ] Add all `sameAs` URLs to schema on every page
- [ ] Verify Florida SunBiz listing is public and matches site legal name
- [ ] Replace all `[INSERT ...]` placeholders
- [ ] Connect all forms to Formspree
- [ ] Add all 20 images to `/images/` folder
- [ ] Test all forms end-to-end
- [ ] Run Google PageSpeed Insights
- [ ] Test on mobile (iOS Safari + Android Chrome)

---

## Business Information

| Field              | Value                                         |
|--------------------|-----------------------------------------------|
| Legal Entity       | Obsidian Peak Holdings LLC                    |
| DBA                | Highlands Home Services Network               |
| State              | Florida                                       |
| Business Type      | Digital Lead Generation & Referral Service    |
| NAICS Code         | 519130 (Internet Publishing)                  |
| Service Area       | Highlands County, FL (Sebring, Avon Park, Lake Placid, Lorida, Venus) |
| Not a contractor   | This business does not perform trade services |

---

## License

Private — All Rights Reserved  
&copy; 2026 Obsidian Peak Holdings LLC. Unauthorized use, reproduction, or distribution of this codebase is prohibited.
