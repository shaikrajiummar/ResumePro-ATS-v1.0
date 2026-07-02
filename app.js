/* ==========================================================================
   RESUME DATA STORE
   ========================================================================== */

const resumeData = {
  personalInfo: {
    name: "SHAIK RAJIUMMAR",
    title: "Software Engineer | Full Stack Developer",
    location: "Hyderabad, Telangana, India",
    phone: "+91 9398666507",
    email: "shaik.rajiummar.shaik@gmail.com",
    linkedin: "linkedin.com/in/shaik-rajiummar",
    github: "github.com/shaikrajiummar"
  },
  summary: "Result-driven Computer Science Engineering student with hands-on experience in building scalable full-stack web applications, database management, and object-oriented software design. Proficient in Java, Python, JavaScript, and modern frameworks (React.js, Node.js, Express.js), with a strong foundation in database design (SQL, MongoDB) and Salesforce development. Experienced in implementing secure role-based portals, sports analytics web scrapers, and AI/RAG integrations. Certified in Python, Java, and AI foundations. Seeking an entry-level Software Engineer or Full Stack Developer role to leverage engineering principles and deliver high-impact software solutions.",
  skills: [
    { category: "Programming Languages", items: "Java, Python, JavaScript (ES6+), HTML5, CSS3, SQL" },
    { category: "Frameworks & Libraries", items: "React.js, Node.js, Express.js, Tailwind CSS, Bootstrap, Vite, JDBC, D3.js" },
    { category: "Databases", items: "MySQL, PostgreSQL, MongoDB, Database Design & Normalization" },
    { category: "Developer Tools & Version Control", items: "Git, GitHub, VS Code, Salesforce CLI" },
    { category: "Software Engineering Concepts", items: "Data Structures & Algorithms (DSA), Software Development Life Cycle (SDLC), Object-Oriented Programming (OOP), RESTful APIs, Web Scraping, Database Management Systems (DBMS), Agile Methodologies" }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "Malla Reddy University, Hyderabad",
      date: "September 2022 – Present",
      gpa: "8.74 CGPA",
      details: "Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering"
    },
    {
      degree: "Intermediate Education (Class XII - MPC)",
      institution: "Sri Chaitanya Junior College, Khammam",
      date: "Graduation: 2022",
      gpa: "85.7%",
      details: ""
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Madhu Vidyalayam",
      date: "Graduation: 2020",
      gpa: "95.0%",
      details: ""
    }
  ],
  projects: [
    {
      name: "Blood Donor Web Application",
      tech: "React.js, Node.js, Express.js, MongoDB",
      bullets: [
        "Developed a scalable full-stack portal linking donors, hospitals, and blood banks to resolve emergency blood inventory shortages.",
        "Implemented secure role-based user authentication using JSON Web Tokens (JWT) for Donors, Hospitals, and Admins.",
        "Designed and integrated a real-time blood inventory tracking system with dynamic visual warnings for low-stock categories.",
        "Sanitized all MongoDB database query points to prevent SQL/NoSQL injection attacks and protect user medical data."
      ]
    },
    {
      name: "Student ERP System",
      tech: "Java, JDBC, MySQL, HTML, CSS, JavaScript",
      bullets: [
        "Designed and engineered a centralized ERP portal for academic timeline scheduling, administrative registers, and attendance management.",
        "Managed secure relational database operations utilizing Java Database Connectivity (JDBC) for CRUD transaction tasks.",
        "Developed a responsive web frontend dashboard featuring automated attendance progress graphs and student notifications.",
        "Programmed encryption-based password hashing modules to verify and protect user credentials."
      ]
    },
    {
      name: "CricSta - Cricket Stats Web App",
      tech: "Python, BeautifulSoup, HTML, CSS, JavaScript",
      bullets: [
        "Built a sports statistics portal scraping and visualizing ODI metrics, ICC tournament highlights, and live match standing data.",
        "Designed Python scraping scripts using BeautifulSoup to aggregate live commentary feeds and cricket player statistics.",
        "Developed responsive data charts comparing batting averages and strike rates using custom CSS and vanilla JavaScript.",
        "Optimized web queries to retrieve and load data assets smoothly, reducing page loading times."
      ]
    },
    {
      name: "Jackie Jeans Onboarding Experience",
      tech: "React.js, Tailwind CSS, Web Speech API",
      bullets: [
        "Developed a premium, mobile-first brand onboarding portal featuring sizing calculations and hands-free voice assistance.",
        "Created a multi-step animated fit quiz to calculate sizes based on height, weight, and fit preference configurations.",
        "Integrated Web Speech API (Speech Recognition and Synthesis) to power a hands-free conversational voice assistant.",
        "Engineered responsive sizing card matrices and custom page transitions, accelerating user onboarding sessions."
      ]
    },
    {
      name: "IndusMind AI Platform",
      tech: "React.js, Vite, D3.js, NLP/RAG",
      bullets: [
        "Architected an enterprise industrial intelligence platform incorporating smart compliance audits and node-graph tracking.",
        "Designed a RAG-powered query chatbot that retrieves technical operating manuals and formats inline document source citations.",
        "Constructed an interactive network graph using D3.js to map and visualize factory databases and incident logs.",
        "Developed predictive telemetry checkers to evaluate sensor thresholds and forecast maintenance windows."
      ]
    }
  ],
  certifications: [
    "Introduction to Python – University of Pennsylvania | Coursera",
    "Programming Essentials – Rice University | Coursera",
    "Artificial Intelligence Foundations – IBM SkillsBuild",
    "Data Analytics Job Simulation – Deloitte (Simulation Completed)",
    "Introduction to Java – HP Life",
    "Data Science and Analytics – Coursera"
  ],
  leadership: [
    {
      role: "Student Ambassador",
      organization: "LetsUpgrade EdTech Pvt. Ltd.",
      bullets: [
        "Conducted student outreach campaigns, promoting coding literacy and tech-course enrollments."
      ]
    },
    {
      role: "Blood Donation Volunteer",
      organization: "Campus Social Drives",
      bullets: [
        "Supported donor mobilization, logistics, and awareness campaigns, inspiring the development of the Blood Donor Web App."
      ]
    }
  ],
  honors: [
    "VBYLD Stage III Finalist: Qualified for the Stage III State-Level Championship conducted by the Ministry of Youth Affairs & Sports, Government of India.",
    "eSports Winner: Secured top ranks in inter-college competitive tournaments, demonstrating teamwork and tactical strategy."
  ],
  interests: "Cycling, Swimming, Music, Data Scraping"
};

