const wrapper1 = document.getElementById("wrapper");

const inputFolder = document.getElementById("folder_input");
const foldersContainer = document.getElementById("folders_container");
const emptyFolder = document.getElementById("empty_folder");

document.getElementById("add_folder_button").addEventListener("click", function (e) {
  wrapper1.style.display = "block";
  inputFolder.focus();
});

document.getElementById("close_popup_addfolder").addEventListener("click", function (e) {
  wrapper1.style.display = "none";
});

function create_folder() {
  if (inputFolder.value.replace(/ /g, "") != "") {
    wrapper1.style.display = "none";
    emptyFolder.style.display = "none";

    let button = document.createElement("button");
    let li = document.createElement("li");
    li.innerHTML = inputFolder.value;
    button.appendChild(li);
    button.id = "choose_folder";
    foldersContainer.appendChild(button);
    button.addEventListener("click", (e) => {
      let currentFolder = localStorage.getItem("currentFolder");
      if (currentFolder === e.target.innerHTML) {
        return;
      }
      let all_folders = JSON.parse(localStorage.getItem("all_folders"));
      currentFolder = e.target.innerHTML;
      localStorage.setItem("currentFolder", currentFolder);
      document.getElementById("folder").innerHTML = currentFolder;
      document.getElementById("to_do_container").innerHTML = "";
      document.getElementById("doing_container").innerHTML = "";
      // console.log(123);
      document.getElementById("empty_todo").style.display = "block";
      document.getElementById("empty_doing").style.display = "block";
      for (let i = 0; i < all_folders.folders.length; i++) {
        let folder = all_folders.folders[i];
        if (folder.name === currentFolder) {
          if (folder.todos.length === 0) {
            document.getElementById("empty_todo").style.display = "block";
          } else {
            for (let j = 0; j < folder.todos.length; j++) {
              let task = folder.todos[j];
              if (task.active == true) {
                document.getElementById("empty_todo").style.display = "none";
                let div = document.createElement("div");
                div.id = "task_text";
                div.innerHTML = task.name;
                let div2 = document.createElement("div");
                div2.id = "new_task";
                let button = document.createElement("button");
                button.id = "delete_task";
                button.innerHTML = "done";
                div2.appendChild(div);
                div2.appendChild(button);
                toDoCard.appendChild(div2);
              }
            }
          }
          if (folder.doings.length === 0) {
            document.getElementById("empty_doing").style.display = "block";
          } else {
            for (let j = 0; j < folder.doings.length; j++) {
              let task = folder.doings[j];
              if (task.active == true) {
                document.getElementById("empty_doing").style.display = "none";
                let div = document.createElement("div");
                div.id = "task_text";
                div.innerHTML = task.name;
                let div2 = document.createElement("div");
                div2.id = "new_task";
                let button = document.createElement("button");
                button.id = "delete_task";
                button.innerHTML = "done";
                div2.appendChild(div);
                div2.appendChild(button);
                doingCard.appendChild(div2);
              }
            }
          }
          break;
        }
      }
    });

    let all_folders = JSON.parse(localStorage.getItem("all_folders"));
    let currentFolder = localStorage.getItem("currentFolder");
    let folder = {
      name: inputFolder.value,
      todos: [],
      doings: [],
    };

    all_folders["folders"].push(folder);
    if (currentFolder === "") {
      currentFolder = inputFolder.value;
      document.getElementById("folder").innerHTML = currentFolder;
    }
    localStorage.setItem("all_folders", JSON.stringify(all_folders));
    localStorage.setItem("currentFolder", currentFolder);
  }
  inputFolder.value = "";
}

