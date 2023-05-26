const button = document.getElementById("calculate");
button.addEventListener("click", () => {
  let amount = document.getElementById("amount").value;
  let persons = document.getElementById("persons").value;
  let service = document.getElementById("services").value;
  const total = (amount * service) / persons;
  const total1 = ((amount * service) + (amount)) / persons;
  if (amount == "" || isNaN(amount)) {
    alert("Please enter  valid bill amount");
  }
  else if (persons == "" || isNaN(persons)) {
    alert("please enter valid persons")
  } else if (service == "select") {
    alert("please select service")
  } else {
    document.getElementById("total").innerHTML = total;
  }
});

