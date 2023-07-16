import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseOptions, fetchData } from "../utilities/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExer, bodyPart, exer }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exerperpage = 9;

  const indexoflastpage = currentPage * exerperpage;
  const indexoffirstpage = indexoflastpage - exerperpage;
  const currentexer = exer.slice(indexoffirstpage, indexoflastpage);
  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          ExerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExerciseOptions
        );
      }
      setExer(exercisesData);
    };
    fetchExerciseData();
  }, [bodyPart]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentexer.map((exer, index) => (
          <ExerciseCard key={index} exer={exer} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exer.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exer.length / exerperpage)}
            page={currentPage}
            //in material ui when paginate is called then automatically e, value is also called
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
