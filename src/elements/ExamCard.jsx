import moment from "moment/moment";
function ExamCard({
  exam: {
    title,
    description,
    candidate_name,
    date,
    location,
    latitude,
    longitude,
  },
}) {
  return (
    <li>
      <div className="mainline">
        <h3>{title}</h3>
        <p>{candidate_name}</p>
      </div>
      <p>
        <i>{moment(date).format("dddd, MMM Do YYYY, hh:mm a")}</i>
      </p>
      <p>{description}</p>

      <div className="spreadline">
        <p>In {location} </p>
        <p>
          <i>
            ({latitude}, {longitude})
          </i>
        </p>
      </div>
    </li>
  );
}

export default ExamCard;
