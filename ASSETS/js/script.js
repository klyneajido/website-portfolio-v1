document.addEventListener('DOMContentLoaded', function() {
  
let navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
  const menuToggle = document.getElementById('menu-toggle');
  const upbar = document.getElementById('upbar');

  if (menuToggle && upbar) {
    menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
        upbar.classList.add('show');
      } else {
        upbar.classList.remove('show');
      }
    });
  } else {
    console.error('Element(s) not found. Check your HTML for matching IDs.');
  }

  // Initialize Tilt.js
  if (jQuery) {
    $(".card").tilt({
      maxTilt: 15,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 1200,
      glare: true,
      maxGlare: 0.2,
      scale: 1.04,
    });
  }

  // Change background based on language
  function changeBackground(language) {
    const skillCard = document.getElementById("skillCard");
    const backgrounds = {
      html: "url('./ASSETS/svg/html.svg')",
      css: "url('./ASSETS/svg/css.svg')",
      js: "url('./ASSETS/svg/javascript.svg')",
      react: "url('./ASSETS/svg/react.svg')",
      nodejs: "url('./ASSETS/svg/nodejs.svg')",
      mysql: "url('./ASSETS/svg/mysql.svg')",
      firebase: "url('./ASSETS/svg/firebase.svg')",
      php: "url('./ASSETS/svg/php.svg')",
      python: "url('./ASSETS/svg/python.svg')",
      bootstrap: "url('./ASSETS/svg/bootstrap.svg')",
      canva: "url('./ASSETS/svg/canva.svg')",
      figma: "url('./ASSETS/svg/figma.svg')",
    };
    skillCard.style.backgroundImage = backgrounds[language] || "none";
  }

  // Truncate project descriptions
  $("div.project-description").text(function (index, currentText) {
    return currentText.substr(0, 270) + "...";
  });

  // Initialize Typed.js
  new Typed(".auto-type", {
    strings: ["a BSCS Student.", "in my 4th year.", "going to be a Developer."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  // Type effect for lines
  const lines = document.querySelectorAll(".line1, .line2, .line3, .line4");
  let index = 0;

  const type = () => {
    if (index >= lines.length) return; // Stop if index is out of bounds

    const line = lines[index];
    if (!line) return; // Ensure the line exists

    let text = line.innerText;
    let i = 0;

    const typeChar = () => {
      if (i < text.length) {
        line.innerHTML = text.slice(0, i + 1) + "<span class='cursor'>_</span>";
        i++;
        setTimeout(typeChar, 50);
      } else {
        index++;
        if (index < lines.length) {
          setTimeout(type, 1000);
        }
      }
    };

    typeChar();
  };

  setTimeout(type, 1000);

  // Toggle tooltip visibility on button click
  document.querySelectorAll('.button-content').forEach(buttonContent => {
    buttonContent.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents the click event from bubbling up
      const tooltipContainer = this.nextElementSibling; // Assuming tooltip is the next sibling
      if (tooltipContainer && tooltipContainer.classList.contains('tooltip-content')) {
        tooltipContainer.classList.toggle('show-tooltip');
      }
    });
  });

  // Hide tooltips when clicking outside
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.tooltip-content.show-tooltip').forEach(tooltip => {
      if (!tooltip.contains(event.target) && !tooltip.previousElementSibling.contains(event.target)) {
        tooltip.classList.remove('show-tooltip');
      }
    });
  });

  // Prevent tooltip from closing when clicking inside the tooltip content
  document.querySelectorAll('.tooltip-content').forEach(tooltipContainer => {
    tooltipContainer.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents clicks inside the tooltip from closing it
    });
  });
});
