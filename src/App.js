import React from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "./components/Input";
import "./styles.css";

export default function App() {
  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  return (
    <Form onSubmit={handleSubmit}>

        <img
        src="./orange.svg"
        height="140"
        width="auto"
        alt="logo-orange"
      />
      <h1>Laranjal</h1>
      <p> Sistema de Agendamento de Consultores </p>

      <Input name="email" type="email" placeholder="email@fcamara.com.br" />
      <Input name="password" type ="password" placeholder ="Senha"/>
       <button type="submit">Login</button>
      
      </Form>
     

  );
}
