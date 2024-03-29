// VALIDATE SIGNUP PAGE

export async function validateSignup(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required...!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address...!";
  } else if (values.email.includes(" ")) {
    errors.email = "Invalid Email Format...!";
  } else if (!values.firstName) {
    errors.firstName = "First Name Required...!";
  } else if (values.firstName.includes(" ")) {
    errors.firstName = "Invalid First Name...!";
  } else if (!values.lastName) {
    errors.lastName = "Last Name Required...!";
  } else if (values.lastName.includes(" ")) {
    errors.lastName = "Invalid Last Name...!";
  } else if (!values.password) {
    errors.password = "Password Required...!";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more...!";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password...!";
  } else if (!values.cPassword) {
    errors.cPassword = "Confirm Password Required...!";
  } else if (values.cPassword.length < 8) {
    errors.cPassword = "Password must be 8 characters or more...!";
  } else if (values.cPassword.includes(" ")) {
    errors.cPassword = "Invalid Password...!";
  } else if (values.password !== values.cPassword) {
    errors.cPassword = "Password doesn't match";
  }

  return errors;
}

// ****************************************************************************************************************

// VALIDATE LOGIN PAGE

export async function validateLogin(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required...!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address...!";
  } else if (values.email.includes(" ")) {
    errors.email = "Invalid Email Format...!";
  } else if (!values.password) {
    errors.password = "Password Required...!";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more...!";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password...!";
  }

  return errors;
}
