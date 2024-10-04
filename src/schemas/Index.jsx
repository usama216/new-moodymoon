import * as yup from 'yup';

export const SignUpSchemas = yup.object({
    name: yup.string().min(2).max(25).required('Please Enter Your Name'),
    email: yup.string().email().required('Please Enter Correct Email'),
    password: yup.string().min(6).required('Please Enter Correct Email'),
    confirm_password: yup.string().oneOf([yup.ref('password'), null],'Password must Be same')
})