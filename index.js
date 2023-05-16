document.getElementById("timSoNguyenNN").addEventListener("click", () => {
  let result = 1;
  let sum = 1;
  do {
    result += 1;
    sum += result;
  } while (sum <= 10000);
  document.getElementById("ketQuaSoNguyenNN").innerHTML = result;
});

// nhap 2 so x, n
document.getElementById("nhapHaiSoNguyen").addEventListener("click", () => {
  const x = document.getElementById("soNguyenX").value * 1;
  const n = document.getElementById("soNguyenN").value * 1;
  if (!x || !n) {
    return (document.getElementById("ketQuaHaiSoNguyen").innerHTML =
      "Vui lòng nhập vào đầy đủ các giá trị");
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("ketQuaHaiSoNguyen").innerHTML = sum;
});

// Tinh giai thua n

document.getElementById("giaiThuaN").addEventListener("click", () => {
  let sum = 1;
  let i = 1;
  let n = document.getElementById("soN").value * 1;
  do {
    i += 1;
    sum *= i;
  } while (i !== n);
  document.getElementById("ketQuaGiaiThua").innerHTML = sum;
});

// in mau
document.getElementById("inMau").addEventListener("click", () => {
  document.querySelectorAll(".bgcolor").forEach((item) => {
    let count = item.innerHTML.split("div")[1] * 1;
    console.log(count);
    if (count % 2 === 0) {
      item.style.display = "block";
      item.style.backgroundColor = "blue";
      item.style.height = "60px";
      item.innerHTML = "";
    } else {
      item.style.display = "block";
      item.style.backgroundColor = "red";
      item.style.height = "60px";
      item.innerHTML = "";
    }
  });
});

// in ra số nguyên tố

document.getElementById("soNguyenTo").addEventListener("click", () => {
  let arr = [];
  const n = document.getElementById("soNguyenToN").value * 1;

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr.push(i);
    } else if (i === 2) {
      arr.push(i);
    } else if (i === 3) {
      arr.push(i);
    } else {
      let isPrime = true;
      for (let y = 2; y < i; y++) {
        if (i % y === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        arr.push(i);
      }
    }
  }
  document.getElementById("ketQuaSoNguyenTo").innerHTML = arr;
});
