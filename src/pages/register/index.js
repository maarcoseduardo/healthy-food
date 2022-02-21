import Head from 'next/head'
import { useState } from "react";
import Link from 'next/link'
import { toast, ToastContainer } from "react-toastify";
import { mask } from "remask";
import { cepAPI } from "../../services/cepAPI";
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Container,
  Form,
  Title,
  ContainerContent,
  Label,
  Input,
  ContainerGrid,
  ContainerAddress,
  ContainerFlex,
  Button,
  Div,
  Anchor
} from "../../styles/PageRegister";

const Register = () => {
  const initialState = {
    name: "",
    date: "",
    cpf: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  };

  const [data, setData] = useState(initialState);  

  const handleChangeCPF = (event) => {
    setData({ ...data, cpf: mask(event.target.value, "999.999.999-99") });
  };

  const handleChangeCEP = (event) => {
    setData({ ...data, cep: mask(event.target.value, "99999-999") });
  };

  const getAddress = async (cep) => {
    try {
      const response = await cepAPI.get(`${cep}/json/`);
      !response.data.erro ? setData({
        ...data,
        address: response.data.logradouro,
        complement: response.data.complemento,
        district: response.data.bairro,
        city: response.data.localidade,
        uf: response.data.uf,
      }) :  toast.error("Cep not exist");;
    } catch (error) {
      setData(initialState);
    }
  };
  const Clear = () => {
    setData(initialState);
  };

  const handleSucess = (user) => {
    toast.success(`User ${user} registered successfully`);
  };

  const handleError = () => {
    toast.error("User not registered");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const register = {
        name: event.target.elements.name.value,
        birthday: event.target.elements.birthday.value,
        cpf: event.target.elements.cpf.value,
        cep: event.target.elements.cep.value,
        address: event.target.elements.address.value,
        number: event.target.elements.number.value,
        complement: event.target.elements.complement.value,
        district: event.target.elements.district.value,
        city: event.target.elements.city.value,
        uf: event.target.elements.uf.value,
      };

      localStorage[`healthyFood-Registry-user_${register.cpf}`] = JSON.stringify(register);
      document.cookie = `healthyFood-Registry-cookie_${register.cpf}=${JSON.stringify(register)}`;

      const userName = JSON.parse(localStorage.getItem(`healthyFood-Registry-user_${register.cpf}`));
      handleSucess(userName.name);
    } catch {
      handleError();
    }

    Clear();
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Register</Title>
          <ContainerContent>
            <Label>Name</Label>
            <Input id="name" type="text" pattern="[a-zA-Z ]+$" placeholder="Your name" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} required />
          </ContainerContent>
          <ContainerGrid>
            <ContainerContent>
              <Label>CPF</Label>
              <Input id="cpf" type="text" placeholder="000.000.000-00" value={data.cpf} onChange={handleChangeCPF} required />
            </ContainerContent>
            <ContainerContent>
              <Label>Birthday</Label>
              <Input id="birthday" type="date" title="Your birthday." value={data.date} onChange={(event) => setData({ ...data, date: event.target.value })} required />
            </ContainerContent>
            <ContainerContent>
              <Label>CEP</Label>
              <Input id="cep" type="text" placeholder="00000-000" onBlur={() => getAddress(data.cep)} value={data.cep} onChange={handleChangeCEP} required />
            </ContainerContent>
            <ContainerContent>
              <Label>Number</Label>
              <Input id="number" type="number" pattern="[0-9]+$" placeholder="000" value={data.number} onChange={(event) => setData({ ...data, number: event.target.value })} title="Numbers only." required />
            </ContainerContent>
          </ContainerGrid>
          <ContainerAddress>
            <Label>Address</Label>
            <Input id="address" type="text" placeholder="Your address" value={data.address} onChange={(event) => setData({ ...data, address: event.target.value })} required />
          </ContainerAddress>
          <ContainerGrid>
            <ContainerContent>
              <Label>Complement</Label>
              <Input id="complement" type="text" placeholder="Complement" value={data.complement} onChange={(event) => setData({ ...data, complement: event.target.value })} />
            </ContainerContent>
            <ContainerContent>
              <Label>District</Label>
              <Input id="district" type="text" placeholder="Your district" value={data.district} onChange={(event) => setData({ ...data, district: event.target.value })} required />
            </ContainerContent>
            <ContainerContent>
              <Label>City</Label>
              <Input id="city" type="text" placeholder="Your city" value={data.city} onChange={(event) => setData({ ...data, city: event.target.value })} required />
            </ContainerContent>
            <ContainerContent>
              <Label>UF</Label>
              <Input id="uf" type="text" pattern="[A-Za-z]{2}" placeholder="UF" value={data.uf} onChange={(event) => setData({ ...data, uf: event.target.value })} required />
            </ContainerContent>
          </ContainerGrid>
          <ContainerFlex>
            <Button type="submit">Register</Button>
            <Button type="button" onClick={Clear}>Clear</Button>
          </ContainerFlex>
        </Form>
        <Div>
          <Link as="/" href="/" passHref>
            <Anchor>BACK TO HOME</Anchor>
          </Link>
        </Div>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Register;
