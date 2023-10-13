(function () {
    // This object will color project tags based on their text content. For example, all HTML tags will be colored red.
    const TEXT_TO_COLOR = {
        HTML: "#fff3f3",
        CSS: "#51eaff",
        JavaScript: "#ffe86f",
        React: "skyblue",
        "REST APIs": "#51FFA2"
    }

    for (let element of document.querySelectorAll(".projectTags li")) {
        let elementColor = TEXT_TO_COLOR[element.textContent];
        elementColor ? (element.style.backgroundColor = elementColor) : "skyblue";
    }
})();
