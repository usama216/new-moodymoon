import React, { useEffect, useState } from "react";
import "./Hero.css";
import {
  Button,
  Box,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  getStdTime,
  getStudentJoinFreeTrails,
  studentApplyFreeTrails,
} from "../../../store/actions/courseActions";
import FreeTrialButton from "../../../components/FreeTrialButton";
import Btn from "../../../components/Btn/Btn";
import { GoArrowRight } from "react-icons/go";


function Hero() {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery('(max-width:1200px)'); 

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth?.isAuthenticated);
  const [trailData, setTrailData] = useState({});
  const [loadingEnroll, setLoadingEnroll] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSecondQuestionYes, setIsSecondQuestionYes] = useState(null);
  const [selectedThirdOption, setSelectedThirdOption] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  // Helper function to filter available times
  const filterAvailableTimes = (date) => {
    if (!date) return [];
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    return availableTimes.filter(
      (timeObj) => dayjs(timeObj.time).format("YYYY-MM-DD") === formattedDate
    );
  };

  const today = dayjs().startOf("day");
  const tomorrow = today.add(1, "day");
  const dayAfterTomorrow = today.add(2, "day");

  const shouldDisableDate = (date) => {
    const selectedDay = dayjs(date).startOf("day");
    return ![today, tomorrow, dayAfterTomorrow].some((day) =>
      day.isSame(selectedDay, "day")
    );
  };

  const fetchAvailableTime = async () => {
    try {
      const res = await dispatch(getStdTime());
      const data = res.data.data;
      setAvailableTimes(data);
    } catch (err) {
      console.error("Failed to fetch available times:", err);
    }
  };

  useEffect(() => {
    fetchAvailableTime();
  }, []);

  useEffect(() => {
    if (auth === true) {
      const fetchTrialData = async () => {
        try {
          const res = await dispatch(getStudentJoinFreeTrails());
          const data = res.data.data;
          setTrailData(data);
        } catch (err) {
          console.error("Failed to fetch free trails:", err);
        }
      };
      fetchTrialData();
    }
  }, [auth, dispatch]);

  const handleFreeTrail = () => {
    if (auth === true && selectedDate && selectedTime && selectedOption) {
      setLoadingEnroll(true);

      let courseType;

      switch (selectedOption) {
        case "Bhajan":
          courseType = "bhajan";
          break;
        case "Hindustani Vocals":
          courseType = "Hindustani vocals";
          break;
        case "Tabla":
          courseType = "Tabla";
          break;
        case "Ghazal":
          courseType = "Ghazal";
          break;
        case "Bollywood/Filmy Songs":
          courseType = "Bollywood/Filmy Songs";
          break;
        default:
          courseType = "Not Selected";
          break;
      }

      const requestData = {
        courseType: courseType,
        startTime:
          dayjs(selectedDate).format("YYYY-MM-DD") +
          "T" +
          dayjs(selectedTime, "h:mm A").format("HH:mm:ss"),
        isExperienced: isSecondQuestionYes,
        years: selectedThirdOption,
      };

      dispatch(studentApplyFreeTrails(requestData))
        .then((res) => {
          console.log(res.data.message, "snackbar message");
          enqueueSnackbar(res.data.message, { variant: "success" });
          setLoadingEnroll(false);
          setOpenModal(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingEnroll(false);
          enqueueSnackbar(err.response.data.message, { variant: "error" });
        });
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOption("");
    setIsSecondQuestionYes(null);
    setSelectedThirdOption("");
    setSelectedTime("");
  };

  const filteredAvailableTimes = filterAvailableTimes(selectedDate);
  const currentTime = dayjs();

  const futureTimes = filteredAvailableTimes.filter((timeObj) =>
    dayjs(timeObj.time).isAfter(currentTime)
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          backgroundImage:"url(/herobg.png)", 
          backgroundSize:'cover',
          backgroundPosition:'start',
          height:isSmallScreen ? '70vh': isMediumScreen ? '80vh':'120vh',
           mt:isSmallScreen ? '-5rem': isMediumScreen ? '-6rem':'-8.4rem',
          boxSizing:'border-box',
          boxShadow: 'inset -0px -20px 100px black'
        }}>
        <section style={{height:'100%', display:'flex',
          justifyContent:'center', alignItems:'center',
          boxSizing:'border-box',
          padding:'0% 10%'

        }}>
          <div style={{display:'flex', flexDirection:'column',
          justifyContent:'center', alignItems:'center'}}>
            <Typography
              sx={{ color: "#faee1d", 
                fontSize:isSmallScreen ? '1.5rem': isMediumScreen ? '2rem': "2.5rem",
                 fontWeight: "400", mb:'-0.5rem' ,
                 textAlign:'center',}}
            >
             Finest Organic 
            </Typography>

            <Typography sx={{ color: "white",
            textAlign:'center',
               fontSize:isSmallScreen ? '2rem': isMediumScreen ? '3.2rem': "4rem", 
               fontWeight: "700" }}>
            Herbs in Every CBD Product
            </Typography>
            <Typography sx={{ color: "white",
               fontSize:isSmallScreen ? '1rem': isMediumScreen ? '1.1rem': "1.2rem",
                mb:'1rem',textAlign:'center', }}>
            Moody Moon has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.
            </Typography>
            <Btn sx={{fontSize:isSmallScreen ? '0.8rem': isMediumScreen ? '0.9rem':'0.9rem',
               fontWeight:'400', p:'0.7rem 1rem', borderRadius:'10px'}}>
            <span style={{color:'white', textTransform:'uppercase'}}>Learn More</span> 
            <GoArrowRight style={{fontSize: isSmallScreen ?  '1.1rem':'1.2rem', color:'white', marginLeft:'0.5rem'}}/>
            </Btn>
            <Box sx={{ width: isSmall ? "200%" : "50%" }}>
              {/* <FreeTrialButton/> */}
            </Box>
          </div>
        </section>
        </Box>
      </LocalizationProvider>
    </>
  );
}

export default Hero;
