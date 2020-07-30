import React from "react";
import { Document, Page } from "react-pdf";

function MyPDFViewer(props) {

    const { pdf } = props;

    return (
        <Document
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }} >
            <Page height="360" pageNumber={1} />
        </Document>
    );
}

export default MyPDFViewer;