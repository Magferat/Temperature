// const loadBackground = () => {

//     fetch(url)
//         .then(res => res.json())
//         .then(data => backgroundImage(data))

// }


const loadDefault = () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=1129c19eec9d405a92a110744210309&q=Dhaka`;
    console.log(url);
    document.getElementById('others').textContent = '';
    // Fetching Data From API 
    fetch(url)
        .then(res => res.json())
        .then(data => displayDefault(data))
}

const displayDefault = (data) => {
    console.log(data);
    const current = data.current;
    const weatherDhaka = document.getElementById('dhaka');
    const divDhaka = document.createElement('div');
    divDhaka.innerHTML = `<img width= "140px" src="${current.condition.icon}" alt="">
    <h2>${data.location.name}</h2>
    <h3>${current.temp_c} &deg;C</h3>
    <h4 class="lead"><b>Feels Like ${current.feelslike_c} &deg;C<b></h3>
    <h4 class="lead"><b>${current.condition.text}</b></h4>
    `;
    const condition = data.current.temp_c;
    const isDay = data.current.is_day;
    background(condition, isDay);
    weatherDhaka.appendChild(divDhaka);
}


const search = () => {

    const city = document.getElementById('city').value;
    // const API_KEY = `dc9bb75a020d4dbab2d105507210309`;
    const url = `https://api.weatherapi.com/v1/current.json?key=1129c19eec9d405a92a110744210309&q=${city}`;
    console.log(url);



    // Fetching Data From API 
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}


const display = (data) => {
    console.log(data);

    document.getElementById('dhaka').textContent = '';
    document.getElementById('others').textContent = '';


    const current = data.current;
    const weatherDiv = document.getElementById('others');
    const div = document.createElement('div');
    div.innerHTML = `<img width= "140px" src="${current.condition.icon}" alt="">
    <h2>${data.location.name}</h2>
    <h3>${current.temp_c} &deg;C</h3>
    <h4 class="lead"><b>Feels Like ${current.feelslike_c} &deg;<b>C</h3>
    <h4 class="lead"><b>${current.condition.text}</b></h4>
    `;
    const condition = parseInt(data.current.temp_c);
    const isDay = data.current.is_day;
    background(condition, isDay);

    weatherDiv.appendChild(div);
}
const background = (condition, isDay) => {

    if ((condition > 11 && condition < 25) && (isDay == 1 || isDay == 0)) {
        document.body.style.background = "url(images/mist.jpg) no-repeat ";
        document.body.style.backgroundSize = "cover ";
        document.body.style.height = "100vh ";

    }
    else if (condition > 25 && isDay == 1) {
        document.body.style.background = "url(images/508526.jpg) no-repeat ";
        document.body.style.backgroundSize = "cover ";
        document.body.style.height = "100vh ";
    }
    else if (condition < 10 && (isDay == 1 || isDay == 0)) {
        document.body.style.background = "url(images/cold.jpg) no-repeat ";
        document.body.style.backgroundSize = "cover ";
        document.body.style.height = "100vh ";
    }
    else {
        document.body.style.background = "url('images/night.jpg') no-repeat";
        document.body.style.backgroundSize = "cover ";
        document.body.style.height = "100vh ";
    }
}
