import {
  useTheme,
  CircularProgress,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/page";
import { getAllCourse } from "../../store/actions/courseActions";
import Hero from "./hero/Hero";
import Hero_card from "./hero-card/Hero_card";
import Student_testimonials from "./student_testimonials/Student_testimonials";
import Category from "./TextCard/Category";
import ProductCard from "./TextCard/ProductCard";
import ValidationForm from "./ValidationForm/ValidationForm";
import ClientTestimonials from "./ClientTestimonials/ClientTestimonials";
import HomeBlogsMain from "./HomeBlogs/HomeBlogsMain";

const Landing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getAllCourse())
  }, [dispatch]);

  return (
    <>
      <Page title="Khatri Brothers Academy">
        <Hero/>

        <HomeBlogsMain/>
      <ClientTestimonials/>
      </Page>
    </>
  );
};

export default Landing;
