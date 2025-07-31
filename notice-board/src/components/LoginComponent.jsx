import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  InputField,
  Label,
  SubmitButton,
} from "./LoginComponentStyle";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: handle login here
    console.log("Logging in with", { email, password });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Label htmlFor="email">이메일</Label>
        <InputField
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="password">비밀번호</Label>
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <SubmitButton type="submit">로그인</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginComponent;
