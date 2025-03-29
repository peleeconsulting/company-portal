// Import libraries
import * as THREE from 'three';
import { gsap } from 'gsap';
import AOS from 'aos';
import logoImage from '../assets/images/logo.png';

// Initialize AOS library for scroll animations
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
});

// Initialize header
const initHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;
  
  // Add header content
  header.innerHTML = `
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="navbar-brand d-flex align-items-center">
          <a href="index.html" class="d-flex align-items-center text-decoration-none">
            <img src="${logoImage}" alt="6ixStack Solutions Logo" height="55" class="me-2">
            <span>6ixStack <span class="text-primary">Solutions</span></span>
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="solutions.html">Solutions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Our Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="faq.html">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `;
  
  // Set active link based on current page
  const navLinks = header.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Add scroll event for header styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
};

// Initialize footer
const initFooter = () => {
  const footer = document.getElementById('footer');
  if (!footer) return;
  
  // Add footer content
  footer.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-lg-4 footer-widget">
          <a href="index.html" class="footer-logo">6ixStack <span class="text-primary">Consulting</span></a>
          <p class="footer-text">Innovative software solutions tailored for small businesses. Expert tech consulting at affordable prices.</p>
          <div class="footer-social">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-2 footer-widget">
          <h3 class="footer-heading">Company</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="solutions.html">Solutions</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-3 footer-widget">
          <h3 class="footer-heading">Services</h3>
          <ul class="footer-links">
            <li><a href="solutions.html">Custom Software</a></li>
            <li><a href="solutions.html">Mobile & Web Apps</a></li>
            <li><a href="solutions.html">Data Analytics</a></li>
            <li><a href="solutions.html">Cloud Solutions</a></li>
            <li><a href="solutions.html">IT Strategy</a></li>
          </ul>
        </div>
        <div class="col-lg-3 footer-widget">
          <h3 class="footer-heading">Contact Us</h3>
          <ul class="footer-contact">
            <li>
              <i class="fas fa-phone-alt"></i>
              <div>
                <a href="tel:+14168943476">+1 (416) 894-3476</a>
              </div>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <div>
                <a href="tel:+16477604720">+1 (647) 760-4720</a>
              </div>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <div>
                <a href="mailto:admin@6ixstack.com">admin@6ixstack.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p class="copyright">© ${new Date().getFullYear()} 6ixStack Solutions. All rights reserved.</p>
      </div>
    </div>
    <a href="#" class="back-to-top"><i class="fas fa-arrow-up"></i></a>
  `;
  
  // Back to top button
  const backToTopButton = footer.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// Initialize hero canvas animation
const initHeroCanvas = () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  
  const colorOptions = [
    new THREE.Color('#D3367A'), // Primary color (Pink)
    new THREE.Color('#FBAD18'), // Secondary color (Yellow)
    new THREE.Color('#E34B8A'), // Light pink
  ];
  
  for (let i = 0; i < particlesCount; i++) {
    // Position
    positions[i * 3] = (Math.random() - 0.5) * 10; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    
    // Color
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Resize handler
  const handleResize = () => {
    const parent = canvas.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  
  window.addEventListener('resize', handleResize);
  handleResize();
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.001;
    
    // Mouse effect
    const positions = particlesGeometry.attributes.position.array;
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(Date.now() * 0.001 + i * 0.1) * 0.002;
    }
    
    particlesGeometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
  };
  
  animate();
};

// Initialize animations for various sections
const initAnimations = () => {
  // Animated squares in About section
  const animatedSquares = document.querySelector('.animated-squares');
  if (animatedSquares) {
    for (let i = 0; i < 5; i++) {
      const square = document.createElement('div');
      square.classList.add('animated-square');
      square.style.width = `${Math.random() * 60 + 40}px`;
      square.style.height = square.style.width;
      square.style.backgroundColor = `rgba(75, 108, 193, ${Math.random() * 0.4 + 0.1})`;
      square.style.position = 'absolute';
      square.style.borderRadius = '10px';
      square.style.left = `${Math.random() * 80}%`;
      square.style.top = `${Math.random() * 80}%`;
      square.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      animatedSquares.appendChild(square);
      
      gsap.to(square, {
        rotation: '+=360',
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
        duration: 4 + Math.random() * 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }
  
  // Moving particles in Why Us section - Enhanced with interactive effects
  const movingParticles = document.querySelector('.moving-particles');
  if (movingParticles) {
    // Create a richer particle system
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.classList.add('moving-particle');
      
      // Varied sizes for depth perception
      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Use primary and secondary colors
      const colorChoice = Math.random();
      const color = colorChoice > 0.5 
        ? `rgba(211, 54, 122, ${Math.random() * 0.6 + 0.2})` // Primary (pink)
        : `rgba(251, 173, 24, ${Math.random() * 0.6 + 0.2})`; // Secondary (yellow)
      
      particle.style.backgroundColor = color;
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      particle.style.zIndex = Math.floor(size); // Larger particles appear on top
      
      movingParticles.appendChild(particle);
      
      // More complex animation paths
      gsap.to(particle, {
        x: Math.random() * 150 - 75,
        y: Math.random() * 150 - 75,
        scale: Math.random() * 1.5 + 0.5,
        rotation: Math.random() * 720 - 360,
        duration: 4 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    }
    
    // Add magnetic effect when cursor is near
    movingParticles.addEventListener('mousemove', (e) => {
      const rect = movingParticles.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const particles = movingParticles.querySelectorAll('.moving-particle');
      particles.forEach(particle => {
        const particleRect = particle.getBoundingClientRect();
        const particleCenterX = particleRect.left + particleRect.width / 2 - rect.left;
        const particleCenterY = particleRect.top + particleRect.height / 2 - rect.top;
        
        const distanceX = mouseX - particleCenterX;
        const distanceY = mouseY - particleCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = distanceX > 0 ? 1 : -1;
          const directionY = distanceY > 0 ? 1 : -1;
          
          gsap.to(particle, {
            x: `+=${directionX * force * 40}`,
            y: `+=${directionY * force * 40}`,
            scale: 1 + force * 0.5,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    });
  }
  
  // Testimonial slider with enhanced transitions
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    const testimonials = testimonialSlider.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    // Create navigation dots
    const navContainer = document.createElement('div');
    navContainer.className = 'testimonial-nav';
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'center';
    navContainer.style.marginTop = '2rem';
    
    testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'testimonial-dot';
      dot.style.width = '12px';
      dot.style.height = '12px';
      dot.style.borderRadius = '50%';
      dot.style.border = 'none';
      dot.style.margin = '0 5px';
      dot.style.backgroundColor = index === 0 ? 'var(--primary-color)' : 'var(--gray-400)';
      dot.style.transition = 'all 0.3s ease';
      dot.style.cursor = 'pointer';
      
      dot.addEventListener('click', () => {
        showTestimonial(index);
        resetAutoPlay();
      });
      
      navContainer.appendChild(dot);
    });
    
    testimonialSlider.parentNode.appendChild(navContainer);
    
    const showTestimonial = (index) => {
      // Update navigation dots
      const dots = navContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? 'var(--primary-color)' : 'var(--gray-400)';
        dot.style.transform = i === index ? 'scale(1.2)' : 'scale(1)';
      });
      
      // Create more dramatic transition
      testimonials.forEach((item, i) => {
        if (i === index) {
          item.style.display = 'block';
          gsap.fromTo(item, 
            { opacity: 0, y: 30, scale: 0.95 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }
          );
        } else {
          gsap.to(item, { 
            opacity: 0, 
            y: -30, 
            scale: 0.95, 
            duration: 0.7, 
            ease: 'power3.in',
            onComplete: () => { item.style.display = 'none'; }
          });
        }
      });
      
      currentTestimonial = index;
    };
    
    let autoPlayTimer;
    
    const resetAutoPlay = () => {
      clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      }, 6000);
    };
    
    showTestimonial(0);
    resetAutoPlay();
  }
  
  // Enhanced solution section animations - these will be further enhanced by the 
  // initSolutionInteractions function, but we'll still initialize the basic animations here
  
  const codeAnimation = document.querySelector('.code-animation');
  if (codeAnimation && !codeAnimation.querySelector('.solution-icon')) {
    codeAnimation.innerHTML = '<i class="fas fa-code fa-3x"></i>';
    gsap.to(codeAnimation.querySelector('i'), {
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
  
  const deviceMockups = document.querySelector('.device-mockups');
  if (deviceMockups && !deviceMockups.querySelector('.solution-icon')) {
    deviceMockups.innerHTML = '<i class="fas fa-mobile-alt fa-3x"></i>';
    gsap.to(deviceMockups.querySelector('i'), {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
  
  const analyticsAnimation = document.querySelector('.analytics-animation');
  if (analyticsAnimation && !analyticsAnimation.querySelector('.solution-icon')) {
    analyticsAnimation.innerHTML = '<i class="fas fa-chart-line fa-3x"></i>';
    gsap.to(analyticsAnimation.querySelector('i'), {
      rotation: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
  
  const cloudAnimation = document.querySelector('.cloud-animation');
  if (cloudAnimation && !cloudAnimation.querySelector('.solution-icon')) {
    cloudAnimation.innerHTML = '<i class="fas fa-cloud fa-3x"></i>';
    gsap.to(cloudAnimation.querySelector('i'), {
      y: -10,
      scale: 1.1,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
  
  const securityAnimation = document.querySelector('.security-animation');
  if (securityAnimation && !securityAnimation.querySelector('.solution-icon')) {
    securityAnimation.innerHTML = '<i class="fas fa-shield-alt fa-3x"></i>';
    gsap.to(securityAnimation.querySelector('i'), {
      rotationY: 360,
      duration: 4,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }
  
  const strategyAnimation = document.querySelector('.strategy-animation');
  if (strategyAnimation && !strategyAnimation.querySelector('.solution-icon')) {
    strategyAnimation.innerHTML = '<i class="fas fa-lightbulb fa-3x"></i>';
    gsap.to(strategyAnimation.querySelector('i'), {
      opacity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
  
  // Add scroll-triggered animations
  const observeElements = document.querySelectorAll('.fade-in-on-scroll');
  if (observeElements.length > 0) {
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observeElements.forEach(element => {
      fadeInObserver.observe(element);
    });
  }
};

// Initialize contact form submission
const initContactForm = () => {
  const contactForm = document.querySelector('#contact-form form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('#name').value;
    const company = contactForm.querySelector('#company').value;
    const email = contactForm.querySelector('#email').value;
    const phone = contactForm.querySelector('#phone').value;
    const service = contactForm.querySelector('#service').value;
    const message = contactForm.querySelector('#message').value;
    
    // In a real implementation, you would send this data to a server
    console.log({
      name,
      company,
      email,
      phone,
      service,
      message
    });
    
    // For demo purposes, show a success message
    const formContainer = contactForm.parentElement;
    
    formContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="fas fa-check-circle text-primary" style="font-size: 4rem;"></i>
        <h2 class="mt-4">Message Sent Successfully!</h2>
        <p class="lead">Thank you for reaching out to us, ${name}.</p>
        <p>We've received your message and will contact you at ${email} within 24 hours.</p>
        <button class="btn btn-primary mt-4" id="reset-form">Send Another Message</button>
      </div>
    `;
    
    // Add event listener to reset the form
    document.getElementById('reset-form').addEventListener('click', () => {
      window.location.reload();
    });
  });
};

