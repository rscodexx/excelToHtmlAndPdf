const pdf = require('html-pdf')
class PDFWriter {
    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err, res) => {});
    }
}

module.exports = PDFWriter;
