import * as Papa from 'papaparse';

// Get data from csv and parses it to JSON
const getData = async (filename: string, callback: any) => {
    const csv = await fetch(`./${filename}`).then(res => res.text())
    const results =  Papa.parse(csv, {
        header: true,
        complete: function(input: any) {
            callback(input.data)
        }
    })
    return results.data
}


/*
const getData = async (callback: any) => {
    const filePath = "./data.csv";
    const results =  Papa.parse(`${filePath}`, {
        header: true,
        download: true,
        complete: function (input: any) {
            callback(input.data);
        }
    })
    return results.data;
}
*/



export default getData