document.getElementById("main").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (inputFolder.value.replace(/ /g, "") != "") {
      wrapper1.style.display = "none";
      emptyFolder.style.display = "none";

      let button = document.createElement("button");
      let li = document.createElement("li");
      li.innerHTML = inputFolder.value;
      button.appendChild(li);
      button.id = "choose_folder";
      foldersContainer.appendChild(button);

      button.addEventListener("click", (e) => {
        let currentFolder = localStorage.getItem("currentFolder");
        if (currentFolder === e.target.innerHTML) {
          return;
        }
        let all_folders = JSON.parse(localStorage.getItem("all_folders"));
        currentFolder = e.target.innerHTML;
        localStorage.setItem("currentFolder", currentFolder);
        document.getElementById("folder").innerHTML = currentFolder;
        document.getElementById("to_do_container").innerHTML = "";
        document.getElementById("doing_container").innerHTML = "";
        // console.log(123);
        document.getElementById("empty_todo").style.display = "block";
        document.getElementById("empty_doing").style.display = "block";
        for (let i = 0; i < all_folders.folders.length; i++) {
          let folder = all_folders.folders[i];
          if (folder.name === currentFolder) {
            if (folder.todos.length === 0) {
              document.getElementById("empty_todo").style.display = "block";
            } else {
              for (let j = 0; j < folder.todos.length; j++) {
                let task = folder.todos[j];
                if (task.active == true) {
                  document.getElementById("empty_todo").style.display = "none";
                  let div = document.createElement("div");
                  div.id = "task_text";
                  div.innerHTML = task.name;
                  let div2 = document.createElement("div");
                  div2.id = "new_task";
                  let button = document.createElement("button");
                  button.id = "delete_task";
                  button.innerHTML = "done";
                  div2.appendChild(div);
                  div2.appendChild(button);
                  toDoCard.appendChild(div2);
                }
              }
            }
            if (folder.doings.length === 0) {
              document.getElementById("empty_doing").style.display = "block";
            } else {
              for (let j = 0; j < folder.doings.length; j++) {
                let task = folder.doings[j];
                if (task.active == true) {
                  document.getElementById("empty_doing").style.display = "none";
                  let div = document.createElement("div");
                  div.id = "task_text";
                  div.innerHTML = task.name;
                  let div2 = document.createElement("div");
                  div2.id = "new_task";
                  let button = document.createElement("button");
                  button.id = "delete_task";
                  button.innerHTML = "done";
                  div2.appendChild(div);
                  div2.appendChild(button);
                  doingCard.appendChild(div2);
                }
              }
            }
            break;
          }
        }
      });

      let all_folders = JSON.parse(localStorage.getItem("all_folders"));
      let currentFolder = localStorage.getItem("currentFolder");
      let folder = {
        name: inputFolder.value,
        todos: [],
        doings: [],
      };

      all_folders["folders"].push(folder);
      if (currentFolder === "") {
        currentFolder = inputFolder.value;
      }
      localStorage.setItem("all_folders", JSON.stringify(all_folders));
      localStorage.setItem("currentFolder", currentFolder);
    }
    inputFolder.value = "";
  }
});

const wrapper2 = document.getElementById("wrapper2");
const doingCard = document.getElementById("doing_container");
const toDoCard = document.getElementById("to_do_container");
const taskInput = document.getElementById("task_input");

document.getElementById("close_popup_addtask").addEventListener("click", function (e) {
  wrapper2.style.display = "none";
  taskInput.focus();
});

document.getElementById("add_task_button").addEventListener("click", function (e) {
  if (document.getElementById("folders_container").childElementCount <= 1) {
    document.getElementsByClassName("popup_empty_folders")[0].style.display = "block";
    let i = 1;
    let timeBar = document.getElementsByClassName("time_bar")[0];
    let width = 1;
    let go = setInterval(frame, 35);
    function frame() {
      if (width >= 100) {
        clearInterval(go);
        document.getElementsByClassName("popup_empty_folders")[0].style.display = "none";
        timeBar.classList.remove("appear_border");
        i = 0;
      } else {
        width++;
        timeBar.style.width = width + "%";
        if (width >= 99) {
          timeBar.classList.add("appear_border");
        }
      }
    }
  } else {
    wrapper2.style.display = "block";
  }
});

document.getElementById("create_task").addEventListener("click", create_task());

function create_task() {
  if (
    taskInput.value.replace(/ /g, "") != "" &&
    (document.getElementById("to_do_radio").checked || document.getElementById("doing_radio").checked)
  ) {
    wrapper2.style.display = "none";
    if (document.getElementById("to_do_radio").checked) {
      document.getElementById("empty_todo").style.display = "none";
      let div = document.createElement("div");
      div.id = "task_text";
      div.innerHTML = taskInput.value;
      let div2 = document.createElement("div");
      div2.id = "new_task";
      let button = document.createElement("button");
      button.id = "delete_task";
      button.innerHTML = "done";
      div2.appendChild(div);
      div2.appendChild(button);
      toDoCard.appendChild(div2);

      let new_task = div.innerHTML;
      let all_folders = JSON.parse(localStorage.getItem("all_folders"));
      let currentFolder = localStorage.getItem("currentFolder");
      for (let i = 0; i < all_folders.folders.length; i++) {
        let folder = all_folders.folders[i];
        if (folder.name === currentFolder) {
          folder["todos"].push({ name: new_task, active: true });
          all_folders.folders[i] = folder;
          break;
        }
      }
      localStorage.setItem("all_folders", JSON.stringify(all_folders));
    } else if (document.getElementById("doing_radio").checked) {
      document.getElementById("empty_doing").style.display = "none";
      let div = document.createElement("div");
      div.id = "task_text";
      div.innerHTML = taskInput.value;
      let div2 = document.createElement("div");
      div2.id = "new_task";
      let button = document.createElement("button");
      button.id = "delete_task";
      button.innerHTML = "done";
      div2.appendChild(div);
      div2.appendChild(button);
      doingCard.appendChild(div2);

      let new_task = div.innerHTML;
      let all_folders = JSON.parse(localStorage.getItem("all_folders"));
      let currentFolder = localStorage.getItem("currentFolder");
      for (let i = 0; i < all_folders.folders.length; i++) {
        let folder = all_folders.folders[i];
        if (folder.name === currentFolder) {
          folder["doings"].push({ name: new_task, active: true });
          all_folders.folders[i] = folder;
          break;
        }
      }
      localStorage.setItem("all_folders", JSON.stringify(all_folders));
    }
  }
  taskInput.value = "";
}