// Initialize 6ix Stack Animation in Services Section
const initSixStackSection = () => {
  const stackContainer = document.querySelector('.six-stack-container');
  if (!stackContainer) return;
  
  const stackLayers = stackContainer.querySelectorAll('.stack-layer');
  if (stackLayers.length === 0) return;
  
  // Initialize layers - hide them initially
  stackLayers.forEach(layer => {
    gsap.set(layer, {
      opacity: 0,
      y: 200,
      scale: 0.9,
      rotationX: 45
    });
  });
  
  let lastScrollY = window.scrollY;
  let ticking = false;
  let servicesSectionTop = 0;
  let servicesSectionHeight = 0;
  
  // Get services section positions
  const updateSectionPositions = () => {
    const servicesSection = document.querySelector('.services');
    
    if (servicesSection) {
      const servicesRect = servicesSection.getBoundingClientRect();
      
      // Start animation when services section is 50% in view
      servicesSectionTop = window.scrollY + servicesRect.top - (window.innerHeight * 0.5);
      
      // Use the distance between services start and the service cards
      const serviceCards = servicesSection.querySelector('.row');
      const cardsPosition = serviceCards ? 
                            serviceCards.getBoundingClientRect().top + window.scrollY - 50 : 
                            servicesRect.top + servicesRect.height * 0.7 + window.scrollY;
                                          
      // The total distance to animate over - increased for smoother animation
      servicesSectionHeight = (cardsPosition - servicesSectionTop) * 0.8;
    }
  };
  
  // Initial measurement
  updateSectionPositions();
  
  // Update measurements on resize
  window.addEventListener('resize', updateSectionPositions);
  
  // Simple function to handle scroll events
  const onScroll = () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateLayersOnScroll(lastScrollY);
        ticking = false;
      });
      
      ticking = true;
    }
  };
  
  // Function to update layer visibility based on scroll position
  const updateLayersOnScroll = (scrollY) => {
    // Calculate scroll progress relative to our starting point
    const scrollProgress = scrollY - servicesSectionTop;
    
    // Process even before we reach the services section
    if (scrollProgress < -servicesSectionHeight || scrollProgress > servicesSectionHeight * 1.5) return;
    
    // Calculate progress (0 to 1)
    const sectionProgress = Math.max(0, Math.min(1, scrollProgress / servicesSectionHeight));
    
    // Update each layer based on scroll progress
    stackLayers.forEach((layer, index) => {
      // Use index directly (0 to 5) so top layer comes in first
      const layerThreshold = index * 0.15; // Increased delay between layers
      
      // Calculate progress for this specific layer
      const layerProgress = Math.max(0, Math.min(1, (sectionProgress - layerThreshold) / 0.001));
      
      if (layerProgress > 0) {
        // Bring in the layer with a sequential animation
        gsap.to(layer, {
          opacity: layerProgress,
          y: 200 * (1 - layerProgress),
          scale: 0.9 + (0.1 * layerProgress),
          rotationX: 45 * (1 - layerProgress),
          duration: 0.05,
          ease: "power2.out",
          onComplete: () => {
            if (layerProgress >= 1) {
              layer.classList.add('visible');
            } else {
              layer.classList.remove('visible');
            }
          }
        });
      } else {
        // Hide the layer when scrolled up past its threshold
        gsap.to(layer, {
          opacity: 0,
          y: 200,
          scale: 0.9,
          rotationX: 45,
          duration: 0.02,
          ease: "power2.in",
          onComplete: () => {
            layer.classList.remove('visible');
          }
        });
      }
    });
  };
  
  // Attach scroll listener
  window.addEventListener('scroll', onScroll);
  
  // Initial update
  updateLayersOnScroll(window.scrollY);
  
  // Add hover effect to emphasize each layer
  stackLayers.forEach((layer, index) => {
    layer.addEventListener('mouseenter', () => {
      // Only apply effects when layers are visible
      if (layer.classList.contains('visible')) {
        // Get the current top position from CSS
        const computedStyle = window.getComputedStyle(layer);
        const currentTop = parseFloat(computedStyle.top);
        
        // More lift for hover effect
        gsap.to(layer, {
          y: -10,
          scale: 1.05,
          boxShadow: "0 20px 35px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "power2.out",
          zIndex: 10 // Bring hovered layer to front
        });
        
        // Move other layers slightly to create space
        stackLayers.forEach((otherLayer, otherIndex) => {
          if (otherIndex !== index && otherLayer.classList.contains('visible')) {
            // Move layers above the hovered one up
            if (otherIndex < index) {
              gsap.to(otherLayer, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            }
            // Move layers below the hovered one down
            else {
              gsap.to(otherLayer, {
                y: 5,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }
        });
      }
    });
    
    layer.addEventListener('mouseleave', () => {
      // Reset this layer
      gsap.to(layer, {
        y: 0,
        scale: 1,
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        duration: 0.3,
        ease: "power2.out",
        zIndex: 5 - index // Reset z-index based on layer position
      });
      
      // Reset other layers
      stackLayers.forEach((otherLayer, otherIndex) => {
        if (otherIndex !== index && otherLayer.classList.contains('visible')) {
          gsap.to(otherLayer, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    });
  });
}

// Initialize solution section interactive elements with enhanced scrolling effects
const initSolutionInteractions = () => {
  const solutionSections = document.querySelectorAll('.solution-section');
  if (solutionSections.length === 0) return;
  
  solutionSections.forEach(section => {
    const iconContainer = section.querySelector('.solution-icon-particles');
    if (!iconContainer) return;
    
    const mainIcon = section.querySelector('.solution-icon');
    if (!mainIcon) return;
    
    // Create particles for each solution icon
    const iconClass = mainIcon.className.split(' ').find(className => 
      className.startsWith('fa-') && className !== 'fa-3x'
    );
    
    // Create smaller icons that will float around the main icon
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('i');
      particle.className = `fas ${iconClass} icon-particle`;
      
      // Random position within the container
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      
      // Random size for depth perception
      const randomSize = 0.3 + Math.random() * 0.6;
      
      particle.style.left = `${randomX}%`;
      particle.style.top = `${randomY}%`;
      particle.style.fontSize = `${randomSize}rem`;
      
      // Random delay for animation
      particle.style.transitionDelay = `${Math.random() * 1.5}s`;
      
      iconContainer.appendChild(particle);
    }
    
    // Create scroll-linked animation effect
    // We'll use both intersection observer for visibility 
    // and scroll listener for position-based effects
    
    // Initial state - icons are hidden and inactive
    gsap.set(mainIcon, { scale: 0.5, opacity: 0.2 });
    
    // Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('in-view');
          
          // Animate main icon into view
          gsap.to(mainIcon, { 
            scale: 1.2, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'back.out(1.7)' 
          });
          
          // Animate particles with staggered timing
          const particles = section.querySelectorAll('.icon-particle');
          gsap.to(particles, {
            opacity: 0.7,
            scale: 1,
            stagger: 0.05,
            duration: 0.5,
            ease: 'back.out'
          });
          
          // Add animated movement to particles
          particles.forEach((particle, index) => {
            // Create random orbiting motion
            const radius = 30 + Math.random() * 70;
            const speed = 5 + Math.random() * 10;
            const startAngle = Math.random() * Math.PI * 2;
            
            gsap.to(particle, {
              x: Math.cos(startAngle) * radius,
              y: Math.sin(startAngle) * radius,
              duration: 0,
              onComplete: function() {
                // Start orbiting animation
                gsap.to(particle, {
                  rotation: 'random(-720, 720)',
                  duration: speed,
                  repeat: -1,
                  ease: 'none',
                  modifiers: {
                    x: function() {
                      return Math.cos(parseFloat(particle._gsap.startAngle) + parseFloat(particle._gsap.progress) * Math.PI * 2) * radius + 'px';
                    },
                    y: function() {
                      return Math.sin(parseFloat(particle._gsap.startAngle) + parseFloat(particle._gsap.progress) * Math.PI * 2) * radius + 'px';
                    }
                  },
                  startAngle: startAngle
                });
              }
            });
          });
          
          // Add scroll-based parallax effect
          window.addEventListener('scroll', createScrollHandler(section, mainIcon, particles));
          
        } else {
          // When section leaves viewport
          section.classList.remove('in-view');
          
          // Hide particles
          const particles = section.querySelectorAll('.icon-particle');
          gsap.to(particles, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.02
          });
          
          // Shrink main icon
          gsap.to(mainIcon, { 
            scale: 0.5, 
            opacity: 0.2, 
            duration: 0.5 
          });
        }
      });
    }, { threshold: 0.2 });
    
    // Create a scroll handler for this section
    function createScrollHandler(section, icon, particles) {
      return function() {
        // Only run effect if section is in view
        if (!section.classList.contains('in-view')) return;
        
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const scrollPercentage = 1 - (sectionTop / (window.innerHeight - sectionHeight));
        
        // Only apply effects when section is in a valid scroll position
        if (scrollPercentage >= 0 && scrollPercentage <= 1) {
          // Scale and rotate main icon based on scroll position
          gsap.to(icon, {
            scale: 1 + (scrollPercentage * 0.5),
            rotation: scrollPercentage * 20 - 10,
            duration: 0.3
          });
          
          // Affect particle speed and size based on scroll
          particles.forEach((particle) => {
            // Adjust timeScale of the animation based on scroll
            if (particle._gsap && particle._gsap.animation) {
              particle._gsap.animation.timeScale(0.5 + scrollPercentage);
            }
            
            // Adjust particle size
            gsap.to(particle, {
              scale: 0.8 + (scrollPercentage * 0.5),
              duration: 0.3
            });
          });
        }
      };
    }
    
    observer.observe(section);
  });
};

// Helper function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Create a smooth scroll effect for all internal links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
  initHeroCanvas();
  initAnimations();
  initContactForm();
  initSixStackSection();
  initSolutionInteractions();
  initSmoothScroll();
});

// Export functions for potential reuse
export {
  initHeader,
  initFooter,
  initHeroCanvas,
  initAnimations,
  initContactForm,
  initSixStackSection,
  initSolutionInteractions,
  initSmoothScroll
};
