let currentClass = "";

function loadClass(classNumber) {
    currentClass = classNumber;
    document.getElementById("classTitle").innerText = "Class " + classNumber + " Notes";

    let savedNotes = localStorage.getItem("class" + classNumber);
    document.getElementById("notesArea").value = savedNotes || "";
}

function saveNotes() {
    if (currentClass === "") {
        alert("Please select a class first!");
        return;
    }

    let notes = document.getElementById("notesArea").value;
    localStorage.setItem("class" + currentClass, notes);
    alert("Notes saved successfully!");
}
