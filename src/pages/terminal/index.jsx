import React from "react";
import useDate from "../../hooks/date";

const Terminal = () => {

    const [date, time, wish] = useDate()

    return (
        <>
            <div className={"terminal-container"}>
                <div className={"terminal-content"}>
                    <div className={"text-section"}>
                        <h1 className={"title"}>
                            {" < SPE / FRONTEND >"}
                        </h1>
                        <p className={"time"}>
                            {date} {time} {wish}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"background"} />
        </>
    )
}

export default Terminal;