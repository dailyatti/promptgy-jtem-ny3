# đźš€ Netlify Deployment Guide

Simple step-by-step guide to deploy your Sports Betting Prompt Library to Netlify.

## đź“‹ Prerequisites

- GitHub account with the repository: `https://github.com/dailyatti/promptgy-jtem-ny3.git`
- Netlify account (free): `https://netlify.com`

## đźŽŻ Quick Deployment (Recommended)

### Method 1: Direct GitHub Integration

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com/
   - Sign in with your GitHub account

2. **Import from Git**
   - Click "Add new site" â†’ "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select repository: `dailyatti/promptgy-jtem-ny3`

3. **Deploy Settings**
   ```
   Branch to deploy: main
   Build command: (leave empty)
   Publish directory: . (root)
   ```

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live in 1-2 minutes!

### Method 2: Drag & Drop

1. **Download Repository**
   ```bash
   git clone https://github.com/dailyatti/promptgy-jtem-ny3.git
   cd promptgy-jtem-ny3
   ```

2. **Create ZIP File**
   - Select all files in the project folder
   - Create a ZIP archive

3. **Deploy to Netlify**
   - Go to https://app.netlify.com/drop
   - Drag and drop your ZIP file
   - Site will deploy automatically

## âš™ď¸Ź Configuration

### Environment Variables (Optional)
If you want to pre-configure API keys (not recommended for security):

1. Go to Site Settings â†’ Environment Variables
2. Add variables (optional):
   ```
   DEEPSEEK_API_KEY=your_key_here
   PERPLEXITY_API_KEY=your_key_here
   OPENAI_API_KEY=your_key_here
   ```

**Note:** The app is designed to work without these - users enter their own API keys.

### Custom Domain (Optional)
1. Go to Site Settings â†’ Domain Management
2. Add custom domain
3. Configure DNS settings as instructed

## đź”§ Build Settings

The project is configured for static deployment with these settings in `netlify.toml`:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## đźŚ Live Site Features

Once deployed, your site will have:

- âś… **Cherry-coded light theme** with animations
- âś… **Multi-AI provider integration** (OpenAI ChatGPT models)
- âś… **Professional betting analysis** with EV calculations
- âś… **Drag & drop image analysis**
- âś… **Secure API key management** (memory-only)
- âś… **Mobile-responsive design**
- âś… **HTTPS security** (automatic with Netlify)

## đź“Š Performance Optimizations

The site is optimized for:
- Fast loading times (< 2 seconds)
- Mobile performance (95+ Lighthouse score)
- SEO optimization
- HTTPS security
- Cross-browser compatibility

## đź”Ť Troubleshooting

### Common Issues:

1. **Site not loading properly**
   - Check if all files are uploaded
   - Verify `index.html` is in root directory

2. **AI features not working**
   - Users need to configure their own API keys
   - Check browser console for errors

3. **Images not loading**
   - Verify HTTPS is enabled
   - Check CSP headers in netlify.toml

4. **JavaScript errors**
   - Ensure both `script.js` and `enhanced-script.js` are loaded
   - Check browser compatibility

### Support

- đź“§ Create an issue on GitHub: https://github.com/dailyatti/promptgy-jtem-ny3/issues
- đź“– Check Netlify documentation: https://docs.netlify.com/
- đź† Netlify Support: https://netlify.com/support/

## đź“ Post-Deployment

After successful deployment:

1. **Test all features**:
   - Theme switching
   - Sport browsing
   - Prompt copying
   - AI configuration (with your own API keys)

2. **Share your site**:
   - Your site will have a URL like: `https://amazing-name-123456.netlify.app`
   - Customize the name in Site Settings

3. **Monitor performance**:
   - Check Netlify Analytics
   - Monitor API usage
   - Review user feedback

## đźŽ‰ Success!

Your professional sports betting prompt library is now live and ready to use!

**Live Features:**
- đźŚ¸ Beautiful cherry blossom theme
- đź¤– AI-powered betting analysis
- đź“± Mobile-friendly interface
- đź”’ Secure and fast deployment

---

**Need help?** Create an issue on GitHub or check the main README.md for more information.
