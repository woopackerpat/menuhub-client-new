import validator from "validator";

export function validateRegister(input) {
   const err = {};

   if (!validator.isEmail(input.email)) {
      err.email = "Email is not correct";
   }

   if (!input.email) {
      err.email = "Email is required";
   }

   if (!input.password) {
      err.password = "Password is required";
   }

   if (input.password.length < 6) {
      err.password = "Password must be at least 6 charactors";
   }

   if (input.password !== input.confirmPassword) {
      err.confirmPassword = "Password does not match";
   }

   return err;
}

export function validateLogin(input) {
   const err = {};

   if (!validator.isEmail(input.email)) {
      err.email = "Email is not correct";
   }
   if (!input.email) {
      err.email = "Username is required";
   }

   if (!input.password) {
      err.password = "Password is required";
   }

   return err;
}
