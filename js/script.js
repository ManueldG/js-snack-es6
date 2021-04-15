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
  
  

}

function rnd(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
  
    
  
  