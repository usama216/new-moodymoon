// import {
//   Box,
//   Button,
//   Card,
//   CircularProgress,
//   FormControl,
//   IconButton,
//   InputLabel,
//   Menu,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import React, { useEffect } from "react";
// import {
//   assignInstructor,
//   getInstructors,
//   getSingleStudent,
// } from "../../../../store/actions/courseActions";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSnackbar } from "notistack";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ViewStudent = ({ student_Id }) => {
//   const theme = useTheme();
//   const { enqueueSnackbar } = useSnackbar();
//   const [studentData, setStudentData] = useState({});
//   const [courseData, setCourseData] = useState({});
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [instructorId, setInstructorId] = useState("");
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await dispatch(getSingleStudent(student_Id));

//         setStudentData(res.data.data.studentId);
//         setCourseData(res.data.data.courseId);
//         setInstructorId(res.data.data.instructorId);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch student:", err);
//         setLoading(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [dispatch, student_Id]);

//   const [teachers, setTeachers] = useState([]); // State to store the list of teachers
//   const [selectedTeacher, setSelectedTeacher] = useState(""); // State to store selected teacher

//   useEffect(() => {
//     const fetchData = async () => {
//       // setLoading(true);
//       try {
//         const res = await dispatch(getInstructors());
//         setTeachers(res.data.data);
//         console.log(res.data.data, "haha data");
//       } catch (err) {
//         console.error("Failed to fetch beginner courses:", err);
//       } finally {
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   const handleChange = (event) => {
//     setSelectedTeacher(event.target.value);
//   };

//   const handleAssign = () => {
//     dispatch(assignInstructor(selectedTeacher, student_Id))
//       .then((res) => {
//         enqueueSnackbar(res.data.message, { variant: "success" });
//       })
//       .catch((err) => {
//         enqueueSnackbar(err?.response?.data?.message, {
//           variant: "error",
//         });

//         console.log(err);
//       });
//   };

//   const handleMenuClick = (events) => {
//     setAnchorEl(events.currentTarget);
//   };

//   const instructor1 = teachers.filter(
//     (teacher) => teacher._id === instructorId
//   );

//   const data = instructor1.map((teacher) => teacher.firstName);
//   console.log(data, "id");

//   const data2 = instructor1.map((teacher) => teacher.lastName);
//   console.log(data, "id");

//   console.log(instructor1.firstName, "name");

//   const instructorExists = teachers.some(
//     (teacher) => teacher._id === instructorId
//   );

//   console.log(instructorExists, "existssss");

//   if (loading) {
//     return (
//       <>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "80vh",
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       </>
//     );
//   }

//   return (
//     <>
//       <Box>
//         <Card
//           sx={{
//             padding: "1rem",
//             marginBottom: "1rem",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "start",
//           }}
//         >
//           <Box>
//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Student Name
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.firstName}
//             </Typography>
//             <br />

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Course Name
//             </Typography>

//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {courseData.title}
//             </Typography>
//             <br />

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Age
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.learnerType}
//             </Typography>
//             <br />

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Gender
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.gender}
//             </Typography>
//             <br />
//             {/*
//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Course Fee
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {courseData.price}
//             </Typography> */}

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Country
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.country}
//             </Typography>
//           </Box>

//           <Box>
//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Email
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.email}
//             </Typography>
//             <br />

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Phone
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {studentData.phone}
//               <br />
//             </Typography>
//             <br />
//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Course Type
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               {courseData.courseType}
//             </Typography>
//             <br />

//             <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
//               Class Type
//             </Typography>
//             <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
//               Group
//             </Typography>
//           </Box>
//           {/* <Button>click</Button> */}
//           <div></div>
//         </Card>

//         {instructorExists ? (
//           <>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Typography sx={{ fontWeight: "600" }}>
//                 Assigned Instructor :
//               </Typography>

//               <Typography
//                 sx={{ color: theme.palette.primary.main, fontWeight: "600" }}
//               >
//                 {data} {data2}
//               </Typography>
//             </Box>
//           </>
//         ) : null}
//         <br />

//         <Box sx={{ width: "30%" }}>
//           <FormControl fullWidth size="small">
//             <InputLabel>Select Teacher</InputLabel>
//             <Select
//               value={selectedTeacher}
//               onChange={handleChange}
//               label="Select Teacher"
//             >
//               {teachers.map((teacher) => (
//                 <MenuItem key={teacher._id} value={teacher._id}>
//                   {teacher.firstName}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <br />
//           <br />

