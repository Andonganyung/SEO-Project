# SEO & SMO Setup Guide

## 🎯 Overview

This guide explains how to configure and optimize your social media SEO website for maximum visibility on Google and social media platforms.

## 📋 Quick Start Checklist

- [ ] Update environment variables with your information
- [ ] Add Google Analytics ID
- [ ] Replace social media URLs with your actual profiles
- [ ] Update business information (name, location, contact)
- [ ] Add Open Graph images
- [ ] Submit sitemap to Google Search Console
- [ ] Verify ownership in Google Search Console
- [ ] Test all social sharing buttons

---

## 1️⃣ Configure Environment Variables

### Step 1: Create `.env.local` file

Copy the example file and fill in your details:

```bash
cp .env.local.example .env.local
```

### Step 2: Update Configuration

Edit `.env.local` with your actual information:

```env
# Website Information
NEXT_PUBLIC_SITE_NAME="Your Actual Business Name"
NEXT_PUBLIC_SITE_URL="https://youractualdomain.com"
NEXT_PUBLIC_SITE_DESCRIPTION="Your business description for SEO"

# Business Information
NEXT_PUBLIC_BUSINESS_NAME="Your Business Name"
NEXT_PUBLIC_BUSINESS_PHONE="+1-555-123-4567"
NEXT_PUBLIC_BUSINESS_EMAIL="info@yourbusiness.com"
NEXT_PUBLIC_BUSINESS_ADDRESS_STREET="123 Main Street"
NEXT_PUBLIC_BUSINESS_ADDRESS_CITY="New York"
NEXT_PUBLIC_BUSINESS_ADDRESS_STATE="NY"
NEXT_PUBLIC_BUSINESS_ADDRESS_ZIP="10001"

# Social Media Links (replace with your actual URLs)
NEXT_PUBLIC_FACEBOOK_URL="https://facebook.com/yourpage"
NEXT_PUBLIC_INSTAGRAM_URL="https://instagram.com/yourpage"
NEXT_PUBLIC_TWITTER_URL="https://twitter.com/yourpage"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/company/yourpage"
NEXT_PUBLIC_YOUTUBE_URL="https://youtube.com/@yourpage"
NEXT_PUBLIC_TIKTOK_URL="https://tiktok.com/@yourpage"
NEXT_PUBLIC_PINTEREST_URL="https://pinterest.com/yourpage"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### Alternative: Update `src/config/seo.ts` directly

If you don't want to use environment variables, you can edit the default values in `src/config/seo.ts`.

---

## 2️⃣ Set Up Google Analytics 4

### Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property (or use existing)
3. Click "Data Streams" → Select your stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Add to Your Site

Update `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

The Analytics component is already integrated in `layout.tsx` and will automatically start tracking once you add the ID.

---

## 3️⃣ Set Up Google Search Console

### Verify Your Website

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain
4. Choose verification method:
   - **HTML meta tag** (recommended for Next.js)
   - DNS verification
   - HTML file upload

### For Meta Tag Verification:

1. Copy the verification code from Google
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code"
```

The code is automatically added to your site's `<head>` via `layout.tsx`.

### Submit Your Sitemap

1. After verification, go to "Sitemaps" in Search Console
2. Submit: `https://yourdomain.com/sitemap.xml`
3. Google will automatically crawl your site

---

## 4️⃣ Optimize Social Media Integration

### Update Social Links

Replace placeholder URLs with your actual social media profiles in `.env.local` or `src/config/seo.ts`.

### Verify Social Links Work

Check that all social icons in the footer link to your profiles:
- Facebook
- Instagram
- Twitter/X
- LinkedIn
- YouTube
- TikTok
- Pinterest

---

## 5️⃣ Add Open Graph Images

### Create Social Share Images

Recommended sizes:
- **Open Graph**: 1200x630px (PNG or JPG)
- **Twitter Card**: 1200x600px

### Add Images

1. Create `public/images/` folder if it doesn't exist
2. Add your images:
   - `public/images/og-default.jpg` - Default share image
   - `public/logo.png` - Your logo (for Schema markup)

3. Update `.env.local`:
```env
NEXT_PUBLIC_OG_IMAGE="/images/og-default.jpg"
```

### Page-Specific Images

You can add unique images per page by adding to the metadata:

```typescript
export const metadata: Metadata = {
  openGraph: {
    images: ['/images/services-og.jpg'],
  },
};
```

---

## 6️⃣ Optimize robots.txt

The `robots.txt` is automatically generated at `/robots.ts`. It's configured to:
- Allow all search engines
- Reference your sitemap

**No action needed** - it's already optimized!

---

## 7️⃣ Schema.org Structured Data

### What's Already Configured

The site includes JSON-LD schema for:

✅ **Organization Schema** - Business information  
✅ **WebSite Schema** - Site search capability  
✅ **FAQ Schema** - Services page  
✅ **Social Profiles** - Linked to your accounts

### Verify Your Schema

1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL
3. Check for any errors or warnings

---

## 8️⃣ SEO Best Practices Checklist

### Content Optimization

