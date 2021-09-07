import React from 'react';
import rainbow from '../../img/rainbow.png';
import {Button} from "@material-ui/core";



export const CardList = ({weatherData, setSearch, getData,getDateForSun}) => {

    return (

       <div className="flexboxs">
           <div style={{}}>

                <div className="card-body" style={{padding: "20px 33px 22px 27px",margin:"50px 0"}}>
                    <input
                        className="form-control w-50"
                        type="text"
                        onBlur={e => setSearch(e.target.value)}
                        placeholder="search"
                        />
                            <Button variant="outlined" color="primary" style={{marginTop:"20px"}} onClick={getData}>Search</Button>
                        <div className="text-center font-weight-bolder" style={{display:"flex",justifyContent:"space-between",margin:"20px 0"}}>
                            <div>
                                <h5>Погода на сегодня:  {weatherData?.name} </h5>
                                <div>
                                    <h3>{weatherData.main && weatherData.main.temp}°C</h3>
                                    <p>Ощущается как: {weatherData.main && weatherData.main.feels_like}</p>
                                </div>
                            </div>
                                <div >
                                    <img style={{width:"150px",height:"150px"}} src={rainbow} alt="" />
                                </div>
                        </div>

                                <div className="row">
                                        <div className="col-md-6">
                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}>
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-thermometer-three-quarters"></i>
                                                    <p style={{paddingLeft:"20px"}}> Макс./Мин.</p>
                                                </div>
                                                
                                                <span>{weatherData.main && weatherData.main.temp_max}/{weatherData.main && weatherData.main.temp_min}</span>
                                            </div>
                                            <div  className="icons"style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}>
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-tint"></i>
                                                    <p style={{paddingLeft:"20px"}}>Влажность</p>
                                                </div>
                                                <span>{weatherData.main && weatherData.main.humidity}</span>
                                            </div>
                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}>
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-compress-alt"></i>
                                                    <p style={{paddingLeft:"20px"}}>Давление</p>
                                                </div>
                                                <span>{weatherData.main && weatherData.main.pressure}</span>
                                                
                                            </div>
                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}>
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-sunrise-weather-those-icons-fill-those-icons.png"/>
                                                    <p style={{paddingLeft:"20px"}}>Расвет</p>
                                                </div>
                                                <span>{getDateForSun(weatherData.sys && weatherData.sys.sunrise)}</span>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}> 
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-wind"></i>
                                                    <p style={{paddingLeft:"20px"}}>Ветер</p>
                                                </div> 
                                                <span>{weatherData.wind && weatherData.wind.speed}</span>
                                            </div>                                    
                                           

                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}>
                                                <div  style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-eye"></i>
                                                    <p style={{paddingLeft:"20px"}}>Видимость</p>
                                                </div>  
                                                <span>{weatherData && weatherData.visibility}</span> 
                                            </div>
                                            
                                           
                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}> 
                                                <div style={{display:"flex",alignItems:"center"}}>
                                                    <i class="fas fa-moon"></i>
                                                    <p style={{paddingLeft:"20px"}}>Фаза луны</p>
                                                </div>
                                                <span>{weatherData.weather && weatherData.weather[0].description}</span>
                                            </div>

                                            <div className="icons" style={{borderTop:"1px solid #dedede",padding:"15px 0",alignItems:"center"}}> 
                                                <div style={{display:"flex",alignItems:"center"}}>
                                                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-sunset-weather-those-icons-fill-those-icons.png"/>
                                                    <p style={{paddingLeft:"20px"}}>Закат</p>
                                                </div>
                                                <span>{getDateForSun(weatherData.sys && weatherData.sys.sunset)}</span>
                                            </div>

                                            
                                           
                                        </div>
                                </div>

                        </div>
                </div>
           </div>
    );
    }



