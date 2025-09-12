function rekenmachine(x, y, operator) {
  if (operator == "+") {
    return x + y;
  } else if (operator == "-") {
    return x - y;
  } else if (operator == "*") {
    return x * y;
  } else if (operator == "/") {
    return x / y;
  } else {
    print(" je hebt iets fouts gedaan");
  }
}

console.log(rekenmachine(4, 5, "+"));
