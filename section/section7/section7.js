let character = {
  id: 1,
  name: "スライム",
  hp: 50,
};

function addMP(mp) {
  character.mp = mp;
  return character;
}

function updateHP() {
  delete character.mp;
  character.hp -= 15;
  return character;
}

function LookUpName() {
  return character.name;
}

module.exports = { character, addMP, updateHP, LookUpName };
