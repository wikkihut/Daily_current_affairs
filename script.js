document.addEventListener("DOMContentLoaded", () => {
    fetch("mcqs.json")
        .then(response => response.json())
        .then(data => {
            const mcqsSection = document.getElementById("mcqs");
            data.mcqs.forEach(mcq => {
                const mcqElement = document.createElement("div");
                mcqElement.className = "mcq";
                mcqElement.innerHTML = `
                    <p>${mcq.question}</p>
                    <ul>
                        ${mcq.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                `;
                mcqsSection.appendChild(mcqElement);
            });
        })
        .catch(error => console.error("Error fetching MCQs:", error));
});
