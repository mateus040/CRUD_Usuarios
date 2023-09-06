import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "styled-components";
import Form from './components/Form';
import Grid from './components/Grid';
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

// Título
const Title = styled.h2``;

function App() {
    const [users, setUsers] = useState([])
    const [onEdit, setOnEdit] = useState(null) // Edição

    const getUsers = async () => {
        try{
            const res = await axios.get("http://localhost:8800"); // Conectando a API
            setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));   
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <>
            <Container>
                <Title>USUÁRIOS</Title>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
                <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
            </Container>

            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> {/* Configurando o toast */}
            <GlobalStyle />
        </>
    )
}

export default App;