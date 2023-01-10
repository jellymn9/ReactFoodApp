import styled from "styled-components";

export const Card = styled.div`
  padding: 5px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const Offset = styled.div`
  width: 100%;
  border: 1px solid #ede8e8;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ModalCard = styled.div<{ isActive: boolean }>`
  position: absolute;
  width: 59%;
  height: max-content;
  background-color: blueviolet;
  border-radius: 14px;
  top: 20%;
  left: 20%;
  z-index: 100;
  display: ${(isActive) => (isActive ? "block" : "none")};
`;
