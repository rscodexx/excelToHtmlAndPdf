const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PDFWriter');

let read = new Reader();
let write = new Writer();

async function main() {
    let data = await read.Read('./input/example.csv');
    let dataProceeded = Processor.Process(data);

    let reportCompany = new Table(dataProceeded);

    let html = await HtmlParser.Parse(reportCompany);

    write.Write('output/example.html', html);
    PDFWriter.WritePDF('output/example.PDF', html);

}

main();
