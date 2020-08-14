// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const coronaform = document.getElementById('coronaform');

coronaform.addEventListener('submit', (e) => {
    // Defining a function to validate form 
    // Retrieving the values of form elements
    var surname = document.coronaform.surname.value;
    var givenname = document.coronaform.givenname.value;
    var dob = document.coronaform.dob.value;
    var residence = document.coronaform.residence.value;
    var occupation = document.coronaform.occupation.value;
    var nationality = document.coronaform.nationality.value;
    var gender = document.coronaform.gender.value;
    var category = document.coronaform.category.value;


    // Defining error variables with a default value

    let surnameErr = givennameErr = dobErr = categoryErr = genderErr = nationalityErr = occupationErr = residenceErr = true;
    // Validate surname
    if (surname == "") {
        printError("surnameErr", "This Field is required");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(surname) === false) {
            printError("surnameErr", "This Field is required");
        } else if (surname.length < 1 && surname.length > 16) {
            printError("surnameErr", "Please enter a valid Name :SHOULD BE between 1-6 CHARACTERS");
        } else {
            printError("surnameErr", "");
            surnameErr = false;
        }
    }
    //Give name
    if (givenname == "") {
        printError("givennameErr", "This Field is required");
    } else if (givenname.length < 1 && givenname.length > 16) {
        printError("givennameErr", "Please enter a valid Name :SHOULD BE between 1-6 CHARACTERS");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(givenname) === false) {
            printError("givennameErr", "Please enter a valid Given Name:SHOULD BE CHARACTERS ONLY");
        } else {
            printError("givennameErr", "");
            givennameErr = false;
        }
    }
    // //   date of birth validation
    // if (dob == "") {
    //     printError("dobErr", "Select Date of Birth");
    // } else {
    //     printError("dobErr", "");
    //     dobErr = false;
    // }
    //validate residence

    if (residence == "") {
        printError("residenceErr", "This Field is required");
    } else if (residence.length < 1 && residence.length > 20) {
        printError("residenceErr", "Please enter a Residence :SHOULD BE between 1-20 CHARACTERS");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(residence) === false) {
            printError("residenceErr", "Please enter a valid Given Name:SHOULD BE CHARACTERS ONLY");
        } else {
            printError("residenceErr", "");
            residenceErr = false;
        }
    }
    //occupation
    if (occupation == "") {
        printError("occupationErr", "This Field is required");
    } else if (occupation.length < 5 && occupation.length > 50) {
        printError("occupationErr", "Please enter your Occupation :SHOULD BE between 5-50 CHARACTERS");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(occupation) === false) {
            printError("occupationErr", "Please enter a valid Given Name:SHOULD BE CHARACTERS ONLY");
        } else {
            printError("occupationErr", "");
            occupationErr = false;
        }
    }
    //nationality 
    if (nationality == "") {
        printError("nationalityErr", "This Field is required");
    } else if (nationality.length < 5 && nationality.length > 20) {
        printError("nationalityErr", "Please enter your Nationality :SHOULD BE between 5-20 CHARACTERS");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nationality) === false) {
            printError("nationalityErr", "Please enter a valid Given Name:SHOULD BE CHARACTERS ONLY");
        } else {
            printError("nationalityErr", "");
            nationalityErr = false;
        }
    }
    //gender
    if (gender == "") {
        printError("genderErr", "This Field is required");
    } else if (gender != "Male" && gender != "Female") {
        printError("genderErr", "Gender is Either Male or Female");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    //category validation
    if (category == "") {
        printError("categoryErr", "This Field is required");
    } else {
        printError("category", "");
        categoryErr = false;
    }

    //Preventing Default
    if ((surnameErr || givennameErr || dobErr || categoryErr || genderErr || nationalityErr || occupationErr || residenceErr == true)) {
        alert(" Cannot Submit Please Fill In the Required Fields")
        e.preventDefault();
        return false;
    } else {
        //Allow form to submit
        e.currentTarget.submit();

        alert("Patient Added, Thank You")


    }



})