# AI Agent Instructions for Rich Garner's Resume Website

## Project Overview
This is a modern, single-page resume website built with React and Tailwind CSS. It showcases Rich Garner's professional experience with interactive components and smooth animations.

## Key Architecture Points
- **Framework**: React 18 (JavaScript) with Vite as build tool
- **UI Components**: Uses Radix UI primitives extensively (`@radix-ui/*`) for accessible components
- **Styling**: Tailwind CSS with orange (#f97316) as primary accent color
- **Animations**: Framer Motion library (imported as 'motion')

## Critical Files and Components
- `src/components/*.jsx` - Main section components:
  - `Hero.jsx` - Landing section with photo and contact
  - `About.jsx` - Professional summary and PDF downloads
  - `WorkHistory.jsx` - Experience timeline
  - `Projects.jsx` - Portfolio showcase
  - `Skills.jsx` - Technical skills with icons

## Development Workflow
1. **Local Development**:
   ```bash
   npm install
   npm run dev   # Starts dev server at http://localhost:5173
   ```

2. **Production Build**:
   ```bash
   npm run build
   ```

3. **Deployment**:
   - Pushes to `main` branch automatically trigger GitHub Pages deployment via Actions
   - PDF files (`resume.pdf`, `recommendation-letter.pdf`, `recommendation-letter-2.pdf`) must be in root directory

## Project Conventions
1. **Component Structure**:
   - Each major section is a separate component in `src/components/`
   - UI primitives from Radix UI are in `src/components/ui/`
   - Common animations use Framer Motion's `motion` components

2. **Styling**:
   - Use Tailwind classes for styling
   - Orange accent colors use `orange-*` classes
   - Dark theme is the default and only theme

3. **Assets**:
   - PDF files are referenced from root directory
   - Images go in `src/assets/`

## Common Tasks
1. **Adding a new section**:
   - Create component in `src/components/`
   - Add to navigation in `Navigation.jsx`
   - Import and add to main layout in `App.jsx`

2. **Updating content**:
   - Work history: Edit array in `WorkHistory.jsx`
   - Projects: Update array in `Projects.jsx`
   - Skills: Modify array in `Skills.jsx`

3. **PDF Updates**:
   - Replace PDF files in root directory
   - Keep filenames unchanged to maintain downloads

## Integration Points
- GitHub Actions for deployment (`/.github/workflows/deploy.yml`)
- PDF file downloads from root directory
- Social media links in `Hero.jsx`

## Known Patterns
- Use `motion.div` for animated elements
- Radix UI components for interactive elements
- Tailwind's responsive classes for mobile adaptations