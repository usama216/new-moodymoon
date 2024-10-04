import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Student_testimonials.css";
import { getPublicTestimonial } from "../../../store/actions/courseActions";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

function Student_testimonials() {
  const base = "https://khatribrothersacademy.com:4545";
  const dispatch = useDispatch();
  const [publicTestimonial, setPublicTestimonial] = useState([]); // get data form api 

  // set constant data 
  const studentdata = [
    {img:'/bhajjancourse.png', stuname :'Imran Ashiq'}, 
    {img:'/bhajjancourse.png', stuname :'Usama Jawad'}, 
    {img:'/bhajjancourse.png', stuname :'Ahmad Mustafa'}, 
    {img:'/bhajjancourse.png', stuname :'Adeel Ahmad'}, 
  ]

  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 800,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "10px", // Optional: adjust padding for smaller screens
        }
      }
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getPublicTestimonial());
        setPublicTestimonial(res.data.data);
        console.log(" public testtimonial  data:", res.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {studentdata.length === 0 ? (
        <></>
      ) : (
        <>
          <section className="student-testinomials">
            <h1>Student Testimonials</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at
              sunt laboriosam temporibus aspernatur fugiat harum deleniti
              consectetur consequatur exercitationem?
            </p>
          </section>
          <div className="slider-container">
            <Slider {...settings}>
              {studentdata.map((row) => (
                <div key={row._id}>
                  <img
                    width="98%"
                    height="250vh"
                    src={row.img} // get image from contant data 
                    // src={`${base}${row.video.replace(/ /g, "%20")}`} //get image from api 
                    alt="Testimonial 1"
                  />

                  {/* <video
    width='300rem'
    height='250vh'
    controls
    src='/rvideo.mp4' //get video from constant data 
    src={`${base}${row.video.replace(/ /g, "%20")}`} // get data from api
    alt="Testimonial 1"/> */}

                  <Typography sx={{marginTop:'-3rem', marginLeft:'4rem', color:'white', zIndex:'9999999'}}>{row.stuname}</Typography>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
}

export default Student_testimonials;
