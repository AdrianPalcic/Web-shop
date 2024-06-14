
    
const biljke = [
    {
        id: 1,
        img:"biljke slike/aloe vera.jpeg",
        name: "Aloe Vera",
        price: 24,
        category: ["Sv - Srednje Vode", "Ms - Malo Svjetlosti", "Vt - Visoka Temperatura", "s - Srednja"],

    },
    {
        id: 2,
        img:"biljke slike/biljka mesoždera.jpeg",
        name: "Biljka mesožderka",
        price: 30,
        category: ["Sv - Srednje Vode", "Ss - Srednje Svjetlosti", "Vt - Visoka Temperatura", "m - Mala"],
    },
    {
        id: 3,
        img : "biljke slike/božikovina.jpeg",
        name: "Božikovina",
        price:50,
        category: ["Mv - Malo Vode","Ss - Srednje Svjetlosti", "Nt - Niska Temperatura", "m - Mala"],

    },
    {
        id:4,
        img : "biljke slike/čuvarkuća.jpeg",
        name: "Čuvarkuća",
        price:8,
        category: ["Mv - Malo Vode", "Ms - Malo Svjetlosti", "Nt - Niska Temperatura", "m - Mala"],
    },
    {
        id:5,
        img: "biljke slike/fikus.jpeg",
        name: "Fikus",
        price: 14,
        category: ["Mv - Malo Vode", "Ms - Malo Svjetlosti", "Vt - Visoka Temperatura", "s - Srednja"],
    },
    {
        id:6,
        img: "biljke slike/lokvanj.jpeg",
        name: "Lokvanj",
        price:12,
        category: ["Pv - Puno Vode", "Ps - Puno Svjetlosti", "St - Srednja Temperatura", "s - Srednja"],

    },
    {
        id: 7,
        img: "biljke slike/lopoč.jpeg",
        name: "Lopoč",
        price: 4,
        category: ["Pv - Puno Vode", "Ps - Puno Svjetlosti", "St - Srednja Temperatura", "s - Srednja"],
    },
    {
        id: 8,
        img: "biljke slike/meksički kaktus.jpeg",
        name: "Meksički kaktus",
        price:7,
        category: ["Mv - Malo Vode" ,"Ps - Puno Svjetlosti", "Vt - Visoka Temperatura", "v - Velika"],
    },
    {
        id: 9,
        img: "biljke slike/običan bor.jpeg",
        name: "Bor",
        price:11,
        category: ["Sv - Srednje Vode", "Ss - Srednje Svjetlost" , "Nt - Niska Temperatura", "v - Velika"],
    },
    {
        id: 10,
        img: "biljke slike/orhideja.jpeg",
        name: "Orhideja",
        price: 12,
        category: ["Sv - Srednje Vode", "Ps - Puno Svjetlosti", "St - Srednja Temperatura", "m - Mala"],
    },
    {
        id: 11,
        img: "biljke slike/palma 2.jpeg",
        name: "Palma",
        price: 100,
        category: ["Pv - Puno Vode", "Ps - Puno Svjetlosti", "Vt - Visoka Temperatura", "v - Velika"],
    },
    {
        id: 12,
        img: "biljke slike/paprat.jpeg",
        name: "Paprat",
        price: 36,
        category: ["Pv - Puno Vode", "Ss - Srednje Svjetlosti", "St - Srednja Temperatura", "m - Mala"],
    },
    {
        id: 13,
        img: "biljke slike/philodendron.jpeg",
        name: "Philodendron",
        price: 16,
        category: ["Sv - Srednje Vode", "Ss - Srednje Svjetlosti", "St - Srednja Temperatura", "s - Srednja"],
    },
    {
        id: 14,
        img: "biljke slike/ruža.jpeg",
        name: "Ruža",
        price: 12,
        category: ["Sv - Srednje Vode", "Ss - Srednje Svjetlosti", "St - Srednja Temperatura", "s - Srednja"],
    },
    {
        id: 15,
        img: "biljke slike/smreka.jpeg",
        name: "Smreka",
        price: 89,
        category: ["Sv - Srednje Vode", "Ps - Puno Svjetlosti", "Nt - Niska Temperatura", "v - Velika"],
    },
    {
        id: 16,
        img: "biljke slike/šumska jagoda.jpeg",
        name: "Šumska jagoda",
        price: 18,
        category: ["Sv - Srednje Vode", "Ms - Malo Svjetlosti", "St - Srednja Temperatura", "m - Mala"],
    },
    {
        id: 17,
        img: "biljke slike/suncokret.jpeg",
        name: "Suncokret",
        price: 16,
        category: ["Sv - Srednje Vode", "Ps - Puno Svjetlosti", "St - Srednja Temperatura", "m - Mala"],
    },
    {
        id: 18,
        img: "biljke slike/vražji bršljan.jpeg",
        name: "Vražji bršljan",
        price: 23,
        category: ["Sv - Srednje Vode", "Ss - Srednje Svjetlosti", "St - Srednja Temperatura", "s - Srednja"],
    },
    {
        id: 19,
        img: "biljke slike/zmajevac.jpeg",
        name: "Zmajevac",
        price: 45,
        category: ["Sv - Srednje Vode", "Ps - Puno Svjetlosti", "Vt - Visoka Temperatura", "m - Mala"],
    },
    {
        id: 20,
        img: "biljke slike/zumbul.jpeg",
        name: "Zumbul",
        price: 76,
        category: ["Pv - Puno Vode", "Ps - Puno Svjetlosti" , "St - Srednja Temperatura", "m - Mala"],
    }
];

    const cart = document.querySelector(".shopping-cart")
    const container = document.querySelector(".container");
    const kategorije = document.querySelector(".kategorije");
    const plantWrapper = document.getElementById("plants");
    const searchBar = document.getElementById("search-bar");
    const hideShow = document.querySelectorAll(".hide-show");
    const katOpener = document.querySelectorAll(".kat-opener");
    const cartBtn = document.getElementById("cart-btn");
    const shopBtn  = document.getElementById("back-to-shop");
    const cartContainer = document.querySelector(".cart-container");
    const ukupno = document.getElementById("ukupno");
    const kolicina = document.getElementById("kolicina");
    const clearCartBtn = document.getElementById("clear-cart");
    const shopBtnContainer = document.querySelector(".shop-btn");
    const openBuyFormBtn = document.getElementById("openBuyFormBtn")
    const rangeOfPrice = document.getElementById("rangeOfPrice");
    const buyBtn = document.getElementById("kupi");
    const buyForm = document.querySelector(".buy-form");
    const zaPlatiti = document.getElementById("za-platiti")
    const Myform = document.getElementById("buy-form");

    //prikazi shopping cart
    cartBtn.addEventListener("click", () => {
        container.style.display = "none";
        cart.style.display = "flex";
        cartBtn.style.color = "green";
    });
    //nazad na trgovinu
    shopBtn.addEventListener("click", () => {
        container.style.display = "flex";
        cart.style.display = "none";
        cartBtn.style.color = "black";
    })
    //za svaki "dodaj u kosaricu gumb" logika
    const addToCartButtons = () => {
        const addToCart  = document.querySelectorAll(".add-to-cart");
        [...addToCart].forEach((btn) => {
            btn.addEventListener("click", (e) => {
                shoppingCart.addItems(Number(e.target.id), biljke);
                //prikazi ukupnu cijenu i broj predmeta u kosarci
                ukupno.textContent = `$${shoppingCart.getTotal()}`
                kolicina.textContent = shoppingCart.getCount();

            })
        })
    }
    //logika za otvorit formu
    const openForm = () => {
        buyForm.style.display = "flex";
        //i ispisi ukupni dug cuz why not
        zaPlatiti.textContent = `$${shoppingCart.getTotal()}`
    }
    //otvori je
    openBuyFormBtn.addEventListener("click", openForm)

    //prikazi sakrivene kategorije 
        katOpener.forEach((opener) => {
            opener.addEventListener("click", (e) => {
                const katId = e.target.id;
                if (katId === "Sve") {
                    prikaziBiljke(biljke);
                    addToCartButtons()
                } else {
                    for (let i = 0; i < hideShow.length; i++) {
                        if (hideShow[i].id === katId) {
                            hideShow[i].style.display = hideShow[i].style.display === 'flex' ? 'none' : 'flex';
                            break;
                        }
                        addToCartButtons()
                    }
                }
            });
        });
    //filtriraj po kategorijama
        hideShow.forEach((categoryElement) => {
            categoryElement.addEventListener("click", (e) => {
                const targetCat = e.target.textContent.trim();
                console.log(targetCat);
                const filteredBiljke = biljke.filter((biljka) => biljka.category.includes(targetCat));
                prikaziBiljke(filteredBiljke);
                addToCartButtons()
            });
        });
    
    //Prikazi biljke po glavnoj stranici (kom se da html pisat)
    const prikaziBiljke = (plants) => {
        
            plantWrapper.innerHTML = plants
                .map(
                    (plant) => `
            <div class="plant">
                <img src="${plant.img}" alt="">
                <span class="name">${plant.name}</span>
                <span class="price">$${plant.price}</span>
                <button id="${plant.id}" class="add-to-cart">Dodaj u kosaricu</button>
            </div>
        `
                )
                .join("");
                addToCartButtons()
        }
        prikaziBiljke(biljke)
        
        //sortiraj sa search-barom
        searchBar.addEventListener("keyup", (e) => {
            const value = e.target.value.toLowerCase();
            const filteredPlants = biljke.filter(
                //trazimo po slovima ubiti
                (plant) => plant.name.toLowerCase().indexOf(value) !== -1
            );
            addToCartButtons()
            prikaziBiljke(filteredPlants);
        });
    //sortiraj po cjeni
        rangeOfPrice.addEventListener("change", (e) => {
            console.log(e.target.value);
            const value = e.target.value;
            const filteredPlants = biljke.filter((item) => item.price >= Number(value));
            prikaziBiljke(filteredPlants);
            addToCartButtons();
        })
        //napravi shopping cart i njegove metode građenja koje zovemo kasnije (npr 187 - 190)
