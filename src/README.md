# Rich Garner - Professional Resume Website

A modern, animated one-page resume website built with React (JavaScript) and Tailwind CSS, featuring a dark charcoal background with orange highlights.

## ✨ Features

- **Pure JavaScript** - No TypeScript, ready for static deployment
- **Fully Responsive** - Works on all devices
- **Advanced Animations** - Smooth scroll animations and hover effects using Motion (Framer Motion)
- **Modern Design** - Dark theme with orange accents
- **Sections Include**:
  - Hero with professional photo and contact info
  - About Me with career highlights
  - Work History with timeline view (20+ years experience)
  - Special Projects portfolio
  - Technical Skills with interactive icons
  - Downloadable resume and recommendation letters

## 🚀 Quick Start - Deployment to GitHub

### Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js 18+ installed (for local testing)

### Step 1: Create Your Repository

1. Create a new repository on GitHub
   - For simplest URL: name it `username.github.io` (e.g., `richgarner.github.io`)
   - Or use any name (e.g., `resume-website`)

2. Clone your repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

### Step 2: Add Your Files

1. Copy all files from this project to your repository folder

2. **IMPORTANT**: Add your PDF files to the root directory:
   - `resume.pdf` - Your resume
   - `recommendation-letter.pdf` - First recommendation letter
   - `recommendation-letter-2.pdf` - Second recommendation letter

### Step 3: Configure Base Path

If your repository is NOT named `username.github.io`, edit `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Update this line
})
```

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Initial commit - Resume website"
git push origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: **GitHub Actions**
4. The workflow will automatically run and deploy your site

### Step 6: Access Your Site

Your site will be live at:
- If using `username.github.io`: `https://username.github.io/`
- If using custom name: `https://username.github.io/your-repo-name/`

## 🛠️ Local Development

To run and test locally before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (optional)
npm run build

# Preview production build (optional)
npm run preview
```

Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── components/
│   ├── About.jsx              # About section with downloads
│   ├── Hero.jsx               # Hero section with photo
│   ├── Navigation.jsx         # Navigation menu
│   ├── Projects.jsx           # Projects showcase
│   ├── Skills.jsx             # Skills with tech icons
│   └── WorkHistory.jsx        # Work experience timeline
├── styles/
│   └── globals.css            # Global styles and Tailwind config
├── App.jsx                    # Main application component
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── resume.pdf                 # YOUR RESUME (add this)
├── recommendation-letter.pdf  # YOUR LETTER #1 (add this)
└── recommendation-letter-2.pdf # YOUR LETTER #2 (add this)
```

## 🎨 Customization

### Update Your Information

Edit these files to customize the content:

1. **Hero Section** - `/components/Hero.jsx`
   - Name, title, contact info, location
   - Replace photo import path if needed

2. **About Section** - `/components/About.jsx`
   - Professional summary
   - Career stats

3. **Work History** - `/components/WorkHistory.jsx`
   - Update the `workExperiences` array with your jobs

4. **Projects** - `/components/Projects.jsx`
   - Update the `projects` array with your projects

5. **Skills** - `/components/Skills.jsx`
   - Update the `skills` array with your tech stack

### Update Colors

The site uses orange (#f97316) as the accent color. To change:

1. Search for `orange-` in all component files
2. Replace with your preferred Tailwind color (e.g., `blue-`, `purple-`, `green-`)

## 📋 Tech Stack

- **React 18** - UI framework (JavaScript, no TypeScript)
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons

## 📝 Notes

- **No TypeScript**: This project uses pure JavaScript for easier deployment
- **PDF Files**: Don't forget to add your three PDF files before deploying
- **Mobile Responsive**: The site automatically adapts to all screen sizes
- **Fast Loading**: Optimized build with Vite for quick page loads
- **SEO Optimized**: Includes meta tags for search engines and social media

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update resume content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site.

## 🆘 Troubleshooting

**Site not loading?**
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the workflow ran successfully in the "Actions" tab
- If using a custom repo name, ensure `base` is set correctly in `vite.config.js`

**PDF downloads not working?**
- Ensure your PDF files are in the root directory
- File names must match exactly: `resume.pdf`, `recommendation-letter.pdf`, `recommendation-letter-2.pdf`

**Build fails?**
- Check the Actions tab for error details
- Ensure `package.json` has no syntax errors
- Try running `npm install` and `npm run build` locally to test

## 📞 Contact Information

This resume belongs to:
- **Rich Garner**
- Email: RichGarner71@Gmail.com
- Phone: 757-869-0361
- Location: Ashburn, VA
- LinkedIn: [linkedin.com/in/RichGarner71](https://linkedin.com/in/RichGarner71)

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React, Tailwind CSS, and Motion
