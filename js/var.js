const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resject(new Error())
  }, 1000);
});

myPromise.then(n => {
  console.log(n);
})
.catch(error => {
  console.log(error);
})