function main(){

    //snack 1
    var biciDaCorsa = [
    {
    nome:'uno',
    peso:8,
  },
  {
    nome:'due',
    peso:10,
  }
  ];
  var vA=biciDaCorsa[0];
  
  for (k in biciDaCorsa){
    console.log(biciDaCorsa[k]);
    vA = (vA.peso>(biciDaCorsa[k].peso))? //se x > bici peso 
    biciDaCorsa[k] // allora restituisco il peso della bici corrente
    :vA;   // altrimenti x rimane lo stesso
  }
  
  console.log(`La bici più leggera è la ${vA.nome} che pesa ${vA.peso} Kg`);


// snack 2
  var squadre = [
    {
        nome:'uno',
        punti:0,
        falli:0,
    },
    {
        nome:'due',
        punti:0,
        falli:0,
        }
    ,{
        nome:'tre',
        punti:0,
        falli:0,
        },
  
  ];

var tmpObj={
    nome:'',
    falli:'',

};

var newObj=[];

  
  
  for (k in squadre)
  {
        for (w in squadre[k])
        {
            console.log(w,' '+squadre[k][w],'k:'+k);
            squadre[k][w] = (w!='nome')? rnd(5,0):squadre[k][w];
            if(w!='punti')
            tmpObj[w]=squadre[k][w];

        }
        newObj.push(
            {
                nome:squadre[k].nome,
                falli:squadre[k].falli,
            }
        );
    }

    console.table(squadre);
    console.table(newObj);
    //snack 3

    //var lista=[2,6,7,4,8,9,43,10,5,3];
    var lista = [];
    for(var i=0 ; i<10;i++)
        lista[i]=rnd(1,10);
    console.log(lista);
    var max=0,min=0;
    while (((max-min)<=0)||(isNaN(max)||(isNaN(min)))){ // controllo che max è maggiore di min e che siano entrambi numeri
        min=Math.abs(parseInt(prompt('inserisci il valore minimo'))); // ritorno un valore intero e positivo
        max=Math.abs(parseInt(prompt('inserici il valore massimo')));   // ritorno un valore intero e positivo
        //console.log(min,max);   // vedo i valori immessi 
    }

    console.log('for',subString(lista,min,max)); // stampo l'array

    
    console.log('filter',subStringFilter(lista,min,max));

/*
    jsnack 4
*/

 var abiti = [
     {
        modello: 'giuditta',
        tipologia: 'cappotto',
        colore: 'rosso',
        // da inserire costo 
 },
 {
    modello: 'tigre',
    tipologia: 'body',
    colore: 'giallo',
    // da inserire costo 
},
{
    modello: 'modigliani',
    tipologia: 'collo alto',
    colore: 'giallo',
    // da inserire costo 
},
{
    modello: 'turtle',
    tipologia: 'casacca',
    colore: 'arancione',
    // da inserire costo 
},

];

console.log('map2',abiti.map((val,k,arr)=>{
    val.prezzo= rnd(10,50);
    return val;
}

));
  
    
  

}
// snack 3 funzione con for
    function subString(arr,a,b){
     var min = Math.abs(b-a);  // gioco con i valori potrei inserire i valori in un ordine qualsiasi
     var max = (a<b) ? b : a;
     var arrTmp = [];
     for (i in arr)
        if(i<=(max)&& i>=(max-min))
            arrTmp.push(arr[i]);
        return arrTmp;
    }
//funzione con filter
    function subStringFilter(arr,a,b){
         
        return arr.filter((i)=>{
            //console.log(val,i); 
            return  (i>=a&&i<=b);
            });
            
        
           
       }

   
      /* var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}*/

document.getElementById("demo").innerHTML = newarray;




function rnd(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
  
    
  
  
