const requestTime = (req, res, next)=>{
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
const dayWork=["Monday","Tuesday","Wednesday","Thursday","Friday"]
const d = new Date();
const day= weekday[d.getDay()]
let hour = d.getHours();
if((dayWork.includes(day) && hour >= 9 && hour <= 17)){
    next()}
    else{
  res.status(400).send('Out of service, come back tomorrow!')
    }
}

module.exports=requestTime