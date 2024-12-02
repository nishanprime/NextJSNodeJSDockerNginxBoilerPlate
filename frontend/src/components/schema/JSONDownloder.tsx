import { Button } from "@chakra-ui/react";
import { useAppContext } from "./constants/default";
import { DownloadIcon } from "@radix-ui/react-icons";

const JSONDownloader = () => {
  const {
    dbSchema: { nodes, edges, zoom, pan },
  } = useAppContext();

  // DOWNLOAD JSON FILE OF THE IMAGE
  const downloadJSON = () => {
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(
      {
        nodes,
        edges,
        zoom,
        pan,
      },
      null,
      2
    );
    // Create a Blob from the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });
    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json"; // Set the file name for download
    // Append the link, click it to trigger the download, then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Button onClick={downloadJSON}>
        <DownloadIcon /> Download
      </Button>
    </>
  );
};

export default JSONDownloader;
