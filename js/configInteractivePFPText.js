(function () {
    // When you click on your PFP, your PFP will interact and say something. Make a list for it to say!
    let textEntries = ["hey, click me!",
        "do you need:",
        " a team player?",
        "a dev that can be easily integrated into your team?",
        "Software Engineer with unique problem solving skills?",
        "do you need a skilled Dev with a good sense of humor? 😀 ",
        "look no further, you found me. let's connect!"
    ];

    let index = 0;
    const bubbleTextElement = document.querySelector(".mainTextBox");
    bubbleTextElement.style.display = "block";
    function nextTextForBubble() {
        textEntries[index] && (bubbleTextElement.innerText = textEntries[index]);
        index++;
    }
    nextTextForBubble();
    
    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(i=>i.addEventListener("click", function (e) {
        nextTextForBubble();
    }));
}());