document.getElementById("main").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (
      taskInput.value.replace(/ /g, "") != "" &&
      (document.getElementById("to_do_radio").checked || document.getElementById("doing_radio").checked)
    ) {
      wrapper2.style.display = "none";
      if (document.getElementById("to_do_radio").checked) {
        document.getElementById("empty_todo").style.display = "none";
        let div = document.createElement("div");
        div.id = "task_text";
        div.innerHTML = taskInput.value;
        let div2 = document.createElement("div");
        div2.id = "new_task";
        let button = document.createElement("button");
        button.id = "delete_task";
        button.innerHTML = "done";
        div2.appendChild(div);
        div2.appendChild(button);
        toDoCard.appendChild(div2);

        let new_task = div.innerHTML;
        let all_folders = JSON.parse(localStorage.getItem("all_folders"));
        let currentFolder = localStorage.getItem("currentFolder");
        for (let i = 0; i < all_folders.folders.length; i++) {
          let folder = all_folders.folders[i];
          if (folder.name === currentFolder) {
            folder["todos"].push({ name: new_task, active: true });
            all_folders.folders[i] = folder;
            break;
          }
        }
        localStorage.setItem("all_folders", JSON.stringify(all_folders));
      } else if (document.getElementById("doing_radio").checked) {
        document.getElementById("empty_doing").style.display = "none";
        let div = document.createElement("div");
        div.id = "task_text";
        div.innerHTML = taskInput.value;
        let div2 = document.createElement("div");
        div2.id = "new_task";
        let button = document.createElement("button");
        button.id = "delete_task";
        button.innerHTML = "done";
        div2.appendChild(div);
        div2.appendChild(button);
        doingCard.appendChild(div2);

        let new_task = div.innerHTML;
        let all_folders = JSON.parse(localStorage.getItem("all_folders"));
        let currentFolder = localStorage.getItem("currentFolder");
        for (let i = 0; i < all_folders.folders.length; i++) {
          if (folder.name === currentFolder) {
            folder["doings"].push({ name: new_task, active: true });
            all_folders.folders[i] = folder;
            break;
          }
        }
        localStorage.setItem("all_folders", JSON.stringify(all_folders));
      }
    }
    taskInput.value = "";
  }
});

const doneTasks = document.getElementById("done_container");

document.addEventListener("click", delete_task);
function delete_task(event) {
  let current_button = event.target;
  if (current_button.id == "delete_task") {
    if (current_button.parentElement.parentElement.id == "to_do_container") {
      if (document.getElementById("to_do_container").childElementCount - 1 == 0) {
        document.getElementById("empty_todo").style.display = "block";
      }
    } else if (current_button.parentElement.parentElement.id == "doing_container") {
      if (document.getElementById("doing_container").childElementCount - 1 == 0) {
        document.getElementById("empty_doing").style.display = "block";
      }
    }
    let task_text = current_button.previousSibling.innerHTML;
    let done_task = document.createElement("div");
    done_task.id = "done_task";
    done_task.innerHTML = task_text;
    thisTask = task_text;
    current_button.parentElement.remove();
    document.getElementById("empty_done").style.display = "none";
    doneTasks.appendChild(done_task);

    let currentFolder = localStorage.getItem("currentFolder");
    let all_folders = JSON.parse(localStorage.getItem("all_folders"));
    for (let i = 0; i < all_folders.folders.length; i++) {
      let flag = false;
      if (flag) {
        break;
      }
      let folder = all_folders.folders[i];
      if (folder.name === currentFolder) {
        for (let j = 0; j < folder.todos.length; j++) {
          if (folder.todos[j].name === thisTask && folder.todos[j].active != false) {
            folder.todos[j].active = false;
            all_folders.folders[i] = folder;
            flag = true;
            break;
          }
        }
        if (flag) {
          break;
        }
        for (let j = 0; j < folder.doings.length; j++) {
          if (folder.doings[j].name === thisTask && folder.doings[j].active != false) {
            folder.doings[j].active = false;
            all_folders.folders[i] = folder;
            flag = true;
            break;
          }
        }
      }
    }
    localStorage.setItem("all_folders", JSON.stringify(all_folders));
  }
}

