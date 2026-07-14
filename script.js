const translations = {
  en: {
    brand_subtitle: "Student Portfolio Dashboard",
    nav_dashboard: "Dashboard",
    nav_projects: "My Projects",
    nav_skills: "My Skills",
    nav_roadmap: "Learning Roadmap",
    admin: "Admin",
    logout: "Logout",
    welcome_title: "Welcome Back, Deema!",
    welcome_subtitle: "Your learning progress snapshot for today.",
    stat_path: "Path",
    stat_path_value: "Frontend Student",
    stat_current: "Current Projects",
    stat_completed: "Completed Projects",
    stat_focus: "Focus Mode",
    stat_focus_value: "On 🚀",
    projects_title: "Current Projects",
    add_project: "Add New Project",
    th_project_name: "Project Name",
    th_tech_stack: "Tech Stack",
    th_category: "Category",
    th_status: "Status",
    th_actions: "Actions",
    th_title: "Title",
    th_source: "Source",
    view_only: "View Only",
    admin_mode: "Admin Mode",
    api_demo_title: "API Integration Demo",
    api_demo_badge: "Live REST API",
    fetch_live_data: "Fetch Live Data",
    api_demo_note:
      "This section fetches real records from a live REST API (not your portfolio data above) to demonstrate GET / POST / PATCH / DELETE integration.",
    api_new_title_placeholder: "Enter a new record title...",
    add_record: "Add Record (POST)",
    modal_add_project_title: "Add New Project",
    label_project_name: "Project Name",
    placeholder_project_name: "e.g. Watch Store",
    label_tech_stack: "Tech Stack",
    placeholder_tech_stack: "e.g. HTML, CSS, JavaScript",
    label_category: "Category",
    placeholder_category: "e.g. E-commerce",
    label_status: "Status",
    status_in_progress: "In Progress",
    status_review: "Review",
    status_completed: "Completed",
    label_url: "Project URL",
    cancel: "Cancel",
    save_project: "Save Project",
    modal_delete_title: "Delete Project",
    delete_confirm_text: "Are you sure you want to delete this project?",
    delete: "Delete",
    modal_admin_title: "Admin Login",
    admin_login_text: "Enter your admin password to enable edit mode.",
    label_password: "Password",
    placeholder_password: "Enter password",
    admin_error_text: "Wrong password. Try again.",
    login: "Login",
    view: "View",
    mark_updated: "Mark Updated",
    synced: "Synced",
    created: "Created",
    updated: "Updated",
  },
  ar: {
    brand_subtitle: "لوحة تحكم معرض أعمال الطالب",
    nav_dashboard: "الرئيسية",
    nav_projects: "مشاريعي",
    nav_skills: "مهاراتي",
    nav_roadmap: "خطة التعلم",
    admin: "المشرف",
    logout: "تسجيل الخروج",
    welcome_title: "أهلاً بعودتك، ديما !",
    welcome_subtitle: "ملخص تقدّمك التعليمي لهذا اليوم.",
    stat_path: "المسار",
    stat_path_value: "طالبة واجهات أمامية",
    stat_current: "المشاريع الحالية",
    stat_completed: "المشاريع المكتملة",
    stat_focus: "وضع التركيز",
    stat_focus_value: "مفعّل 🚀",
    projects_title: "المشاريع الحالية",
    add_project: "إضافة مشروع جديد",
    th_project_name: "اسم المشروع",
    th_tech_stack: "التقنيات المستخدمة",
    th_category: "التصنيف",
    th_status: "الحالة",
    th_actions: "الإجراءات",
    th_title: "العنوان",
    th_source: "المصدر",
    view_only: "عرض فقط",
    admin_mode: "وضع المشرف",
    api_demo_title: "عرض توضيحي لربط API",
    api_demo_badge: "REST API مباشر",
    fetch_live_data: "جلب البيانات المباشرة",
    api_demo_note:
      "هذا القسم يجلب بيانات فعلية من REST API مباشر (لا علاقة له ببيانات معرض أعمالك أعلاه) لإظهار ربط GET / POST / PATCH / DELETE.",
    api_new_title_placeholder: "اكتب عنوان سجل جديد...",
    add_record: "إضافة سجل (POST)",
    modal_add_project_title: "إضافة مشروع جديد",
    label_project_name: "اسم المشروع",
    placeholder_project_name: "مثال: متجر الساعات",
    label_tech_stack: "التقنيات المستخدمة",
    placeholder_tech_stack: "مثال: HTML, CSS, JavaScript",
    label_category: "التصنيف",
    placeholder_category: "مثال: تجارة إلكترونية",
    label_status: "الحالة",
    status_in_progress: "قيد التنفيذ",
    status_review: "قيد المراجعة",
    status_completed: "مكتمل",
    label_url: "رابط المشروع",
    cancel: "إلغاء",
    save_project: "حفظ المشروع",
    modal_delete_title: "حذف المشروع",
    delete_confirm_text: "هل أنتِ متأكدة من حذف هذا المشروع؟",
    delete: "حذف",
    modal_admin_title: "تسجيل دخول المشرف",
    admin_login_text: "أدخلي كلمة مرور المشرف لتفعيل وضع التعديل.",
    label_password: "كلمة المرور",
    placeholder_password: "أدخلي كلمة المرور",
    admin_error_text: "كلمة المرور غير صحيحة. حاولي مجدداً.",
    login: "تسجيل الدخول",
    view: "عرض",
    mark_updated: "تحديد كمُحدَّث",
    synced: "متزامن",
    created: "تم الإنشاء",
    updated: "تم التحديث",
  },
};

