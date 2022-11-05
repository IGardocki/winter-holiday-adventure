import { winterHolidays } from './winterHolidays';
import { Button, Card, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HolidayContext } from './HolidayContext';
import winterImage2 from './holidayImages/winterImage2.png'

export const Holidays = () => {
    const navigate = useNavigate();
    const { setHolidayDetails } = useContext(HolidayContext);

    return (
        <Container fluid style={{ display: "flex", flexDirection: "column", minHeight: "100vh", textAlign: "center", justifyContent: "center", backgroundImage: `url(${winterImage2})` }}>
            {winterHolidays.map(holiday => {
                return (                 
                        <Card>
                            <Card.Img src={holiday.image} style={{height: '10vh'}}/>
                            <Card.Title>{holiday.name}</Card.Title>
                            <Card.Text>{holiday.description}</Card.Text>
                            <Button onClick={() => {
                                setHolidayDetails(holiday);
                                navigate(`/holidays/${holiday.name}`)
                            }}>
                                Learn more about {holiday.name}</Button>
                        </Card>
                )
            })}

        </Container>

    )
}
