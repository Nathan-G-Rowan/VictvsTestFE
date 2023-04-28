import { getCandidates } from "../api.js";
import { useState, useEffect } from "react";
import CandidateButton from "./CandidateButton";
import "./FilterForm.css";

function FilterForm({ setFilterName, setFilterDate, setFilterLocation }) {
  const [candidateId, setCandidateId] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [isLoadingCandidates, setIsLoadingCandidates] = useState(true);

  const [location, setLocation] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    getCandidates()
      .then((resCandidates) => {
        setCandidates([{ id: null, name: "Any Candidate" }, ...resCandidates]);
        setIsLoadingCandidates(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  return (
    <form>
      <div className="mainline">
        <h3>FILTER:</h3>
        <button
          onClick={(event) => {
            event.preventDefault();

            setFilterName(candidateId);
            setFilterDate(date);
            setFilterLocation(location);
          }}
        >
          Submit
        </button>
      </div>
      <div className="spreadline">
        <div>
          <label htmlFor="category-dropdown">Candidate </label>

          <div className="dropdown" id="category-dropdown">
            <button
              disabled={true}
              className="dropButton"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {isLoadingCandidates
                ? "Loading..."
                : candidates.find((candidate) => candidate.id === candidateId)
                    .name}
            </button>
            {isLoadingCandidates ? null : (
              <div className="dropContent">
                {candidates.map((candidate) => {
                  return (
                    <CandidateButton
                      candidateId={candidateId}
                      key={candidate.id}
                      name={candidate.name}
                      id={candidate.id}
                      setCandidateId={setCandidateId}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="date">Date </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="location">Location </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location ..."
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="centerContents">
        <button
          className="resetButton"
          onClick={(event) => {
            event.preventDefault();

            setCandidateId(null);
            setLocation("");
            setDate("");

            setFilterName(null);
            setFilterDate("");
            setFilterLocation("");
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
