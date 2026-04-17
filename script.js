const dueDate = new Date("April 16, 2026 23:59:59");

const timeRemainingElement =
  document.getElementById("timeRemaining");

const overdueIndicator =
  document.getElementById("overdueIndicator");

const checkbox =
  document.getElementById("complete");

const status =
  document.getElementById("status");

const statusControl =
  document.getElementById("statusControl");

const title =
  document.querySelector(
    "[data-testid='test-todo-title']"
  );

const description =
  document.querySelector(
    "[data-testid='test-todo-description']"
  );

const editButton =
  document.getElementById("editButton");

const deleteButton =
  document.getElementById("deleteButton");

const editForm =
  document.getElementById("editForm");

const cancelButton =
  document.getElementById("cancelButton");

const saveButton =
  document.getElementById("saveButton");

const editTitle =
  document.getElementById("editTitle");

const editDescription =
  document.getElementById("editDescription");

const editPriority =
  document.getElementById("editPriority");

const priorityIndicator =
  document.getElementById("priorityIndicator");

const priorityText =
  document.getElementById("priorityText");

const toggleButton =
  document.querySelector(
    "[data-testid='test-todo-expand-toggle']"
  );

const collapsible =
  document.getElementById(
    "descriptionSection"
  );

function updateTimeRemaining() {
  const now = new Date();

  const difference =
    dueDate - now;

  if (difference <= 0) {
    timeRemainingElement.textContent =
      "Overdue";

    overdueIndicator.textContent =
      "Overdue";

    overdueIndicator.style.color =
      "red";

    return;
  }

  const minutes =
    Math.floor(
      difference / (1000 * 60)
    );

  const hours =
    Math.floor(minutes / 60);

  const days =
    Math.floor(hours / 24);

  if (days > 0) {
    timeRemainingElement.textContent =
      `Due in ${days} days`;
  } else if (hours > 0) {
    timeRemainingElement.textContent =
      `Due in ${hours} hours`;
  } else {
    timeRemainingElement.textContent =
      `Due in ${minutes} minutes`;
  }
}

updateTimeRemaining();

setInterval(
  updateTimeRemaining,
  60000
);

checkbox.addEventListener(
  "change",
  function () {
    if (this.checked) {
      status.textContent = "Done";
      statusControl.value = "Done";
      title.style.textDecoration =
        "line-through";
    } else {
      status.textContent = "Pending";
      statusControl.value = "Pending";
      title.style.textDecoration =
        "none";
    }
  }
);

statusControl.addEventListener(
  "change",
  function () {
    status.textContent =
      statusControl.value;

    if (
      statusControl.value === "Done"
    ) {
      checkbox.checked = true;
      title.style.textDecoration =
        "line-through";
    } else {
      checkbox.checked = false;
      title.style.textDecoration =
        "none";
    }
  }
);

editButton.addEventListener(
  "click",
  function () {
    editForm.classList.remove(
      "hidden"
    );

    editTitle.value =
      title.textContent;

    editDescription.value =
      description.textContent;
  }
);

cancelButton.addEventListener(
  "click",
  function () {
    editForm.classList.add(
      "hidden"
    );
  }
);

saveButton.addEventListener(
  "click",
  function () {
    title.textContent =
      editTitle.value;

    description.textContent =
      editDescription.value;

    priorityText.textContent =
      editPriority.value;

    priorityIndicator.className =
      editPriority.value.toLowerCase();

    priorityText.className =
      "priority " +
      editPriority.value.toLowerCase();

    editForm.classList.add(
      "hidden"
    );
  }
);

let expanded = true;

toggleButton.addEventListener(
  "click",
  function () {
    expanded = !expanded;

    collapsible.style.display =
      expanded ? "block" : "none";

    toggleButton.setAttribute(
      "aria-expanded",
      expanded
    );
  }
);

deleteButton.addEventListener(
  "click",
  function () {
    alert("Delete clicked");
  }
);