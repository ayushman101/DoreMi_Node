class Subscription{
    constructor(category, plan , months,amount,renewal_Date){
        this.Months=months
        this.Amount=amount
        this.Renewal_Date= renewal_Date
        this.Category=category
        this.Plan = plan    
    }
}

module.exports=Subscription
