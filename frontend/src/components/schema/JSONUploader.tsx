import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { UploadIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { useAppContext } from "./constants/default";

const JSONUploader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { setDbSchemaState } = useAppContext();

  const [file, setFile] = useState(null);

  // FILE CHANGE ON FILE UPLOAD
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // PARSING FILE CONTENTS INTO JSON STRUCTURE
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileDetails = await file.text();
    const m = JSON.parse(fileDetails);
    setDbSchemaState(m);
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <UploadIcon />
        Upload
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Upload Diagram JSON File </DrawerHeader>

          <DrawerBody>
            <form onSubmit={handleSubmit}>
              <Input
                type="file"
                accept="application/JSON"
                onChange={handleFileChange}
              />
              <Button mt={4} type="submit">
                Upload
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default JSONUploader;
