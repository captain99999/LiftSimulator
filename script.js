const createFloorsButton = document.getElementById("createFloors");
const floorButtonsContainer = document.getElementById("floorButtons");
const lift = document.getElementById("lift");

let totalFloors = 0;
let currentFloor = 1;

createFloorsButton.addEventListener("click", () => {
  totalFloors = parseInt(document.getElementById("floors").value);
  createFloorButtons();
});

function createFloorButtons() {
  floorButtonsContainer.innerHTML = "";

  for (let i = 1; i <= totalFloors; i++) {
    const floorButton = document.createElement("div");
    floorButton.textContent = totalFloors-i+1;
    floorButton.classList.add("button");
    floorButton.addEventListener("click", () => goToFloor(i));
    floorButtonsContainer.appendChild(floorButton);
  }
}

function goToFloor(floorNumber) {
  const floorHeight = (totalFloors - floorNumber) * 60;
  lift.style.bottom = floorHeight + "px";
  currentFloor = floorNumber;
  openDoor();
  closeDoor();
}
function openDoor() {
  door.style.transform = 'translateX(100%)';
}

function closeDoor() {
  door.style.transform = 'translateX(0)';
}