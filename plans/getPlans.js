const { Plans, topUp } = require("./plans")

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

const getTopUp = (type,months) => {
    let topup= topUp[type]
    topup.amount*=months
    return topup
}

module.exports={getMonths,getAmount, getRenewalDate,getTopUp}