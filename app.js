const subject = document.body.dataset.subject;
const sections = SUBJECTS[subject] || [];
const container = document.getElementById("sections");
const search = document.getElementById("search");

// Highlight the current page in the nav bar.
for (const link of document.querySelectorAll("nav a")) {
  if (link.getAttribute("href") === subject + ".html") link.setAttribute("aria-current", "page");
}

function render(filter) {
  const q = filter.trim().toLowerCase();
  container.innerHTML = "";

  for (const section of sections) {
    const sectionMatches = section.name.toLowerCase().includes(q);
    const items = section.items.filter((item) =>
      sectionMatches ||
      item.title.toLowerCase().includes(q) ||
      (item.note || "").toLowerCase().includes(q)
    );
    if (q && items.length === 0 && !sectionMatches) continue;

    const el = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = section.name;
    el.appendChild(heading);

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Nothing here yet.";
      el.appendChild(empty);
    } else {
      const list = document.createElement("ul");
      for (const item of items) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.title;
        if (/^https?:\/\//.test(item.link)) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        li.appendChild(a);
        if (item.note) {
          const note = document.createElement("span");
          note.className = "note";
          note.textContent = " — " + item.note;
          li.appendChild(note);
        }
        list.appendChild(li);
      }
      el.appendChild(list);
    }
    container.appendChild(el);
  }

  if (!container.children.length) {
    container.innerHTML = '<p class="empty">No resources match your search.</p>';
  }
}

search.addEventListener("input", () => render(search.value));
render("");
