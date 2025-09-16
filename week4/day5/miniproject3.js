function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("Astronomer", "Moonstarer")); // true
console.log(areAnagrams("School master", "Theclassroom")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true
console.log(areAnagrams("Hello", " Olelh")); // true
console.log(areAnagrams("Hello", "World")); // false
