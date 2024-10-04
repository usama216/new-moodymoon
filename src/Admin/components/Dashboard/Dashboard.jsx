import { Box, Button, CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import RecentEnrollments from "./components/RecentEnrollments";
import { getAdminDashboardDetail, getStudentData } from "../../../store/actions/courseActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const Dashboard = () => {
  const theme = useTheme();
const navigate = useNavigate()
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getAdminDashboardDetail());
        const data = res.data;
        console.log(res.data, 'res d')
        setDetail(data);
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch advanced courses:", err);

      }
    };

    fetchData();
  }, []);


console.log(detail, 'detailsssss')


if(loading){
  return(
    <>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'80vh'}}>
<CircularProgress/>
       </Box>
    </>
  )
}




  return (
    <>
      <Box sx={{width:'100%'}}>
       <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
       <Typography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "550",
            fontSize: "2rem",
          }}
        >
         Admin Dashboard

        </Typography>
        <Button sx={{textTransform:'none'}} variant="outlined" onClick={()=>navigate('/')}>Go to Website</Button>


       </Box>
<br/>
        <Box>
          <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: "2rem",
                    color: "white",
                    background: "linear-gradient(to bottom, #901953, #35041f)",
                    width: "100%",
                    borderRadius: "5px",
                    minHeight: "20vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "1.2rem" }}>
                      Students
                    </Typography>

                    <FaCalendarAlt style={{ fontSize: "1.6rem" }} />

                  </Box>

                  <br />

                  <Typography sx={{ fontSize: "2rem", fontWeight: 400 }}>
                    {detail.totalStudent}
                  </Typography>
                </Box>
              </Grid>





              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: "2rem",
                    color: "white",
                    background: "linear-gradient(to bottom, #901953, #35041f)",
                    width: "100%",
                    borderRadius: "5px",
                    minHeight: "20vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "1.2rem" }}>
                      Total Earn
                    </Typography>
                    {/* <Typography sx={{fontSize:'2rem'}}></Typography> */}
                    <FaCalendarAlt style={{ fontSize: "1.6rem" }} />

                  </Box>

                  <br />

                  <Typography sx={{ fontSize: "2rem", fontWeight: 400 }}>
                    $ 0
                  </Typography>
                </Box>
              </Grid>



              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: "2rem",
                    color: "white",
                    background: "linear-gradient(to bottom, #901953, #35041f)",
                    width: "100%",
                    borderRadius: "5px",
                    minHeight: "20vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    Total Instructors
                    </Typography>

                    <BsDatabase style={{ fontSize: "1.6rem" }} />

                  </Box>

                  <br />

                  <Typography sx={{ fontSize: "2rem", fontWeight: 400 }}>
                    {detail.totalInstructor}
                  </Typography>
                </Box>
              </Grid>



              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    padding: "2rem",
                    color: "white",
                    background: "linear-gradient(to bottom, #901953, #35041f)",
                    width: "100%",
                    borderRadius: "5px",
                    minHeight: "20vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500, fontSize: "1.2rem" }}>
                    Total Courses
                    </Typography>
                    <BsDatabase style={{ fontSize: "1.6rem" }} />

                  </Box>

                  <br />

                  <Typography sx={{ fontSize: "2rem", fontWeight: 400 }}>
                    {detail.totalCourses}
                  </Typography>
                </Box>
              </Grid>


          </Grid>
        </Box>

<RecentEnrollments/>
      </Box>

    </>
  );
};

export default Dashboard;
