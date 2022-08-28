const axios= require("axios");
const Platform= require("../models/Platform");

const seedPlatforms= async () =>{
    const consoles= await axios({
        method: "post",
        url: "https://api.igdb.com/v4/platforms",
        headers:{
            "Client-ID": "236s12ecjdnerb99bz116ajg178wx1",
            "Authorization": "Bearer u9gwkgi94upmmynt9vqtkj9ho3pysx"
        },
        data: `fields name, category, generation, platform_family; 
        limit 500; 
        where generation!=null & platform_family!=null & category= 1 & generation>3;`
    }).then((res)=>{
        return res.data;
    });

    const allPlats=[
        {
            p_tag: "PC (Microsoft Windows)"
        },
        {
            p_tag: "Mac"
        },
    ];

    for(const console of consoles){
        allPlats.push({
            p_tag: console.name
        })
    }

    await Platform.bulkCreate(allPlats);
    console.log("\n Platforms seeded.")
}

module.exports= seedPlatforms;
