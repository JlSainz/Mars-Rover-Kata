var rover = {
  direction: "N",
  name: 'Rover',
  x: 0,
  y: 0,
  travelLog: [],
}

function turnLeft(rover) {
  switch (rover.direction) {

    case "N":
      rover.direction = "W"
      break;

    case "W":
      rover.direction = "S"
      break;

    case "S":
      rover.direction = "E"
      break;

    case "E":
      rover.direction = "N"
      break;
  };
  console.log("turnLeft was called!");
  console.log(rover);
}

function turnRight(rover) {
  switch (rover.direction) {

    case "N":
      rover.direction = "E"
      break;

    case "W":
      rover.direction = "N"
      break;

    case "S":
      rover.direction = "W"
      break;

    case "E":
      rover.direction = "S"
      break;
  };
  console.log("turnRight was called!");
  console.log(rover);
}

function moveForward(rover) {
  rover.travelLog.push("x=" + rover.x + " y=" + rover.y);
  switch (rover.direction) {

    case "N":
      rover.y -= 1
      break;

    case "W":
      rover.x -= 1
      break;

    case "S":
      rover.y += 1
      break;

    case "E":
      rover.x += 1
      break;
  };
  console.log("moveForward was called");
  console.log(rover);
}

function roverCommands(commands) {
  for (var i = 0; i < commands.length; i++) {
    console.log(i);

    switch (commands[i]) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case 's':
        console.log("Invalid Command");
        break;
    }
  }
  console.log("Mars Rover tracking=" + rover.travelLog);
}

roverCommands("rffrfflfrffs");