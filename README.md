# Siddhartha Parashar — Portfolio

Static site: HTML, CSS and vanilla JavaScript. No build step.

## Structure
`index.html`, `projects.html`, `learning.html`, `writing.html` (research), `resume.html`, `404.html`, `css/` (style, components, responsive + print), `js/` (main, animations), `assets/` (images, project-screenshots, documents).

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.

## Add your own content
- **Screenshots:** save images in `assets/project-screenshots/`, then replace the dashed `<div class="shot">…</div>` in `projects.html` with `<img src="assets/project-screenshots/name.png" alt="Describe the screenshot">`. Event photos go in `learning.html` the same way.
- **Resume PDF:** save as `assets/documents/resume.pdf`, then in `resume.html` add `<a class="btn" href="assets/documents/resume.pdf" download>Download Resume PDF</a>` next to the print button. The page already prints cleanly.
- **Encrypto:** there is no public repository, so no link is shown. Add one in `projects.html` if you publish it.

## Deploy on GitHub Pages
1. Create a repository on GitHub and push these files so `index.html` is at the root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. After a minute the site is live at `https://me-sid.github.io/<repository-name>/`.
All links are relative, so the project URL works without changes. (A repo named `me-sid.github.io` publishes at the root URL instead.)
