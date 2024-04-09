export const Termine = () => {
    const dateArr = [
        {
            title: "Halloween Night Stream",
            details: "Wir feiern Helloween im Stream.",
            date: "31.10.2023",
        },
        {
            title: "Rocket League Turnier",
            details: "Die StreamingIndustry veranstaltet ein Rocket League turnier und ich bin dabei.",
            date: "04-05.11.2023",
        },
        {
            title: "Sylvester",
            details: "Wir feiern Neujahr gemeinsam im Stream.",
            date: "31.12.2023",
        }
    ]

    return(
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
    )
}