- [ ] Every page has a unique H1 tag
- [ ] Meta descriptions are 150-160 characters
- [ ] Title tags are 50-60 characters
- [ ] Images have descriptive alt text
- [ ] Internal links between pages
- [ ] Mobile-responsive design ✅ (already done)

### Technical SEO

- [x] HTTPS enabled (ensure your hosting supports SSL)
- [x] Sitemap generated and submitted
- [x] Robots.txt configured
- [x] Canonical URLs set
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org markup

### Performance

- [ ] Images compressed (recommended: use WebP format)
- [ ] Enable caching on your hosting
- [ ] Consider using a CDN for static assets
- [x] Lazy loading images (built into Next.js)

---

## 9️⃣ Social Media SEO Tips

### For Your Customer

Explain that **Google SEO and Social Media ranking are separate**:

#### Google SEO (What we built):
✅ Optimizes your **website** to rank on Google  
✅ Proper meta tags, schema markup, sitemap  
✅ Social links from your site help Google trust  

#### Social Media SEO (What customer needs to do):
📱 Post regularly on each platform  
🏷️ Use platform-specific hashtags and keywords  
💬 Engage with followers  
📊 Use each platform's analytics  

### Platform-Specific SEO

**Instagram:**
- Optimize bio keywords
- Use 5-10 relevant hashtags per post
- Add alt text to images
- Use location tags

**LinkedIn:**
- Complete 100% of profile
- Use industry keywords in headline
- Publish articles with SEO titles
- Engage with industry hashtags

**TikTok:**
- Use trending sounds
- Add keywords to video captions
- Use 3-5 hashtags
- Engage in first hour

**YouTube:**
- Keyword-rich titles & descriptions
- Add tags (10-15 per video)
- Create playlists
- Add timestamps

---

## 🔟 Testing & Validation

### Test Your SEO

Run these checks before going live:

1. **Google Rich Results Test**  
   https://search.google.com/test/rich-results

2. **Facebook Sharing Debugger**  
   https://developers.facebook.com/tools/debug/

3. **Twitter Card Validator**  
   https://cards-dev.twitter.com/validator

4. **LinkedIn Post Inspector**  
   https://www.linkedin.com/post-inspector/

5. **PageSpeed Insights**  
   https://pagespeed.web.dev/

### Build & Deploy

```bash
# Test build locally
npm run build

# Run production server
npm run start

# Check for errors
npm run lint
```

---

## 📞 Customer Onboarding

### What to Send Your Customer

1. **Access to `.env.local` file** - Ask them to fill in:
   - Social media URLs
   - Business contact info
   - Google Analytics ID (help them set up if needed)

2. **Google Search Console Setup** - Guide them through:
   - Creating an account
   - Verifying the domain
   - Submitting the sitemap

3. **Social Media Strategy Doc** - Explain:
   - How SEO differs from social ranking
   - Platform-specific SEO tips (see section 9)
   - Posting frequency recommendations
   - Hashtag research tools (Hashtagify, RiteTag, etc.)

---

## 🚀 Next Steps After Launch

### Week 1
- [ ] Verify Google Analytics is tracking
- [ ] Check Google Search Console for indexing
- [ ] Test all social sharing buttons
- [ ] Submit to Bing Webmaster Tools

### Month 1
- [ ] Review Analytics data
- [ ] Check Search Console performance
- [ ] Update content based on search queries
- [ ] A/B test meta descriptions

### Ongoing
- [ ] Monthly SEO audits
- [ ] Update content regularly
- [ ] Monitor social media growth
- [ ] Track competitors

---

## 🛠️ Maintenance

### Regular Updates

**Monthly:**
- Review Google Analytics
- Check Search Console for errors
- Update sitemap if you add pages

**Quarterly:**
- Audit Schema markup
- Review and update keywords
- Check for broken links
- Update social media links

---

## 📚 Additional Resources

### SEO Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Ahrefs](https://ahrefs.com/) - Keyword research (paid)
- [SEMrush](https://semrush.com/) - SEO audit (paid)
- [Screaming Frog](https://www.screamingfrogseotool.com/) - Site crawler

### Social Media SEO Tools

- [Hashtagify](https://hashtagify.me/) - Hashtag research
- [BuzzSumo](https://buzzsumo.com/) - Content research
- [Later](https://later.com/) - Instagram hashtag analytics
- [TubeBuddy](https://tubebuddy.com/) - YouTube SEO

### Learning Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Schema.org Documentation](https://schema.org/)

---

## 💡 Support & Questions

If you need help with implementation:

1. Check this guide first
2. Review the code comments in `src/config/seo.ts`
3. Test using the validation tools in section 10
4. Check Next.js SEO documentation: https://nextjs.org/learn/seo/introduction-to-seo

---

## ✅ Final Checklist

Before delivering to customer:

- [ ] All environment variables documented
- [ ] Google Analytics setup instructions provided
- [ ] Social media URLs placeholder clearly marked
- [ ] Search Console setup guide included
- [ ] Schema markup validated
- [ ] Open Graph images created
- [ ] Build tested successfully
- [ ] All pages load without errors
- [ ] Mobile responsiveness verified
- [ ] Social sharing buttons tested

---

**Last Updated:** March 2026  
**Version:** 1.0