/* ==========================================================================
   TEMPLATE COMPILERS / RENDER ENGINE
   ========================================================================== */

// SVG Icon Helper
const icons = {
  location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="12" r="3"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  certificate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
};

// 1. Render Modern Theme View
function renderModernTheme() {
  const data = resumeData;
  const p = data.personalInfo;
  
  let skillsHTML = "";
  data.skills.forEach(group => {
    if (!group.items.trim()) return;
    const chips = group.items.split(',').map(item => `<span class="modern-skill-badge">${item.trim()}</span>`).join('');
    skillsHTML += `
      <div class="modern-skills-group">
        <div class="modern-skills-label">${group.category}</div>
        <div class="modern-skills-chips">${chips}</div>
      </div>
    `;
  });

  let educationHTML = "";
  data.education.forEach(edu => {
    educationHTML += `
      <div class="modern-timeline-item">
        <div class="modern-timeline-header">
          <div class="modern-timeline-title">${edu.degree}</div>
          <div class="modern-timeline-date">${edu.date}</div>
        </div>
        <div class="modern-timeline-subtitle">${edu.institution}</div>
        ${edu.gpa ? `<div class="modern-timeline-date" style="color: var(--accent-color); margin-top: -4px;">Score: ${edu.gpa}</div>` : ''}
        ${edu.details ? `<div style="font-size: 0.875rem; color: var(--text-muted); margin-top: 4px;">${edu.details}</div>` : ''}
      </div>
    `;
  });

  let projectsHTML = "";
  data.projects.forEach(proj => {
    const bullets = proj.bullets.map(b => `<li>${b}</li>`).join('');
    projectsHTML += `
      <div class="modern-timeline-item">
        <div class="modern-timeline-header">
          <div class="modern-timeline-title">${proj.name}</div>
          <span class="modern-skill-badge" style="font-size:0.75rem; padding: 2px 8px; border-radius: 4px;">${proj.tech}</span>
        </div>
        <ul class="modern-timeline-bullets">${bullets}</ul>
      </div>
    `;
  });

  let certificationsHTML = "";
  data.certifications.forEach(cert => {
    if (!cert.trim()) return;
    certificationsHTML += `
      <div class="modern-cert-card">
        <span class="modern-cert-icon">${icons.certificate}</span>
        <span class="modern-cert-text">${cert}</span>
      </div>
    `;
  });

  let leadershipHTML = "";
  data.leadership.forEach(lead => {
    const bullets = lead.bullets.map(b => `<li>${b}</li>`).join('');
    leadershipHTML += `
      <div class="modern-timeline-item">
        <div class="modern-timeline-header">
          <div class="modern-timeline-title">${lead.role}</div>
        </div>
        <div class="modern-timeline-subtitle">${lead.organization}</div>
        <ul class="modern-timeline-bullets">${bullets}</ul>
      </div>
    `;
  });

  const honorsHTML = data.honors.map(h => `<div class="modern-honor-item">• ${h}</div>`).join('');
  const interestsHTML = data.interests.split(',').map(i => `<span class="modern-interest-tag">${i.trim()}</span>`).join('');

  const html = `
    <!-- Header -->
    <header class="modern-header">
      <div class="modern-header-title">
        <h1>${p.name}</h1>
        <div class="subtitle">${p.title}</div>
      </div>
      <div class="modern-contact-list">
        ${p.location ? `<div class="modern-contact-item">${p.location} ${icons.location}</div>` : ''}
        ${p.phone ? `<div class="modern-contact-item"><a href="tel:${p.phone.replace(/\s+/g, '')}">${p.phone}</a> ${icons.phone}</div>` : ''}
        ${p.email ? `<div class="modern-contact-item"><a href="mailto:${p.email}">${p.email}</a> ${icons.email}</div>` : ''}
        ${p.linkedin ? `<div class="modern-contact-item"><a href="https://${p.linkedin}" target="_blank">${p.linkedin}</a> ${icons.linkedin}</div>` : ''}
        ${p.github ? `<div class="modern-contact-item"><a href="https://${p.github}" target="_blank">${p.github}</a> ${icons.github}</div>` : ''}
      </div>
    </header>

    <!-- Professional Summary -->
    <section class="modern-summary">
      ${data.summary}
    </section>

    <!-- Technical Skills -->
    <section class="modern-section">
      <div class="modern-section-title">Technical Skills</div>
      <div class="modern-section-content">
        <div class="modern-skills-grid">${skillsHTML}</div>
      </div>
    </section>

    <!-- Education -->
    <section class="modern-section">
      <div class="modern-section-title">Education</div>
      <div class="modern-section-content">
        <div class="modern-timeline">${educationHTML}</div>
      </div>
    </section>

    <!-- Academic Projects -->
    <section class="modern-section">
      <div class="modern-section-title">Academic Projects</div>
      <div class="modern-section-content">
        <div class="modern-timeline">${projectsHTML}</div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="modern-section">
      <div class="modern-section-title">Certifications</div>
      <div class="modern-section-content">
        <div class="modern-certifications-list">${certificationsHTML}</div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="modern-section">
      <div class="modern-section-title">Leadership & Volunteering</div>
      <div class="modern-section-content">
        <div class="modern-timeline">${leadershipHTML}</div>
      </div>
    </section>

    <!-- Honors & Interests -->
    <section class="modern-section">
      <div class="modern-section-title">Honors & Interests</div>
      <div class="modern-section-content" style="gap: 16px;">
        <div class="modern-honors-list">${honorsHTML}</div>
        <div class="modern-skills-label" style="margin-top: 8px;">Interests</div>
        <div class="modern-interests-box">${interestsHTML}</div>
      </div>
    </section>
  `;

  document.getElementById("modern-resume-view").innerHTML = html;
}

