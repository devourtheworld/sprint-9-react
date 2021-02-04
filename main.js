const express = require("express");
const app = express();

const i = process.argv[3];
const t = process.argv[5];

function logger(req, res, next) {
  time();
  next();
}

app.use(logger);

async function time() {
  let interval = setInterval(() => {
    console.log(dateTime());
  }, i);

  setTimeout(() => {
    clearInterval(interval);
  }, t);

  app.get("/", async (req, res) => {
    res.send(await promFun());
  });
}

async function promFun() {
  let promise = new Promise((resolve, reject) => {
    return setTimeout(() => resolve(dateTime()), t);
  });
  return await promise;
}

function dateTime() {
  let today = new Date();
  let difference = today.getTimezoneOffset();
  today.setMinutes(today.getMinutes() + difference);
<<<<<<< HEAD
  let  date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let  time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
=======
  let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
>>>>>>> 413df5faf4a88f5f926e7934a2e186f7d5b3a600
  return `${date} ${time}`;
}

app.listen(3000, () => {
  console.log("Listening...");
});
