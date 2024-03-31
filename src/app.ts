interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  editedAt: Date;
  completed: boolean;
  requiresConfirmation: boolean;
}

class TodoList {
  private notes: Note[];

  constructor() {
      this.notes = [];
      this.initForm();
      this.renderNotes();
  }

  private initForm(): void {
      const form = document.createElement("form");
      form.innerHTML = `
          <input type="text" id="title" placeholder="Enter title">
          <textarea id="content" placeholder="Enter content"></textarea>
          <label for="requiresConfirmation">Requires Confirmation:</label>
          <input type="checkbox" id="requiresConfirmation">
          <button type="submit">Add Note</button>
      `;
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          const titleInput = document.getElementById("title") as HTMLInputElement;
          const contentInput = document.getElementById("content") as HTMLInputElement;
          const requiresConfirmationInput = document.getElementById("requiresConfirmation") as HTMLInputElement;

          this.addNote(titleInput.value, contentInput.value, requiresConfirmationInput.checked);

          titleInput.value = "";
          contentInput.value = "";
          requiresConfirmationInput.checked = false;
      });

      document.body.appendChild(form);
      
      const noteList = document.createElement("div");
      noteList.id = "noteList";
      document.body.appendChild(noteList);
  }

  addNote(title: string, content: string, requiresConfirmation: boolean = false): void {
      if (!title || !content) {
          alert("Title and content cannot be empty.");
          return;
      }

      const newNote: Note = {
          id: this.notes.length + 1,
          title,
          content,
          createdAt: new Date(),
          editedAt: new Date(),
          completed: false,
          requiresConfirmation
      };

      this.notes.push(newNote);
      this.renderNotes();
  }

  deleteNoteById(id: number): void {
      this.notes = this.notes.filter(note => note.id !== id);
      this.renderNotes();
  }

  editNoteById(id: number): void {
      const note = this.notes.find(note => note.id === id);

      if (!note) {
          alert("Note not found.");
          return;
      }

      const newTitle = prompt("Enter new title:", note.title);
      const newContent = prompt("Enter new content:", note.content);

      if (newTitle && newContent) {
          note.title = newTitle;
          note.content = newContent;
          note.editedAt = new Date();
          this.renderNotes();
      }
  }

  toggleNoteCompletion(id: number): void {
      const note = this.notes.find(note => note.id === id);

      if (!note) {
          alert("Note not found.");
          return;
      }

      note.completed = !note.completed;
      this.renderNotes();
  }

  renderNotes(): void {
      const noteList = document.getElementById("noteList");

      if (!noteList) return;

      noteList.innerHTML = "";

      this.notes.forEach(note => {
          const noteItem = document.createElement("div");
          noteItem.innerHTML = `
              <h3>${note.title}</h3>
              <p>${note.content}</p>
              <p>Created at: ${note.createdAt.toLocaleString()}</p>
              <p>Last edited at: ${note.editedAt.toLocaleString()}</p>
              <p>Status: ${note.completed ? "Completed" : "Not Completed"}</p>
              <button class="delete-btn">Delete</button>
              <button class="edit-btn">Edit</button>
              <button class="toggle-btn">${note.completed ? "Mark as Incomplete" : "Mark as Completed"}</button>
          `;
          noteList.appendChild(noteItem);

          const deleteBtn = noteItem.querySelector('.delete-btn') as HTMLButtonElement;
          const editBtn = noteItem.querySelector('.edit-btn') as HTMLButtonElement;
          const toggleBtn = noteItem.querySelector('.toggle-btn') as HTMLButtonElement;

          deleteBtn.addEventListener('click', () => this.deleteNoteById(note.id));
          editBtn.addEventListener('click', () => this.editNoteById(note.id));
          toggleBtn.addEventListener('click', () => this.toggleNoteCompletion(note.id));
      });
  }
}

const todoList = new TodoList();
