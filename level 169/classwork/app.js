const http = require("http");
const fs = require("fs");
const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

const app = http.createServer((req, res) => {

    const url = new URL(req.url, "http://localhost:3000")
    const splitCar = url.pathname.slice(1).split("/");
    const query = url.searchParams
    if(url.pathname === "/cars" && req.method === "GET" && query.size > 0){
        const queryDetails = Object.entries(Object.fromEntries(query))
        const filterCars = cars.filter(car => {
            for(const [key, value] of queryDetails){
                if(car[key] != value){
                    return false
                }
            }
            return true
        })
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(filterCars));
    }

    else if (url.pathname === "/cars" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars))
    } else if(splitCar.length == 2 && splitCar[0] == "cars" && req.method == "GET"){
        const carIndex = cars.findIndex(car => car.id == parseInt(splitCar[1]));
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars[carIndex]));
    } else if (url.pathname == "/cars" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", () => {
            cars.push(JSON.parse(body));
            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8")
            res.end("car added successfully!")
        })
    } else if (splitCar.length == 2 && splitCar[0] == "cars" && req.method == "DELETE"){
        const carIndex = cars.findIndex(car => car.id == parseInt(splitCar[1]))
        cars.splice(carIndex, 1)
        fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8");
        res.end("car was deleted successfully!")
    }
})

app.listen(3000, () => {
    console.log("seever is listening...");
})