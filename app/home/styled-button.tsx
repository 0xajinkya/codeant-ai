import styled from "styled-components";

export const StyledButton = styled.button<{ selected?: boolean, outlined?: boolean }>`
  color: ${(props) => (props.selected ? "white" : "#414651")};
  background-color: ${(props) => (props.selected ? "#1570EF" : "transparent")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  border: ${(props) => (props.selected ? "2px solid rgba(255, 255, 255, 0.12)" : props.outlined ? "2px solid #D5D7DA" : "2px solid transparent")};
  box-shadow: ${(props) =>
        props.selected
            ? "0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05)"
            : "none"};
  gap: 8px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#125bcc" : "#f0f4ff")};
  }
`;