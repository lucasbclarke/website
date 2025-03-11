<<<<<<< HEAD
let score = 0;
let target = document.getElementById('target');
let scoreDisplay = document.getElementById('score');
let gameInterval;
let targetSpeed = 1000; // Time interval for moving target (in milliseconds)
let targetClicks = 0;

function moveTarget() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Random position for target within the screen
    const randomX = Math.random() * (screenWidth - 50); // 50 is the target's width
    const randomY = Math.random() * (screenHeight - 50); // 50 is the target's height

    // Set the target's new position
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;

    // Check if the score reaches 15 and redirect
    if (score >= 15) {
        setTimeout(() => {
            window.location.href = "https://example.com"; // Change to your desired URL
        }, 500); // Short delay before redirecting
    }
}

function startGame() {
    moveTarget(); // Initial target position
    gameInterval = setInterval(() => {
        moveTarget(); // Move target every 'targetSpeed' milliseconds
    }, targetSpeed);
}

target.addEventListener('click', () => {
    updateScore();  // Increment score when target is clicked
    targetSpeed = Math.max(200, targetSpeed - 50); // Speed up the target after each click (minimum speed 200ms)
    clearInterval(gameInterval); // Clear the current interval
    startGame();  // Restart game with new speed
});

// Start the game when the page loads
startGame();
=======
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

>>>>>>> origin/master
