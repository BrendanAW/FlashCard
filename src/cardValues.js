const values = [
  {
    _id: 1,
    theme: "Example Example",
    frontValue: "Example Question",
    backValue: "Example Answer",
    answeredCorrectly: false,
    flipped: false,
  },
  {
    _id: 2,
    theme: "Example Example2",
    frontValue: "Another Example Question",
    backValue: "AnotherExample Answer",
    answeredCorrectly: false,
    flipped: false,
  },
];

export function getValues() {
  return values;
}

export function getValue(id) {
  return values.find((v) => v._id === id);
}

export function addNewValue(value) {
  let existingValue = getValue(value._id) || {};

  existingValue.theme = value.theme;
  existingValue.frontValue = value.frontValue;
  existingValue.backValue = value.backValue;
  existingValue.answeredCorrectly = value.answeredCorrectly;

  if (!existingValue._id) {
    existingValue._id = value._id;
    values.push(existingValue);
  }

  return existingValue;
}

export function deleteValue(id) {
  let value = getValue(id);
  values.splice(values.indexOf(value), 1);
  return value;
}
