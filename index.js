function addNote() {

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const priority = document.getElementById("priority").value;

    if (!title || !content) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const noteElement = document.createElement("div");
    noteElement.classList.add("note");

    noteElement.innerHTML = `
        <div class="note-title">${title}</div>
        <div class="note-content">${content}</div>
        <div class="note-priority">Priority: ${priority}</div>
    `;

    document.getElementById("notesContainer").appendChild(noteElement);

    document.getElementById("noteForm").reset();

}