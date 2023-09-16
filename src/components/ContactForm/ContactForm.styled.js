import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
  width: 400px;
  padding: 12px;
  background-color: rgba(86, 82, 82, 0.6);
  border: 3px solid #3f424d;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;
`;

export const Text = styled.p`
  padding: 10px;
  margin-bottom: 14px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;

  :hover {
    background-color: #d4c6c5;
  }
`;
