import { useContext } from "react"
import { Container } from "react-bootstrap";
import { HolidayContext } from "./HolidayContext"

export const HolidayMovie = () => {
    const { holidayDetails } = useContext(HolidayContext);

    return (
        <Container>
            <iframe src={holidayDetails.youtubeLink} height='300vh' width='100%' title="The Christmas Story for Kids - Full Video - Nativity Story for kids - Animated First Christmas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>

    )

}