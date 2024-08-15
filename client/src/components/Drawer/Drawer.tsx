import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"

type OwnProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactElement;
}

const AppDrawer: React.FC<OwnProps> = ({ open, onClose, children }) => {
  
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
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              {children}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default AppDrawer;
