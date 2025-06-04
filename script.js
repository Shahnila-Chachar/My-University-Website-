document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const dropdowns = document.querySelectorAll('.dropdown');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  // Mobile menu toggle
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  // Mobile dropdown functionality
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 780) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 780) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
      }
    });
  });

  // Active section highlighting
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});


// New 
// Improved number counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.nums');
  const duration = 2000; // 3 seconds total duration
  const frameDuration = 1000 / 30; // 60 fps
  const totalFrames = Math.round(duration / frameDuration);
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let frame = 0;
    
    // Use requestAnimationFrame for smoother animation
    const counterAnimation = () => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.round(target * progress);
      
      // Update counter text
      if (currentValue < target) {
        counter.textContent = currentValue;
        requestAnimationFrame(counterAnimation);
      } else {
        counter.textContent = target + "+"; // Add plus when done
      }
    };
    
    // Start the animation
    requestAnimationFrame(counterAnimation);
  });
}

// Start counting when section is in view
function startCountingWhenVisible() {
  const countDownSection = document.querySelector('.countDown');
  const rect = countDownSection.getBoundingClientRect();
  const isVisible = (
    rect.top <= window.innerHeight * 0.75 && // 75% from top of viewport
    rect.bottom >= window.innerHeight * 0.25 // 25% from bottom
  );
  
  if (isVisible && !countDownSection.classList.contains('counting-started')) {
    countDownSection.classList.add('counting-started');
    animateCounters();
  }
}

// Event listeners
window.addEventListener('scroll', startCountingWhenVisible);
document.addEventListener('DOMContentLoaded', startCountingWhenVisible);



// NEW
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and program items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const programItems = document.querySelectorAll('.item1');
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Show/hide programs based on filter
            
                    programItems.forEach(item => {
  if (filterValue === 'all' || item.getAttribute('data-degree') === filterValue) {
    item.classList.remove('hide');
    item.classList.add('show');
  } else {
    item.classList.remove('show');
    item.classList.add('hide');
  }
});
                
            
        });
    });
});