const all_folders = JSON.parse(localStorage.getItem("all_folders")) || {
  folders: [],
};
localStorage.setItem("all_folders", JSON.stringify(all_folders));
let currentFolder = localStorage.getItem("currentFolder") || "";
localStorage.setItem("currentFolder", currentFolder);
if (currentFolder.length > 0) {
  document.getElementById("folder").innerHTML = localStorage.getItem("currentFolder");
  document.getElementById("empty_folder").style.display = "none";
  for (let i = 0; i < all_folders.folders.length; i++) {
    let folder = all_folders.folders[i];
    let button = document.createElement("button");
    let li = document.createElement("li");
    li.innerHTML = folder.name;
    button.appendChild(li);
    button.id = "choose_folder";
    foldersContainer.appendChild(button);
    button.addEventListener("click", (e) => {
      let currentFolder = localStorage.getItem("currentFolder");
      if (currentFolder === e.target.innerHTML) {
        return;
      }
      let all_folders = JSON.parse(localStorage.getItem("all_folders"));
      currentFolder = e.target.innerHTML;
      localStorage.setItem("currentFolder", currentFolder);
      document.getElementById("folder").innerHTML = currentFolder;
      document.getElementById("to_do_container").innerHTML = "";
      document.getElementById("doing_container").innerHTML = "";
      document.getElementById("empty_todo").style.display = "block";
      document.getElementById("empty_doing").style.display = "block";
      for (let i = 0; i < all_folders.folders.length; i++) {
        let folder = all_folders.folders[i];
        if (folder.name === currentFolder) {
          if (folder.todos.length === 0) {
            document.getElementById("empty_todo").style.display = "block";
          } else {
            for (let j = 0; j < folder.todos.length; j++) {
              let task = folder.todos[j];
              if (task.active == true) {
                document.getElementById("empty_todo").style.display = "none";
                let div = document.createElement("div");
                div.id = "task_text";
                div.innerHTML = task.name;
                let div2 = document.createElement("div");
                div2.id = "new_task";
                let button = document.createElement("button");
                button.id = "delete_task";
                button.innerHTML = "done";
                div2.appendChild(div);
                div2.appendChild(button);
                toDoCard.appendChild(div2);
              }
            }
          }
          if (folder.doings.length === 0) {
            document.getElementById("empty_doing").style.display = "block";
          } else {
            for (let j = 0; j < folder.doings.length; j++) {
              let task = folder.doings[j];
              if (task.active == true) {
                document.getElementById("empty_doing").style.display = "none";
                let div = document.createElement("div");
                div.id = "task_text";
                div.innerHTML = task.name;
                let div2 = document.createElement("div");
                div2.id = "new_task";
                let button = document.createElement("button");
                button.id = "delete_task";
                button.innerHTML = "done";
                div2.appendChild(div);
                div2.appendChild(button);
                doingCard.appendChild(div2);
              }
            }
          }
          break;
        }
      }
    });
    if (folder.name === currentFolder) {
      for (let j = 0; j < folder.todos.length; j++) {
        let task = folder.todos[j];
        if (task.active === true) {
          document.getElementById("empty_todo").style.display = "none";
          let div = document.createElement("div");
          div.id = "task_text";
          div.innerHTML = task.name;
          let div2 = document.createElement("div");
          div2.id = "new_task";
          let button = document.createElement("button");
          button.id = "delete_task";
          button.innerHTML = "done";
          div2.appendChild(div);
          div2.appendChild(button);
          toDoCard.appendChild(div2);
        }
      }
      for (let k = 0; k < folder.doings.length; k++) {
        let task = folder.doings[k];
        if (task.active === true) {
          document.getElementById("empty_doing").style.display = "none";
          let div = document.createElement("div");
          div.id = "task_text";
          div.innerHTML = task.name;
          let div2 = document.createElement("div");
          div2.id = "new_task";
          let button = document.createElement("button");
          button.id = "delete_task";
          button.innerHTML = "done";
          div2.appendChild(div);
          div2.appendChild(button);
          doingCard.appendChild(div2);
        }
      }
    }
    for (let r = 0; r < folder.todos.length; r++) {
      let task = folder.todos[r];
      if (task.active === false) {
        document.getElementById("empty_done").style.display = "none";
        let done_task = document.createElement("div");
        done_task.id = "done_task";
        done_task.innerHTML = task.name;
        doneTasks.appendChild(done_task);
      }
    }
    for (let f = 0; f < folder.doings.length; f++) {
      let task = folder.doings[f];
      if (task.active === false) {
        document.getElementById("empty_done").style.display = "none";
        let done_task = document.createElement("div");
        done_task.id = "done_task";
        done_task.innerHTML = task.name;
        doneTasks.appendChild(done_task);
      }
    }
  }
}

// document.getElementById("empty_todo").style.display = "block";
// document.getElementById("empty_doing").style.display = "block";
