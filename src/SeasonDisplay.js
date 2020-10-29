import React from 'react';
const getSeason=(lat,month)=>{
    if(month>2&&month<9)
    {
        return lat>0?'summer':'winter';
    }
    else
    {
        return lat>0?'winter':'summer';
    }
}

const SeasonDisplay =(props)=>{
const season =getSeason(props.lat,new Date().getMonth())
console.log(season)
console.log("hello")
console.log(props.lat)
console.log(new Date().getMonth())
const icon=season==='winter'?'snowflake':'sun'
return<div>
    <i className={`${icon} icon`}/>
    <h1>{season ==='winter'?'Burr, it is chilly':'lets hit the beach'}</h1>
    <i className={`${icon} icon`}/>
    </div>



}
export default SeasonDisplay;