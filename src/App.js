import { useEffect, useState } from "react";
import { getExams } from "./api.js";
import ExamCard from "./elements/ExamCard";

function App() {
  const [exams, setExams] = useState([]);
  const [isLoadingExams, setIsLoadingExams] = useState(true);

  useEffect(() => {
    getExams()
      .then((resExams) => {
        setExams(resExams);
        setIsLoadingExams(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>∙ V I C T V S ∙ EXAMS</h1>
      </header>
      <main>
        <form>
          Filter <br/>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"></input>
          <br />
          <label for="date">Date</label>
          <input type="text" id="date" name="date"></input>
          <br />
          <label for="location">Location</label>
          <input type="text" id="location" name="location"></input>
        </form>
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
