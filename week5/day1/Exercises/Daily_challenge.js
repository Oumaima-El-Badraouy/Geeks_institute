// 1st daily challenge
function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === "string")) {
            resolve(arr.map(item => item.toUpperCase()));
        } else {
            reject("Array contains non-string elements");
        }
    });
}
function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort());
        } else {
            reject("Array must contain more than 4 elements");
        }
    });
}
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
