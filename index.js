var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newObj.key = value;
  newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key;
  object;
  newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  object;
}
