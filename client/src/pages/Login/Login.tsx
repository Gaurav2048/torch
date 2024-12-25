import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";
import AppTypography from "../../components/AppTypography/AppTypography";
import AppButton from "../../components/AppButton";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        maxWidth="400px"
        mx="auto"
        mt="8"
        p="8"
        boxShadow="lg"
        borderRadius="md"
        bg="white"
      >
        <AppTypography variant="heading1" text="Torch" fontWeight="600" />
        <AppTypography
          variant="body1"
          fontWeight="400"
          margin="24px 0"
          text="Welcome"
        />
        <AppTypography
          variant="body2"
          fontWeight="400"
          marginBottom="24px"
          text="Sign up to continue to Torch"
        />
        <LoginForm />
        <Flex marginTop="12px" gap="4px">
          <AppTypography variant="caption1" text="No account ?" />
          <AppTypography
            variant="caption1"
            fontWeight="600"
            color="primary"
            text="SIGN UP HERE"
          />
        </Flex>
        <Flex marginTop="18px" gap="16px" alignItems="center">
          <Box height="1px" flexGrow="1" bgColor="lightgray" />
          <AppTypography variant="caption1" color="black" text="OR" />
          <Box height="1px" flexGrow="1" bgColor="lightgray" />
        </Flex>
        <AppButton
          onClick={() => navigate("/dashboard")}
          marginTop="18px"
          width="full"
          color="primary.900"
          variant="outline"
        >
          Continue to Demo Store
        </AppButton>
      </Box>
    </Box>
  );
};

export default Login;
