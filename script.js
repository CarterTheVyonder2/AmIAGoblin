document.getElementById('submitQuiz').addEventListener('click', function () {
    // Get the selected answers
    const answers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked')
    ];

    // Check if all questions are answered
    if (answers.includes(null)) {
        document.getElementById('result').textContent = "Please answer all the questions!";
        return;
    }

    // Count the number of "yes" answers
    const yesCount = answers.filter(answer => answer.value === "yes").length;

    // Determine the result
    let result;
    if (yesCount === 3) {
        result = "You're definitely a goblin! 🧙‍♂️";
    } else if (yesCount === 2) {
        result = "You have some goblin tendencies... 🦴";
    } else if (yesCount === 1) {
        result = "You're probably not a goblin, but who knows? 🧐";
    } else {
        result = "You're definitely not a goblin! 🎉";
    }

    // Display the result
    document.getElementById('result').textContent = result;
});
