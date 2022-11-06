import { winterHolidays } from './winterHolidays';
import { Button, Card, Container, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HolidayContext } from './HolidayContext';
import winterImage2 from './holidayImages/winterImage2.png'

export const Holidays = () => {
    const navigate = useNavigate();
    const { setHolidayDetails } = useContext(HolidayContext);

    return (
        <Container>
            {winterHolidays.map(holiday => {
                return (          
                    <Row>
                    <Card>
                            {/* <Card.Img src={holiday.image} style={{height: '10vh'}}/> */}
                            <Card.Header>{holiday.name}</Card.Header>
                            <Card.Text>{holiday.description}</Card.Text>
                            <Button onClick={() => {
                                setHolidayDetails(holiday);
                                navigate(`/holidays/${holiday.name}`)
                            }}>
                                Learn more about {holiday.name}</Button>
                        </Card>
                    </Row>       
                        
                )
            })}

        </Container>

    )
}
