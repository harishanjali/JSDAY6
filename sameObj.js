function checkSameOrNot() {
  let keysBoolean = true;
  let valuesBoolean = true;
  let firstObjKeys = Object.keys(obj);
  let secondObjKeys = Object.keys(anotherObj);

  let firstObjValues = Object.values(obj);
  let secondObjValues = Object.values(anotherObj);
  let index = 0;

  for (let each of firstObjKeys) {
    if (each !== secondObjKeys[index]) {
      keysBoolean = false;
    }
    index++;
  }
  index = 0;
  for (let each of firstObjValues) {
    if (each !== secondObjValues[index]) {
      valuesBoolean = false;
    }
    index++;
  }
  if (keysBoolean && valuesBoolean) {
    return true;
  } else {
    return false;
  }
}

let obj = {
  id: 1,
  name: 'harish',
  age: 23,
  city: 'ananthapur',
};

let anotherObj = {
  id: 1,
  name: 'harish',
  age: 23,
  city: 'ananthapur',
};

let firstObjKeysLength = Object.keys(obj).length;
let secondObjKeysLength = Object.keys(anotherObj).length;

if (firstObjKeysLength === secondObjKeysLength) {
  console.log(checkSameOrNot());
}
