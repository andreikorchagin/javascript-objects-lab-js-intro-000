var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object;
  newObj.key = value;
  return object;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = object;
  delete newObj.key;
  return object;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
