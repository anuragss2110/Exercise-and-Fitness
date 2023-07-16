import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchData,
  ExerciseOptions,
  utubeoptions,
} from "../utilities/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [similarTargetMuscle, setsimilarTargetMuscle] = useState([]);
  const [similarEquipment, setsimilarEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exercisedburl = "https://exercisedb.p.rapidapi.com";
      const utubesearchurl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const detailData = await fetchData(
        `${exercisedburl}/exercises/exercise/${id}`,
        ExerciseOptions
      );
      setexerciseDetail(detailData);

      const videosData = await fetchData(
        `${utubesearchurl}/search?query=${detailData.name}`,
        utubeoptions
      );

      setexerciseVideos(videosData.contents);

      const targetMuscleData = await fetchData(
        `${exercisedburl}/exercises/target/${detailData.target}`,
        ExerciseOptions
      );
      setsimilarTargetMuscle(targetMuscleData);
      const similarEquipmentData = await fetchData(
        `${exercisedburl}/exercises/equipment/${detailData.equipment}`,
        ExerciseOptions
      );
      setsimilarEquipment(similarEquipmentData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        similarTargetMuscle={similarTargetMuscle}
        similarEquipment={similarEquipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
