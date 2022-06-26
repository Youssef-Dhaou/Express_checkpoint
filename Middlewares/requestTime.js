const requestTime = (req, res, next)=>{
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
const dayWork=["Monday","Tuesday","Wednesday","Thursday","Friday"]
const d = new Date();
const day= weekday[new Date().getDay()]
let hour = d.getHours();
if((dayWork.includes(day) && hour >= 9 && hour<=15)){
    next()}
    else{
  res.status(500).send('We are out of service now, come back tomorrow!')
    }
}

module.exports=requestTime