// 2. Render ATS Theme View (Completely standard structure for parsers)
function renderAtsTheme() {
  const data = resumeData;
  const p = data.personalInfo;

  // Header
  const contactParts = [];
  if (p.location) contactParts.push(p.location);
  if (p.phone) contactParts.push(p.phone);
  if (p.email) contactParts.push(`<a href="mailto:${p.email}">${p.email}</a>`);
  if (p.linkedin) contactParts.push(`<a href="https://${p.linkedin}">${p.linkedin}</a>`);
  if (p.github) contactParts.push(`<a href="https://${p.github}">${p.github}</a>`);
  const contactLine = contactParts.join(" | ");

  // Skills
  let skillsHTML = "";
  data.skills.forEach(group => {
    if (!group.items.trim()) return;
    skillsHTML += `
      <div class="ats-skills-list">
        <strong>${group.category}:</strong> ${group.items}
      </div>
    `;
  });

  // Education
  let educationHTML = "";
  data.education.forEach(edu => {
    educationHTML += `
      <div class="ats-entry">
        <div class="ats-entry-header">
          <span>${edu.degree.toUpperCase()}</span>
          <span>${edu.date}</span>
        </div>
        <div class="ats-entry-subheader">
          <span>${edu.institution}</span>
          ${edu.gpa ? `<span>Score: ${edu.gpa}</span>` : ''}
        </div>
        ${edu.details ? `<div style="font-size: 9.5pt; margin-top: 2px;">${edu.details}</div>` : ''}
      </div>
    `;
  });

  // Projects
  let projectsHTML = "";
  data.projects.forEach(proj => {
    const bullets = proj.bullets.map(b => `<li>${b}</li>`).join('');
    projectsHTML += `
      <div class="ats-entry">
        <div class="ats-entry-header">
          <span>${proj.name.toUpperCase()}</span>
          <span>${proj.tech}</span>
        </div>
        <ul class="ats-bullets">${bullets}</ul>
      </div>
    `;
  });

  // Certifications
  const certsHTML = data.certifications
    .filter(c => c.trim())
    .map(c => `<li>${c}</li>`)
    .join('');

  // Leadership
  let leadershipHTML = "";
  data.leadership.forEach(lead => {
    const bullets = lead.bullets.map(b => `<li>${b}</li>`).join('');
    leadershipHTML += `
      <div class="ats-entry">
        <div class="ats-entry-header">
          <span>${lead.role.toUpperCase()}</span>
          <span>${lead.organization}</span>
        </div>
        <ul class="ats-bullets">${bullets}</ul>
      </div>
    `;
  });

  // Honors
  const honorsHTML = data.honors.map(h => `<li>${h}</li>`).join('');

  const html = `
    <div class="ats-header">
      <h1>${p.name}</h1>
      <div class="title">${p.title.toUpperCase()}</div>
      <div class="contact">${contactLine}</div>
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Professional Summary</div>
      <div class="ats-summary">${data.summary}</div>
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Technical Skills</div>
      ${skillsHTML}
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Education</div>
      ${educationHTML}
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Academic Projects</div>
      ${projectsHTML}
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Certifications</div>
      <ul class="ats-certs-list">${certsHTML}</ul>
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Leadership & Volunteer Work</div>
      ${leadershipHTML}
    </div>

    <div class="ats-section">
      <div class="ats-section-title">Honors & Interests</div>
      <ul class="ats-honors-list">${honorsHTML}</ul>
      <div style="font-size: 9.5pt; margin-top: 6px; margin-left: 20px;">
        <strong>Interests:</strong> ${data.interests}
      </div>
    </div>
  `;

  document.getElementById("ats-resume-view").innerHTML = html;
}

