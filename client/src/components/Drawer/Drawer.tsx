import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"

type OwnProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactElement;
    submitForm: () => void;
    title?: string;
    actionTitle?: string;
}

const AppDrawer: React.FC<OwnProps> = ({ title, actionTitle, open, onClose,  children, submitForm }) => {
  
    return (
      <>
        <Drawer
          isOpen={open}
          placement='right'
          onClose={onClose}
          size='md'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{title}</DrawerHeader>
  
            <DrawerBody>
              {children}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={submitForm}>{actionTitle}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default AppDrawer;
