import styled from "styled-components";
import { DatabaseIcon } from "./icons/database";
import { EllipseIcon } from "./icons/ellipse";

const ListItemContainer = styled.div`
  padding: 24px;
  border-top: 1px solid #d5d7da;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Row = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props: { gap?: string }) => props.gap || "8px"};
  @media (max-width: 768px) {
    gap: ${(props: { gap?: string }) => props.gap ? "24px" : "8px"};
  }
`;

const Name = styled.p`
  color: #181d27;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;

const Badge = styled.p`
  padding: 2px 10px 2px 8px;
  background-color: #eff8ff;
  border-radius: 9999px;
  color: #175cd3;
  border: 1px solid #b2ddff;
`;

const Text = styled.p`
  color: #181d27;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ListItem = ({
    name,
    language,
    size,
    updatedAt,
    status,
}: {
    name: string;
    language: string;
    size: string;
    updatedAt: string;
    status: string;
}) => {
    return (
        <ListItemContainer>
            <Row>
                <Name>{name}</Name>
                <Badge>{status}</Badge>
            </Row>
            <Row gap="40px">
                <Row>
                    <Text>{language}</Text>
                    <EllipseIcon />
                </Row>
                <Row>
                    <DatabaseIcon />
                    <Text>{size}</Text>
                </Row>
                <Row>
                    <Text>Updated {updatedAt}</Text>
                </Row>
            </Row>
        </ListItemContainer>
    );
};

const ListingContainer = styled.div``;

export const Listing = () => {
    return (
        <ListingContainer>
            {[
                {
                    name: "design-system",
                    language: "React",
                    size: "7320 KB",
                    updatedAt: "1 day ago",
                    status: "Public",
                },
                {
                    name: "codeant-ci-app",
                    language: "Javascript",
                    size: "5871 KB",
                    updatedAt: "2 days ago",
                    status: "Private",
                },
                {
                    name: "analytics-dashboard",
                    language: "Python",
                    size: "4521 KB",
                    updatedAt: "5 days ago",
                    status: "Private",
                },
                {
                    name: "mobile-app",
                    language: "Swift",
                    size: "3096 KB",
                    updatedAt: "3 days ago",
                    status: "Public",
                },
                {
                    name: "ecommerce-platform",
                    language: "Java",
                    size: "6210 KB",
                    updatedAt: "6 days ago",
                    status: "Private",
                },
                {
                    name: "blog-website",
                    language: "HTML/CSS",
                    size: "1876 KB",
                    updatedAt: "4 days ago",
                    status: "Public",
                },
                {
                    name: "social-network",
                    language: "PHP",
                    size: "5432 KB",
                    updatedAt: "7 days ago",
                    status: "Private",
                },
            ].map((item, index) => (
                <ListItem
                    key={index}
                    name={item.name}
                    language={item.language}
                    size={item.size}
                    updatedAt={item.updatedAt}
                    status={item.status}
                />
            ))}
        </ListingContainer>
    );
};
