// components/UserForm.js
import * as Yup from "yup";

// Yup validation schema
export const userScheme = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
  department: Yup.string().required("Department is required")
});
