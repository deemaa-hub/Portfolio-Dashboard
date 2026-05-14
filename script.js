const defaultProjects = [
  {
    id: "p1",
    name: "Simple To-Do App",
    techStack: "HTML, CSS, JS",
    category: "Web App",
    status: "Completed",
    url: "https://deemaa-hub.github.io/simple-todo-app/",
  },
  {
    id: "p2",
    name: "Tasky Landing Page",
    techStack: "HTML, CSS",
    category: "Landing Page",
    status: "Completed",
    url: "https://deemaa-hub.github.io/tasky-landing-page/",
  },
  {
    id: "p3",
    name: "Watch Store Website",
    techStack: "HTML, CSS",
    category: "E-commerce",
    status: "Completed",
    url: "https://deemaa-hub.github.io/watch-site/",
  },
  {
    id: "p4",
    name: "AquaDash Dashboard",
    techStack: "HTML5, CSS3",
    category: "Admin Panel",
    status: "In Progress",
    url: "https://deemaa-hub.github.io/AquaDash-UI/",
  },
  {
    id: "p5",
    name: "Calculator App",
    techStack: "HTML, CSS, JS",
    category: "Web Tool",
    status: "Completed",
    url: "https://deemaa-hub.github.io/Calculator-App/",
  },
];
const PROJECTS_STORAGE_KEY = "studentPathProjects";
const ADMIN_SESSION_KEY = "studentPathAdminMode";
const projects = [];
const statusOptions = ["In Progress", "Review", "Completed"];
const ADMIN_PASSWORD = "deema123";
const canonicalProjectByName = {
  "Simple To-Do App": {
    techStack: "HTML, CSS, JS",
    category: "Web App",
    status: "Completed",
  },
  "Tasky Landing Page": {
    techStack: "HTML, CSS",
    category: "Landing Page",
    status: "Completed",
  },
  "Watch Store Website": {
    techStack: "HTML, CSS",
    category: "E-commerce",
    status: "Completed",
  },
  "AquaDash Dashboard": {
    techStack: "HTML5, CSS3",
    category: "Admin Panel",
    status: "In Progress",
  },
  "Portfolio Dashboard": {
    techStack: "HTML5, CSS3",
    category: "Admin Dashboard",
    status: "In Progress",
  },
  "Calculator App": {
    techStack: "HTML, CSS, JS",
    category: "Web Tool",
    status: "Completed",
  },
};
const projectUrlByName = defaultProjects.reduce((acc, project) => {
  acc[project.name] = project.url || "";
  return acc;
}, {});
projectUrlByName["Watch Store Website"] = "https://deemaa-hub.github.io/watch-site/";
projectUrlByName["AquaDash Dashboard"] = "https://deemaa-hub.github.io/AquaDash-UI/";
projectUrlByName["Watch Site"] = "https://deemaa-hub.github.io/watch-site/";
projectUrlByName["AquaDash UI"] = "https://deemaa-hub.github.io/AquaDash-UI/";
const canonicalNameByAlias = {
  "Watch Site": "Watch Store Website",
  "AquaDash UI": "AquaDash Dashboard",
  "Portfolio Dashboard": "AquaDash Dashboard",
};

/**
 * Appends any default portfolio projects that are missing from the in-memory list.
 * Needed when localStorage was saved before new defaults (e.g. Calculator) existed.
 */
function mergeMissingDefaultProjects() {
  const existingNames = new Set(projects.map((p) => p.name));
  for (const seed of defaultProjects) {
    if (existingNames.has(seed.name)) continue;
    projects.push({
      ...seed,
      id: seed.id || createProjectId(),
    });
    existingNames.add(seed.name);
  }
}

/**
 * Loads projects from LocalStorage (if available) and syncs in-memory data.
 */
