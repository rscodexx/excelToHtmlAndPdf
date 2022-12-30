class Processor{
    static Process(data){
        let dataSplit = data.split('\r\n');
        let rows = [];

        dataSplit.forEach(row => {
            let arr = row.split(',');

            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;
