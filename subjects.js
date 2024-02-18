const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section');
const subjects = {
    A: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    B: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    C: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    D: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    E: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    F: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
};

const subjectButtons = document.querySelector(".subject-buttons");
subjects[section].forEach(subject => {
    const subjectButton = document.createElement("a");
    subjectButton.className = "subject-button";
    subjectButton.textContent = subject;
    subjectButton.href = `tests.html?section=${section}&subject=${subject}`;
    subjectButtons.appendChild(subjectButton);
});
