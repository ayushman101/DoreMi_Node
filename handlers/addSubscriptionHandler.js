const Subscription = require("../entities/subscription")
const {getMonths,getAmount,getRenewalDate} = require("../plans/getPlans")

const AddSubscriptionHanlder= (line,user)=>{
    if(user==undefined || user.Start_Date==undefined){
        console.log("ADD_SUBSCRIPTION_FAILED INVALID_DATE")
        return
    }

    console.log(line)
    var sub = new Subscription(line[1],line[2],getMonths(line[1],line[2]),getAmount(line[1],line[2]),getRenewalDate(user.Start_Date))
    console.log(sub)

    user.AddSubscription(sub)
    console.log(user)

}

module.exports=AddSubscriptionHanlder