function showFullName() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");

    var first_name = firstName.value;
    var last_name = lastName.value;

    var fullName = document.getElementById("fullname");
    fullName.value = getFullName(first_name, last_name);
}

function getFullName(fname, lname) {
    return fname + " " + lname;
}