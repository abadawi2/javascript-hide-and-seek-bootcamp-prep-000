function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nestedTarget = document.getElementById("nested");
  return nestedTarget.querySelector(".target");
}

function increaseRankBy(n) {
  const ranks = document.getElementById("app").querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++)  {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML)+n;
  }
}

function deepestChild(){

	let node = document.getElementById('grand-node');
  	let nextNode = node.children[0];
    while (nextNode) {
      nextNode = node.children[0];
    }
    return (node);
    }
