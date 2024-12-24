import { Text, Heading, HeadingProps } from "@chakra-ui/react"

type OwnProps = {
    text: string,
    variant: "heading1" | "heading2" | "heading3" | "body1" | "body2" | "caption1" | "caption2"
}

// Define typography variants
const AppTypography: React.FC<OwnProps & HeadingProps> = ({ variant, text, whiteSpace="nowrap", ...props }) => {
  switch (variant) {
    case "heading1":
      return (
        <Heading as="h1" size="2xl" {...props}>
          {text}
        </Heading>
      );
    case "heading2":
      return (
        <Heading as="h2" size="xl" {...props}>
          {text}
        </Heading>
      );
    case "heading3":
      return (
        <Heading as="h3" size="lg" {...props}>
          {text}
        </Heading>
      );
    case "body1":
      return (
        <Text fontSize="lg" {...props}>
          {text}
        </Text>
      );
    case "body2":
      return (
        <Text fontSize="md" {...props}>
          {text}
        </Text>
      );
    case "caption1":
      return (
        <Text fontSize="sm" color="gray.500" {...props} width="max-content"> 
          {text}
        </Text>
      );
    case "caption2":
        return (
          <Text fontSize="xs" color="gray.500" {...props} width="max-content">
            {text}
          </Text>
        );
    default:
      return (
        <Text {...props}>
          {text}
        </Text>
      );
  }
};

export default AppTypography;
