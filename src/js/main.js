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
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          <img src="${logoImage}" alt="6ixStack Solutions Logo" height="55" class="me-2">
          6ixStack <span class="text-primary">Solutions</span>
        </a>
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
  
  // Moving particles in Why Us section
  const movingParticles = document.querySelector('.moving-particles');
  if (movingParticles) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('moving-particle');
      particle.style.width = `${Math.random() * 15 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = `rgba(75, 108, 193, ${Math.random() * 0.5 + 0.2})`;
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      movingParticles.appendChild(particle);
      
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: 3 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }
  
  // Testimonial slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    const testimonials = testimonialSlider.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    const showTestimonial = (index) => {
      testimonials.forEach((item, i) => {
        if (i === index) {
          item.style.display = 'block';
          gsap.fromTo(item, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.8 }
          );
        } else {
          item.style.display = 'none';
        }
      });
    };
    
    showTestimonial(0);
    
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }
  
  // Solution section animations
  const codeAnimation = document.querySelector('.code-animation');
  if (codeAnimation) {
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
  if (deviceMockups) {
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
  if (analyticsAnimation) {
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
  if (cloudAnimation) {
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
  if (securityAnimation) {
    securityAnimation.innerHTML = '<i class="fas fa-shield-alt fa-3x"></i>';
    gsap.to(securityAnimation.querySelector('i'), {
      rotationY: 360,
      duration: 4,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }
  
  const strategyAnimation = document.querySelector('.strategy-animation');
  if (strategyAnimation) {
    strategyAnimation.innerHTML = '<i class="fas fa-lightbulb fa-3x"></i>';
    gsap.to(strategyAnimation.querySelector('i'), {
      opacity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
};

// Initialize contact form submission
const initContactForm = () => {
  const contactForm = document.getElementById('contact-form');
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

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
  initHeroCanvas();
  initAnimations();
  initContactForm();
});

// Export functions for potential reuse
export {
  initHeader,
  initFooter,
  initHeroCanvas,
  initAnimations,
  initContactForm
};
