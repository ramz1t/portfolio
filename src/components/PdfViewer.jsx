import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownload = () => {
        saveAs(pdfUrl, 'CV Timur Ramazanov.pdf');
    };

    return (
        <div className="pdf-viewer">
            <div className="pdf-container">
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="pdf-document"
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            <div className="controls">
                <button onClick={handleDownload}>Download PDF</button>
            </div>

            <style jsx>{`
        .pdf-viewer {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          flex-direction: column;
        }
        .pdf-container {
          width: 100%;
          max-width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .pdf-document {
          width: 100%;
          height: auto;
        }
        .controls {
          margin-top: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
        </div>
    );
};

export default PdfViewer;
