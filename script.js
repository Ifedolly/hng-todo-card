const dueDate = new Date("April 16, 2026 23:59:59");

const timeRemainingElement =
  document.getElementById("timeRemaining");

const checkbox =
  document.getElementById("complete");

const status =
  document.getElementById("status");

function updateTimeRemaining() {
  const now = new Date();

  const difference =
    dueDate - now;

  if (difference <= 0) {
    timeRemainingElement.textContent =
      "Overdue";
    return;
  }

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  if (days === 0) {
    timeRemainingElement.textContent =
      "Due today";
  } else if (days === 1) {
    timeRemainingElement.textContent =
      "Due tomorrow";
  } else {
    timeRemainingElement.textContent =
      `Due in ${days} days`;
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

      textContent = "Done";

      document
        .querySelector(
          "[data-testid='test-todo-title']"
        )
        .style.textDecoration =
        "line-through";

    } else {

      textContent = "Pending";

      document
        .querySelector(
          "[data-testid='test-todo-title']"
        )
        .style.textDecoration =
        "none";

    }

  }
);

const editButton = document.querySelector(
  "[data-testid='test-todo-edit-button']"
);

const deleteButton = document.querySelector(
  "[data-testid='test-todo-delete-button']"
);

editButton.addEventListener(
  "click",
  function () {
    console.log("Edit clicked");
  }
);

deleteButton.addEventListener(
  "click",
  function () {
    alert("Delete clicked");
  }
);