// Function to get a random integer within a range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Randomly extract a scale
const scaleKeys = Object.keys(scales);
const randomScale = scaleKeys[getRandomInt(scaleKeys.length)];
const scaleData = scales[randomScale];
const scaleNotes = scaleData.notes;
const scaleDegrees = scaleData.degrees;

// Randomly extract a degree from the scale
const randomDegreeIndex = getRandomInt(scaleNotes.length);
const correctNote = scaleNotes[randomDegreeIndex];
const degree = scaleDegrees[randomDegreeIndex];

// Ensure the question is displayed when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `What is the note of degree <strong>${degree}</strong> in the <strong>${randomScale}</strong> scale?`;
});

// Handle answer submission
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const feedback = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctNote.toLowerCase()) {
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = `Incorrect! The correct answer was: ${correctNote}`;
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

// Allow pressing "Enter" to submit the answer
document.getElementById('user-answer').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkAnswer();
    }
});

// Show the full scale
document.getElementById('show-scale').addEventListener('click', function() {
    const notesRow = document.getElementById('notes-row');
    const degreesRow = document.getElementById('degrees-row');

    // Clear previous content
    notesRow.innerHTML = '';
    degreesRow.innerHTML = '';

    // Populate the rows with data
    scaleNotes.forEach(note => {
        const noteCell = document.createElement('th');
        noteCell.textContent = note;
        notesRow.appendChild(noteCell);
    });

    scaleDegrees.forEach(degree => {
        const degreeCell = document.createElement('td');
        degreeCell.textContent = degree;
        degreesRow.appendChild(degreeCell);
    });

    document.getElementById('full-scale').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
});
