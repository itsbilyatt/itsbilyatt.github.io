// Visitor Counter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const visitorCountElement = document.getElementById('visitor-count');
  
  // Get the current count from localStorage or initialize it to 10000
  let count = localStorage.getItem('visitorCount');
  if (!count) {
    count = 10000;
  } else {
    count = parseInt(count) + 1;
  }
  
  // Save the new count
  localStorage.setItem('visitorCount', count);
  
  // Update the display with a simple animation
  let currentCount = 10000;
  const targetCount = count;
  const duration = 1000; // 1 second animation
  const steps = 20;
  const increment = (targetCount - 10000) / steps;
  const interval = duration / steps;
  
  const counter = setInterval(() => {
    currentCount += increment;
    if (currentCount >= targetCount) {
      clearInterval(counter);
      currentCount = targetCount;
    }
    visitorCountElement.textContent = Math.floor(currentCount).toLocaleString();
  }, interval);
});

// Profile data (customize as needed)
const profile = {
  name: "Prajyot Birajdar",
  about: "AI Developer with 3+ years of experience building real-time RAG applications, combining strong Python skills with Streamlit for seamless end-to-end solutions. Proven track record in deploying scalable generative AI systems with robust retrieval pipelines",
  github: "https://github.com/itsbilyatt",
  linkedin: "https://www.linkedin.com/in/prajyot-birajdar-1b09a1173/",
  resume: "https://profile.indeed.com/p/prajyotb-v613559", // Add your resume URL here
  medium: "https://medium.com/@prajyotbirajadar1998", // Add your Medium profile URL here
  skills: ["Python", "Generative AI", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Agentic AI", "LLM-powered development", "Web scraping", "Data Scraping", "BeautifulSoup", "Regular Expressions", "FastAPI", "REST API development", "Vector database", "Pinecone", "LangChain", "LangChain-cohere", "Ollama", "DeepSeek 1.5B", "Ada-002 Embedding Model", "Docker", "AWS S3", "CI/CD", "TeamCity", "Git", "Bitbucket", "Jira", "Google Colab", "Jupyter Notebook", "VS Code", "PyCharm", "Postman", "Linux", "Pandas", "Streamlit", "SearchAssist (Kore.AI product)"]
};

// Render profile info
window.onload = function() {
  document.getElementById('dev-name').textContent = profile.name;
  document.getElementById('about').textContent = profile.about;
  document.getElementById('github-link').href = profile.github;
  document.getElementById('linkedin-link').href = profile.linkedin;
  document.getElementById('resume-link').href = profile.resume;
  document.getElementById('medium-link').href = profile.medium;

  // Skills
  const skillsList = document.getElementById('skills-list');
  profile.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Projects
  const projectList = document.getElementById('project-list');
  window.projects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.shortDesc}</div>
    `;
    card.onclick = () => openProjectDetail(idx);
    projectList.appendChild(card);
  });
};

// Open project detail in a new tab
function openProjectDetail(idx) {
  const project = window.projects[idx];
  // Create a new window with project details
  const win = window.open('', '_blank');
  win.document.write(`
    <html><head>
      <title>${project.title} - Project Details</title>
      <link rel="stylesheet" href="styles.css" />
    </head><body style="background: #fff; color: #222; font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;">
      <div style="max-width:600px;margin:2rem auto;padding:2rem;background:#fff;border-radius:16px;box-shadow:0 2px 16px rgba(0,0,0,0.08);">
        <h1 style="color:#f53803;">${project.title}</h1>
        <p style="font-size:1.1rem;">${project.fullDesc}</p>
        <h3>Skills Used</h3>
        <ul style="padding-left:1.2rem;">
          ${project.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <div style="margin-top:1.5rem;">
          <a href="${project.demo}" target="_blank" style="margin-right:1rem;color:#fff;background:#f5d020;padding:0.5rem 1rem;border-radius:8px;text-decoration:none;">Live Demo</a>
          <a href="${project.github}" target="_blank" style="color:#fff;background:#222;padding:0.5rem 1rem;border-radius:8px;text-decoration:none;">GitHub Repo</a>
        </div>
        <div style="margin-top:2rem;"><a href="javascript:window.close()" style="color:#f53803;">Close</a></div>
      </div>
    </body></html>
  `);
  win.document.close();
} 