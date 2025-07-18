
function handleMenu ()
{
    const navDialog = document.querySelector('#nav-dialog');
    navDialog.classList.toggle('hidden');
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Scroll Animation Logic
  function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  let pos1 = -line1.offsetWidth;
  let pos2 = line2.offsetWidth;
  let pos3 = -line3.offsetWidth;

  function animate() {
    // Line 1 - left to right
    if (isInViewport(line1)) {
      pos1 += 1;
      if (pos1 > window.innerWidth) pos1 = -line1.offsetWidth;
      line1.style.transform = `translateX(${pos1}px)`;
    }

    // Line 2 - right to left
    if (isInViewport(line2)) {
      pos2 -= 1;
      if (pos2 < -line2.scrollWidth) pos2 = window.innerWidth;
      line2.style.transform = `translateX(${pos2}px)`;
    }

    // Line 3 - left to right
    if (isInViewport(line3)) {
      pos3 += 1;
      if (pos3 > window.innerWidth) pos3 = -line3.offsetWidth;
      line3.style.transform = `translateX(${pos3}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});


document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('#faq .group');
  
    faqItems.forEach((item) => {
      const question = item.querySelector('dt');
      const answer = item.querySelector('dd');
      const icon = item.querySelector('i');
  
      question.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
  
        // Close all open answers
        faqItems.forEach((el) => {
          el.querySelector('dd').classList.add('hidden');
          el.querySelector('i').classList.remove('rotate-180');
        });
  
        // Toggle current answer
        if (!isOpen) {
          answer.classList.remove('hidden');
         
        }
      });
    });
  });
  