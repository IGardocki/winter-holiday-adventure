import { winterHolidays } from './winterHolidays';
import { Button, Card, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HolidayContext } from './HolidayContext';

export const Holidays = () => {
    const navigate = useNavigate();
    const {setHolidayDetails} = useContext(HolidayContext);

    return (
        <Container>
            {winterHolidays.map(holiday => {
                return (
                    <Card>
                        <Card.Img
                            // style={{height: '20vh', width: '20vh'}} 
                            varient='top'
                            src={holiday.image} />
                        {/* <Card.Body> */}
                        <Card.Title>{holiday.name}</Card.Title>
                        <Card.Text>{holiday.description}</Card.Text>
                        <Button onClick={()=> {
                            setHolidayDetails(holiday);
                            navigate(`/holidays/${holiday.name}`)
                            }}>
                                Learn more about {holiday.name}</Button>
                        {/* </Card.Body> */}
                    </Card>
                )
            })}

        </Container>

    )
}
