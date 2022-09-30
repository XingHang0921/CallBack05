/*
=======================
05-batch-b.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const input_dir = "./input/";
const output_dir = "./output/";
const input_files = fs.readdirSync(input_dir);

const n = input_files.length;	//input size 0 < n < 100
const b = 5;					//input size 0 < b < n
let count = 0;
let outFileNum = Math.ceil(n / b);
let dataList = [];

batch()

function batch() {
    for (let file of input_files)
        fs.readFile(`./input/${file}`, 'utf-8', (err, data) => {
            if (err) throw err;
            dataList.push(data);

            count++;
            console.log(count)
            if (count % b !== 0 && count > 10) {

                fs.writeFile(`${output_dir}0${outFileNum}-output.txt`, dataList.slice(10).join("\n"), `utf-8`, (err) => {
                    if (err) throw err;
                    console.log("write less than 5 files")
                    console.log(dataList)
                    console.log(count)


                })
            }
            else if (count % b === 0) {
                fs.writeFile(`${output_dir}0${outFileNum}-output.txt`, dataList.slice(count - b).join("\n"), `utf-8`, (err) => {
                    if (err) throw err;
                    console.log("Write 5 files")
                    console.log(dataList)
                    console.log(count)

                })
            }
        })
}
//C:\Users\xingh\Downloads\01-asynchronous-programming\05\output
