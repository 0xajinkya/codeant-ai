import { useState } from "react";
import styled from "styled-components";
import antSvg from "../../login/ant-lg.svg";
import Github from "../../login/github.svg";
import Devops from "../../login/devops.svg";
import Bitbucket from "../../login/bitbucket.svg";
import Gitlab from "../../login/gitlab.svg";
import SSO from "../../login/sso.svg";
import type { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CodeAnt AI | Login" },
    { name: "description", content: "Login to CodeAnt AI!" },
  ];
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px;
  width: 100%;
`;

const FormContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 24px;
  height: 588px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TopWrapper = styled.div`
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  borderBottom: 1px solid #D5D7DA;

  @media (max-width: 768px) {
    padding: 36px 16px;
    gap: 20px
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13.76px;
`;

const CodeAntTitle = styled.p`
  color: #181d27;
  font-family: Inter, sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 110%;
  font-style: normal;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const WelcomeText = styled.h1`
  color: #181d27;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 48px;
    fontWeight: 700;
  }
`;

const ToggleButtonContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fafafa;
  gap: 2px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #e9eaeb;
`;

const ToggleButton = styled.button<{ selected: boolean }>`
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  color: ${(props) => (props.selected ? "#FFF" : "#414651")};
  background-color: ${(props) => (props.selected ? "#1570EF" : "transparent")};
  
  box-shadow: ${(props) =>
    props.selected
      ? `0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset,
         0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset,
         0px 1px 2px 0px rgba(10, 13, 18, 0.05)`
      : "none"};
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 12px 14px
  }
`;

const ButtonGroupContainer = styled.div`
  padding: 24px 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const IconButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid #d8dae5;
  background-color: #fff;
  flex: 1;
  cursor: pointer;

  p {
    color: #171717;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const FooterText = styled.h1`
  color: #181d27;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  span {
    font-weight: 700;
  }
`;

const IconButton = ({ icon, text }: { icon: string; text: string }) => (
  <IconButtonWrapper>
    <img src={icon} alt={text} />
    <p>{text}</p>
  </IconButtonWrapper>
);

const SAAS = () => (
  <>
    <IconButton icon={Github} text="Sign in with Github" />
    <IconButton icon={Bitbucket} text="Sign in with Bitbucket" />
    <IconButton icon={Devops} text="Sign in with Azure Devops" />
    <IconButton icon={Gitlab} text="Sign in with Gitlab" />
  </>
);

const SelfHosted = () => (
  <>
    <IconButton icon={Gitlab} text="Sign in with Gitlab" />
    <IconButton icon={SSO} text="Sign in with SSO" />
  </>
);

const Form = () => {
  const [selectedButton, setSelectedButton] = useState("SAAS");

  return (
    <FormContainer>
      <TopWrapper>
        <HeaderContainer>
          <img src={antSvg} alt="CodeAnt Logo" />
          <CodeAntTitle>CodeAnt AI</CodeAntTitle>
        </HeaderContainer>
        <WelcomeContainer>
          <WelcomeText>Welcome to CodeAnt AI</WelcomeText>
          <ToggleButtonContainer>
            <ToggleButton
              selected={selectedButton === "SAAS"}
              onClick={() => setSelectedButton("SAAS")}
            >
              SAAS
            </ToggleButton>
            <ToggleButton
              selected={selectedButton === "Self Hosted"}
              onClick={() => setSelectedButton("Self Hosted")}
            >
              Self Hosted
            </ToggleButton>
          </ToggleButtonContainer>
        </WelcomeContainer>
      </TopWrapper>
      <hr />
      <ButtonGroupContainer>
        {selectedButton === "SAAS" && <SAAS />}
        {selectedButton === "Self Hosted" && <SelfHosted />}
      </ButtonGroupContainer>
    </FormContainer>
  );
};

export default function Login() {
  return (
    <LoginContainer>
      <Form />
      <FooterText>
        By signing up you agree to the <span>Privacy Policy</span>.
      </FooterText>
    </LoginContainer>
  );
}
