import FileSaver from 'file-saver';

export const useFile = () => {
  async function downloadFile(fileUrl: string) {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) console.log('Network response was not successful.');

      const filename = fileUrl.split('/').pop();

      const blob = await response.blob();
      FileSaver.saveAs(blob, filename);
    } catch (error) {
      console.error('There was a problem with fetching the pdf file:', error);
    }
  }

  return { downloadFile };
};
