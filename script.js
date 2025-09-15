// Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('.nav-menu').classList.toggle('active');
      console.log(`[${new Date().toISOString()}] Hamburger menu toggled`);
    });
  }

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

document.addEventListener('DOMContentLoaded', () => {
  const welcomeText = "Welcome to my Portfolio";
  const textContainer = document.getElementById('welcome-text');
  const animationDuration = 3000; // 3 seconds for entire animation
  const delayBeforeStart = 1000; // 1 second delay before starting

  // Split text into words
  const words = welcomeText.split(' ');

  // Calculate total number of letters for timing
  const totalLetters = welcomeText.replace(/\s/g, '').length;
  const delayPerLetter = animationDuration / totalLetters;

  // Start animation after 1 second
  setTimeout(() => {
    let letterIndex = 0; // Track overall letter index for timing
    words.forEach((word, wordIndex) => {
      // Create a span for each word
      const wordSpan = document.createElement('span');
      wordSpan.classList.add('word');

      // Split word into letters
      const letters = word.split('');
      letters.forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        letterSpan.classList.add('letter');
        letterSpan.style.animationDelay = `${letterIndex * delayPerLetter}ms`; // Staggered delay
        wordSpan.appendChild(letterSpan);
        letterIndex++;
      });

      // Add space after each word (except the last)
      if (wordIndex < words.length - 1) {
        wordSpan.appendChild(document.createTextNode('\u00A0')); // Non-breaking space
      }

      textContainer.appendChild(wordSpan);
    });
  }, delayBeforeStart);
});

document.addEventListener('DOMContentLoaded', () => {
  const welcomeText = "Me as a Web Developer";
  const textContainer = document.getElementById('dev-text');
  const animationDuration = 2000; // 3 seconds for entire animation
  const delayBeforeStart = 6000; // 1 second delay before starting

  // Split text into words
  const words = welcomeText.split(' ');

  // Calculate total number of letters for timing
  const totalLetters = welcomeText.replace(/\s/g, '').length;
  const delayPerLetter = animationDuration / totalLetters;

  // Start animation after 1 second
  setTimeout(() => {
    let letterIndex = 0; // Track overall letter index for timing
    words.forEach((word, wordIndex) => {
      // Create a span for each word
      const wordSpan = document.createElement('span');
      wordSpan.classList.add('word');

      // Split word into letters
      const letters = word.split('');
      letters.forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        letterSpan.classList.add('dletter');
        letterSpan.style.animationDelay = `${letterIndex * delayPerLetter}ms`; // Staggered delay
        wordSpan.appendChild(letterSpan);
        letterIndex++;
      });

      // Add space after each word (except the last)
      if (wordIndex < words.length - 1) {
        wordSpan.appendChild(document.createTextNode('\u00A0')); // Non-breaking space
      }

      textContainer.appendChild(wordSpan);
    });
  }, delayBeforeStart);
});