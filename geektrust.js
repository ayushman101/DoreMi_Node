const fs = require("fs")
const AddSubscriptionHanlder= require('./handlers/addSubscriptionHandler')
const StartSubscriptionHandler=require('./handlers/startSubscriptionHandler')
const PrintDetailsHandler=require('./handlers/printDetails')
const AddTopUpHandler= require('./handlers/addTopUp')

function main(user){
    const filename = process.argv[2]

    fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err

    // var inputLines = data.toString().split("\n") 
    var inputLines = data.toString().split("\r\n") 

    inputLines.forEach(line => {
       user= switchCommand(line,user)
    })
    
})

}



const switchCommand = (line,user)=>{

    line=line.split(" ")

    // console.log(line[0])
    switch (line[0]) {
        case 'START_SUBSCRIPTION':
            user=StartSubscriptionHandler(line,user)
            break;
        case 'ADD_SUBSCRIPTION':
            user = AddSubscriptionHanlder(line,user)
            break;
        case 'ADD_TOPUP':
           user=AddTopUpHandler(line,user)
           break;
        case 'PRINT_RENEWAL_DETAILS':
            PrintDetailsHandler(user)
            break;
        default:
            console.log("Invalid Command")
    }

    return user
}

var user
main(user)
