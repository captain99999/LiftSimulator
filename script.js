document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", createBuilding);

  function createBuilding() {
    const numFloors = parseInt(document.getElementById("numFloors").value);
    const floorsContainer = document.getElementById("floors");
    floorsContainer.innerHTML = "";

    for (let floor = numFloors; floor >= 1; floor--) {
      const floorElement = document.createElement("div");
      floorElement.classList.add("floor");
      floorElement.innerHTML = `
        <span>Floor ${floor}</span>
        <button class="button up-button">▲</button>
        <button class="button down-button">▼</button>
      `;
      floorsContainer.appendChild(floorElement);

      const upButton = floorElement.querySelector(".up-button");
      const downButton = floorElement.querySelector(".down-button");
      upButton.addEventListener("click", () => moveLift(floor));
      downButton.addEventListener("click", () => moveLift(floor));
    }
  }

  function moveLift(targetFloor) {
    const lift = document.getElementById("lift");
    const leftDoor = document.querySelector(".door.left");
    const rightDoor = document.querySelector(".door.right");
    const liftBottom = 100 * (targetFloor - 1) + "px"; // Adjust this based on your building layout

    // Open doors
    setTimeout(()=>{leftDoor.style.transform = "translateX(-50%)";
    rightDoor.style.transform = "translateX(50%)";},500)
    

    // Move the lift
    setTimeout(() => {
    lift.style.bottom = liftBottom;

      

      // Close doors after 2 seconds
      setTimeout(() => {
        leftDoor.style.transform = "translateX(0)";
        rightDoor.style.transform = "translateX(0)";
      }, 2000);
    }, 500);

  }
});
