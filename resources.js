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
// Examples:
//   { type: "vocab",   title: "Standing", note: "Who may bring a case: injury, causation, redressability" },
//   { type: "cases",   title: "Marbury v. Madison (1803)", note: "Established judicial review" },
//   { type: "notes",   title: "Week 3 class notes", link: "resources/con/week3-notes.pdf" },
//   { type: "visuals", title: "Levels of scrutiny chart", link: "resources/con/scrutiny.png" },
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
  // ------------------------------------------------------------------
  //  CON — Constitutional Law
  // ------------------------------------------------------------------
  con: [
    {
      id: "course-wide",
      name: "Course-Wide",
      summary: "Full outlines, syllabus, and practice exams covering the whole course",
      materials: [],
    },
    {
      id: "judicial-power",
      name: "Judicial Review & Justiciability",
      summary: "The power of courts to review laws, and which cases courts can hear",
      materials: [
        { type: "vocab", title: "Judicial review", note: "The power of courts to declare acts of other branches unconstitutional" },
        { type: "vocab", title: "Standing", note: "Requirement that the plaintiff be a proper party to bring the case" },
        { type: "vocab", title: "Political question doctrine", note: "Issues committed to the political branches are non-justiciable" },
        { type: "rules", title: "Standing (Article III)", note: "(1) injury in fact, (2) causation (fairly traceable), (3) redressability" },
        { type: "cases", title: "Marbury v. Madison (1803)", note: "Established judicial review" },
        { type: "cases", title: "Lujan v. Defenders of Wildlife (1992)", note: "Standing requires concrete, particularized injury" },
      ],
    },
    {
      id: "federalism",
      name: "Federalism & Congressional Power",
      summary: "Enumerated powers (Commerce, Taxing & Spending, Necessary & Proper) and limits from state sovereignty",
      materials: [
        { type: "vocab", title: "Enumerated powers", note: "Powers specifically granted to Congress, mainly in Art. I, § 8" },
        { type: "vocab", title: "Anti-commandeering", note: "Congress cannot compel states to enact or enforce federal programs" },
        { type: "rules", title: "Commerce Clause categories (Lopez)", note: "Congress may regulate (1) channels, (2) instrumentalities, and (3) activities that substantially affect interstate commerce" },
        { type: "cases", title: "McCulloch v. Maryland (1819)", note: "Implied powers under the Necessary and Proper Clause; states cannot tax the federal bank" },
        { type: "cases", title: "Wickard v. Filburn (1942)", note: "Aggregation: local activity regulable if, in the aggregate, it substantially affects interstate commerce" },
        { type: "cases", title: "United States v. Lopez (1995)", note: "Gun-Free School Zones Act exceeded the commerce power" },
      ],
    },
    {
      id: "separation-of-powers",
      name: "Separation of Powers",
      summary: "Allocation of power among Congress, the President, and the courts",
      materials: [
        { type: "vocab", title: "Bicameralism and presentment", note: "A law must pass both houses and be presented to the President (Art. I, § 7)" },
        { type: "rules", title: "Youngstown framework (Jackson concurrence)", note: "Presidential power is (1) strongest with congressional authorization, (2) uncertain in the \"zone of twilight\", (3) weakest against Congress's will" },
        { type: "cases", title: "Youngstown Sheet & Tube Co. v. Sawyer (1952)", note: "President could not seize steel mills without congressional authorization" },
        { type: "cases", title: "INS v. Chadha (1983)", note: "One-house legislative veto violates bicameralism and presentment" },
      ],
    },
    {
      id: "state-action",
      name: "State Action",
      summary: "When the Constitution applies to private conduct",
      materials: [
        { type: "vocab", title: "State action doctrine", note: "Most constitutional rights constrain only the government, not private actors" },
        { type: "cases", title: "Civil Rights Cases (1883)", note: "Fourteenth Amendment does not reach purely private discrimination" },
        { type: "cases", title: "Shelley v. Kraemer (1948)", note: "Judicial enforcement of racially restrictive covenants is state action" },
      ],
    },
    {
      id: "due-process",
      name: "Due Process",
      summary: "Substantive due process and unenumerated fundamental rights",
      materials: [
        { type: "vocab", title: "Fundamental right", note: "A right that triggers strict scrutiny when the government burdens it" },
        { type: "vocab", title: "Substantive due process", note: "Due Process Clause protects certain rights regardless of the procedures used" },
        { type: "cases", title: "Lochner v. New York (1905)", note: "Struck down a maximum-hours law under liberty of contract (later repudiated)" },
        { type: "cases", title: "Griswold v. Connecticut (1965)", note: "Right of marital privacy protects use of contraceptives" },
        { type: "cases", title: "Obergefell v. Hodges (2015)", note: "Fundamental right to marry extends to same-sex couples" },
        { type: "cases", title: "Dobbs v. Jackson Women's Health Org. (2022)", note: "Overruled Roe and Casey; no constitutional right to abortion" },
      ],
    },
    {
      id: "equal-protection",
      name: "Equal Protection",
      summary: "Classifications and levels of scrutiny",
      materials: [
        { type: "vocab", title: "Suspect classification", note: "Classification (e.g., race, national origin) that triggers strict scrutiny" },
        { type: "rules", title: "Strict scrutiny", note: "Narrowly tailored to a compelling government interest" },
        { type: "rules", title: "Intermediate scrutiny", note: "Substantially related to an important government interest" },
        { type: "rules", title: "Rational basis review", note: "Rationally related to a legitimate government interest" },
        { type: "cases", title: "Brown v. Board of Education (1954)", note: "Racial segregation in public schools violates Equal Protection" },
        { type: "cases", title: "United States v. Virginia (1996)", note: "Sex classifications require an \"exceedingly persuasive justification\"" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  //  CRIM — Criminal Law
  // ------------------------------------------------------------------
  crim: [
    {
      id: "course-wide",
      name: "Course-Wide",
      summary: "Full outlines, syllabus, and practice exams covering the whole course",
      materials: [],
    },
    {
      id: "foundations",
      name: "Foundations & Punishment",
      summary: "Theories of punishment and the principle of legality",
      materials: [
        { type: "vocab", title: "Retribution", note: "Punishment justified because the offender deserves it" },
        { type: "vocab", title: "Deterrence", note: "Punishment to discourage the offender (specific) or society (general) from offending" },
        { type: "vocab", title: "Principle of legality", note: "No crime or punishment without a pre-existing law defining it" },
        { type: "cases", title: "Keeler v. Superior Court (1970)", note: "Court refused to extend \"human being\" in murder statute to a fetus; legality/fair notice" },
      ],
    },
    {
      id: "actus-reus",
      name: "Actus Reus",
      summary: "Voluntary acts and omissions",
      materials: [
        { type: "vocab", title: "Voluntary act", note: "A willed bodily movement; liability requires one (MPC § 2.01)" },
        { type: "vocab", title: "Omission", note: "Failure to act; criminal only where there is a legal duty to act" },
        { type: "cases", title: "Martin v. State (1944)", note: "No liability for public drunkenness when police carried defendant onto the highway" },
        { type: "cases", title: "Jones v. United States (1962)", note: "Omission liability requires a legal (not just moral) duty" },
      ],
    },
    {
      id: "mens-rea",
      name: "Mens Rea",
      summary: "Culpable mental states and strict liability",
      materials: [
        { type: "vocab", title: "Strict liability", note: "Offense requiring no culpable mental state as to one or more elements" },
        { type: "rules", title: "MPC culpability levels (§ 2.02)", note: "Purpose, knowledge, recklessness, negligence (most to least culpable)" },
        { type: "cases", title: "Regina v. Cunningham (1957)", note: "\"Maliciously\" requires intent or recklessness, not mere wickedness" },
        { type: "cases", title: "Staples v. United States (1994)", note: "Government had to prove defendant knew the gun could fire automatically; no strict liability presumed" },
      ],
    },
    {
      id: "causation",
      name: "Causation",
      summary: "Actual (but-for) and proximate cause",
      materials: [
        { type: "vocab", title: "But-for (actual) cause", note: "Result would not have occurred but for the defendant's conduct" },
        { type: "vocab", title: "Proximate cause", note: "Result is not too remote or accidental to hold the defendant responsible" },
        { type: "vocab", title: "Intervening cause", note: "Later event that may break the chain of causation" },
        { type: "cases", title: "Commonwealth v. Root (1961)", note: "Drag racer not the proximate cause of competitor's death" },
      ],
    },
    {
      id: "homicide",
      name: "Homicide",
      summary: "Murder, manslaughter, and felony murder",
      materials: [
        { type: "vocab", title: "Malice aforethought", note: "Mental state for common law murder (intent to kill, intent to cause serious harm, depraved heart, felony murder)" },
        { type: "vocab", title: "Felony murder", note: "Killing during the commission of a felony is murder without proof of intent to kill" },
        { type: "vocab", title: "Heat of passion", note: "Adequate provocation that can reduce murder to voluntary manslaughter" },
        { type: "cases", title: "Commonwealth v. Malone (1946)", note: "\"Russian poker\" killing was depraved-heart murder" },
        { type: "cases", title: "Girouard v. State (1991)", note: "Words alone are not adequate provocation" },
      ],
    },
    {
      id: "defenses",
      name: "Defenses",
      summary: "Justifications (self-defense, necessity) and excuses (duress, insanity)",
      materials: [
        { type: "vocab", title: "Justification vs. excuse", note: "Justified conduct is right under the circumstances; excused conduct is wrong but the actor is not blameworthy" },
        { type: "rules", title: "M'Naghten test (insanity)", note: "Due to mental disease, defendant did not know the nature of the act or that it was wrong" },
        { type: "cases", title: "People v. Goetz (1986)", note: "Self-defense reasonableness is objective, viewed in the defendant's situation" },
        { type: "cases", title: "Regina v. Dudley & Stephens (1884)", note: "Necessity is no defense to murder" },
      ],
    },
    {
      id: "inchoate",
      name: "Inchoate Offenses",
      summary: "Attempt, conspiracy, and solicitation",
      materials: [
        { type: "vocab", title: "Substantial step", note: "MPC attempt test: conduct strongly corroborating criminal purpose (§ 5.01)" },
        { type: "vocab", title: "Pinkerton liability", note: "Conspirator liable for foreseeable crimes of co-conspirators in furtherance of the conspiracy" },
        { type: "cases", title: "People v. Rizzo (1927)", note: "No attempt where defendants never found the intended robbery victim (dangerous proximity)" },
        { type: "cases", title: "Pinkerton v. United States (1946)", note: "Established co-conspirator liability for substantive offenses" },
      ],
    },
    {
      id: "complicity",
      name: "Accomplice Liability",
      summary: "Aiding and abetting another's crime",
      materials: [
        { type: "vocab", title: "Accomplice", note: "One who, with intent to promote a crime, aids or encourages its commission" },
        { type: "vocab", title: "Natural and probable consequences", note: "In some jurisdictions, accomplice liable for foreseeable crimes beyond the one aided" },
      ],
    },
  ],
};