// 3. Render Both Previews
function reRenderAll() {
  renderModernTheme();
  renderAtsTheme();
}

/* ==========================================================================
   LIVE SIDEBAR EDITOR MANAGEMENT
   ========================================================================== */

function populateEditorFields() {
  const p = resumeData.personalInfo;
  
  // Set personal info inputs
  document.getElementById("input-name").value = p.name;
  document.getElementById("input-title").value = p.title;
  document.getElementById("input-location").value = p.location;
  document.getElementById("input-phone").value = p.phone;
  document.getElementById("input-email").value = p.email;
  document.getElementById("input-linkedin").value = p.linkedin;
  document.getElementById("input-github").value = p.github;

  // Summary
  document.getElementById("input-summary").value = resumeData.summary;

  // Dynamic Lists Editor
  renderSkillsEditor();
  renderEducationEditor();
  renderProjectsEditor();
  renderCertificationsEditor();
  renderLeadershipEditor();

  // Honors & Interests
  document.getElementById("input-honors").value = resumeData.honors.join('\n');
  document.getElementById("input-interests").value = resumeData.interests;
}

// Bind direct inputs
function setupBasicInputListeners() {
  // Personal Info
  const basicFields = [
    { id: "input-name", obj: "personalInfo", key: "name" },
    { id: "input-title", obj: "personalInfo", key: "title" },
    { id: "input-location", obj: "personalInfo", key: "location" },
    { id: "input-phone", obj: "personalInfo", key: "phone" },
    { id: "input-email", obj: "personalInfo", key: "email" },
    { id: "input-linkedin", obj: "personalInfo", key: "linkedin" },
    { id: "input-github", obj: "personalInfo", key: "github" }
  ];

  basicFields.forEach(field => {
    document.getElementById(field.id).addEventListener("input", (e) => {
      resumeData[field.obj][field.key] = e.target.value;
      reRenderAll();
    });
  });

  // Summary
  document.getElementById("input-summary").addEventListener("input", (e) => {
    resumeData.summary = e.target.value;
    reRenderAll();
  });

  // Honors
  document.getElementById("input-honors").addEventListener("input", (e) => {
    resumeData.honors = e.target.value.split('\n').filter(line => line.trim());
    reRenderAll();
  });

  // Interests
  document.getElementById("input-interests").addEventListener("input", (e) => {
    resumeData.interests = e.target.value;
    reRenderAll();
  });
}

