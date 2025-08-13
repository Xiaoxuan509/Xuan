function parseResistance(value) {
  value = value.trim().toLowerCase(); // 去掉空格並轉小寫

  let multiplier = 1;
  if (value.includes('k')) {
    multiplier = 1000;
    value = value.replace('k', '');
  } else if (value.includes('m')) {
    multiplier = 1000000;
    value = value.replace('m', '');
  }

  return parseFloat(value) * multiplier;
}

function calculateVoltage() {
  const R1 = parseResistance(document.getElementById('r1').value);
  const R2 = parseResistance(document.getElementById('r2').value);
  const Vin = 5; // 固定5V

  if (isNaN(R1) || R1 <= 0) {
    alert("請輸入有效且大於0的電阻 R1");
    return;
  }
  if (isNaN(R2) || R2 <= 0) {
    alert("請輸入有效且大於0的電阻 R2");
    return;
  }

  const Vout = Vin * (R2 / (R1 + R2));
  document.getElementById('result').textContent = `輸出電壓 Vout = ${Vout.toFixed(3)} V`;

  // 更新電阻標籤顯示數值
  document.getElementById('label-r1').textContent = `R1 = ${R1} Ω`;
  document.getElementById('label-r2').textContent = `R2 = ${R2} Ω`;
}
