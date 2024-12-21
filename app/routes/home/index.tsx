import styled from "styled-components";
import { TopContent } from "~/home/top-content";
import type { Route } from "../../+types/root";
import { Listing } from "~/home/listing";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CodeAnt AI | Home" },
    { name: "description", content: "Welcome to CodeAnt AI!" }, 
  ];
}

const HomeContainer = styled.div`
  background-color: white;
  height: 100%;
  overflow: scroll;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  border-radius: 12px;
  border: 1px solid #e9eaeb;
  box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
  @media (max-width: 768px) {
    padding: 0px;
    border-radius: 0px;
    height: 100%;
    overflow: scroll;
    position: relative;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <TopContent />
      <Listing />
    </HomeContainer>
  );
}
