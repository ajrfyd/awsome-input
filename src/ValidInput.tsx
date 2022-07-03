import React, { FormEvent, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

type SpanProps = {
  validEmail: boolean;
}


const ValidInput = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const navigate = useNavigate();
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if(email.match(pattern)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <h3 style={{ position: 'relative', fontSize: '24px', color: '#fff', fontWeight: 500, marginBottom: '2rem' }}>Email Validation check</h3>
      <Form action="submit" id="form" onSubmit={onSubmit} validEmail={valid}>
        <div className="inputBox">
          <input type="text" id="email" placeholder="Enter Email Address" value={email} onChange={validate}/>
          <span className="indicator" ></span>
        </div>
      </Form>
    </div>
  )
}

export default ValidInput;

const Form = styled.form<SpanProps>`
  position: relative;
  border: 2px solid #131313;
  background-color: linear-gradient(#1e2024, #18181c);
  border-radius: 4px;
  overflow: hidden;

  #email {
    width: 300px;
    outline: none;
    background: transparent;
    border: navajowhite;
    padding: 12px 15px;
    padding-right: 50px;
    color: #fff;
    font-size: 18px;
  }

  .indicator {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #555;
  }

  .indicator {
    ${({ validEmail }) => validEmail && css`
      background: #0f0;
      box-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0;
    ` }
  }

`

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: .5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: 5px 5px 10px #fff;
`