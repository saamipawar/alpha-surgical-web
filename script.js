// Mobile nav toggle, smooth scroll and simple contact form handling
(function(){
  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      mainNav.classList.toggle('open');
      mainNav.style.display = mainNav.classList.contains('open') ? 'block' : 'none';
    });ṁ,ṇ'
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href && href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          if(window.innerWidth <= 800 && mainNav){
            mainNav.classList.remove('open');
            mainNav.style.display = 'none';
          }
        }
      }
    });
  });

  // simple client-side contact form validation (demo only)
  const form = document.getElementById('contactForm');
  if(form){
    const msg = form.querySelector('.form-msg') || document.createElement('p');
    if(!form.contains(msg)) msg.className = 'form-msg', form.appendChild(msg);

    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name?.value?.trim();
      const email = form.email?.value?.trim();
      const message = form.message?.value?.trim();

      if(!name || !email || !message){
        msg.textContent = 'Please fill all fields.';
        msg.style.color = 'salmon';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        msg.textContent = 'Please enter a valid email.';
        msg.style.color = 'salmon';
        return;
      }

      // replace this area with real submission (AJAX / Form backend) if needed
      msg.textContent = 'Thanks — your message looks ready to send (demo).';
      msg.style.color = 'lightgreen';
      form.reset();
    });
  }
})();
