const char = createKnight('Jr');
const monster = createLitteMonster();

stage.start(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)