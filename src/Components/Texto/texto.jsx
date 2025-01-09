import pdfFile from './Apresentação-ihc.pdf'; // Ajuste o caminho conforme necessário

function PdfViewer() {
  const openPdf = () => {
    window.open(pdfFile, '_blank');
  };

  return (
    <div>
      <button onClick={openPdf}>
        Abrir PDF
      </button>
    </div>
  );
}

export default PdfViewer;


