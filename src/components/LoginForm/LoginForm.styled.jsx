import styled from 'styled-components';

export const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  background-color: rgba(86, 82, 82, 0.6);
  border: 3px solid #3f424d;
  border-radius: 4px;
  margin: 0 auto; */

  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(86, 82, 82, 0.6);
  border: 3px solid #3f424d;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #dcdfea;
  font-size: 20px;
`;

export const Input = styled.input`
  color: #252527;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  margin: 30px 90px;
  width: 200px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #353742;
  color: #162260;
  font-size: 20px;

  &:hover {
    background-color: #dce0bc;
  }
`;
