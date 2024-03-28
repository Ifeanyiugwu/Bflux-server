
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const phoneRegex = new RegExp("[0-9]{11}")


const isEmailValid = (email)=>{
    return regex.test(email);              // comparing our email in regular expression
}


const isPhoneNumberValid=(phone)=>{
    // console.log(phone)
    if(isNaN(phone)) return false
    if(phone.charAt(0) !== "0") return false;
    return phoneRegex.test(phone)
}

// write a function to check the phone number is valid nigerian number

module.exports = {
    isEmailValid,
    isPhoneNumberValid,
}