let currentLang = "en";

/**
 * Returns the translated string for a given key in the current language.
 * @param {string} key
 * @returns {string}
 */
function t(key) {
  return translations[currentLang][key] || key;
}

/**
 * Applies the current language to all static elements with data-i18n /
 * data-i18n-placeholder attributes, and flips the document direction.
 */
function applyTranslations() {
  document.documentElement.lang = currentLang === "ar" ? "ar" : "en";
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  const langLabel = document.getElementById("lang-toggle-label");
  if (langLabel) {
    langLabel.textContent = currentLang === "ar" ? "English" : "العربية";
  }

  const adminStatusBadge = document.getElementById("admin-status-badge");
  if (adminStatusBadge) {
    adminStatusBadge.textContent = getAdminMode() ? t("admin_mode") : t("view_only");
  }
}

/**
 * Toggles between English and Arabic, re-applies translations,
 * and re-renders any dynamic tables so their labels update too.
 */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyTranslations();
  renderProjectsTable();
  renderApiDemoTable(demoRecords);
}

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

const ADMIN_TOKEN_LIFETIME_MS = 30 * 60 * 1000; // Simulated token expires after 30 minutes.

/**
 * Generates a simulated JWT-like token (header.payload.signature).
 * NOTE: This is a client-side simulation for demo purposes only.
 * A real backend (e.g. Laravel Sanctum) would issue a cryptographically
 * signed token from the server after verifying credentials there.
 * @returns {string}
 */
function generateFakeToken() {
  const header = btoa(JSON.stringify({ alg: "SIMULATED", typ: "JWT" }));
  const payload = btoa(JSON.stringify({ role: "admin", issuedAt: Date.now() }));
  const fakeSignature = Math.random().toString(36).slice(2, 15);
  return `${header}.${payload}.${fakeSignature}`;
}

/**
 * Logs the admin in by issuing a simulated token and storing it
 * (with an expiry timestamp) in sessionStorage.
 */
function loginAdmin() {
  const session = {
    token: generateFakeToken(),
    expiresAt: Date.now() + ADMIN_TOKEN_LIFETIME_MS,
  };

  try {
    sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.warn("Could not write admin session.", error);
  }
}

/**
 * Logs the admin out by clearing the stored token.
 */
