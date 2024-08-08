function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);

  const ageInMS = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMS);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const month = ageDate.getUTCMonth();
  const day = ageDate.getUTCDate() - 1;

  document.getElementById("year").innerHTML = age;
  document.getElementById("month").innerHTML = month;
  document.getElementById("day").innerHTML = day;
}
