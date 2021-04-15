function main(){
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
  var x=biciDaCorsa[0];
  
  for (k in biciDaCorsa){
    console.log(biciDaCorsa[k]);
    x = (x.peso>(biciDaCorsa[k].peso))? //se x > bici peso 
    biciDaCorsa[k] // allora restituisco il peso della bici corrente
    :x;   // altrimenti x rimane lo stesso
  }
  
  console.log(`La bici più leggera è la ${x.nome} che pesa ${x.peso} Kg`);



}
  
    
  
  