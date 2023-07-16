import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exer }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exer.id}`}>
      <img src={exer.gifUrl} alt={exer.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "10px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exer.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "10px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exer.target}
        </Button>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "15px", xs: "15px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exer.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
