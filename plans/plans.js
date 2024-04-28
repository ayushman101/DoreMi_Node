const Category={
    MUSIC:"MUSIC",
    VIDEO:"VIDEO",
    PODCAST:"PODCAST"
}

let Plans = {
    MUSIC: {
    FREE:{
        amount:0,
        time:1
    },
    PERSONAL:{
        amount:100,
        time:1
    }
    ,PREMIUM:{
        amount:250,
        time:3
    }
}
,VIDEO:{
    FREE:{
        amount:0,
        time:1
    },
    PERSONAL:{
        amount:200,
        time:0
    }
    ,PREMIUM:{
        amount:500,
        time:3
    }
},
PODCAST : {
    FREE:{
        amount:0,
        time:1
    },
    PERSONAL:{
        amount:100,
        time:1
    }
    ,PREMIUM:{
        amount:300,
        time:2
    }
}
}
let topUp = {
    FOUR_DEVICE:{
        amount:50,
        device:4
    },
    TEN_DEVICE:{
        amount:100,
        device:10
    },
   
}

module.exports={topUp,Plans,Category}