function loadProjectsFromStorage() {
  const raw = safeStorageGet(PROJECTS_STORAGE_KEY);
  if (!raw) {
    // First run: seed local storage with default student projects.
    projects.splice(0, projects.length, ...defaultProjects);
    saveProjectsToStorage();
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;

    const normalizedProjects = parsed.map((project) => {
      const rawName = String(project.name || "").trim();
      const canonicalName = canonicalNameByAlias[rawName] || rawName;
      const canonicalMeta = canonicalProjectByName[canonicalName];
      const rawStatus = String(project.status || "In Progress").trim();
      const normalizedStatus = statusOptions.includes(rawStatus)
        ? rawStatus
        : "In Progress";
      const normalizedTechStack = String(project.techStack || "").trim();
      const normalizedCategory = String(project.category || "").trim();

      return {
        id: project.id || createProjectId(),
        name: canonicalName,
        // Keep user's saved values; fallback to canonical defaults only when missing.
        techStack: normalizedTechStack || canonicalMeta?.techStack || "",
        category: normalizedCategory || canonicalMeta?.category || "",
        status: normalizedStatus,
        url:
          projectUrlByName[canonicalName] ||
          String(project.url || "").trim() ||
          "",
      };
    });

    // Keep the same array reference while replacing its contents.
    projects.splice(0, projects.length, ...normalizedProjects);
    mergeMissingDefaultProjects();
    saveProjectsToStorage();
  } catch (error) {
    console.warn("Could not parse saved projects from LocalStorage.", error);
    projects.splice(0, projects.length, ...defaultProjects);
    saveProjectsToStorage();
  }
}

/**
 * Saves current projects list to LocalStorage.
 */
function saveProjectsToStorage() {
  safeStorageSet(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
}

/**
 * Safe wrapper for localStorage.getItem.
 * @param {string} key
 * @returns {string | null}
 */
function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn("Could not read LocalStorage.", error);
    return null;
  }
}

/**
 * Safe wrapper for localStorage.setItem.
 * @param {string} key
 * @param {string} value
 */
function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Could not write to LocalStorage.", error);
  }
}

/**
 * Reads admin mode from session storage.
 * @returns {boolean}
 */
function getAdminMode() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
  } catch (error) {
    console.warn("Could not read admin session.", error);
    return false;
  }
}

/**
 * Persists admin mode in session storage.
 * @param {boolean} enabled
 */
function setAdminMode(enabled) {
  try {
    sessionStorage.setItem(ADMIN_SESSION_KEY, String(Boolean(enabled)));
  } catch (error) {
    console.warn("Could not write admin session.", error);
  }
}

/**
 * Creates a simple unique id for projects.
 * @returns {string}
 */
function createProjectId() {
  return `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Maps status labels to CSS classes for visual styling.
 * @param {string} status
 * @returns {string}
 */
function getStatusClass(status) {
  const normalized = status.trim().toLowerCase();

  if (normalized === "in progress") return "status-in-progress";
  if (normalized === "review") return "status-review";
  if (normalized === "completed") return "status-completed";

  return "status-in-progress";
}

/**
 * Renders all projects into the table body.
 */
function renderProjectsTable() {
  const tbody = document.getElementById("projects-tbody");
  if (!tbody) return;
  const isAdmin = getAdminMode();

  const rowsMarkup = projects
    .map((project) => {
      const statusClass = getStatusClass(project.status);
      const safeTechStack = project.techStack || "-";
      const safeCategory = project.category || "-";
      const safeUrl = project.url || "#";
      const hasUrl = Boolean(project.url);
      const statusSelectMarkup = statusOptions
        .map((status) => {
          const isSelected = project.status === status ? "selected" : "";
          return `<option value="${status}" ${isSelected}>${status}</option>`;
        })
        .join("");

      return `
        <tr>
          <td data-label="Project Name">${project.name}</td>
          <td data-label="Tech Stack">${safeTechStack}</td>
          <td data-label="Category">${safeCategory}</td>
          <td data-label="Status">
            ${
              isAdmin
                ? `<select class="status-select ${statusClass} admin-fade-in" data-project-id="${project.id}" aria-label="Change status for ${project.name}">
              ${statusSelectMarkup}
            </select>`
                : `<span class="status-pill ${statusClass}">${project.status}</span>`
            }
          </td>
          <td data-label="Actions">
            <div class="table-actions">
              <a class="table-action table-action-view ${hasUrl ? "" : "table-action-disabled"}" href="${safeUrl}" target="_blank" rel="noopener noreferrer" ${hasUrl ? "" : 'aria-disabled="true" tabindex="-1"'}>
                View
              </a>
              ${
                isAdmin
                  ? `<button class="table-action table-action-delete admin-fade-in" type="button" data-project-id="${project.id}" aria-label="Delete ${project.name}">
                Delete
              </button>`
                  : ""
              }
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  tbody.innerHTML = rowsMarkup;
}

