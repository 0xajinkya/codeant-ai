import styled, { keyframes } from "styled-components";
import antSvg from "./ant.svg";
import { HomeIcon } from "./home";
import { useState } from "react";
import { StyledButton } from "./styled-button";
import { SupportIcon } from "./icons/support";
import { SettingIcon } from "./icons/setting";
import { BookIcon } from "./icons/book";
import { CloudIcon } from "./icons/cloud";
import { CodeIcon } from "./icons/code";
import { HamburgerIcon } from "./icons/hamburger";
import { CloseIcon } from "./icons/close";
import { LogoutIcon } from "./icons/logout";

const SidebarContainer = styled.div`
    flex: 1.5;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  @media (max-width: 768px) {
    flex: 0;
    padding-bottom: 16px;
    border-bottom: 1px solid #E9EAEB;
  }
`;

const Header = styled.div`
  padding: 24px 20px 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

const LogoText = styled.p`
  color: #181d27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
`;

const DesktopDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  display: none;
}
`;

const MobileDropdownContainer = styled.div`
display: none;
flex-direction: column;
@media (max-width: 768px) {
  display: flex;
}
`;

const StyledDropdown = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #d5d7da;
  background: #fff;
  color: #181d27;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Content = styled.div`
  padding: 0px 16px 24px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContent = styled.div`
  padding: 0px 16px 24px 16px;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;

  @media (max-width: 768px) {

  display: flex;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MoreIconButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
  }
`;



const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  z-index: 1;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const MobileModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Sidebar = () => {
    const [selected, setSelected] = useState("home");
    const [showModal, setShowModal] = useState(false);

    const menuItems = [
        { icon: <HomeIcon />, text: "Home", key: "home" },
        { icon: <CodeIcon />, text: "AI Code Review", key: "code" },
        { icon: <CloudIcon />, text: "Cloud Security", key: "cloud" },
        { icon: <BookIcon />, text: "How to Use", key: "book" },
        { icon: <SettingIcon />, text: "Settings", key: "settings" },
    ];

    const footerItems = [
        { icon: <SupportIcon />, text: "Support", key: "support" },
        { icon: <LogoutIcon />, text: "Logout", key: "logout" },
    ];

    return (
        <SidebarContainer>
            <Header>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <LogoContainer>
                        <img src={antSvg} alt="CodeAnt Logo" />
                        <LogoText>CodeAnt AI</LogoText>
                    </LogoContainer>
                    <MoreIconButton onClick={() => setShowModal(true)}>
                        <HamburgerIcon />
                    </MoreIconButton>
                </div>
                <DesktopDropdownContainer>
                    <StyledDropdown id="dropdown" name="dropdown">
                        <option value="option1">Ajinkya Anil Kahane</option>
                        <option value="option2">Arjun Anil Kahane</option>
                        <option value="option3">Jayashree Kahane</option>
                        <option value="option4">Minal V. Chaudhari</option>
                    </StyledDropdown>
                </DesktopDropdownContainer>
            </Header>
            <Content>
                <ButtonGroup>
                    {menuItems.map(({ icon, text, key }) => (
                        <StyledButton
                            key={key}
                            selected={selected === key}
                            onClick={() => setSelected(key)}
                        >
                            {icon}
                            {text}
                        </StyledButton>
                    ))}
                </ButtonGroup>
                <ButtonGroup>
                    {footerItems.map(({ icon, text, key }) => (
                        <StyledButton
                            key={key}
                            selected={selected === key}
                            onClick={() => setSelected(key)}
                        >
                            {icon}
                            {text}
                        </StyledButton>
                    ))}
                </ButtonGroup>
            </Content>
            <Overlay show={showModal} onClick={() => setShowModal(false)} />
            {showModal && (
                <MobileModal>
                    <Header>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <LogoContainer>
                                <img src={antSvg} alt="CodeAnt Logo" />
                                <LogoText>CodeAnt AI</LogoText>
                            </LogoContainer>
                            <MoreIconButton onClick={() => setShowModal(false)}>
                                <CloseIcon />
                            </MoreIconButton>
                        </div>
                        <MobileDropdownContainer>
                            <StyledDropdown id="dropdown" name="dropdown">
                                <option value="option1">Ajinkya Anil Kahane</option>
                                <option value="option2">Arjun Anil Kahane</option>
                                <option value="option3">Jayashree Kahane</option>
                                <option value="option4">Minal V. Chaudhari</option>
                            </StyledDropdown>
                        </MobileDropdownContainer>
                    </Header>
                    <MobileContent>
                        <ButtonGroup>
                            {menuItems.map(({ icon, text, key }) => (
                                <StyledButton
                                    key={key}
                                    selected={selected === key}
                                    onClick={() => {
                                        setSelected(key);
                                        setShowModal(false);
                                    }}
                                >
                                    {icon}
                                    {text}
                                </StyledButton>
                            ))}
                        </ButtonGroup>
                        <ButtonGroup>
                            {footerItems.map(({ icon, text, key }) => (
                                <StyledButton
                                    key={key}
                                    selected={selected === key}
                                    onClick={() => {
                                        setSelected(key);
                                        setShowModal(false);
                                    }}
                                >
                                    {icon}
                                    {text}
                                </StyledButton>
                            ))}
                        </ButtonGroup>
                    </MobileContent>
                </MobileModal>
            )}
        </SidebarContainer>
    );
};
