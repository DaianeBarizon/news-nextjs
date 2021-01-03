import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  
  h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
