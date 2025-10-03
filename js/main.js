console.log(`js loaded!`);
const moh = document.querySelector('.mohammad');
const ana = document.querySelector('.anas');
const moht = document.querySelector('.mohammadt');
const sam = document.querySelector('.sam');
const gha = document.querySelector('.ghaith');
const mo = document.querySelector('.mo');


for (let index = 0; index < 3; index++) {
    moh.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}

for (let index = 3; index < 6; index++) {
    ana.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}

for (let index = 6; index < 9; index++) {
    moht.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}

for (let index = 9; index < 12; index++) {
    sam.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}

for (let index = 12; index < 15; index++) {
    gha.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}

for (let index = 15; index < 18; index++) {
    mo.innerHTML += `

<div class="py-3 col-12 col-xl-4">
<div div class = "card bg-card" >
 <img src="${data[index].img}" class="card-img-top" alt="...">
 <div class="card-body">
    <h5 h5 class = "card-title text-white">${data[index].titel}</h5 >
    <p class = "card-text text-white" > ${data[index].description}</p >
    <a href="${data[index].link}" class=" float-end btn btn-info">Read more</a>
</div>
 </div>
</div>

`
}
