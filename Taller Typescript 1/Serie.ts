export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    abstract: string;
    watch: string;
    image: string;


    constructor(id:number, n:string, c:string, s:number, a:string, w:string, image:string) {
    this.id = id;
    this.name = n;
    this.channel = c;
    this.seasons = s;
    this.abstract = a;
    this.watch = w;
    this.image = image;

    }

    // Métodos de la clase
    metodo1() {
    // Código del método
    }

    metodo2() {
    // Código del método
    }
    

}