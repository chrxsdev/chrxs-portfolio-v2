import FileSaver from 'file-saver';
import { useState } from 'react';

export const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function downloadFile(fileUrl: string) {
    try {
      setIsLoading(true);
      const response = await fetch(fileUrl);
      if (!response.ok) console.log('Network response was not successful.');

      const filename = fileUrl.split('/').pop();

      const blob = await response.blob();
      FileSaver.saveAs(blob, filename);
    } catch (error) {
      console.error('There was a problem with fetching the pdf file:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }

  return { downloadFile, isLoading };
};
