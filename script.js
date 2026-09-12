function openLetter() {
  
  // Get the two screens
  const startScreen = document.getElementById("startScreen");
  const letterScreen = document.getElementById("letterScreen");
  
  // Hide the first screen
  startScreen.style.opacity = "0";
  
  // Show the letter
  setTimeout(() => {
    startScreen.style.display = "none";
    letterScreen.classList.add("show");
  }, 800);
}