/**
 * Updates project status and syncs UI/storage.
 * @param {string} id
 * @param {string} nextStatus
 */
function updateProjectStatus(id, nextStatus) {
  if (!getAdminMode()) return;
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  project.status = nextStatus;
  saveProjectsToStorage();
  renderProjectsTable();
  updateWidgets();
}

/**
 * Finds a stat widget value element by card title.
 * @param {string} title
 * @returns {HTMLElement | null}
 */
function getWidgetValueByTitle(title) {
  const statCards = document.querySelectorAll(".stat-card");

  for (const card of statCards) {
    const heading = card.querySelector("h3");
    const value = card.querySelector(".stat-value");
    if (!heading || !value) continue;

    if (heading.textContent?.trim() === title) {
      return value;
    }
  }

  return null;
}

/**
 * Updates "Current Projects" and "Completed Projects" widgets from current data.
 */
function updateWidgets() {
  const currentProjectsCount = projects.filter(
    (project) => project.status === "In Progress" || project.status === "Review"
  ).length;

  const completedProjectsCount = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const activeWidgetValue = getWidgetValueByTitle("Current Projects");
  const completedWidgetValue = getWidgetValueByTitle("Completed Projects");

  if (activeWidgetValue) {
    activeWidgetValue.textContent = String(currentProjectsCount || 0);
  }

  if (completedWidgetValue) {
    completedWidgetValue.textContent = String(completedProjectsCount || 0);
  }
}

/**
 * Deletes a project by id after user confirmation and updates UI/storage.
 * @param {string} id
 */
function deleteProject(id) {
  if (!getAdminMode()) return;
  const index = projects.findIndex((project) => project.id === id);
  if (index < 0) return;

  projects.splice(index, 1);
  saveProjectsToStorage();
  renderProjectsTable();
  updateWidgets();
}

