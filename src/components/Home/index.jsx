import React from "react";
import { Container, Header, Titulo, Button, Content } from "./styles";
import { IoEarthOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { ButtonToggleTheme } from '../ToggleTheme';

const logoAnimation = {
  open: {
    y: [-50, 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 160,
    }
  }
}

const buttonAnimation = {
  open: {
    y: [50, 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 160,
    }
  }
}

const textAnimation = {
  open: {
    x: [-150, 0],
    opacity: [0, 1],
    transition: {
      type: "spring",
      stiffness: 160,
    }
  }
}


export default function Home() {
  return (
    <Container>
      <Header>
        <motion.div variants={logoAnimation} animate={"open"}>
          <IoEarthOutline size={34} />
          <motion.h2>
            Trabalho de Geografia
          </motion.h2>
        </motion.div>
        <ButtonToggleTheme />
      </Header>
      <Content>
        <Titulo as={motion.h1} variants={textAnimation} animate={"open"}>Pessoas em situação de rua e a violência urbana</Titulo>
        <motion.p variants={textAnimation} animate={"open"}>
          A situação da falta de moradia tem se mostrado maior ao passar dos anos,
          tornando-se uma problemática a ser solucionada.
        </motion.p>
        </Content>
      <Button as={motion.button} onClick={() => { window.scrollTo({ top: 800 }) }} variants={buttonAnimation} animate={"open"}>Começar</Button>
    </Container>
  );
}