class ShoppingCart {
    constructor() {
        //tu spremi dodane artikle (282)
        this.items = [];
    }
    
    //To sto pise
    addItems(id, items) {
        //dodaj item
        const item = items.find((item) => item.id === id);
        const {name, price, img} = item;
        this.items.push(item);

//da se ne ispisuju dva artikla koja su ista kad ih kupis nego ispisuj kolko ima istih (294)
        const kolikoIstih = {}
        this.items.forEach((item) => {
            kolikoIstih[item.id] = (kolikoIstih[item.id] || 0) + 1;
         });

         const trenutniBrojIstih = kolikoIstih[item.id];

         //s njim cemo ispisivat kolko ima istih
         const span = document.getElementById(`broj${id}`)
         const ukupnaCijenaSpan = document.getElementById(`ukupna-cijena${id}`);

//ako je trenutni broj istih veci od nula nemoj ispisat artikl nego ispisi broj, ako nije ispisi cijeli aritkl
         trenutniBrojIstih > 1 ?
         span.textContent = `${trenutniBrojIstih}x` :
         cartContainer.innerHTML += `
            <div class="cart-item" id="${id}">
                <div class="name-image">
                    <div class="fit">
               <img class="go-smaller" src="${img}">
                    </div>
                <h3>${name}</h3>
             </div>
                    <div class="desc">
                    <p>Cijena: $<span id="cijena">${price}</span></p>
                    <p>Kolicina: <span id="broj${id}"></span></p>
                    <p>Ukupna Cijena: <span id="ukupna-cijena${id}">$${price}</span></p>
                </div>
            </div>
         `
         //zbrajaj
         if (trenutniBrojIstih > 1) {
            ukupnaCijenaSpan.textContent = `$${price * trenutniBrojIstih}`
         }  
         //ako ima artikala prikazi "idi na kupnju" gumb
         if (this.items.length > 0) {
            openBuyFormBtn.classList.remove("hide")
         } 
         
        }
       //kolko ima artikala u kosarici
    getCount () {
        return this.items.length;
    }
    //kolko si duzan
    getTotal () {
      let total =  this.items.map((item) => item.price).reduce((acc,el) => acc + el, 0);
        return total;
    }
    //izbrisi sve
    clearCart() {
        if (!this.items.length) {
            alert("Your cart is alredy empty");
            return;
        } 
        //sigurno??
        const areYouSure = confirm("Are you sure you want to delete the contents of your cart?");
            if(areYouSure) {
                this.items = [];
                cartContainer.innerHTML = "";
                ukupno.textContent = 0;
                kolicina.textContent = 0;
                openBuyFormBtn.classList.add("hide");
                buyForm.style.display = "none";
                zaPlatiti.textContent = "";
                const formInputs = document.querySelectorAll("#buy-form input");
                formInputs.forEach((input) => (input.value = ""));
        
            }
        
    }
}

    const shoppingCart = new ShoppingCart;

    //sve ocisti kad stisnem taj gumb
clearCartBtn.addEventListener("click", shoppingCart.clearCart.bind(shoppingCart));

//nez jos se zajebavam s tim
buyBtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("jebo majku")
})