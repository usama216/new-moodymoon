import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
import Password_Confirmation from "./Pages/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./Pages/Authentication_Page/Components/Change_Password";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminMain from "../src/Admin/AdminMain";
import Main from "./Pages/Authentication_Page/Main";
import ComingSoon from "./components/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Authentication_Page/SignIn/SignIn";
import ForgetPassword from "./Pages/Authentication_Page/ForgetPassword/ForgetPassword";
import CreatePassword from "./Pages/Authentication_Page/CreatePassword/CreatePassword";
import OTPConfirmation from "./Pages/Authentication_Page/Components/OTPConfirmation";
import SetNewPassword from "./Pages/Authentication_Page/Components/SetNewPassword";

import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import BhajjanCoursesMain from "./Pages/OtherCourses/BhajjanCourse/BhajjanCoursesMain";
import TablaCoursesMain from "./Pages/OtherCourses/Tablaourse/TablaCoursesMain";
import EmailOTPConfirmation from "./Pages/Authentication_Page/Components/EmailOTPConfirmation";
import OurProductMain from "./Pages/OurProducts/OurProductMain";
import ProductDetailMain from "./Pages/ProductDetail/ProductDetailMain";
import LabtestMain from './Pages/LabTest/LabtestMain'
import ContactUsMain from "./Pages/ContactUs/ContactUsMain";
import BlogPageMain from "./Pages/BlogsPage/BlogPageMain";
import FaqsMain from './Pages/FAQS/FaqsMain'

export default function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  let element = useRoutes([
    // {
    //   element: <ProtectedRoutes isLogged={isAuthenticated} />,
    //   children: [{ path: "/admin-dashboard", element: <AdminMain /> }],
    // },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/our-products",
      element: <OurProductMain />,
    },

    {
      path: "/product/:id",
      element: <ProductDetailMain />,
    },

    {
      path: "/lab-tests",
      element: <LabtestMain />,
    },

    {
      path: "/contact-us",
      element: <ContactUsMain />,
    },
    {
      path: "/blogs",
      element: <BlogPageMain />,
    },
    {
      path: "/faqs",
      element: <FaqsMain />,
    },


    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },

    {
      path: "/otp-verification",
      element: <OTPConfirmation />,
    },

    {
      path: "/set-password",
      element: <SetNewPassword />,
    },
    {
      path: "/bhajan-course",
      element: <BhajjanCoursesMain />,
    },
    {
      path: "/tabla-course",
      element: <TablaCoursesMain />,
    },

    {
      path: "/admin-dashboard",
      element: <AdminMain />,
    },
    {
      path: "/email-confirmation",
      element: <EmailOTPConfirmation />,
    },
  ]);
  return element;
}