// 3.1 Dynamic Skills Editor
function renderSkillsEditor() {
  const container = document.getElementById("skills-editor-container");
  container.innerHTML = "";

  resumeData.skills.forEach((skill, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editor-list-item";
    itemDiv.innerHTML = `
      <button class="btn-remove-item" data-index="${index}">&times;</button>
      <div class="form-group" style="padding:0; margin-bottom: 8px;">
        <label>Skill Category</label>
        <input type="text" class="skill-cat-input" data-index="${index}" value="${skill.category}">
      </div>
      <div class="form-group" style="padding:0;">
        <label>Items (Comma separated)</label>
        <textarea class="skill-items-input" data-index="${index}" rows="2">${skill.items}</textarea>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  // Add event listeners
  container.querySelectorAll(".skill-cat-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.skills[idx].category = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".skill-items-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.skills[idx].items = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      resumeData.skills.splice(idx, 1);
      renderSkillsEditor();
      reRenderAll();
    });
  });

  // Add 'Add new group' button if not present
  if (!document.getElementById("btn-add-skill-group")) {
    const addBtn = document.createElement("button");
    addBtn.id = "btn-add-skill-group";
    addBtn.className = "btn btn-secondary btn-add-item";
    addBtn.innerText = "+ Add Skill Category";
    addBtn.addEventListener("click", () => {
      resumeData.skills.push({ category: "New Category", items: "Skill A, Skill B" });
      renderSkillsEditor();
      reRenderAll();
    });
    container.parentNode.appendChild(addBtn);
  }
}

// 3.2 Dynamic Education Editor
function renderEducationEditor() {
  const container = document.getElementById("education-editor-container");
  container.innerHTML = "";

  resumeData.education.forEach((edu, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editor-list-item";
    itemDiv.innerHTML = `
      <button class="btn-remove-item" data-index="${index}">&times;</button>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>Degree / Qualification</label>
        <input type="text" class="edu-degree-input" data-index="${index}" value="${edu.degree}">
      </div>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>School / Institution</label>
        <input type="text" class="edu-school-input" data-index="${index}" value="${edu.institution}">
      </div>
      <div class="form-group-row" style="padding:0; margin-bottom: 6px;">
        <div class="form-group" style="padding:0;">
          <label>Timeline / Date</label>
          <input type="text" class="edu-date-input" data-index="${index}" value="${edu.date}">
        </div>
        <div class="form-group" style="padding:0;">
          <label>GPA / Score</label>
          <input type="text" class="edu-gpa-input" data-index="${index}" value="${edu.gpa}">
        </div>
      </div>
      <div class="form-group" style="padding:0;">
        <label>Details / Coursework</label>
        <input type="text" class="edu-details-input" data-index="${index}" value="${edu.details}">
      </div>
    `;
    container.appendChild(itemDiv);
  });

  // Listeners
  const bindings = [
    { cls: ".edu-degree-input", key: "degree" },
    { cls: ".edu-school-input", key: "institution" },
    { cls: ".edu-date-input", key: "date" },
    { cls: ".edu-gpa-input", key: "gpa" },
    { cls: ".edu-details-input", key: "details" }
  ];

  bindings.forEach(bind => {
    container.querySelectorAll(bind.cls).forEach(input => {
      input.addEventListener("input", (e) => {
        const idx = e.target.dataset.index;
        resumeData.education[idx][bind.key] = e.target.value;
        reRenderAll();
      });
    });
  });

  container.querySelectorAll(".btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      resumeData.education.splice(idx, 1);
      renderEducationEditor();
      reRenderAll();
    });
  });

  if (!document.getElementById("btn-add-education")) {
    const addBtn = document.createElement("button");
    addBtn.id = "btn-add-education";
    addBtn.className = "btn btn-secondary btn-add-item";
    addBtn.innerText = "+ Add Education Entry";
    addBtn.addEventListener("click", () => {
      resumeData.education.push({ degree: "Qualification Name", institution: "Institution Name", date: "Date", gpa: "", details: "" });
      renderEducationEditor();
      reRenderAll();
    });
    container.parentNode.appendChild(addBtn);
  }
}

// 3.3 Dynamic Projects Editor
function renderProjectsEditor() {
  const container = document.getElementById("projects-editor-container");
  container.innerHTML = "";

  resumeData.projects.forEach((proj, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editor-list-item";
    itemDiv.innerHTML = `
      <button class="btn-remove-item" data-index="${index}">&times;</button>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>Project Name</label>
        <input type="text" class="proj-name-input" data-index="${index}" value="${proj.name}">
      </div>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>Technologies Used</label>
        <input type="text" class="proj-tech-input" data-index="${index}" value="${proj.tech}">
      </div>
      <div class="form-group" style="padding:0;">
        <label>Bullet Points (One per line)</label>
        <textarea class="proj-bullets-input" data-index="${index}" rows="4">${proj.bullets.join('\n')}</textarea>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  // Listeners
  container.querySelectorAll(".proj-name-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.projects[idx].name = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".proj-tech-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.projects[idx].tech = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".proj-bullets-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.projects[idx].bullets = e.target.value.split('\n').filter(line => line.trim());
      reRenderAll();
    });
  });

  container.querySelectorAll(".btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      resumeData.projects.splice(idx, 1);
      renderProjectsEditor();
      reRenderAll();
    });
  });

  if (!document.getElementById("btn-add-project")) {
    const addBtn = document.createElement("button");
    addBtn.id = "btn-add-project";
    addBtn.className = "btn btn-secondary btn-add-item";
    addBtn.innerText = "+ Add Academic Project";
    addBtn.addEventListener("click", () => {
      resumeData.projects.push({ name: "Project Name", tech: "HTML, CSS", bullets: ["Key contribution point here"] });
      renderProjectsEditor();
      reRenderAll();
    });
    container.parentNode.appendChild(addBtn);
  }
}

