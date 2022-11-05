import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import winterImage2 from './holidayImages/winterImage2.png';

export const Welcome = () => {
    const navigate = useNavigate();


    return (
        <Container fluid style={{ display: "flex", flexDirection: "column", height: "100vh", textAlign: "center", justifyContent: "center", backgroundImage: `url(${winterImage2})` }}>
            <Card>
                <Card.Title>Welcome, friends! There are so many winter holidays celebrated around the world! Would you like to learn more about them?</Card.Title>
                <Button onClick={() => navigate('/holidays')}>Click to get started!</Button>
            </Card>

        </Container>

    )
}