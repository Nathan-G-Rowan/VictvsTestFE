import axios from "axios";

const dataApi = axios.create({
  baseURL: "https://nrvictvstest.onrender.com",
});

export const getExams = () => {
  return dataApi.get("/exams").then(({ data: { exams } }) => {
    return exams;
  });
};
