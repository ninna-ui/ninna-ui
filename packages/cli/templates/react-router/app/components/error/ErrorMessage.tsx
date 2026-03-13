import { Heading, Text, Button } from "@ninna-ui/primitives";
import { VStack } from "@ninna-ui/layout";
import { useRouteError } from "react-router";

interface ErrorMessageProps {
  status: number;
  statusText: string;
  message: string;
}

export function ErrorMessage({ status, statusText, message }: ErrorMessageProps) {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <VStack gap="6" className="max-w-md w-full text-center">
        <VStack gap="2">
          <Heading as="h1" size="4xl" weight="bold" className="text-base-content">
            {status}
          </Heading>
          <Text className="text-base-content/70 text-lg">
            {statusText}
          </Text>
        </VStack>

        <VStack gap="4">
          <Text className="text-base-content/50">
            {message}
          </Text>
          
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Try Again
          </Button>
        </VStack>
      </VStack>
    </div>
  );
}
