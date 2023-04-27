function ExamCard({
  exam: { title, description, candidate_name, location, latitude, longitude },
}) {
  return (
    <li>
      <div className="mainline">
        <h3>{title}</h3>

        <p>{candidate_name}</p>
      </div>
      <p>{description}</p>
      <p>
        <div className="spreadline">
          In {location}{" "}
          <i>
            ({latitude}, {longitude})
          </i>
        </div>
      </p>
    </li>
  );
}

export default ExamCard;
