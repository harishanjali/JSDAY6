const obj = {
  id: 1,
  username: 'John',
  password: 'secret',
  email: 'john@email.com',
};

let objKeys = Object.keys(obj);
let finalKeys = [];

for (let each of objKeys) {
  if (each !== 'password') {
    finalKeys.push(each);
  }
}
// console.log(finalKeys);

let stringifiedData = JSON.stringify(obj, finalKeys);
console.log(stringifiedData);
