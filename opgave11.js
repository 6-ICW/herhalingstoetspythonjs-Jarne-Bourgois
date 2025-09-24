function rekenmachine(x, y, operator) {
  // maak gebruik van een switch statement
  if (operator == "+") {
    return x + y;
  } else if (operator == "-") {
    return x - y;
  } else if (operator == "*") {
    return x * y;
  } else if (operator == "/") {
    return x / y;
  } else {
    print(" je hebt iets fouts gedaan"); // zorg voor gepaste foutmelding
  }
}

console.log(rekenmachine(4, 5, "+"));
