
dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
    document.getElementById("trash")
  ]);
  
  function addTask() {
    var inputTask = document.getElementById("taskText").value;
    document.getElementById("to-do").innerHTML +=
      "<li class='task'><p>" + inputTask + "</p></li>";
    document.getElementById("taskText").value = "";
  }
    function emptyTrash() {
          document.getElementById("trash").innerHTML = "";
  }
