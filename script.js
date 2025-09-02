document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.image-wrapper');
  let isDragging = false;
  let previousX = 0;
  let rotationY = 0;

  // Mouse events
  wrapper.addEventListener('mousedown', startDragging);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDragging);

  // Touch events for mobile
  wrapper.addEventListener('touchstart', startDragging);
  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', stopDragging);

  function startDragging(e) {
    isDragging = true;
    wrapper.style.animation = 'none'; // Stop infinite rotation
    previousX = e.clientX || e.touches[0].clientX;
  }

  function drag(e) {
    if (!isDragging) return;

    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - previousX;
    rotationY += deltaX * 0.5; // Adjust sensitivity with 0.5
    wrapper.style.transform = `rotateY(${rotationY}deg)`;
    previousX = clientX;
  }

  function stopDragging() {
    isDragging = false;
    // Resume infinite rotation from current angle
    wrapper.style.animation = `spin 5s linear infinite`;
    wrapper.style.transform = `rotateY(${rotationY % 360}deg)`;
  }
});