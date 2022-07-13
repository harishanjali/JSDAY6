let obj = {
  id: 1,
  name: 'harish',
  age: 23,
  city: 'ananthapur',
};

Object.defineProperty(obj, 'id', {
  value: 10,
  writable: false,
});
obj.id = 'node';
console.log(obj.id);
