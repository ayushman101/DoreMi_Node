const { Plans } = require("./plans")

const getMonths = (category,plan)=>{
   return Plans[category][plan]["time"]
}

const getAmount = (category,plan)=>{
    return Plans[category][plan]["amount"]
}

const getRenewalDate= (startDate)=>{
    startDate.setMonth(startDate.getMonth() + 1)
    startDate.setDate(startDate.getDate() - 10)

    return startDate
}

module.exports={getMonths,getAmount, getRenewalDate}