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
  
  document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects');
    const  hamburgerMenu = document.getElementById('menu');
    const shareSection = document.querySelector('share-section');
  
    // Function to dynamically create project cards
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
  
      projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <br/>
        <div class="project-actions">
          <span class="material-icons" data-id="${project.id}" data-action="share">share</span>
          <span class="material-icons" data-id="${project.id}" data-action="delete">delete</span>
          <span class="material-icons" data-id="${project.id}" data-action="favorite">favorite_border</span>
        </div>
      `;
  
      projectsContainer.appendChild(projectCard);
    });
  
    // Event delegation for project actions
    projectsContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('material-icons')) {
        const action = event.target.getAttribute('data-action');
        const projectId = event.target.getAttribute('data-id');
  
        switch (action) {
          case 'share':
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
    // Implement favorite toggle logic here
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