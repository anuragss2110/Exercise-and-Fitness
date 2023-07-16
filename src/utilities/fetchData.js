export const ExerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "84650ec072mshd8dd2129871a2fcp1ef589jsn10987d0fde95",
  },
};

export const utubeoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "84650ec072mshd8dd2129871a2fcp1ef589jsn10987d0fde95",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
