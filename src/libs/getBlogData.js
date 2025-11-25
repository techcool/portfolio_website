import fs from "fs";
import path from "path";
import Papa from "papaparse"

export function getBlogData(){
    const filePath = path.join(process.cwd(), "src", "data", "all_blogs.csv");
    const file = fs.readFileSync(filePath,"utf8");
    const parsed = Papa.parse(file,{header:true})

    return parsed.data
}