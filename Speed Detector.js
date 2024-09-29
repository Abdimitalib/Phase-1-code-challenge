// initialise the sped and speed limit 

let speed = prompt("Input speed: ");
let limit = 70;

function speedDetector () {
    let response;
    if(speed <= limit) {
        response = "Ok";
    }else{
        // initialise the point which are every 5km above the limit
        let point =(speed - limit)/5;
        if (points < 12) {
            response = points : ${points};

        }else{
            response ="License suspended";
        }

    }
    return response;
}
// print to console the result
console.log(speedDetector () );