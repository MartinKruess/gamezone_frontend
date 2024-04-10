export const Termine = () => {
  const dateArr = [
    {
      title: "Rocket League Turnier",
      details:
        "Ich Plane ein Rocket League Turnier zu veranstalten mit einigen Streamern und Zuschauern.",
      date: "06.2024",
    },
    {
      title: "Gamescom 2024",
      details:
        "Falls möglich möchte ich dieses jahr wieder auf die Gamescom. Gerne auch in eienr größeren Gruppe, falls jemand mitkommen möchte.",
      date: "23-24.08.2024",
    },
    {
      title: "12-24h Stream (in Planung)",
      details:
        "Wie jedes Jahr bin ich am überlegen ob ich (am Feiertag 03.10) einen 12-24h Stream machen soll.",
      date: "03.10.2024",
    },
    {
      title: "Halloween Horror Stream (in Planung)",
      details:
        "Wie jedes Jahr bin ich am überlegen ob ich (am Feiertag 31.10) einen 12-24h Stream machen soll.",
      date: "31.10.2024",
    },
  ];

  return (
    <article className="terminContainer">
      {dateArr.map((date) => (
        <div className="dateBG">
          <div className="date">
            <h2>{date.title}</h2>
            <p>{date.details}</p>
            <p className="dateText">{date.date}</p>
          </div>
        </div>
      ))}
    </article>
  );
};
