function calcTotal(base, tax) {
  const total = base + base * tax;

  return total;
}

function calcTax(base) {
  return tax => {
    const total = base + base * tax;
    return total;
  };
}

const tax20 = calcTax(0.2);
tax20(30);
console.log(tax20(30));
