// const moment=require('moment')

const { topUp } = require("../plans/plans");
const User = require("../entities/user")


function parseDate(dateString) {
    const parts = dateString.split('-');
    const day = parseInt(parts[0], 10) + 1;
    const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
    const year = parseInt(parts[2], 10);
  
    return new Date(year, month, day);
  }
  

const StartSubscriptionHandler= (line,user)=>{
    const date = parseDate(line[1])

    user= new User(date)
    // console.log(user)

    return user
}


module.exports= StartSubscriptionHandler