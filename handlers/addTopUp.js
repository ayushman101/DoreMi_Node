const { getTopUp } = require("../plans/getPlans")

const AddTopUpHandler= (line,user)=>{
    
    console.log(user)

    if(user==undefined || user.Start_Date==undefined)
    {
        console.log("ADD_TOPUP_FAILED INVALID_DATE")
        return user
    }

    if( user.TopUp!=undefined){
        console.log("ADD_TOPUP_FAILED DUPLICATE_TOPUP")
        return user
    }

    if( user.Music==undefined && user.Video==undefined && user.Podcast==undefined){
        console.log("ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND")
        return user
    }

    user.AddTopUp(getTopUp(line[1], parseInt(line[2])))

    return user
}

module.exports=AddTopUpHandler