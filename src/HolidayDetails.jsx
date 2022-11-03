import { useContext } from "react";
import { HolidayContext } from "./HolidayContext";
 
export const HolidayDetails = () => {

    const {holidayDetails} = useContext(HolidayContext);

    return(
        <div>{holidayDetails.detailedDescription}</div>
    )
}