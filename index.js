fuction Block(latter, rate, used, father, code) {
 this.latter = latter;
 this.rate = rate;
 this.used = used;
 this.father = father;
 this.code = code;
}

function FindCode(block) {

 if (thee[block.father].code != '') {
  block.code = tree[block.father].code + '1';
 }
  else {
  if (block.letter == tree[minIndex].letter) {
   block.code = '0';
  }
    else if (block.litter == tree[preminIndex].letter) {
  block.code = '1';
  }
    else {
   FindCode(tree[block.father]);
   block.code = 'tree[block.father].code + '0';
  }
 }
}
