import styled from "styled-components";
import antImage from "./ant.svg";
import statsSvg from "./stats.svg";
import upSvg from "./up.svg";

const Container = styled.div`
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 24px 0px rgba(8, 23, 53, 0.16);
  margin-bottom: 20px;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatsGrid = styled.div`
  padding: 20px 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
`;

const StatTitle = styled.h2`
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  font-family: Inter, sans-serif;
`;

const StatText = styled.p`
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  font-family: Inter, sans-serif;
`;

const IssueBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const CircularIcon = styled.div`
  width: 56px;
  height: 56px;
  background-color: rgba(157, 144, 250, 0.25);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MetricTitle = styled.h4`
  color: #171717;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const MetricValue = styled.h2`
  color: #081735;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const HighlightedText = styled.p`
  color: #0049c6;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 0 8px;
`;

const Subtext = styled.p`
  color: #171717;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  flex-wrap: nowrap;
`;

export const Stats = ({ amount, text }: { amount: string; text: string }) => (
    <div style={{ textAlign: "center" }}>
        <StatTitle>{amount}</StatTitle>
        <StatText>{text}</StatText>
    </div>
);

export const Statistics = () => {
    return (
        <div>
            <Container>
                <FlexCenter
                    style={{
                        gap: "8px",
                        padding: "22px 21px",
                        justifyContent: "flex-start",
                        paddingLeft: "30px",
                    }}
                >
                    <img src={antImage} alt="Ant Icon" />
                    <StatTitle>AI to Detect & Autofix Bad Code</StatTitle>
                </FlexCenter>
                <hr style={{ height: "1px", backgroundColor: "#E6E8F0", margin: 0 }} />
                <StatsGrid>
                    <Stats amount="30+" text="Language Support" />
                    <Stats amount="10K+" text="Developers" />
                    <Stats amount="100K+" text="Hours Saved" />
                </StatsGrid>
            </Container>

            <Container
                style={{
                    padding: "16px 33px",
                    display: "inline-flex",
                    gap: "29px",
                    marginLeft: "51%",
                    marginTop: "-30px",
                }}
            >
                <IssueBox>
                    <CircularIcon>
                        <img src={statsSvg} alt="Stats Icon" />
                    </CircularIcon>
                    <div>
                        <MetricTitle>Issues Fixed</MetricTitle>
                        <MetricValue>500K+</MetricValue>
                    </div>
                </IssueBox>
                <div>
                    <FlexCenter>
                        <img src={upSvg} alt="Up Icon" />
                        <HighlightedText>14%</HighlightedText>
                    </FlexCenter>
                    <Subtext>This week</Subtext>
                </div>
            </Container>
        </div>
    );
};