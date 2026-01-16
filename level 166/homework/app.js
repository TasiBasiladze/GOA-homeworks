//first we are importing modules we need to work and create server
const http = require("http");
const fs = require("fs")

//then using fs module we read and save data from cars.json file, and 
//using JSON.parse convert data from json format to js value 
const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

//creating server, passing there request and response
const app = http.createServer((req, res) => {

    //to find certain car by it's id using url in the future, we split our url 
    //and create an array which will contain id of the car we want to find
    const splitCar = req.url.slice(1).split("/");

    //if method is "GET" and url contains only car in it (without any ids after) 
    //then we just get cars array in a json format as a result
    if (req.url === "/cars" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars))

    //if our url contains also id, then it's length will be 2, so we find 
    //index of car from cars array which has similar id to one we asked for in url, 
    //and then using this found index, we get as a result this certain car in json format
    } else if(splitCar.length == 2 && splitCar[0] == "cars" && req.method == "GET"){
        const carIndex = cars.findIndex(car => car.id == parseInt(splitCar[1]));
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(cars[carIndex]));

    //then, if method is post then we want to add some new car object into array
    } else if (req.url == "/cars" && req.method == "POST"){
        // creating a variable to store the request body data
        let body = "";

        //data arrives in chunks as Buffers. every time a chunk arrives, the "data" event is emitted. 
        //we convert each Buffer chunk to a string and append it to the body variable.
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        //when the entire request body has arrived, the "end" event is emitted. 
        //we parse the JSON string in 'body' to a JavaScript object and push it into the 'cars' array. 
        //then we overwrite "cars.json" file with the updated array (converted back to JSON). 
        //finally, we send a response confirming that the car has been added successfully.
        req.on("end", () => {
            cars.push(JSON.parse(body));
            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8")
            res.end("car added successfully!")
        })
    }
})

//for the server to actually work, we are listening on a certain port (3000). 
//every request sent to this port will be processed by this program.
app.listen(3000, () => {
    console.log("seever is listening...");
})