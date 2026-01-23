export const downloadFile = async (url: string, fileName?: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const name = fileName || url.split("/").pop() || "document.pdf";

    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", name);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);

    window.open(url, "_blank");
  }
};
