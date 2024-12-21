// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Styled Components
// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownButton = styled.button`
//   background-color: #f0f0f0;
//   border: 1px solid #ccc;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   width: 200px;
//   text-align: left;

//   &:focus {
//     outline: none;
//   }
// `;

// const DropdownContent = styled.div<{ isVisible: boolean }>`
//   display: ${(props) => (props.isVisible ? 'block' : 'none')};
//   position: absolute;
//   background-color: white;
//   min-width: 100%;
//   border: 1px solid #ccc;
//   z-index: 1;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const DropdownItem = styled.a`
//   color: black;
//   padding: 10px 15px;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const Icon = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// // Props Type
// interface DropdownProps {
//   options: { label: string; icon: string; value: string }[];
//   onSelect: (value: string) => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsVisible((prev) => !prev);
//   };

//   const handleSelect = (value: string) => {
//     onSelect(value);
//     setIsVisible(false);
//   };

//   return (
//     <DropdownContainer>
//       <DropdownButton onClick={toggleDropdown}>
//         <Icon src="https://via.placeholder.com/20" alt="icon" />
//         Select Option
//       </DropdownButton>
//       <DropdownContent isVisible={isVisible}>
//         {options.map((option) => (
//           <DropdownItem
//             key={option.value}
//             onClick={() => handleSelect(option.value)}
//             href="#"
//           >
//             <Icon src={option.icon} alt={option.label} />
//             {option.label}
//           </DropdownItem>
//         ))}
//       </DropdownContent>
//     </DropdownContainer>
//   );
// };

// export default Dropdown;


import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #d5d7da;
  background: #fff;
  color: #181d27;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #a0a0a0;
  }
`;

const StyledOption = styled.option`
  font-size: 16px;
  color: #181d27;
`;

const Dropdown = () => {
  return (
    <Container>
      <StyledSelect id="dropdown" name="dropdown">
        <StyledOption value="option1">Option 1</StyledOption>
        <StyledOption value="option2">Option 2</StyledOption>
        <StyledOption value="option3">Option 3</StyledOption>
        <StyledOption value="option4">Option 4</StyledOption>
      </StyledSelect>
    </Container>
  );
};

export default Dropdown;
