//Kamil Łapiński

const kosztEn = 1.23;
class Product {
    constructor(id, nazwa, model, cena, zuzycieEnergii) {
        this.id = id;
        this.nazwa = nazwa;
        this.model = model;
        this.cena = cena;
        this.zuzycieEnergii = zuzycieEnergii;
    }
    koszt() {
        return this.cena;
    }

    kosztEnergii() {

        return this.zuzycieEnergii * kosztEn + ' kWh';
    }
    wiekProduktu(rocznik) {

        return 2022 - rocznik;
    }

    wiekProduktuLata(rocznik) {
        let lata = this.wiekProduktu(rocznik);
        if (lata == 1) {

            return lata + ' rok';
        }
        if (lata == 2 || lata == 3 || lata == 4) {

            return lata + ' lata';
        } else {

            return lata + ' lat';
        }

    }
}



class ListaTowarow {
    constructor() {
        this.lista = [];
    }

    wypiszWszystkieProdukty() {
        this.lista.forEach(function(element) {
            console.log(element)
        })
    }


    dodajProdukt(p) {
        if ((this.lista.findIndex(x => x.id == p.id)) !== -1) {
            console.log('error')
        } else {
            this.lista.push(p);
        }
    }

    wypiszProdukt(idProduktu) {
        return this.lista.find(x => x.id == idProduktu);
    }

    zmienProdukt(idProduktu, produkt) {
        const index = this.lista.findIndex(x => x.id == idProduktu);
        this.lista[index] = produkt;
    }

}



class Magazyn extends ListaTowarow {

    constructor() {
        super(lista);
        this.map = new Map();
    }

    dodajProdukt(produkt, ilosc) {
        if ((this.lista.findIndex(x => x.id == produkt.id)) !== -1) {
            console.log('error');
        } else {
            this.map.set(produkt.id, ilosc);
            this.lista.push(produkt);
        }
   
    }

    zabierzProdukt(idProduktu, iloscSztuk) {
        if(iloscSztuk <= this.map.get(idProduktu)) {
           this.map.set(idProduktu, (this.map.get(idProduktu) - iloscSztuk));
            return this.lista.find(x => x.id == idProduktu );
       }
 
    }
}



class Sklep extends ListaTowarow {
    constructor() {
        super(lista);
       
    }

    dodajProduktAutomatId(nazwa, model, cena, zuzycieEnergii) {
        this.lista.push(Math.floor(Math.random() * 1000), nazwa, model, cena, zuzycieEnergii);
    }

    dodajProdukt(idProduktu, nazwa, model, cena, zuzycieEnergii) {
        this.lista.push(idProduktu, nazwa, model, cena, zuzycieEnergii);
    }

}



class Zamowienie {
    constructor() {
     
    }

    zrealizujZamowienie (listaZKtorej, magazynZKtorego)  {
        let listaZamowiona = [];
        let mapZamowienia = new Map();
       listaZKtorej.wypiszWszystkieProdukty();
        const idProd = prompt("podaj id:");
        const iloscProd = prompt("podaj ilosc:");
        listaZamowiona.push(listaZKtorej.wypiszProdukt(idProd));
        mapZamowienia.set(idProd, iloscProd);
        magazynZKtorego.zabierzProdukt(idProd, iloscProd);
        console.log('Zamowienie:');
        console.log(listaZamowiona);
        console.log('ilosc produktow: ' + iloscProd);
    }
}


const p1 = new Product(1, 'Monitor', 'modelex23', 1593, 15);
const p2 = new Product(2, 'Laptop', 'LaptoXd93', 3500, 415);
const lista = new ListaTowarow();
lista.dodajProdukt(p1);
const magazyn = new Magazyn();
magazyn.dodajProdukt(p1, 5);
const sklep = new Sklep();
sklep.dodajProdukt('Mysz gamingowa', 'mouseXcR2', 233, 5);
const zam = new Zamowienie();