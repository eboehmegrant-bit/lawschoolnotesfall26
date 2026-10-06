const container = document.getElementById("courses");
const search = document.getElementById("search");

function render(filter) {
  const q = filter.trim().toLowerCase();
  container.innerHTML = "";

  for (const course of COURSES) {
    const courseMatches = course.name.toLowerCase().includes(q);
    const items = course.items.filter((item) =>
      courseMatches ||
      item.title.toLowerCase().includes(q) ||
      (item.note || "").toLowerCase().includes(q)
    );
    if (q && items.length === 0 && !courseMatches) continue;

    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = course.name;
    section.appendChild(heading);

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "Nothing here yet.";
      section.appendChild(empty);
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
      section.appendChild(list);
    }
    container.appendChild(section);
  }

  if (!container.children.length) {
    container.innerHTML = '<p class="empty">No resources match your search.</p>';
  }
}

search.addEventListener("input", () => render(search.value));
render("");