// 3.4 Dynamic Certifications Editor
function renderCertificationsEditor() {
  const container = document.getElementById("certifications-editor-container");
  container.innerHTML = "";

  resumeData.certifications.forEach((cert, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editor-list-item";
    itemDiv.style.padding = "6px 10px";
    itemDiv.innerHTML = `
      <button class="btn-remove-item" data-index="${index}" style="top:4px; right:6px;">&times;</button>
      <input type="text" class="cert-input" data-index="${index}" value="${cert}" style="width: 85%; padding: 4px 6px; font-size: 0.8rem; background-color: var(--bg-input); border: 1px solid var(--border-color); border-radius: 4px; color: var(--text-primary);">
    `;
    container.appendChild(itemDiv);
  });

  container.querySelectorAll(".cert-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.certifications[idx] = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      resumeData.certifications.splice(idx, 1);
      renderCertificationsEditor();
      reRenderAll();
    });
  });

  if (!document.getElementById("btn-add-certification")) {
    const addBtn = document.createElement("button");
    addBtn.id = "btn-add-certification";
    addBtn.className = "btn btn-secondary btn-add-item";
    addBtn.innerText = "+ Add Certification";
    addBtn.addEventListener("click", () => {
      resumeData.certifications.push("New Certificate | Organization");
      renderCertificationsEditor();
      reRenderAll();
    });
    container.parentNode.appendChild(addBtn);
  }
}

