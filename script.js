const ageElement = document.getElementById('age');
const healthElement = document.getElementById('health');
const happinessElement = document.getElementById('happiness');
const moneyElement = document.getElementById('money');
const logElement = document.getElementById('log');

let age = 0;
let health = 100;
let happiness = 100;
let money = 50;

// Update stats display
function updateStats() {
    ageElement.textContent = age;
    healthElement.textContent = health;
    happinessElement.textContent = happiness;
    moneyElement.textContent = money;
}

// Add a log entry
function addLog(message) {
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    logElement.appendChild(logEntry);
    logElement.scrollTop = logElement.scrollHeight; // Auto-scroll to the bottom
}

// Work action
document.getElementById('work').addEventListener('click', () => {
    money += 20;
    happiness -= 5;
    health -= 5;
    addLog('You worked and earned $20, but lost some health and happiness.');
    updateStats();
});

// Rest action
document.getElementById('rest').addEventListener('click', () => {
    health += 10;
    happiness += 5;
    money -= 10;
    addLog('You rested and regained health and happiness, but spent $10.');
    updateStats();
});

// Play action
document.getElementById('play').addEventListener('click', () => {
    happiness += 10;
    health -= 5;
    money -= 5;
    addLog('You played and increased happiness, but lost some health and money.');
    updateStats();
});

// Next year action
document.getElementById('next-year').addEventListener('click', () => {
    age += 1;
    health -= 5;
    happiness -= 5;
    money += 10; // Passive income
    addLog('A year has passed. You aged, and your stats changed.');
    updateStats();

    // Check for game over
    if (health <= 0 || happiness <= 0 || money < 0) {
        alert('Game Over! Your character did not survive.');
        resetGame();
    }
});

// Reset game
function resetGame() {
    age = 0;
    health = 100;
    happiness = 100;
    money = 50;
    logElement.innerHTML = ''; // Clear log
    updateStats();
}

// Initialize stats
updateStats();