document.addEventListener("DOMContentLoaded", () => {
  const addProjectBtn = document.getElementById("add-project-btn");
  const adminLoginBtn = document.getElementById("admin-login-btn");
  const adminLogoutBtn = document.getElementById("admin-logout-btn");
  const adminStatusBadge = document.getElementById("admin-status-badge");
  const adminModal = document.getElementById("admin-modal");
  const closeAdminModalBtn = document.getElementById("close-admin-modal-btn");
  const cancelAdminBtn = document.getElementById("cancel-admin-btn");
  const adminForm = document.getElementById("admin-form");
  const adminPasswordInput = document.getElementById("admin-password");
  const adminError = document.getElementById("admin-error");
  const modal = document.getElementById("project-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const cancelProjectBtn = document.getElementById("cancel-project-btn");
  const projectForm = document.getElementById("project-form");
  const projectsTableBody = document.getElementById("projects-tbody");
  const deleteModal = document.getElementById("delete-modal");
  const closeDeleteModalBtn = document.getElementById("close-delete-modal-btn");
  const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
  const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
  let pendingDeleteId = null;

  /**
   * Updates admin UI state (buttons, badge, and actions availability).
   */
  function syncAdminUI() {
    const isAdmin = getAdminMode();

    if (addProjectBtn) {
      addProjectBtn.disabled = !isAdmin;
      addProjectBtn.title = isAdmin ? "" : "Admin only";
    }

    if (adminLoginBtn) {
      adminLoginBtn.classList.toggle("hidden", isAdmin);
    }

    if (adminLogoutBtn) {
      adminLogoutBtn.classList.toggle("hidden", !isAdmin);
    }

    if (adminStatusBadge) {
      adminStatusBadge.textContent = isAdmin ? "Admin Mode" : "View Only";
      adminStatusBadge.classList.toggle("admin-badge-active", isAdmin);
    }

    renderProjectsTable();
  }

  /**
   * Opens custom admin login modal.
   */
  function openAdminModal() {
    if (!adminModal || !adminForm || !adminPasswordInput) return;
    adminForm.reset();
    if (adminError) adminError.classList.add("hidden");
    adminModal.classList.remove("hidden");
    adminPasswordInput.focus();
  }

  /**
   * Closes custom admin login modal.
   */
  function closeAdminModal() {
    if (!adminModal) return;
    adminModal.classList.add("hidden");
  }

  /**
   * Opens the add-project modal and resets the form.
   */
  function openProjectModal() {
    if (!modal || !projectForm) return;
    projectForm.reset();
    modal.classList.remove("hidden");
  }

  /**
   * Closes the add-project modal.
   */
  function closeProjectModal() {
    if (!modal) return;
    modal.classList.add("hidden");
  }

  /**
   * Opens custom delete confirmation modal.
   * @param {string} projectId
   */
  function openDeleteModal(projectId) {
    if (!deleteModal) return;
    pendingDeleteId = projectId;
    deleteModal.classList.remove("hidden");
  }

  /**
   * Closes custom delete confirmation modal.
   */
  function closeDeleteModal() {
    if (!deleteModal) return;
    pendingDeleteId = null;
    deleteModal.classList.add("hidden");
  }

  if (addProjectBtn) {
    addProjectBtn.addEventListener("click", openProjectModal);
  }

  if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", openAdminModal);
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
      setAdminMode(false);
      syncAdminUI();
      closeAdminModal();
      closeProjectModal();
      closeDeleteModal();
    });
  }

  if (closeAdminModalBtn) {
    closeAdminModalBtn.addEventListener("click", closeAdminModal);
  }

  if (cancelAdminBtn) {
    cancelAdminBtn.addEventListener("click", closeAdminModal);
  }

  if (adminModal) {
    adminModal.addEventListener("click", (event) => {
      if (event.target === adminModal) closeAdminModal();
    });
  }

  if (adminForm) {
    adminForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(adminForm);
      const enteredPassword = String(formData.get("password") || "");

      if (enteredPassword !== ADMIN_PASSWORD) {
        if (adminError) adminError.classList.remove("hidden");
        return;
      }

      if (adminError) adminError.classList.add("hidden");
      setAdminMode(true);
      syncAdminUI();
      closeAdminModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeProjectModal);
  }

  if (cancelProjectBtn) {
    cancelProjectBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeProjectModal();
    });
  }

  if (deleteModal) {
    deleteModal.addEventListener("click", (event) => {
      if (event.target === deleteModal) closeDeleteModal();
    });
  }

  if (closeDeleteModalBtn) {
    closeDeleteModalBtn.addEventListener("click", closeDeleteModal);
  }

  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener("click", closeDeleteModal);
  }

  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener("click", () => {
      if (!getAdminMode()) return;
      if (!pendingDeleteId) return;
      deleteProject(pendingDeleteId);
      closeDeleteModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAdminModal();
    if (event.key === "Escape") closeProjectModal();
    if (event.key === "Escape") closeDeleteModal();
  });

  if (projectForm) {
    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!getAdminMode()) return;

      const formData = new FormData(projectForm);
      const name = String(formData.get("name") || "").trim();
      const techStack = String(formData.get("techStack") || "").trim();
      const category = String(formData.get("category") || "").trim();
      const status = String(formData.get("status") || "").trim();
      const url = String(formData.get("url") || "").trim();

      if (!name || !techStack || !category || !status) return;

      projects.push({
        id: createProjectId(),
        name,
        techStack,
        category,
        status,
        url,
      });
      saveProjectsToStorage();
      renderProjectsTable();
      updateWidgets();
      closeProjectModal();
    });
  }

  if (projectsTableBody) {
    projectsTableBody.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const deleteButton = target.closest(".table-action-delete");
      if (!deleteButton) return;
      if (!getAdminMode()) return;

      const { projectId } = deleteButton.dataset;
      if (!projectId) return;

      openDeleteModal(projectId);
    });

    projectsTableBody.addEventListener("change", (event) => {
      if (!getAdminMode()) return;
      const target = event.target;
      if (!(target instanceof HTMLSelectElement)) return;
      if (!target.classList.contains("status-select")) return;

      const { projectId } = target.dataset;
      const nextStatus = target.value;
      if (!projectId || !nextStatus) return;

      updateProjectStatus(projectId, nextStatus);
    });
  }

  loadProjectsFromStorage();
  syncAdminUI();
  updateWidgets();
});
