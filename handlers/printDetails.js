

const printSub=(sub)=> {
    if (sub!==undefined){
        console.log("RENEWAL_REMINDER "+sub.Category+ " " + (sub.Renewal_Date.getDate()-1) +"-"+ (sub.Renewal_Date.getMonth()+1) + "-" + sub.Renewal_Date.getFullYear())
        
        // console.log("RENEWAL_REMINDER "+sub.Category+ " "+ format(date, 'dd-MM-yyyy') )
    
    }
}

const PrintDetailsHandler=(user)=>{

    if(user.Music==undefined && user.Podcast==undefined && user.Video==undefined){
        console.log("SUBSCRIPTIONS_NOT_FOUND");
        return
    }

    printSub(user.Music)
    printSub(user.Video)
    printSub(user.Podcast)


}


module.exports=PrintDetailsHandler