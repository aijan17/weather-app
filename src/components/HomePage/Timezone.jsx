import React from 'react';
import { useState ,useEffect} from 'react';
import { API_URL } from '../../common/constants';
import { get } from '../../common/axiosApiProxy';
import { NavbarMenu } from './NavbarMenu';
import { Footer } from './Footer';
import { NavPanel } from './NavPanel';


export const Timezone = () => {
    const [timeZoneHourly, setTimezone] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            getOneCallHoursDays(position.coords.latitude, position.coords.longitude)
          });    
        
    }, [])

    const convertUnixUtc = (unixUtc) => {
        const monthNames = ["января", "февраля", "марта", "апреля", "май", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
      ];
        let unix_timestamp = Number(unixUtc);
        let date = new Date(unix_timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let month = monthNames[date.getMonth()];
        let day =  date.getDay();


        return  `${day}-${month}/${hours}:${minutes}`
    }

    const getOneCallHoursDays = (lat, long) => {
        get(`${API_URL}/onecall?appid=699fda0bb54320c40ecb2389e7810505&lat=${lat}&lon=${long}&exclude=minutely,daily&units=metric&lang=ru`, (timezoneObj) => {
            setTimezone(timezoneObj.data.hourly); 
            console.log(timezoneObj.data)          
        });       
    }
 
      return (
          <>
          <NavbarMenu/>
          <NavPanel/>
          <div className="container" style={{marginTop:"60px",marginBottom:"100px"}}>
          <h2 className="size-tag">Почасовой прогноз</h2>
                  {timeZoneHourly.map((item,index) => {
                      return <>
                         <div className="container">
                            <ul className="responsive-table text-center" >
                                <li className="table-row ">
                                        <div className="col-sm-12 col-md-3" > {convertUnixUtc(item.dt)}</div>
                                        <div className="col-sm-12 col-md-3" style={{fontSize:"17px",fontWeight:"900"}}>{item.temp} °C</div>
                                        <div className="col-sm-12 col-md-3">{item.weather[0].description}</div>
                                        <div className="col-sm-12 col-md-3">{item.wind_speed} км/ч</div>
                                </li>
                            </ul>
                        </div>
                        {item.daily}
                      </>
                  })}
          </div>

        <Footer/>
          </>
        )  
    
    }

    