//           {instructorExists ? (
//             <Button
//               fullWidth
//               variant="contained"
//               onClick={() => handleAssign()}
//             >
//               Re-Assign
//             </Button>
//           ) : (
//             <Button
//               fullWidth
//               variant="contained"
//               onClick={() => handleAssign()}
//             >
//               Assign
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ViewStudent;

import {
  Box,
  Button,
  Card,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import {
  assignInstructor,
  getInstructors,
  getSingleStudent,
} from "../../../../store/actions/courseActions";

const ViewStudent = ({ student_Id }) => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [studentData, setStudentData] = useState({});
  const [courseData, setCourseData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [instructorId, setInstructorId] = useState("");
  const [loading, setLoading] = useState(true);
  const [assignLoading, setAssignLoading] = useState(false); // New state for button loader
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const dispatch = useDispatch();

  // Fetch student and course data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getSingleStudent(student_Id));
        setStudentData(res.data.data.studentId);
        setCourseData(res.data.data.courseId);
        setInstructorId(res.data.data.instructorId);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch student:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, student_Id]);

  // Fetch instructors
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await dispatch(getInstructors());
        setTeachers(res.data.data);
      } catch (err) {
        console.error("Failed to fetch instructors:", err);
      }
    };

    fetchInstructors();
  }, [dispatch]);

  const handleChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const handleAssign = async () => {
    setAssignLoading(true); // Start button loader
    try {
      await dispatch(assignInstructor(selectedTeacher, student_Id));
      enqueueSnackbar("Instructor assigned successfully", { variant: "success" });

      // Re-fetch the updated data
      const res = await dispatch(getSingleStudent(student_Id));
      setStudentData(res.data.data.studentId);
      setCourseData(res.data.data.courseId);
      setInstructorId(res.data.data.instructorId);

      // Reset select input
      setSelectedTeacher("");
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || "Failed to assign instructor", {
        variant: "error",
      });
    } finally {
      setAssignLoading(false); // Stop button loader
    }
  };

  const instructor1 = teachers.filter(
    (teacher) => teacher._id === instructorId
  );

  const data = instructor1.map((teacher) => teacher.firstName).join(" ");
  const data2 = instructor1.map((teacher) => teacher.lastName).join(" ");

  const instructorExists = teachers.some(
    (teacher) => teacher._id === instructorId
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box>
      <Card
          sx={{
            padding: "1rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Student Name
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.firstName}
            </Typography>
            <br />

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Course Name
            </Typography>

            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {courseData.title}
            </Typography>
            <br />

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Age
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.learnerType}
            </Typography>
            <br />

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Gender
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.gender}
            </Typography>
            <br />
            {/*
            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Course Fee
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {courseData.price}
            </Typography> */}

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Country
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.country}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Email
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.email}
            </Typography>
            <br />

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Phone
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {studentData.phone}
              <br />
            </Typography>
            <br />
            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Course Type
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              {courseData.courseType}
            </Typography>
            <br />

            <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
              Class Type
            </Typography>
            <Typography sx={{ marginTop: "0.2rem", color: "grey" }}>
              Group
            </Typography>
          </Box>
          {/* <Button>click</Button> */}
          <div></div>
        </Card>

        {instructorExists && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "600" }}>
              Assigned Instructor:
            </Typography>
            <Typography
              sx={{ color: theme.palette.primary.main, fontWeight: "600", ml: 1 }}
            >
              {data} {data2}
            </Typography>
          </Box>
        )}
        <br />

        <Box sx={{ width: "30%" }}>
          <FormControl fullWidth size="small">
            <InputLabel>Select Teacher</InputLabel>
            <Select
              value={selectedTeacher}
              onChange={handleChange}
              label="Select Teacher"
            >
              {teachers.map((teacher) => (
                <MenuItem key={teacher._id} value={teacher._id}>
                  {teacher.firstName} {teacher.lastName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />

          <Button
            fullWidth
            variant="contained"
            onClick={handleAssign}
            disabled={assignLoading} // Disable button during loading
          >
            {assignLoading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : instructorExists ? (
              "Re-Assign"
            ) : (
              "Assign"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ViewStudent;
