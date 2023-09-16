import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  /* margin-bottom: 20px; */
  margin: 5px auto;
  width: 20px;
`;

export const Text = styled.p`
  font-weight: 600;
  margin: 5px auto;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  width: 100px;
  font-size: 14px;

  padding: 5px;

  border: 3px solid #3f424d;
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
