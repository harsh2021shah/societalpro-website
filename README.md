# SocietalPro Website Frontend

> **"Honest societies build an honest country. We start with yours."**  
> **Brand line:** *Honest societies. Honest country.*  
> **Product copy:** *Nothing hidden. Everything sorted.*

---

## 🌟 About SocietalPro

**SocietalPro** is an AI-assisted society management platform with a civic purpose. Built for housing societies, apartment associations, and gated communities that value accountability and radical transparency.

It puts every payment, decision, and action on record so that nothing is hidden and trust doesn't depend on any single person.

---

## 📄 Website Pages & Structure

1. **[Home (`index.html`)](./index.html)**:
   - High-impact hero section showcasing the core brand statement.
   - Grassroots transparency statistics (100% on-record ledger, zero unaccounted funds, 24/7 democratic resolution voting).
   - Core platform pillars overview.
   - Subscription tier preview with transparent pricing.
   - Frequently asked questions and CTA leading to the web application.

2. **[About Us & Manifesto (`about.html`)](./about.html)**:
   - Full SocietalPro founding manifesto.
   - Mission: *"To help every housing society run in the open, so transparency becomes an everyday habit."*
   - Vision: *"A country where people grew up expecting openness, because they lived it in their own society first."*
   - Two layers of brand messaging (Inspiring, never accusing & Only claims we can demonstrate).

3. **[Platform Features (`services.html`)](./services.html)**:
   - Detailed breakdown of platform capabilities:
     1. 100% Verifiable Financial Ledger (*Every payment carries a note. Every action is logged.*)
     2. AI Voice & Text Broadcast engine (multilingual phone alerts & WhatsApp messages).
     3. Democratic Resolution Voting & Tamper-proof digital polls.
     4. Vendor Tendering & Milestone Payout Approvals.
     5. Automated Maintenance Dues & Instant Receipts.
     6. Dispute-Free Committee Handover & Historical Records Archive.

4. **[Pricing Plans (`pricing.html`)](./pricing.html)**:
   - Dedicated pricing page featuring the full subscription tier structure:
     - **Small Tier** (< 100 Residents): $99 Setup Fee (One-time) | $49 / month | 50,000 Monthly Text Credits | 5,000 Monthly Voice Credits
     - **Medium Tier** (100 – 500 Residents) [Most Popular]: $199 Setup Fee (One-time) | $79 / month | 100,000 Monthly Text Credits | 10,000 Monthly Voice Credits
     - **Large Tier** (> 500 Residents): $399 Setup Fee (One-time) | $129 / month | 200,000 Monthly Text Credits | 50,000 Monthly Voice Credits
   - Complete side-by-side feature comparison table.
   - Explanation of Monthly Text & Voice credits.
   - Pricing & onboarding FAQs.

5. **[FAQ's (`faqs.html`)](./faqs.html)**:
   - In-depth answers regarding transparency mechanisms, fraud prevention, spreadsheet migration, elder-friendly accessibility, data ownership, and committee transitions.

6. **[Contact Us (`contact.html`)](./contact.html)**:
   - Direct support email: `support@societalpro.com`
   - WhatsApp number: `+91 74000 43868` (with one-click chat link: `https://wa.me/917400043868`)
   - Interactive inquiry form for managing committees.

7. **Blog Integration**:
   - Points directly to the external Google Blogger subdomain: `https://blog.societalpro.com`

8. **CTAs**:
   - All primary action buttons across the entire website direct users to `https://app.societalpro.com`.

---

## 🚀 GitHub Pages & Custom Domain Setup

1. Push this repository to GitHub.
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Source** as `Deploy from a branch`.
   - Choose `main` (or `master`) branch and `/ (root)` folder, then click **Save**.
3. A `CNAME` file with `societalpro.com` is already included in the root directory.
4. In your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.):
   - Point your Apex domain (`societalpro.com`) to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record for `www` pointing to `<username>.github.io`.
   - Enable **Enforce HTTPS** in GitHub Pages settings.
