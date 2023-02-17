(()=>{"use strict";const e=document.querySelector(".temp"),t=document.querySelector(".description"),n=document.querySelector(".feels-like"),r=document.querySelector(".humidity"),i=document.querySelector(".wind"),o=document.querySelector(".location"),c=document.querySelector("img"),d=document.querySelector('input[type="checkbox"]'),m=document.querySelector(".search-error");let s="metric",u={};const a={metric:{temp:"°C",speed:"km/h"},imperial:{temp:"°F",speed:"mph"}};function l(l){s=d.checked?"metric":"imperial",u=l;const p=`<sup>${a[s].temp}</sup>`;c.src=`https://openweathermap.org/img/wn/${l.icon}@2x.png`,o.innerHTML=`${l.city}, ${l.country}`,e.innerHTML=l[s].temp+p,t.innerHTML=l.description,n.innerHTML=`feels like: ${l[s].feels_like}${p}`,r.innerHTML=`humidity: ${l.humidity}%`,i.innerHTML=`wind: ${l[s].wind} ${a[s].speed}`,m.style.display="none"}d.addEventListener("change",(()=>{l(u)}));const p=document.querySelector(".search-error");async function y(e){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=9bd7a3b458df4663d1c3e2bcda89b19d&units=imperial`,{mode:"cors"});if(200!==n.status)throw new Error("City not found");l({city:(t=await n.json()).name,country:t.sys.country,description:t.weather[0].description,icon:t.weather[0].icon,humidity:t.main.humidity,metric:{temp:Math.round(5*(t.main.temp-32)/9),feels_like:Math.round(5*(t.main.feels_like-32)/9),wind:(1.609*t.wind.speed).toFixed(2)},imperial:{temp:Math.round(t.main.temp),feels_like:Math.round(t.main.feels_like),wind:t.wind.speed.toFixed(2)}})}catch(e){p.style.display="inherit",console.error(e)}var t}y("warsaw");const h=document.querySelector("form"),w=document.querySelector("form input");h.addEventListener("submit",(e=>{e.preventDefault(),y(w.value),h.reset()}))})();