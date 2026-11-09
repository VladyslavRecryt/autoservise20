const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
function closeMenu(){toggle?.setAttribute('aria-expanded','false');nav?.classList.remove('open');document.body.classList.remove('menu-open')}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.querySelector('#year').textContent=new Date().getFullYear();
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImage.src=item.dataset.full;lightboxImage.alt=item.querySelector('img').alt;lightbox.showModal()}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.services-grid,.about-image,.about-copy,.gallery-item,.review-card,.contact-main,.contact-details').forEach((el,index)=>{el.classList.add('reveal');el.style.transitionDelay=`${(index%3)*70}ms`;observer.observe(el)});
