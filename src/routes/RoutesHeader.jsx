import React from "react";
import { Route, Routes } from "react-router-dom";
import Material from "../pages/header/Material";
import Ratings from "../pages/header/Ratings";
import Students from "../pages/header/Students";
import MaterialDetails from "../pages/materialDetails/MaterialDetails";
import NotFoundPage from "../pages/NotFoundPage";
import Anouncements from "../pages/sidebar/Anouncements";
import Courses from "../pages/sidebar/Courses";
import Notifications from "../pages/sidebar/Notifications";
import Schedule from "../pages/sidebar/Schedule";
import StudentDetalisOne from "../pages/studentDetalis/StudentDetalisOne";
import StudentDetalisThree from "../pages/studentDetalis/StudentDetalisThree";
import StudentDetalisTwo from "../pages/studentDetalis/StudentDetalisTwo";

function RoutesHeader() {
  return (
    <>
      <Routes>
        <Route path="/courses/" element={<Courses />}>
          <Route path="materials" element={<Material />} />

          <Route path="materials/:id/details/" element={<MaterialDetails />}>
            <Route path="submitted" element={<p>Submitted Page</p>} />
            <Route path="waiting" element={<p>Waiting Page</p>} />
            <Route path="late" element={<p>Late Page</p>} />
          </Route>
          <Route path="students" element={<Students />} />
          <Route path="students/1/details" element={<StudentDetalisOne />} />
          <Route path="students/2/details" element={<StudentDetalisThree />} />
          <Route path="students/3/details" element={<StudentDetalisTwo />} />
          <Route path="ratings" element={<Ratings />} />
        </Route>

        <Route path="/anouncements" element={<Anouncements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default RoutesHeader;
