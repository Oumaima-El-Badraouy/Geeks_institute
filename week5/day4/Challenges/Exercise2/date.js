function birthdateToAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now - birth;
    let agesecondes=Math.floor(age /(1000 * 60));
   return agesecondes;
}
module.exports = { birthdateToAge };