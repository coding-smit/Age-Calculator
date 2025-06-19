// age calculator

const dateInput = document.getElementById("date");
const btn = document.getElementById("btn-cal");
const result = document.getElementById("total");

function calculateAge(event) {
    event.preventDefault(); // prevent form submit reload

    const dateValue = dateInput.value;
    if (dateValue === "") {
        alert("Please! Enter Your Date ");
        return;
    }

    const age = getAge(dateValue);
    result.innerText = `Your age is ${age} ${age !== 1 ? "years" : "year"} old.`;
}

function getAge(dateValue) {
    const currentDate = new Date();
    const birthDate = new Date(dateValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

btn.addEventListener("click", calculateAge);
