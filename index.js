console.log("Hello Emi");
// de6834e6dd724acf9df0e13dec9ffd26


let key = "de6834e6dd724acf9df0e13dec9ffd26";

let info = document.getElementById("cardd");



let xhr  = new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=sa&apiKey=de6834e6dd724acf9df0e13dec9ffd26` , true);


xhr.onload = function () {
    if (this.status===200){
        let json = JSON.parse(xhr.responseText);
        let article = json.articles;
        console.log(json);
        let content = "";
        article.forEach(function(element , index){
            let news = `  <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" id="heading1"> <b>Breaking News ${index+1}:</b><br> "${element.title}"</h5>
                    <p class="card-text">${element.description}</p>
                    <a href="${element.url} " target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>
            </div>`
            content+=news;
        });
        info.innerHTML = content;
    }
    else{
        console.log("show some error")
    }
};

xhr.send();









let content = `  <div class="col-sm-6">
<div class="card">
    <div class="card-body">
        <h5 class="card-title" id="heading1">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">View</a>
    </div>
</div>
</div>`;