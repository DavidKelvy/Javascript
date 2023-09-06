class Notebook
{
    //caracteristicas da classe
    //atributos
    //this serve para definir  o conteudo da variavel
    
    constructor(Marca,Modelo,Ram,Processador,Touchscreen, Ligado)
    {
    this.marca =Marca;
    this.modelo =Modelo;
    this.ram =Ram;
    this.processador =Processador; 
    this.touchscreen =Touchscreen; 
    this.ligado =Ligado;
    }



 //comportamento da classe
 // a funcionalidade da classe
 //metodos
 Liga()
 {
    if(this.ligado===false)
    {
    this.ligado=true;
    console.log("o notebok está ligado");
    }
    else 
    {
    console.log("o notebok já estava ligado") ;
    }
 }

 Desliga()
{
    if (this.ligado===true)
    {
        this.ligado=false
        console.log("o notebok está desligado") ;
    }
    else
    {
        console.log("o notebok já estava desligado") ;
    }
} 
}
let notebookDavid=new Notebook("Lenovo", "Thinkpad", "16G", "Ryzon",false, true);
console.log(notebookDavid.ligado);
notebookDavid.Desliga();
console.log(notebookDavid.ligado);
notebookDavid.Liga();
console.log(notebookDavid.ligado)
