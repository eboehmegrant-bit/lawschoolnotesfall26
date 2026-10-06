// =====================================================================
//  STUDY RESOURCES — edit this file to add, change, or remove materials
// =====================================================================
//
// Each subject page (CON, CRIM) is a list of DOCTRINES. Each doctrine is a
// module on the page and holds a list of MATERIALS.
//
// Every material needs:
//   type  - one of the type ids listed in TYPES below
//           ("notes", "vocab", "rules", "cases", "visuals", "practice")
//   title - the name shown on the page (a term, a case name, a file name…)
//
// and can optionally have:
//   note  - a short definition, holding, or description
//   link  - a file in the resources/ folder (e.g. "resources/con/federalism-chart.png")
//           or any web link (e.g. a Google Drive share link)
//
// Examples of the format:
//   { type: "vocab",   title: "Term", note: "Definition from class" },
//   { type: "cases",   title: "Case name (year)", note: "Holding" },
//   { type: "notes",   title: "Week 3 class notes", link: "resources/con/week3-notes.pdf" },
//   { type: "visuals", title: "Chart name", link: "resources/con/chart.png" },
//
// Image links (.png, .jpg, .gif, .svg, .webp) under "visuals" show a preview.
//
// To add a doctrine, copy one of the { id, name, summary, materials } blocks.
// The id must be unique within the page and use only lowercase letters and dashes.
// Use the "course-wide" module for materials that cover the whole course.

// Material types, in the order they appear inside each doctrine module.
const TYPES = [
  { id: "notes",    label: "Outlines & Notes" },
  { id: "vocab",    label: "Vocab" },
  { id: "rules",    label: "Rules & Tests" },
  { id: "cases",    label: "Cases" },
  { id: "visuals",  label: "Visualizations" },
  { id: "practice", label: "Practice" },
];

const SUBJECTS = {
  // CON — Constitutional Law
  con: [
    {
      id: "course-wide",
      name: "Course-Wide",
      summary: "Materials that cover the whole course",
      materials: [],
    },
  ],

  // CRIM — Criminal Law
  crim: [
    {
      id: "course-wide",
      name: "Course-Wide",
      summary: "Materials that cover the whole course",
      materials: [],
    },
  ],
};
