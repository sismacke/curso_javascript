


const bandas = ['Megadeth', 'Metallica', 'Slayer', 'Anthrax', 'Testament'];

const musicas = ['Holy Wars', 'Master of Puppets', 'Raining Blood', 'Madhouse', 'Over the Wall'];

for(i = 0; i < bandas.length; i++){
    //console.log(`A música ${musicas[i]} é do ${bandas[i]}`);
}


const bandas2 = ['Megadeth', 'Metallica', 'Slayer', 'Anthrax', 'Testament'];

const musicasPorBanda = [
    ['Holy Wars', 'Peace Sells', 'Hangar 18', 'Symphony of Destruction', 'Tornado of Souls'],
    ['Master of Puppets', 'Enter Sandman', 'One', 'Battery', 'Fade to Black'],
    ['Raining Blood', 'Angel of Death', 'South of Heaven', 'War Ensemble', 'Seasons in the Abyss'],
    ['Madhouse', 'Indians', 'Caught in a Mosh', 'I Am the Law', 'Antisocial'],
    ['Over the Wall', 'Practice What You Preach', 'Souls of Black', 'The Legacy', 'More than Meets the Eye']
];

for (let i = 0; i < bandas2.length; i++) {
    for (let j = 0; j < musicasPorBanda[i].length; j++) {
        console.log(`A música ${musicasPorBanda[i][j]} é do ${bandas2[i]}`);
    }
}