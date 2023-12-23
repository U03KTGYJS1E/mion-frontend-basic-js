function firstIndex(array) {
  return array[0];
}

function countArrayLength(array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      return "この配列は空配列です";
    } else {
      return "この配列は" + array.length + "個のデータを持っています";
    }
  } else {
    return "これは配列ではありません";
  }
}

function extractArray(array) {
  if (Array.isArray(array)) {
    if (array.length >= 3) {
      return [array[1], array[2]];
    } else if (array.length === 2) {
      return [array[1]];
    } else {
      return [];
    }
  } else {
    return "これは配列ではありません";
  }
}

function makeMark(mark, number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(mark);
  }
  return result;
}

function onlyString(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      result.push(array[i]);
    }
  }
  return result;
}

function addNumber(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(i + 1 + ": " + array[i]);
  }
  return result;
}

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
