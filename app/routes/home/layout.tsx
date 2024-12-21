import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import styled from "styled-components";
import type { Route } from "../../+types/root";
import { Sidebar } from "~/home/sidebar";

const AppContainer = styled.div`
  display: flex;
  justify-content: stretch;
  height: 100vh;
  overflow: hidden;
  background-color: #fafafa;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const MainContent = styled.div`
  flex: 8;
  background-color: #fafafa;
  padding: 24px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const ErrorContainer = styled.main`
  padding-top: 16px;
  padding: 4px;
  max-width: 800px;
  margin: 0 auto;
`;

const ErrorMessage = styled.h1`
  font-size: 24px;
  color: #d32f2f;
`;

const ErrorDetails = styled.p`
  font-size: 16px;
  color: #555;
`;

const ErrorStack = styled.pre`
  width: 100%;
  padding: 16px;
  overflow-x: auto;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppContainer>
          <Sidebar />
          <MainContent>
            <Outlet />
          </MainContent>
        </AppContainer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
      <ErrorDetails>{details}</ErrorDetails>
      {stack && (
        <ErrorStack>
          <code>{stack}</code>
        </ErrorStack>
      )}
    </ErrorContainer>
  );
}
