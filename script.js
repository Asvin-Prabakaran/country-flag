var res = fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((data1)=>bar(data1))
console.log(res);

var container = document.createElement("div");
container.className = "container"

var row = document.createElement("div");
row.className = "row"




function bar(data1){
    for(var i =0;i<data1.length;i++){
        var col = document.createElement("div")
        col.className = "col-md-4"  
        
        col.innerHTML +=`<div class="card" style="width: 18rem;padding:25px;background-color:black">
        <img src= "${data1[i].flags.png}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name.common}</h5>
          <p class="card-text"><b>Capital</b> : ${data1[i].capital[0]}</p>
          <p class="card-text"><b>Latlng</b> : ${data1[i].latlng[0]}</p>
          <p class="card-text"><b>Region</b> : ${data1[i].region}</p>
          <a href="https://openweathermap.org/" class="btn btn-primary">click for Weather</a>
        </div>
      </div>`

      row.append(col)
    container.append(row)
    document.body.append(container)
    } 
    
}

    
