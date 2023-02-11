export const products = [
    {
        id:0 ,
        name: "Basic",
        price:1000,
        video:"Good",
        resolution : "360mvp",
        portability : "false",
    },
    {
        id:1 ,
        name: "Standard",
        price:2000,
        video:"Better",
        resolution : "720mvp",
        portability : "true",
    },
    {
        id:2 ,
        name: "Premium",
        price:3000,
        video:"Best",
        resolution : "1080mvp",
        portability : "true",
    }
]

export const loadCheckOut =(priceId:number | null |undefined)=>{
    console.log("plane",priceId);
}