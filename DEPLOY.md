# Parvathi Nalla — Portfolio Deployment Guide

## Production Deployment: GitHub Pages

The portfolio is deployed to Parvathi Nalla's primary GitHub user site:
- **Repository**: `https://github.com/parvathinalla/parvathinalla.github.io`
- **Live URL**: `https://parvathinalla.github.io/`

### Deployment Steps

1. Commit and push the repository root to `main` on `https://github.com/parvathinalla/parvathinalla.github.io`:
   ```bash
   git add .
   git commit -m "Deploy Parvathi Nalla portfolio website"
   git push origin main
   ```
2. In GitHub repository settings:
   - Navigate to **Settings → Pages**
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` / `/ (root)`
   - Click **Save**
3. GitHub Actions builds and publishes the site to `https://parvathinalla.github.io/`.

### Verified Site Integrations

- **PointLab**: Public repository at `https://github.com/parvathinalla/pointlab` (Release v0.2.0 live).
- **Goodwill Atlas**: Public repository at `https://github.com/parvathinalla/goodwill-atlas`.
- **Distributed Social Platform**: Public repository at `https://github.com/parvathinalla/reddit_gleam`.
- **Resume**: Downloadable PDF at `resume/Parvathi_Nalla_Resume.pdf`.
- **Social Metadata**: OpenGraph image pointed to `https://parvathinalla.github.io/assets/og-preview.png`.
