// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   Box,
//   Card,
//   TextField,
//   Typography,
//   Button,
//   Chip,
//   useTheme,
//   IconButton,
//   CircularProgress,
// } from "@mui/material";
// import {addInstructor } from "../../../../store/actions/courseActions";
// import { useSnackbar } from "notistack";

// const inputStyles = {
//   marginBottom: "0.5rem",
//   marginTop: "0.9rem",
// };

// const labelStyles = {
//   fontSize: "1rem",
//   fontWeight: "400",
// };

// const cardStyles = {
//   padding: "1rem",
// };

// const AddInstructor = () => {
//   const initialValues = {
//     firstName:'',
//     lastName:'',
//     instructorRole: "",
//     gender: "",
//     country: "",
//     phone: "",
//     email:'',
//     password:'',
//     confirmPassword:''
//   };
//   const { enqueueSnackbar } = useSnackbar();
//   const theme = useTheme();
//   const [formValues, setFormValues] = useState(initialValues);
//   const [isLoading, setIsLoading] = useState(false);

//   const dispatch = useDispatch();
//   const country = [
//     "India",
//     "USA",
//     "United Kingdom",
//     "UAE",
//     "Australia",
//     "Kenya",
//     "Uganda",
//     "Canada",
//   ];
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append("firstName", formValues.firstName);
//     formData.append("lastName", formValues.lastName);

//     formData.append("instructorRole", formValues.instructorRole);
//     formData.append("gender", formValues.gender);
//     formData.append("phone", formValues.phone);
//     formData.append("email", formValues.email);
//     formData.append("password", formValues.password);
//     formData.append("confirmPassword", formValues.confirmPassword);


//     formData.append("country", formValues.country);

//     dispatch(addInstructor(formData))
//       .then((res) => {
//         setFormValues(initialValues);

//         setIsLoading(false);
//         enqueueSnackbar(res.data.message, { variant: "success" });
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         enqueueSnackbar(err.response.data.message, { variant: "error" });
//       });
//   };

//   return (
//     <Box sx={{ padding: "1rem 3rem" }}>
//       <Card sx={cardStyles}>
//         <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
//           Add Details
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           {[
//             { label: "First Name", name: "firstName", type: "text" },
//             { label: "Last Name", name: "lastName", type: "text" },

//             { label: "Instructor Role", name: "instructorRole", type: "text" },
//             { label: "Gender", name: "gender", type: "text" },
//             { label: "Country", name: "country", type: "text" },
//             { label: "phone", name: "phone", type: "number" },
//             { label: "Email", name: "email", type: "text" },
//             { label: "Password", name: "password", type: "text" },
//             { label: "Confirm Password", name: "confirmPassword", type: "text" },

//           ].map((field, index) => (
//             <Box key={index} sx={inputStyles}>
//               <Typography sx={labelStyles}>{field.label}</Typography>
//               <TextField
//                 placeholder={`Enter ${field.label.toLowerCase()}`}
//                 fullWidth
//                 size="small"
//                 name={field.name}
//                 type={field.type}
//                 value={formValues[field.name]}
//                 onChange={handleChange}
//               />
//             </Box>
//           ))}

//           <Box
//             sx={{
//               marginTop: "1rem",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//             gap={4}
//           >
//             <Button
//               variant="outlined"
//               color="primary"
//               fullWidth
//               sx={{ fontWeight: 400, borderRadius: "0px" }}
//             >
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ fontWeight: 400, borderRadius: "0px" }}
//             >
//               {isLoading ? (
//                 <CircularProgress size={24} sx={{ color: "white" }} />
//               ) : (
//                 "Add"
//               )}
//             </Button>
//           </Box>
//         </form>
//       </Card>
//     </Box>
//   );
// };

// export default AddInstructor;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Card,
  TextField,
  Typography,
  Button,
  Chip,
  useTheme,
  IconButton,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { addInstructor } from "../../../../store/actions/courseActions";
import { useSnackbar } from "notistack";

const inputStyles = {
  marginBottom: "0.5rem",
  marginTop: "0.9rem",
};

const labelStyles = {
  fontSize: "1rem",
  fontWeight: "400",
};

const cardStyles = {
  padding: "1rem",
};

const AddInstructor = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    instructorRole: "",
    gender: "",
    country: "",
    phone: "",
    email: '',
    password: '',
    confirmPassword: ''
  };
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const countries = [
    "India",
    "USA",
    "United Kingdom",
    "UAE",
    "Australia",
    "Canada",
    "Kenya",
    "Uganda",

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("firstName", formValues.firstName);
    formData.append("lastName", formValues.lastName);
    formData.append("instructorRole", formValues.instructorRole);
    formData.append("gender", formValues.gender);
    formData.append("phone", formValues.phone);
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);
    formData.append("confirmPassword", formValues.confirmPassword);
    formData.append("country", formValues.country);

    dispatch(addInstructor(formData))
      .then((res) => {
        setFormValues(initialValues);
        setIsLoading(false);
        enqueueSnackbar(res.data.message, { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false);
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  return (
    <Box sx={{ padding: "1rem 3rem" }}>
      <Card sx={cardStyles}>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
          Add Details
        </Typography>

        <form onSubmit={handleSubmit}>
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Instructor Role", name: "instructorRole", type: "text" },
            { label: "Phone", name: "phone", type: "number" },
            { label: "Email", name: "email", type: "text" },
            { label: "Password", name: "password", type: "text" },
            { label: "Confirm Password", name: "confirmPassword", type: "text" },
          ].map((field, index) => (
            <Box key={index} sx={inputStyles}>
              <Typography sx={labelStyles}>{field.label}</Typography>
              <TextField
                placeholder={`Enter ${field.label.toLowerCase()}`}
                fullWidth
                size="small"
                name={field.name}
                type={field.type}
                value={formValues[field.name]}
                onChange={handleChange}
              />
            </Box>
          ))}

          <Box sx={inputStyles}>
            <FormControl fullWidth>
              <Typography sx={labelStyles}>Country</Typography>
              <Select
                name="country"
                value={formValues.country}
                onChange={handleChange}
                displayEmpty
                size='small'
              >
                <MenuItem value="">
                  <em>Select a country</em>
                </MenuItem>
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={inputStyles}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={labelStyles}>Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Box>


          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            gap={4}
          >
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ fontWeight: 400, borderRadius: "0px" }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontWeight: 400, borderRadius: "0px" }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Add"
              )}
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default AddInstructor;
