const http = require("http");
const fs = require("fs");
const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

const app = http.createServer((req, res) => {

    const url = new URL(req.url, "http://localhost:3000")
    const splitCar = url.pathname.slice(1).split("/");
    const query = url.searchParams
    
    //first we check if there is any query
    if(url.pathname === "/cars" && req.method === "GET" && query.size > 0){
        
        //if there is, we creat variable which contains array of arrays inside of it.
        //every little array inside of main one has key value pair inside of it
        const queryDetails = Object.entries(Object.fromEntries(query))
        
        //we create variable which will contain filtered array of car objects. 
        //filter function will check every car
        const filterCars = cars.filter(car => {
            
            //using for of loop and making there distruction to get access to both key and value 
            //which are in every array inside of main queryDetails array. there are as much arrays 
            //containing key value pairs as much query we have  
            for(const [key, value] of queryDetails){
                
                //if at least one car value doesn't match ones we have in the array we return false
                if(car[key] != value){
                    return false
                }
            }
            
            //if loop made it to the end and didn't return false, then we return 
            //true and the object is saved in filtered cars array
            return true
        })
        res.setHeader("content-type", "application/json");
        
        //finally, we return as a response filtered cars array
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