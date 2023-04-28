import axios from "axios";

const dataApi = axios.create({
  baseURL: "https://nrvictvstest.onrender.com",
});

export const getExams = (candidate, date, location) => {
  const params = {
    candidate: candidate,
    date: date,
    location: location,
  };

  return dataApi.get("/exams", { params }).then(({ data: { exams } }) => {
    return exams;
  });
};

export const getCandidates = () => {
  return dataApi.get("/candidates").then(({ data: { candidates } }) => {
    return candidates;
  });
};
