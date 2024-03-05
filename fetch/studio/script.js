//TODO: Add Your Code Below

window.addEventListener('load', function(){

    const container = document.getElementById('container');
    
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
    });
    
    
    async function fetchAndDisplayAStronauts(){
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let data = await response.json();
    }
    
    data.sort(function (a, b) {
    return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });
    
    
    const count = document.getElementById('count');
    count.innerHTML = `These ${data.length} extraordinary pepole are a few of the handfulof humankind who have had the privilege
    of looking down on our beautiful plant  from the quite darkness of outer space`;
    
        for (let i=0; i < data.length; i++){
            let astronaut = data[i];
    
            let activeclass = astronaut.active ? "active" : "";
    
            container.innerHTML+= `
            <div class="astronaut">
        <div class="bio">
            <h3>"Mae Jemison"</h3>
        <ul>
            <li>Hours in space: 190</li>
            <li>Active: false </li>
            <li>Skills: "Physician", "Chemical Engineer"</li>
        </ul>
        </div>
        <img class="avatar" src="images/mae-jemison.jpg">
    </div>
            `;
        }
    
        fetchAndDisplayAStronauts();
    
        
    
    
    });