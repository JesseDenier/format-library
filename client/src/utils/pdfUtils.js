import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

/**
 * Detects if the browser is Safari on iPhone.
 * @returns {boolean} - True if Safari on iPhone, false otherwise.
 */
const isSafariOniPhone = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /iPhone/.test(ua) &&
    /Safari/.test(ua) &&
    /Apple Computer/.test(navigator.vendor) &&
    !/Chrome/.test(ua)
  );
};

/**
 * Downloads and watermarks a PDF file with user-specific information.
 * On Safari on iPhone, it opens the PDF in a new tab. On other devices and browsers, it downloads the file.
 * @param {string} pdfUrl - The URL of the PDF to download.
 * @param {Object} user - The user object containing firstName, lastName, and email.
 * @param {string} title - The title of the PDF.
 */
export const handlePDFWatermarkAndDownload = async (pdfUrl, user, title) => {
  try {
    const existingPdfBytes = await fetch(pdfUrl).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    pages.forEach((page) => {
      const { width } = page.getSize();

      const watermarkText1 = `Licensed by ${user.firstName} ${user.lastName} (${user.email})`;
      const watermarkText2 =
        "Unauthorized sharing or distribution is prohibited.";

      const textWidth1 = font.widthOfTextAtSize(watermarkText1, 10);
      const textWidth2 = font.widthOfTextAtSize(watermarkText2, 10);

      page.drawText(watermarkText1, {
        x: width - textWidth1 - 40,
        y: 40,
        size: 10,
        font: font,
        color: rgb(0, 0, 0),
        opacity: 0.75,
      });

      page.drawText(watermarkText2, {
        x: width - textWidth2 - 40,
        y: 25,
        size: 10,
        font: font,
        color: rgb(0, 0, 0),
        opacity: 0.75,
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);

    if (isSafariOniPhone()) {
      // Open in a new tab on Safari on iPhone
      const newTab = window.open();
      if (newTab) {
        newTab.location.href = blobUrl;
      } else {
        console.error("Failed to open a new tab on Safari on iPhone");
      }
    } else {
      // Download on other browsers
      saveAs(blob, `${title} ${user.lastName}.pdf`);
    }
  } catch (error) {
    console.error("Error downloading or processing the PDF:", error);
  }
};
