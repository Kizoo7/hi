const openLetter = document.getElementById("openLetter");
const backButton = document.getElementById("backButton");
const landing = document.getElementById("landing");
const letterSection = document.getElementById("letterSection");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const bgMusic = document.getElementById("bgMusic");

let musicStarted = false;

openLetter.addEventListener("click", () => {
  document.body.classList.add("letter-open");
  letterSection.classList.add("visible");
  letterSection.setAttribute("aria-hidden", "false");

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Browsers generally allow audio after a user click.
  if (!musicStarted) {
    bgMusic.play()
      .then(() => {
        musicStarted = true;
        musicLabel.textContent = "Music on";
      })
      .catch(() => {
        musicLabel.textContent = "Play music";
      });
  }
});

backButton.addEventListener("click", () => {
  document.body.classList.remove("letter-open");
  letterSection.classList.remove("visible");
  letterSection.setAttribute("aria-hidden", "true");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicToggle.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicStarted = true;
      musicLabel.textContent = "Music on";
    } catch (error) {
      musicLabel.textContent = "Add audio";
    }
  } else {
    bgMusic.pause();
    musicLabel.textContent = "Music off";
  }
});

// If the audio file hasn't been added, make the button informative.
bgMusic.addEventListener("error", () => {
  musicLabel.textContent = "Add audio";
});
