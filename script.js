function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  // Validation: Ensure the date is within the last 120 years and the next 10 years
  const maxPastDate = new Date(
    today.getFullYear() - 120,
    today.getMonth(),
    today.getDate()
  );
  const maxFutureDate = new Date(
    today.getFullYear() + 120,
    today.getMonth(),
    today.getDate()
  );

  if (dob < maxPastDate) {
    alert(
      "The date you entered is more than 120 years in the past. Please enter a valid date."
    );
    return;
  }

  if (dob > maxFutureDate) {
    alert(
      "The date you entered is more than 120 years in the future. Please enter a valid date."
    );
    return;
  }

  // Calculate age
  const ageInMS = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMS);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const month = ageDate.getUTCMonth();
  const day = ageDate.getUTCDate() - 1;

  // Update the DOM with the calculated values
  document.getElementById("year").innerHTML = age;
  document.getElementById("month").innerHTML = month;
  document.getElementById("day").innerHTML = day;
}
