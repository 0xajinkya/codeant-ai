import styled from "styled-components";
import { StyledButton } from "./styled-button";
import { AddIcon } from "./icons/add";
import { RefreshIcon } from "./icons/refresh";
import { SearchIcon } from "./icons/search";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d5d7da;
  border-radius: 8px;
  padding: 10px 14px;
  background-color: #fff;
  max-width: 400px;
  width: 100%;
  gap: 4px;
  box-shadow: 0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #181d27;
  font-family: Inter, sans-serif;

  &::placeholder {
    color: #414651;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`;

const TopContentContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #E9EAEB;
  position: sticky; 
  top: 0;
  background-color: white;
  @media (max-width: 768px) {
    position: sticky;
    top: 0
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  color: #181d27;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const SubTitle = styled.p`
  color: #414651;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const TopContent = () => {
  return (
    <TopContentContainer>
      <HeaderContainer>
        <TextContainer>
          <Title>Repositories</Title>
          <SubTitle>33 total Repositories</SubTitle>
        </TextContainer>
        <ButtonGroup>
          <StyledButton outlined={true}>
            <RefreshIcon />
            Refresh All
          </StyledButton>
          <StyledButton selected={true}>
            <AddIcon />
            Add Repository
          </StyledButton>
        </ButtonGroup>
      </HeaderContainer>
      <SearchBarContainer>
        <SearchIcon />
        <SearchInput type="text" placeholder="Search Repositories" />
      </SearchBarContainer>
    </TopContentContainer>
  );
};
