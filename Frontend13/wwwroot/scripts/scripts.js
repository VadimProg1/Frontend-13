currentPageLink = 1;

card1HTML = `<div class="col-6 col-lg-4 mb-4 col-xl-3">
                                               <div class="row justify-content-center">
                                                   <div class="card" style="width: 16rem; background-color: lightblue;">
                                                       <img class="card-img-top" src="content/hedgehog4.jpg" alt="Card image cap">
                                                       <div class="card-body">
                                                           <h5 class="card-title">Название карточки</h5>
                                                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>`

card2HTML = `<div class="col-6 col-lg-4 mb-4 col-xl-3">
                                               <div class="row justify-content-center">
                                                   <div class="card" style="width: 16rem; background-color: aquamarine;">
                                                       <img class="card-img-top" src="content/hedgehog5.jpg" alt="Card image cap">
                                                       <div class="card-body">
                                                           <h5 class="card-title"><em>Название карточки</em></h5>
                                                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>`

card3HTML = `<div class="col-6 col-lg-4 mb-4 col-xl-3">
                                               <div class="row justify-content-center">
                                                   <div class="card" style="width: 16rem; background-color: lightyellow;">
                                                       <img class="card-img-top" src="content/hedgehog6.jpg" alt="Card image cap">
                                                       <div class="card-body">
                                                           <h5 class="card-title">Название карточки</h5>
                                                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>`

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#page-link-back').addEventListener('click', () => {
        if (currentPageLink > 1) {
            currentPageLink--;
            Update();
        }
    });
    document.querySelector('#page-link1').addEventListener('click', () => {
        currentPageLink = 1;
        Update();
    });
    document.querySelector('#page-link2').addEventListener('click', () => {
        currentPageLink = 2;
        Update();
    });
    document.querySelector('#page-link3').addEventListener('click', () => {
        currentPageLink = 3;
        Update();
    });
    document.querySelector('#page-link-next').addEventListener('click', () => {
        if (currentPageLink < 3) {
            currentPageLink++;
            Update();
        }
    });
})

function Update() {
    $('#collapseExample').collapse('hide');
    document.querySelector('#cards-row').innerHTML = "";
    switch (currentPageLink) {
        case 1:
            for (var i = 0; i < 7; i++) {
                document.querySelector('#cards-row').innerHTML += card1HTML;
            }
            break;
        case 2:
            for (var i = 0; i < 6; i++) {
                document.querySelector('#cards-row').innerHTML += card2HTML;
            }
            break;
        case 3:
            for (var i = 0; i < 5; i++) {
                document.querySelector('#cards-row').innerHTML += card3HTML;
            }
            break;
    }
    setTimeout(() => { $('#collapseExample').collapse('show'); }, 350);
}
