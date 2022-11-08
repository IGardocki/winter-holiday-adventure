import { winterHolidays } from './winterHolidays';
import { Accordion, Button, Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HolidayContext } from './HolidayContext';
import winterImage2 from './holidayImages/winterImage2.png'

export const Holidays = () => {
    const navigate = useNavigate();
    const { setHolidayDetails } = useContext(HolidayContext);

    return (
        <Accordion>
            {winterHolidays.map(holiday => {
                return (
                    <Accordion.Item eventKey={holiday.name}>
                        <Accordion.Header>{holiday.name}</Accordion.Header>
                        <Accordion.Body>
                            {holiday.description}
                            <Button onClick={() => {
                    setHolidayDetails(holiday);
                     navigate(`/holidays/${holiday.name}`)
                 }}>Learn more about {holiday.name}</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}


      // {winterHolidays.map(holiday => {
        //     return (          


        // <Card style={{margin: '1vh'}}>

        //         <Card.Header>{holiday.name}</Card.Header>
        //         <Card.Text style={{fontSize: '1em'}}>{holiday.description}</Card.Text>
        //         <Button onClick={() => {
        //             setHolidayDetails(holiday);
        //             navigate(`/holidays/${holiday.name}`)
        //         }}>
        //             Learn more about {holiday.name}</Button>
        //     </Card>


        // )
        // })}

        // </Container>