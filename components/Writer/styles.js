import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
  
  p {
    font-size: 16px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secundary};
    margin-bottom: 0;
  }
`;