function logoutAdmin() {
  try {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (error) {
    console.warn("Could not clear admin session.", error);
  }
}

/**
 * Reads admin mode by checking for a valid, non-expired token in session storage.
 * @returns {boolean}
 */
function getAdminMode() {
  try {
    const raw = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return false;

    const session = JSON.parse(raw);
    if (!session.token || !session.expiresAt) return false;

    if (Date.now() > session.expiresAt) {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      return false;
    }

    return true;
  } catch (error) {
    console.warn("Could not read admin session.", error);
    return false;
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
 * Maps a status label to its translation key.
 * @param {string} status
 * @returns {string}
 */
function getStatusI18nKey(status) {
  const normalized = status.trim().toLowerCase();

  if (normalized === "in progress") return "status_in_progress";
  if (normalized === "review") return "status_review";
  if (normalized === "completed") return "status_completed";

  return "status_in_progress";
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
          return `<option value="${status}" ${isSelected}>${t(getStatusI18nKey(status))}</option>`;
        })
        .join("");

      return `
        <tr>
          <td data-label="${t("th_project_name")}">${project.name}</td>
          <td data-label="${t("th_tech_stack")}">${safeTechStack}</td>
          <td data-label="${t("th_category")}">${safeCategory}</td>
          <td data-label="${t("th_status")}">
            ${isAdmin
          ? `<select class="status-select ${statusClass} admin-fade-in" data-project-id="${project.id}" aria-label="Change status for ${project.name}">
              ${statusSelectMarkup}
            </select>`
          : `<span class="status-pill ${statusClass}">${t(getStatusI18nKey(project.status))}</span>`
        }
          </td>
          <td data-label="${t("th_actions")}">
            <div class="table-actions">
              <a class="table-action table-action-view ${hasUrl ? "" : "table-action-disabled"}" href="${safeUrl}" target="_blank" rel="noopener noreferrer" ${hasUrl ? "" : 'aria-disabled="true" tabindex="-1"'}>
                ${t("view")}
              </a>
              ${isAdmin
          ? `<button class="table-action table-action-delete admin-fade-in" type="button" data-project-id="${project.id}" aria-label="Delete ${project.name}">
                ${t("delete")}
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

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetches real records from a live REST API (GET request).
 * @returns {Promise<Array<{id: number, title: string}>>}
 */
async function fetchDemoRecordsFromAPI() {
  const response = await fetch(`${API_BASE_URL}/users/1/posts`);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

let demoRecords = [];

/**
 * Maps raw API records into a shape suitable for rendering in the demo table.
 * @param {Array<{id: number, title: string}>} rawRecords
 * @returns {Array<{id: number, title: string, source: string, status: string}>}
 */
function mapApiRecordsToDemoProjects(rawRecords) {
  return rawRecords.slice(0, 5).map((record) => ({
    id: record.id,
    title: record.title,
    source: "jsonplaceholder.typicode.com",
    status: "Synced",
  }));
}

/**
 * Renders the API demo table rows, including PATCH/DELETE action buttons.
 * @param {Array<{id: number, title: string, source: string, status: string}>} demoProjects
 */
function renderApiDemoTable(demoProjects) {
  const tbody = document.getElementById("api-demo-tbody");
  if (!tbody) return;

  tbody.innerHTML = demoProjects
    .map((item) => {
      const statusClass = item.status === "Updated" ? "status-review" : "status-completed";
      const statusKey = item.status.toLowerCase();
      return `
        <tr>
          <td data-label="${t("th_title")}">${item.title}</td>
          <td data-label="${t("th_source")}">${item.source}</td>
          <td data-label="${t("th_status")}"><span class="status-pill ${statusClass}">${t(statusKey)}</span></td>
          <td data-label="${t("th_actions")}">
            <div class="table-actions">
              <button class="table-action" type="button" data-action="patch" data-record-id="${item.id}">
                ${t("mark_updated")}
              </button>
              <button class="table-action table-action-delete" type="button" data-action="delete" data-record-id="${item.id}">
                ${t("delete")}
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

/**
 * Shows a status message in the API demo panel (loading / error / success).
 * @param {"loading" | "error" | "success"} type
 * @param {string} message
 */
function setApiStatus(type, message) {
  const statusEl = document.getElementById("api-status");
  if (!statusEl) return;

  statusEl.classList.remove("hidden", "status-loading", "status-error", "status-success");
  statusEl.classList.add(`status-${type}`);
  statusEl.textContent = message;
}

/**
 * Handles the full fetch flow: loading state -> API call -> success/error state.
 */
async function handleApiFetchClick() {
  setApiStatus("loading", "Fetching live data from API...");

  try {
    const rawRecords = await fetchDemoRecordsFromAPI();
    demoRecords = mapApiRecordsToDemoProjects(rawRecords);
    renderApiDemoTable(demoRecords);
    setApiStatus("success", `Loaded ${demoRecords.length} records successfully.`);
  } catch (error) {
    console.error("Failed to fetch demo API data.", error);
    setApiStatus("error", "Could not load data from the API. Please try again.");
  }
}

/**
 * Sends a new record to the API (POST request).
 * @param {string} title
 * @returns {Promise<{id: number, title: string}>}
 */
async function postDemoRecordToAPI(title) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, userId: 1 }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return await response.json();
}

/**
 * Handles the "Add Record" form submission: calls POST, then updates local state + UI.
 * @param {SubmitEvent} event
 */
async function handleApiAddSubmit(event) {
  event.preventDefault();
  const titleInput = document.getElementById("api-new-title");
  if (!titleInput) return;

  const title = titleInput.value.trim();
  if (!title) return;

  setApiStatus("loading", "Sending new record to API...");

  try {
    const createdRecord = await postDemoRecordToAPI(title);
    // The fake API returns id: 101 for every POST, so we generate a unique local id
    // to avoid collisions with existing rows in the demo table.
    const localId = Date.now();

    demoRecords = [
      {
        id: localId,
        title: createdRecord.title || title,
        source: "jsonplaceholder.typicode.com",
        status: "Created",
      },
      ...demoRecords,
    ];

    renderApiDemoTable(demoRecords);
    setApiStatus("success", "Record created successfully via POST.");
    titleInput.value = "";
  } catch (error) {
    console.error("Failed to create demo API record.", error);
    setApiStatus("error", "Could not create the record. Please try again.");
  }
}

/**
 * Updates a record on the API (PATCH request).
 * @param {number} id
 * @returns {Promise<{id: number, title: string}>}
 */
async function patchDemoRecordOnAPI(id) {
  const response = await fetch(`${API_BASE_URL}/posts/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Updated" }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return await response.json();
}

/**
 * Handles a "Mark Updated" click: calls PATCH, then updates local state + UI.
 * @param {number} id
 */
async function handlePatchRecord(id) {
  setApiStatus("loading", "Updating record on API...");

  try {
    await patchDemoRecordOnAPI(id);
    demoRecords = demoRecords.map((record) =>
      record.id === id ? { ...record, status: "Updated" } : record
    );
    renderApiDemoTable(demoRecords);
    setApiStatus("success", "Record updated successfully via PATCH.");
  } catch (error) {
    console.error("Failed to update demo API record.", error);
    setApiStatus("error", "Could not update the record. Please try again.");
  }
}

/**
 * Deletes a record from the API (DELETE request).
 * @param {number} id
 */
async function deleteDemoRecordFromAPI(id) {
  const response = await fetch(`${API_BASE_URL}/posts/1`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
}

/**
 * Handles a "Delete" click: calls DELETE, then updates local state + UI.
 * @param {number} id
 */
async function handleDeleteRecord(id) {
  setApiStatus("loading", "Deleting record from API...");

  try {
    await deleteDemoRecordFromAPI(id);
    demoRecords = demoRecords.filter((record) => record.id !== id);
    renderApiDemoTable(demoRecords);
    setApiStatus("success", "Record deleted successfully via DELETE.");
  } catch (error) {
    console.error("Failed to delete demo API record.", error);
    setApiStatus("error", "Could not delete the record. Please try again.");
  }
}

/**
 * Handles clicks inside the API demo table body (event delegation for PATCH/DELETE).
 * @param {MouseEvent} event
 */
function handleApiDemoTableClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const button = target.closest("button[data-action]");
  if (!button) return;

  const recordId = Number(button.dataset.recordId);
  const action = button.dataset.action;

  if (action === "patch") handlePatchRecord(recordId);
  if (action === "delete") handleDeleteRecord(recordId);
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
      adminStatusBadge.textContent = isAdmin ? t("admin_mode") : t("view_only");
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
      logoutAdmin();
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
      loginAdmin();
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

  const apiFetchBtn = document.getElementById("api-fetch-btn");
  if (apiFetchBtn) {
    apiFetchBtn.addEventListener("click", handleApiFetchClick);
  }

  const apiAddForm = document.getElementById("api-add-form");
  if (apiAddForm) {
    apiAddForm.addEventListener("submit", handleApiAddSubmit);
  }

  const apiDemoTbody = document.getElementById("api-demo-tbody");
  if (apiDemoTbody) {
    apiDemoTbody.addEventListener("click", handleApiDemoTableClick);
  }

  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
  }

  applyTranslations();
  loadProjectsFromStorage();
  syncAdminUI();
  updateWidgets();
});
