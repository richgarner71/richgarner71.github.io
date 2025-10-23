# PDF Files Required

Before deploying to GitHub Pages, you need to add your PDF files to the root directory of this project.

## Required Files:

1. **resume.pdf** - Your professional resume in PDF format
2. **recommendation-letter.pdf** - Your first recommendation letter in PDF format
3. **recommendation-letter-2.pdf** - Your second recommendation letter in PDF format

## Where to Place Them:

Place all PDF files in the **root directory** of the project (same location as this file).

```
/
├── resume.pdf  ← Add your resume here
├── recommendation-letter.pdf  ← Add your first recommendation letter here
├── recommendation-letter-2.pdf  ← Add your second recommendation letter here
├── App.tsx
├── components/
├── styles/
└── ... other files
```

## Important Notes:

- The download buttons in the About section link to `/resume.pdf`, `/recommendation-letter.pdf`, and `/recommendation-letter-2.pdf`
- These files must be in the root directory for the download links to work
- Make sure the filenames are exactly as shown (lowercase, with hyphens)
- All files will be committed to your Git repository and deployed with your site
- These files will be publicly accessible once deployed to GitHub Pages

## Before Deploying:

✅ Make sure all three PDF files are added to the root directory
✅ Test the download links locally by running `npm run dev`
✅ Verify the PDFs download correctly before pushing to GitHub

## Security Consideration:

Since these files will be publicly accessible on your GitHub repository and website, ensure:
- You're comfortable with the information being public
- No sensitive personal information is included (SSN, full address, etc.)
- The content is appropriate for potential employers and the public to view