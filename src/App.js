import { useEffect, useState } from "react";
import { getExams } from "./api.js";
import ExamCard from "./elements/ExamCard";
import FilterForm from "./elements/FilterForm";

function App() {
  const [exams, setExams] = useState([]);
  const [isLoadingExams, setIsLoadingExams] = useState(true);
  const [filterName, setFilterName] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    setIsLoadingExams(true);
    getExams(filterName, filterDate, filterLocation)
      .then((resExams) => {
        setExams(resExams);
        setIsLoadingExams(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, [filterName, filterDate, filterLocation]);

  return (
    <div className="App">
      <header>
        <h1>∙ V I C T V S ∙ EXAMS</h1>
      </header>
      <main>
        <FilterForm
          setFilterName={setFilterName}
          setFilterDate={setFilterDate}
          setFilterLocation={setFilterLocation}
        />
        {isLoadingExams ? (
          <p>Loading exams ...</p>
        ) : (
          <ul>
            {exams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
