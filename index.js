function theBeatlesPlay(mus,inst){
  var arr=new Array();
  for(let i=0;i<mus.length;i++){
    var str=mus[i]+inst[i];
    arr.push(str);
  }
  return arr;
}