// 3.5 Dynamic Leadership Editor
function renderLeadershipEditor() {
  const container = document.getElementById("leadership-editor-container");
  container.innerHTML = "";

  resumeData.leadership.forEach((lead, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editor-list-item";
    itemDiv.innerHTML = `
      <button class="btn-remove-item" data-index="${index}">&times;</button>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>Role</label>
        <input type="text" class="lead-role-input" data-index="${index}" value="${lead.role}">
      </div>
      <div class="form-group" style="padding:0; margin-bottom: 6px;">
        <label>Organization / Initiative</label>
        <input type="text" class="lead-org-input" data-index="${index}" value="${lead.organization}">
      </div>
      <div class="form-group" style="padding:0;">
        <label>Description Bullets (One per line)</label>
        <textarea class="lead-bullets-input" data-index="${index}" rows="3">${lead.bullets.join('\n')}</textarea>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  container.querySelectorAll(".lead-role-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.leadership[idx].role = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".lead-org-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.leadership[idx].organization = e.target.value;
      reRenderAll();
    });
  });

  container.querySelectorAll(".lead-bullets-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = e.target.dataset.index;
      resumeData.leadership[idx].bullets = e.target.value.split('\n').filter(line => line.trim());
      reRenderAll();
    });
  });

  container.querySelectorAll(".btn-remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      resumeData.leadership.splice(idx, 1);
      renderLeadershipEditor();
      reRenderAll();
    });
  });

  if (!document.getElementById("btn-add-leadership")) {
    const addBtn = document.createElement("button");
    addBtn.id = "btn-add-leadership";
    addBtn.className = "btn btn-secondary btn-add-item";
    addBtn.innerText = "+ Add Leadership Work";
    addBtn.addEventListener("click", () => {
      resumeData.leadership.push({ role: "Volunteer", organization: "Social Org", bullets: ["Key impact bullet point"] });
      renderLeadershipEditor();
      reRenderAll();
    });
    container.parentNode.appendChild(addBtn);
  }
}

/* ==========================================================================
   APP INITIALIZATION & CONTROLLERS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initial renders
  reRenderAll();
  populateEditorFields();
  setupBasicInputListeners();

  // 1. Sidebar toggles
  const sidebar = document.getElementById("editor-sidebar");
  const toggleEditorBtn = document.getElementById("btn-toggle-editor");
  const closeSidebarBtn = document.getElementById("btn-close-sidebar");

  const toggleSidebar = () => {
    sidebar.classList.toggle("collapsed");
    toggleEditorBtn.classList.toggle("btn-secondary");
    toggleEditorBtn.classList.toggle("btn-primary");
  };

  toggleEditorBtn.addEventListener("click", toggleSidebar);
  closeSidebarBtn.addEventListener("click", toggleSidebar);

  // Start with sidebar collapsed for cleaner view
  sidebar.classList.add("collapsed");

  // 2. Theme Toggles
  const themeBtn = document.getElementById("btn-toggle-theme");
  const sunIcon = themeBtn.querySelector(".sun-icon");
  const moonIcon = themeBtn.querySelector(".moon-icon");

  themeBtn.addEventListener("click", () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      root.setAttribute("data-theme", "dark");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  });

  // 3. View Switcher
  const viewStage = document.getElementById("preview-stage");
  const modernBtn = document.getElementById("btn-view-modern");
  const atsBtn = document.getElementById("btn-view-ats");

  modernBtn.addEventListener("click", () => {
    modernBtn.classList.add("active");
    atsBtn.classList.remove("active");
    viewStage.className = "preview-stage view-mode-modern";
  });

  atsBtn.addEventListener("click", () => {
    atsBtn.classList.add("active");
    modernBtn.classList.remove("active");
    viewStage.className = "preview-stage view-mode-ats";
  });

  // 4. Print / PDF Export Handler
  const printBtn = document.getElementById("btn-print");
  printBtn.addEventListener("click", () => {
    window.print();
  });
});
