
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());

  // nav toggle
  const nt=document.getElementById('navToggle');
  const nav=document.querySelector('.nav');
  if(nt&&nav){ nt.addEventListener('click',()=>{ nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; }); }

  // simple fade-up on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target); }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

  // basic contact form handler (placeholder)
  const form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', (e)=>{
      const action=form.getAttribute('action')||'';
      if(action.includes('yourFormId')){ e.preventDefault(); alert('Replace Formspree endpoint in form action with your form URL.'); }
    });
  }
});
