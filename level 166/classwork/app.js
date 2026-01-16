const http = require("http");
const fs = require("fs")
const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

const app = http.createServer((req, res) => {

    const splitCar = req.url.slice(1).split("/");

    if (req.url === "/cars" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars))
    } else if(splitCar.length == 2 && splitCar[0] == "cars" && req.method == "GET"){
        const carIndex = cars.findIndex(car => car.id == parseInt(splitCar[1]));
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars[carIndex]));
    } else if (req.url == "/cars" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
            cars.push(JSON.parse(body));
            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8")
            res.end("car added successfully!")
        })
    }
})

app.listen(3000, () => {
    console.log("seever is listening...");
})