
export const checkValidData = (email, password) => {

    const isEmailMObValid = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|(?:\+91|91)?\d{10})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailMObValid) return "Email ID or mobile is not Valid";
    if (!isPasswordValid) return "password is not Valid";

    return null;
}

