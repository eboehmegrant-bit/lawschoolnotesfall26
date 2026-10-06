# Fall 2026 Study Resources

A very simple website for sharing study materials with study partners. No build step — it's just HTML, CSS, and JavaScript.

The site has a home page plus two subject pages:

- **CON** (Constitutional Law) – `con.html`, files in `resources/con/`
- **CRIM** (Criminal Law) – `crim.html`, files in `resources/crim/`

Each subject page has sections for Outlines, Class Notes, and Practice Exams.

## Adding a resource

1. Upload the file (PDF, Word doc, etc.) into `resources/con/` or `resources/crim/`. On GitHub you can do this with **Add file → Upload files** while viewing that folder.
2. Open `resources.js`, click the pencil icon to edit, and add an entry under the right subject (`con` or `crim`) and section:

   ```js
   { title: "CON outline (midterm)", link: "resources/con/con-outline.pdf", note: "Covers weeks 1–6" },
   ```

   You can also link to anything on the web (e.g. a Google Drive file) by putting the full URL in `link`.
3. Commit the change. The site updates within a minute or two.

To add a new section to a page, copy one of the `{ name: ..., items: [...] }` blocks in `resources.js`.

## Publishing with GitHub Pages

1. In this repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch", pick the branch (e.g. `main`) and the `/ (root)` folder, and save.
3. After a minute, the page shows your site's URL (something like `https://<username>.github.io/lawschoolnotesfall26/`). Share that link with your study partners.

**Note:** GitHub Pages sites are public, even if the repository is private (on free plans). Anyone with the link can see the files, so don't upload anything you wouldn't want shared — and check your school's honor code about sharing course materials.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
