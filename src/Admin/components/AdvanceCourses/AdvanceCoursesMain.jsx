import { useTheme } from '@emotion/react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Menu, MenuItem, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddAdvanceCourse from './components/AddAdvanceCourse';
import ViewAdvanceCourse from './components/ViewAdvanceCourse';
import { useDispatch } from 'react-redux';
import { getAdvanceCourse, deleteSingleData, getAllCourse } from '../../../store/actions/courseActions';

const AdvanceCoursesMain = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await dispatch(getAllCourse());
      const data = res.data.data
    const filteredCourses = data.filter(course => course.courseType === 'advanced')
    setCourseData(filteredCourses);

    } catch (err) {
      console.error("Failed to fetch advanced courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);



  // Fetch instructor data after coming back from AddInstructor
  useEffect(() => {
    if (!isAddingCourse && !isEditing) {
      fetchData(); // Trigger the API call again
    }
  }, [isAddingCourse, isEditing]);


  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentRowId(id);

  };
  console.log("row id show ", currentRowId)

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setConfirmDialogOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteSingleData(currentRowId));
      setConfirmDialogOpen(false);
fetchData()
    } catch (err) {
      console.error("Failed to delete course:", err);
    }
  };

  const handleAddCourseClick = () => {
    setIsAddingCourse(true);
  };

  const handleBackClick = () => {
    setIsAddingCourse(false);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    handleMenuClose();
  };

  return (
    <Box>
      {isAddingCourse ? (
        <>
          <Button variant='outlined' onClick={handleBackClick} sx={{ marginBottom: '1rem' }}>
            &lt; Back to Courses
          </Button>
          <AddAdvanceCourse />
        </>
      ) : isEditing && currentRowId ? (
        <>
          <Button variant='outlined' onClick={handleBackClick} sx={{ marginBottom: '1rem' }}>
            &lt; Back to Courses
          </Button>
          <ViewAdvanceCourse courseId={currentRowId} />
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: '550',
                fontSize: '2rem',
              }}
            >
              Advance Courses
            </Typography>

            <Button variant='outlined' onClick={handleAddCourseClick}>
              + Add Course
            </Button>
          </Box>

          <br />

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper} sx={{ padding: '1rem 1rem', boxShadow: '10px 0px 20px 1px rgba(0, 0, 0, 0.1)' }}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Course Duration</TableCell>
                    <TableCell>Lecture Duration</TableCell>
                    <TableCell>Course Fee</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courseData.map((row) => (
                    <TableRow
                      key={row._id} // Use unique ID as key
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row' sx={{ color: 'grey' }}>
                        {row.title}
                      </TableCell>
                      <TableCell sx={{ color: 'grey' }}>{row.courseDuration} weeks</TableCell>
                      <TableCell sx={{ color: 'grey' }}>{row.lectureDuration} hours</TableCell>
                      {/* <TableCell sx={{ color: 'grey' }}>$ {row.price}</TableCell> */}
                      <TableCell sx={{ color: 'grey' }}>₹ {row.indianPrice}</TableCell>

                      <TableCell>
                        <IconButton onClick={(event) => handleMenuClick(event, row._id)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleEditClick}>View</MenuItem>
                          <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}


      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
         Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvanceCoursesMain;
