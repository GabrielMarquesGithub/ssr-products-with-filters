export const objectIsEqual = (obj1: {}, obj2: {}) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
