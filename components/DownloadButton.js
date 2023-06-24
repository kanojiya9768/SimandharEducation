import React from 'react';


const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = './sample.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
};

export default DownloadButton;