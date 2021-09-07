import React from "react";

import sun from '../../img/sun.png';



export const App = ({weatherData}) => {


    return (
      <>    
        <div className="flexboxs">
          <div>
            <div className="card-body " style={{backgroundColor:"#6f42c1",  padding: "20px 33px 22px 27px",color:"white",margin:"50px 0"}}>
                <div >
                  <h5>{weatherData?.name}</h5>
                  <p style={{color:"#a154e4;",fontSize:"18px",marginBottom:"30px"}}>По состоянию на </p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div style={{textAlign:"left"}}>
                    <span style={{fontSize:"70px",fontWeight:"500"}}>{weatherData.main && weatherData.main.temp}°C</span>
                    <div style={{fontSize:"25px",fontWeight:"500",marginTop:"50px"}}>{weatherData.weather && weatherData.weather[0].description}</div>
                  </div>
                  <div className="desc"  style={{textAlign:"right",display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                    <img className="img-block" src={sun} alt="" />
                    <span>{weatherData.main && weatherData.main.temp_max}/{weatherData.main && weatherData.main.temp_min} °C</span>
                  </div>
                </div>
                <div style={{fontSize:"17px"}}>
                  вероятность дождя 1 % до 19:00
                </div>
            </div>
          </div>
        </div>
       
        </>
    );
  }
  
 