# Quick Start Guide - SEO Configuration

## 🚀 5-Minute Setup

### Step 1: Update Social Media Links

Edit `src/config/seo.ts` and replace these URLs with your customer's actual profiles:

```typescript
socialLinks: {
  facebook: "https://facebook.com/CUSTOMER_PAGE",
  instagram: "https://instagram.com/CUSTOMER_PAGE",
  twitter: "https://twitter.com/CUSTOMER_PAGE",
  linkedin: "https://linkedin.com/company/CUSTOMER_PAGE",
  youtube: "https://youtube.com/@CUSTOMER_PAGE",
  tiktok: "https://tiktok.com/@CUSTOMER_PAGE",
  pinterest: "https://pinterest.com/CUSTOMER_PAGE",
}
```

### Step 2: Update Business Info

Still in `src/config/seo.ts`:

```typescript
siteName: "Customer Business Name",
siteUrl: "https://customerdomain.com",
businessEmail: "customer@email.com",
```

### Step 3: Add Google Analytics (When Ready)

Create `.env.local` file:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### Step 4: Build & Test

```bash
npm run build
npm run start
```

### Step 5: Deploy

Once everything looks good, deploy to your hosting platform (Vercel, Netlify, etc.)

---

## 📝 What's Included

✅ **SEO Optimized**
- Meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (Schema.org JSON-LD)
- Sitemap (auto-generated)
- Robots.txt (auto-generated)

✅ **Social Media Integration**
- Footer with social media icons
- Links to all major platforms
- Social sharing buttons component (ready to use)
- Proper social meta tags

✅ **Analytics Ready**
- Google Analytics 4 component
- Facebook Pixel support (optional)
- Event tracking on social shares

✅ **Performance**
- Next.js optimizations
- Image lazy loading
- Minified CSS/JS

---

## 🔍 Google Search Console Setup

After deployment:

1. Go to https://search.google.com/search-console
2. Add property with your domain
3. Verify ownership (use HTML meta tag method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## 📱 Social Media Platform Links

Make sure all URLs follow this format:

| Platform | URL Format |
|----------|-----------|
| Facebook | `https://facebook.com/pagename` |
| Instagram | `https://instagram.com/username` |
| Twitter/X | `https://twitter.com/username` |
| LinkedIn | `https://linkedin.com/company/companyname` |
| YouTube | `https://youtube.com/@channelname` |
| TikTok | `https://tiktok.com/@username` |
| Pinterest | `https://pinterest.com/username` |

---

## ❓ FAQ

**Q: Do I need to update all social media links?**  
A: No, only update the ones your customer actually uses. The rest can stay as placeholders or be removed.

**Q: When do I need Google Analytics?**  
A: You can add it anytime. The site works fine without it, but you won't get traffic analytics.

**Q: What if my customer doesn't have a physical address?**  
A: Leave the address fields empty in `src/config/seo.ts`. The Schema markup will work without it.

**Q: Can I test SEO before deploying?**  
A: Yes! Use these tools:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Debugger: https://developers.facebook.com/tools/debug/

---

## 📞 Support

For full documentation, see: `SEO-SETUP-GUIDE.md`
