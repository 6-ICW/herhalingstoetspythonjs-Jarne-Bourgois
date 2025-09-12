// 10. Print alle even getallen uit de lijst vermenigvuldigd met 2.

let getallen = [3, 8, 15, 22, 9, 12];

for (let i = 0; i < getallen.length; i++) {
  if (getallen[i] % 2 == 0) {
    console.log(getallen[i] * 2);
  }
}
