# Fall 2026 Study Resources

A very simple website for sharing study materials with study partners. No build step — it's just HTML, CSS, and JavaScript.

The site has a home page plus two subject pages:

- **CON** (Constitutional Law) – `con.html`, files in `resources/con/`
- **CRIM** (Criminal Law) – `crim.html`, files in `resources/crim/`

## How each page is organized

Each subject page is split into **doctrine modules** (e.g. *Federalism & Congressional Power*, *Mens Rea*). Each module is a collapsible card, and the materials inside it are grouped by **type**:

| Type id    | Shown as          | Use for                                       |
|------------|-------------------|-----------------------------------------------|
| `notes`    | Outlines & Notes  | Outlines, class notes, summaries              |
| `vocab`    | Vocab             | Terms of art and their definitions            |
| `rules`    | Rules & Tests     | Black-letter rules, elements, multi-part tests |
| `cases`    | Cases             | Case names with a one-line holding            |
| `visuals`  | Visualizations    | Flowcharts, diagrams, charts (images preview) |
| `practice` | Practice          | Hypos, practice exams, model answers          |

Each page also has:

- a **doctrine list** at the top that jumps to (and opens) a module;
- **material-type filters**, e.g. click "Cases" to see every case across all doctrines;
- a **search box** that matches terms, case names, and notes;
- a **"Still needed"** line in each module listing the types nobody has added yet;
- a **Course-Wide** module for full outlines and practice exams that span doctrines.

You can link straight to a module, e.g. `con.html#equal-protection`.

## Adding materials

Everything on the CON and CRIM pages comes from `resources.js`. To add something:

1. *(Only for files)* Upload the file into `resources/con/` or `resources/crim/`. On GitHub: open the folder, then **Add file → Upload files**.
2. Open `resources.js`, click the pencil icon to edit, find the right doctrine, and add a line to its `materials` list:

   ```js
   { type: "cases", title: "Gibbons v. Ogden (1824)", note: "Broad reading of \"commerce\" to include navigation" },
   { type: "vocab", title: "Dormant Commerce Clause", note: "Implied limit on state laws that burden interstate commerce" },
   { type: "visuals", title: "Commerce Clause flowchart", link: "resources/con/commerce-flowchart.png" },
   { type: "notes", title: "Federalism outline", link: "resources/con/federalism-outline.pdf" },
   ```

   `link` and `note` are optional. Vocab, rules, and cases often don't need a file; the note can hold the definition or holding.
3. Commit the change. The site updates within a minute or two.

To add a new doctrine, copy one of the `{ id, name, summary, materials }` blocks in `resources.js` and give it a unique `id` (lowercase letters and dashes).

The vocab, rules, and cases already in `resources.js` are a starting set of standard landmark material. Edit or remove them to match your professors' syllabi.

## Publishing with GitHub Pages

1. In this repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch", pick the branch (e.g. `main`) and the `/ (root)` folder, and save.
3. After a minute, the page shows your site's URL (something like `https://<username>.github.io/lawschoolnotesfall26/`). Share that link with your study partners.

**Note:** GitHub Pages sites are public, even if the repository is private (on free plans). Anyone with the link can see the files, so don't upload anything you wouldn't want shared — and check your school's honor code about sharing course materials.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
