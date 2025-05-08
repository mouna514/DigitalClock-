function show_time () {
const now = new Date();
const hours = now.getHours().toString().padStart(2,0);
const minutes = now.getMinutes().toString().padStart(2,0);
const second = now.getSeconds().toString().padStart(2,0);
const ampm = hours >=12 ? 'AM' : 'PM';
const time= `${hours}:${minutes}:${second} ${ampm}`;
document.getElementById("clock").textContent=time;
}

show_time();
setInterval(show_time, 1000);