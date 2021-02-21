// Import stylesheets
import "./style.css";

// Write Javascript code!
let prm = new Promise((resolve, reject) => {
  reject("errrr");
});

let retryfunction = function(extecutor, retrycount) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let retryme = () =>
      extecutor
        .then(data => {
          resolve(data);
        })
        .error(err => {
          if (count < retrycount) {
            retryme();
            count = count + 1;
          } else {
            console.error();
            reject(err);
          }
        });
  });
};

retryfunction(prm, 3);
