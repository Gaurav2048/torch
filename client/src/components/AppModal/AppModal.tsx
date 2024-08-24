import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import AppButton from "../AppButton";
import useNavDisclosure from "../../hooks/useNavDisclosure";

type OwnProps = {
    identifier: string;
    title: string;
    actionTitle?: string;
    children: React.ReactElement
}

const AppModal: React.FC<OwnProps> = ({
    identifier,
    title,
    actionTitle,
    children
}) => {
    const { open, goBack } = useNavDisclosure(identifier)
    return <Box>
      <Modal size='2xl' isOpen={open} onClose={goBack}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
        {actionTitle ? <ModalFooter>
            <AppButton colorScheme='blue' mr={3} onClick={goBack}>
            Close
            </AppButton>
            <AppButton variant='ghost'>{actionTitle}</AppButton>
        </ModalFooter> : null
    }
      </Modal>
    </Box>
}

export default AppModal;
