import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exer, setExer] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExer={setExer}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises setExer={setExer} bodyPart={bodyPart} exer={exer} />
    </Box>
  );
};

export default Home;
