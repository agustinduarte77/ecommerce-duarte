import { Container } from "@mui/material";
import ListProducts from "../components/ListProducts/ItemList";

const HomePage = () => {
    return(
        <Container className='container-general'>
            <ListProducts/>
        </Container>
    )
}

export default HomePage 