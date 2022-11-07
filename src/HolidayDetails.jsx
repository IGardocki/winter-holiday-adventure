import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HolidayContext } from "./HolidayContext";
import { Card, Button } from "react-bootstrap";

export const HolidayDetails = () => {
    const navigate = useNavigate();

    const { holidayDetails } = useContext(HolidayContext);

    return (
        <Card>
            <Card.Img src={holidayDetails.image}/>
            <Card.Header>{holidayDetails.name}</Card.Header>
            <Card.Text>{holidayDetails.detailedDescription}</Card.Text>
            <Button 
            onClick={() => {
            //     setHolidayDetails(holiday);
                navigate(`/holidayMovie/${holidayDetails.name}`)
        }}
            >
                Learn more about {holidayDetails.name}</Button>
              
        </Card>
    )
}