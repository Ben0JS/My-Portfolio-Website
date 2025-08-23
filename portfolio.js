
  const roles = ["Full Stack Developer", "Frond End developer", "Backend Developer" , "AI Learner", "Problem Solver"];
  let index = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing-role");

  function typeEffect() {
    if (charIndex < roles[index].length) {
      typingElement.textContent += roles[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); // typing speed
    } else {
      setTimeout(eraseEffect, 1500); // pause before erasing
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent = roles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50); // erase speed
    } else {
      index = (index + 1) % roles.length; // go to next word
      setTimeout(typeEffect, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
  });

    const RESUME_URL = "assets/Maria-Beno-Vengher-resume-F.pdf";
  const FILE_NAME  = "Maria-Beno-Vengher-resume-F.pdf";

  document.getElementById("downloadResumeBtn").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = RESUME_URL;
    a.download = FILE_NAME; // suggests a file name
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

