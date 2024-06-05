import { useMemo, useState } from "react";
import { DAY_HCH_LEFT, DEFAULT_DATE_FORMAT } from "../utils/constants";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import durationFormat from "moment-duration-format"
const moment = extendMoment(Moment);
durationFormat(moment)
function CountDownClock() {
    const HCH_DATE = moment(DAY_HCH_LEFT, DEFAULT_DATE_FORMAT);
    const [time, setTime] = useState(moment.range(HCH_DATE, moment()));

    setInterval(() => {
        setTime(moment.range(HCH_DATE, moment()));
    }, 1000)

    const durationLabel = [ "day", "hour", "minute", "second"]

    const duration = moment.duration(time.diff("second"), "seconds");
    const   dayObject = useMemo(() => {
        const durationFormatted = duration.format("d [day],h [hour],m [min],s [sec]");
        const formatSplit = durationFormatted.split(",");
        return {

            day: formatSplit[0],
            hour: formatSplit[1],
            minute: formatSplit[2],
            second: formatSplit[3]
        } as Record<string, string>; // Define index signature explicitly
    }, [duration]);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            {durationLabel.map((key: string, _) => {
                if (!dayObject[key]) return <></>;
                let value = dayObject[key].split(" ")[0];
                const label = dayObject[key].split(" ")[1];

                //if value is 1 character such as 1,2, change to 01,02
                if (value.length === 1) {
                    value = "0" + value;
                }
                return (
                    <div key={key} className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl">
                            <span> {value} </span>
                        </span>
                        {label}
                    </div>
                );
            })}
        </div>
    );
}

export default CountDownClock;
