function CandidateButton({ id, name, candidateId, setCandidateId }) {
  return (
    <button
      disabled={candidateId === id}
      onClick={(event) => {
        event.preventDefault();
        setCandidateId(id);
      }}
    >
      {name}
    </button>
  );
}

export default CandidateButton;
