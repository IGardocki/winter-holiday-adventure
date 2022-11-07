import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
    const navigate = useNavigate();


    return (
        <Card>
            <Card.Title>Welcome, friends! There are so many winter holidays celebrated around the world! Would you like to learn more about them?</Card.Title>
            <Button onClick={() => navigate('/holidays')}>Click to get started!</Button>
        </Card>
    )
}