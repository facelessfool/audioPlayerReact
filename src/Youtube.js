import yt from '../apikey/ytapi';



const res = yt.get('/search',{
    params:{
        q: "apple"
    }
})

console.log(`res is : ${res}`)