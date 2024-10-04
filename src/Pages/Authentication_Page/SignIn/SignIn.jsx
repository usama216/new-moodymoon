import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Page from "../../../components/Page/Page";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resenduserotpcode,
  userLogin,
} from "../../../store/actions/authActions";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const userdata = useSelector((state) => state?.auth?.user?.user);

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const from = location?.state?.from || "/";

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(userLogin(formValues))
      .then((res) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        const role = res.data.data.role;

        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "user") {
          navigate("/");
        } else if (role === "instructor") {
          navigate("/instructor-dashboard");
        } else {
          navigate(from);
        }

        setFormValues(initialValues);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
        if (err.response.data.verified === "false") {
          const email = formValues.email;
          const emailAccess = formValues.email;

          dispatch(resenduserotpcode({ email }))
            .then((res) => {
              navigate("/email-confirmation", { state: { emailAccess } });
              enqueueSnackbar(res.data.message, {variant:'success'})
            })
            .catch((err) => {
              console.error("API Error:", err); // Log the error to debug
              enqueueSnackbar(err.response.data.message, { variant: "error" });
            });
        }
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Page title="sign-in">
        <Box>
          <Grid container spacing={5}>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <Box
                sx={{
                  backgroundImage: "url(/sign-in-up.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: isSmall ? "50vh":"100vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: "1rem 1rem 6rem 1rem",
                }}
              >
                <Typography sx={{ color: "white" }}></Typography>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} xs={12} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ width: "90%" }}>
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontWeight: "600",
                      marginTop: "2rem",
                    }}
                  >
                    <Box sx={{ marginTop: isSmall ? "1rem " : "6rem" }}>


                    <Link to="/">
        <img
          src="loginlogo.svg"
          alt="Logo"
          style={{ width: isSmall ? '50%' : '30%' }}
        />
      </Link>

                    </Box>

                    {/*
                  <Button
                    sx={{
                      fontSize: "3rem",
                      fontWeight: "600",
                      color:'black',
                      textTransform:'none',
                      marginTop: "2rem",
                      ':hover': {
                  backgroundColor: 'white',
                },

                    }}

                    onClick={()=>navigate('/')}
                    >

                  </Button> */}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      marginTop: "5rem",
                      marginBottom: "1rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    Sign In
                  </Typography>

                  <form onSubmit={handleLoginSubmit}>
                    <TextField
                      fullWidth
                      required
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      variant="outlined"
                      className="mb-4"
                      sx={{ marginBottom: "2rem" }}
                    />
                    {/* <TextField
                      fullWidth
                      required
                      label="Password"
                      id="password"
                      name="password"
                      type={"password"}
                      value={formValues.password}
                      onChange={handleChange}
                      variant="outlined"
                      className="mb-4"
                      sx={{ marginBottom: "1rem" }}
                    /> */}

                    <TextField
                      fullWidth
                      required
                      label="Password"
                      id="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      variant="outlined"
                      className="mb-4"
                      sx={{ marginBottom: "1rem" }}
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={toggleShowPassword} edge="end">
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Link
                      to="/forget-password"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          marginLeft: "0.5rem",
                        }}
                      >
                        Forget Password
                      </Typography>
                    </Link>

                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "400",
                          color: "white",
                          marginTop: "2rem",

                          width: "100%",
                          marginBottom: ".5rem",
                        }}
                        disabled={loading} // Disable button while loading
                      >
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-12px",
                              marginLeft: "-12px",
                            }}
                          />
                        )}
                        Sign in
                      </Button>
                    </div>
                  </form>

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    Don't have an account?{" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                      }}
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Page>
    </>
  );
};

export default SignIn;
