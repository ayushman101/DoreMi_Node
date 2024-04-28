const fs = require("fs")
const AddSubscriptionHanlder= require('./handlers/addSubscriptionHandler')
const StartSubscriptionHandler=require('./handlers/startSubscriptionHandler')
const PrintDetailsHandler=require('./handlers/printDetails')
const AddTopUpHandler= require('./handlers/addTopUp')

function main(){
    const filename = process.argv[2]

    fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err

    var inputLines = data.toString().split("\n") 
    // var inputLines = data.toString().split("\r\n") 

    inputLines.forEach(line => {
        switchCommand(line)
    })
    
})

}



const switchCommand = (line)=>{

    line=line.split(" ")

    // console.log(line[0])
    switch (line[0]) {
        case 'START_SUBSCRIPTION':
            user=StartSubscriptionHandler(line)
            console.log(user)
            break;
        case 'ADD_SUBSCRIPTION':
            user = AddSubscriptionHanlder(line)
            break;
        case 'ADD_TOPUP':
            AddTopUpHandler(line)
            break;
        case 'PRINT_RENEWAL_DETAILS':
            PrintDetailsHandler()
            break;
        default:
            console.log("Invalid Command")
    }

}

var user
main(user)
