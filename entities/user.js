const { Category } = require("../plans/plans")

class User {
    constructor(startDate,music,video,podcast,topup){
        this.Start_Date=startDate
        this.Music=music
        this.Video=video
        this.Podcast=podcast
        this.Topup=topup
    }

    validateAndAddSub(category,sub){
        if(category==undefined)
            return sub
        console.log("ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY")
        return category
    }


    AddSubscription(sub){
        switch (sub.Category) {
            case Category.MUSIC:
                this.Music=this.validateAndAddSub(this.Music,sub)
                break
            case Category.VIDEO:
                this.Video = this.validateAndAddSub(this.Video,sub)
                break
            case Category.PODCAST:
                this.Podcast=this.validateAndAddSub(this.Podcast,sub)
        }
    }

    AddTopUp(topup){
        this.Topup=topup
    }

    
}

module.exports=User