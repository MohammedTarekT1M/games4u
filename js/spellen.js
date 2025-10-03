const gallery = document.querySelector('.gallery');

for (let index = 0; index < data.length; index++) {
  gallery.innerHTML += `
        <div class="col-12 col-lg-4 py-3">
        <div div class = "card bg-card text-white" >
        <img src="${data[index].img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data[index].titel}</h5>
        <a href="${data[index].link}" class="btn btn-info float-end">Read More</a>
        </div>
    </div>
    </div>
  `
}