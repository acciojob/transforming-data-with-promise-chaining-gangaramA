//your JS code here. If required.
const ip = document.getElementById('ip');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  const inputNumber = Number(ip.value);

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
      output.textContent = `Result: ${inputNumber}`; 
    }, 2000); 
  });

  promise1
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num);
          output.textContent = `Result: ${num}`; 
        }, 2000);
      });
    })
    .then((num) => { 
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
          output.textContent = `Result: ${num * 2}`; 
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num - 3);
          output.textContent = `Result: ${num - 3}`; 
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num / 2);
          output.textContent = `Result: ${num / 2}`; 
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(num + 10);
          output.textContent = `Final Result: ${num + 10}`; 
        }, 1000);
      });
    })
    .catch((error) => {
      output.textContent = `Error: ${error}`;
    });
});