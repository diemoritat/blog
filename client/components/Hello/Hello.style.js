import styled from "styled-components"

export const SectionWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 20px);
`

export const Title3D = styled.h1`
  color: var(--color-1);
  text-shadow: 2px 2px 0 var(--color-3), -2px -2px 0 var(--color-2);

  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 80px;
  text-align: center;

  color: #2A2935;
`