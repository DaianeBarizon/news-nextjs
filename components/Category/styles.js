import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  h6 {
    font-size: 12px;
    text-transform: uppercase;
  }
`;
