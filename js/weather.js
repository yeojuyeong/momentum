/*
 *  2023.11.22
 *  소멘텀 메인에 뜨는 날씨
 *  위치 기반으로 날씨를 알려 준다.
 *  날씨 API를 사용한다.
 */

function onSucces(position) {
   // console.log(position);
   // console.log(position.coords);
   console.log(position.coords.latitude);
   console.log(position.coords.longitude);

   const API_KEY = '071cc3a25435993dfe2985ffa2ccd95e';
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   console.log(`당신이 위치한 곳은 위도 ${latitude}, 경도 ${longitude} 입니다.`);
  
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

   fetch(url)
       .then(response => response.json())
       .then(data => {            
           console.log(data.name, data.weather[0].description, data.main.temp);
           const weather = document.querySelector("#weather span:first-child");
           const temperature = document.querySelector("#weather span:nth-child(2)");
           const city = document.querySelector("#weather div:last-child");
           weather.innerText = data.weather[0].description;
           temperature.innerText = Math.round(data.main.temp-273.15) + '°';
           city.innerText = data.name;
       });
}

function onFail() {
   console.log("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onSucces, onFail)
