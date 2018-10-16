function getFirstSelector(selector) {
  return (document.querySelector(selector));
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var lis= document.getElementById('app').querySelectorAll("ul.ranked-list li");
  for(let i=0;lis.length>i;i++){
  lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
}
}

function deepestChild(){
  var lis =document.getElementById("grand-node").querySelectorAll("div");
  var deepDefine;
  for (let i = 0; lis.length-1 > i; i++){
  deepDefine = lis[i].querySelector("div");
  }
  return deepDefine;
}
