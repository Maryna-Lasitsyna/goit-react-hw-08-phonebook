import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #3b3432;
  font-size: 20px;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
  color: #211e1e;

  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #96817b;

  &:hover {
    background-color: #ebdfdd;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 8px 12px;
  font-size: 20px;
  font: inherit;
  border-radius: 4px;
  border: 3px solid #7c7d74;

  &:hover {
    background-color: #ebdfdd;
  }
`;
