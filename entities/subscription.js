class Subscription{
    constructor(months,amount,renewal_Date,category, plan){
        this.Months=months
        this.Amount=amount
        this.Renewal_Date= renewal_Date
        this.Category=category
        this.Plan = plan    
    }
}

module.exports=Subscription
