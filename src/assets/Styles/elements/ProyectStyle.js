import styled from "styled-components";

const ProyectStyle = styled.div`
  padding: 10rem 0;
  .banks__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default ProyectStyle;