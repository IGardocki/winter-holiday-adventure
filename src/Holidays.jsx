import { winterHolidays } from './winterHolidays';
import { Button, Card, Container, Row } from 'react-bootstrap';

export const Holidays = () => {

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
                        <Button>Learn more about {holiday.name}</Button>
                        {/* </Card.Body> */}
                    </Card>
                )
            })}

        </Container>

    )
}
