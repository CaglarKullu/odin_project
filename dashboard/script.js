// Sample projects data
const projects = [
    {
      name: "Super Cool Project",
      description: "Sed tempus sit laoreet scelerisque. Suspendisse faucibus nibh erat, id facilisis felis accumsan nec.",
      id: 1
    },
    {
      name: "Impossible App",
      description: "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id.",
      id: 2
    },
    {
      name: "Ad Blocker",
      description: "Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis.",
      id: 3
    },
    {
        name: "Super Cool Project",
        description: "Sed tempus sit laoreet scelerisque. Suspendisse faucibus nibh erat, id facilisis felis accumsan nec.",
        id: 1
      },
      {
        name: "Impossible App",
        description: "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id.",
        id: 2
      },
      {
        name: "Ad Blocker",
        description: "Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis.",
        id: 3
      },
    // Add more projects as needed
  ];
  
// dummy user info


class User {
  constructor(id, name, lastName, email, phone, password) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
  createUser(id, name, lastName, email, phone, password) {
    // Implement user creation logic here
    return new User(id, name, lastName, email, phone, password);
  };
}
const user = new User(1, "John", "Doe", "3eG2x@example.com", "123-456-7890", "password");
  function displayUserName() {
    const elements = document.getElementsByClassName('user');
    elements[0].innerHTML = ` 
    <h3>${user.name} ${user.lastName}</h3>
    `;
    elements[1].innerHTML = `
    <h3>${user.name} ${user.lastName}</h3>
    `;
  }
  

// Event listener for display projects
document.addEventListener('DOMContentLoaded', displayProjects(projects) );

// Event listener for search input
document.getElementById('search-input').addEventListener('input', filterProjects);

// Event listener for user name
document.addEventListener('DOMContentLoaded', displayUserName);

// Event listener for project actions
document.addEventListener('DOMContentLoaded', () => {

    const projectsContainer = document.querySelector('.projects');
    // Event delegation for project actions
    projectsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('material-icons')) {
        const action = event.target.getAttribute('data-action');
        const projectId = event.target.getAttribute('data-id');
        switch (action) {
          case 'share':
            console.log('button pressed');
            shareProject(projectId);
            break;
          case 'delete':
            deleteProject(projectId);
            break;
          case 'favorite':
            toggleFavorite(event.target);
            break;
        }
      }
    });
  });


  function shareProject(projectId) {
    console.log('Sharing project:', projectId);
    // Implement share logic here
  }
  
  function deleteProject(projectId) {
    console.log('Deleting project:', projectId);
    // Implement delete logic here
  }
  
  function toggleFavorite(icon) {
    const isFavorite = icon.textContent === 'favorite';
    icon.textContent = isFavorite ? 'favorite_border' : 'favorite';
    console.log('Toggling favorite on project:', icon.getAttribute('data-id'));
  }
  

  function toggleShareSection() {
    var shareSection = document.getElementById('share-section');
  
    if (shareSection.style.display === 'block') {
      shareSection.style.display = 'none';
    } else {
      shareSection.style.display = 'block';
    }

  }

  // Attach the event listener to the menu button
  window.addEventListener('click', function(event) {
    var shareSection = document.getElementById('share-section');
    shareSection.classList.toggle('show');
    
    // Hide the share section if the user clicks outside of it
    if (event.target.id !== 'menu' && shareSection.style.display === 'block') {
      shareSection.style.display = 'none';
    }
    event.stopPropagation();
  });

// Function to display projects or a 'no projects found' message
function displayProjects(projectsToDisplay) {
  const projectsContainer = document.getElementById('projects');
  // Clear out current content
  projectsContainer.innerHTML = '';

  if (projectsToDisplay.length === 0) {
    // Show a 'no projects found' message
    const noProjectsMsg = document.createElement('div');
    noProjectsMsg.className = 'no-projects-msg';
    noProjectsMsg.textContent = 'No projects found.';
    projectsContainer.appendChild(noProjectsMsg);
  } else {
    // Add new filtered content
    projectsToDisplay.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-actions">
          <span class="material-icons" data-action="share" data-id="${project.id}">share</span>
          <span class="material-icons" data-action="delete" data-id="${project.id}">delete</span>
          <span class="material-icons" data-action="favorite" data-id="${project.id}">favorite_border</span>
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });
  }
}

// Function to filter projects
function filterProjects() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm)
  );
  displayProjects(filteredProjects);
}







