export class model {
    liste:Array<Liste>;
    constructor(){
        this.liste = [
            new Liste("Kars","Arpaçay","Metehan",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Kars","Arpaçay","Metehan",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Kars","Arpaçay","Metehan",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Kars","Arpaçay","Metehan",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Kars","Arpaçay","Metehan",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
            new Liste("Ankara","Keçiören","Esertepe",101,1,"221,17","Arsa","18.153,87",2021,"Kuru"),
        ];
    }
}
export class Liste{
    il;
    ilce;
    mahalle;
    ada;
    parsel;
    tapualani;
    nitelik;
    netgelir;
    yil;
    kurusulu;
    constructor(il,ilce,mahalle,ada,parsel,tapualani,nitelik,netgelir,yil,kurusulu){
        this.il=il;
        this.ilce=ilce;
        this.mahalle=mahalle;
        this.ada=ada;
        this.parsel=parsel;
        this.tapualani=tapualani;
        this.nitelik=nitelik;
        this.netgelir=netgelir;
        this.yil=yil;
        this.kurusulu=kurusulu;
    }
}
