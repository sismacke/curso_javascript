const bandasMusicas = {
    'Megadeth': ['Holy Wars', 'Peace Sells', 'Hangar 18', 'Symphony of Destruction', 'Tornado of Souls'],
    'Metallica': ['Master of Puppets', 'Enter Sandman', 'One', 'Battery', 'Fade to Black'],
    'Slayer': ['Raining Blood', 'Angel of Death', 'South of Heaven', 'War Ensemble', 'Seasons in the Abyss'],
    'Anthrax': ['Madhouse', 'Indians', 'Caught in a Mosh', 'I Am the Law', 'Antisocial'],
    'Testament': ['Over the Wall', 'Practice What You Preach', 'Souls of Black', 'The Legacy', 'More than Meets the Eye']
};

//console.log(bandasMusicas);

const bandasDetalhadas = {
    'Megadeth': {
        'musicas': ['Holy Wars', 'Peace Sells', 'Hangar 18', 'Symphony of Destruction', 'Tornado of Souls'],
        'integrantes': ['Dave Mustaine', 'David Ellefson', 'Kiko Loureiro', 'Dirk Verbeuren'],
        'formacao': 1983,
        'genero': 'Thrash Metal'
    },
    'Metallica': {
        'musicas': ['Master of Puppets', 'Enter Sandman', 'One', 'Battery', 'Fade to Black'],
        'integrantes': ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
        'formacao': 1981,
        'genero': 'Heavy Metal'
    },
    'Slayer': {
        'musicas': ['Raining Blood', 'Angel of Death', 'South of Heaven', 'War Ensemble', 'Seasons in the Abyss'],
        'integrantes': ['Tom Araya', 'Kerry King', 'Gary Holt', 'Paul Bostaph'],
        'formacao': 1981,
        'genero': 'Thrash Metal'
    },
    'Anthrax': {
        'musicas': ['Madhouse', 'Indians', 'Caught in a Mosh', 'I Am the Law', 'Antisocial'],
        'integrantes': ['Scott Ian', 'Charlie Benante', 'Frank Bello', 'Joey Belladonna', 'Jonathan Donais'],
        'formacao': 1981,
        'genero': 'Thrash Metal'
    },
    'Testament': {
        'musicas': ['Over the Wall', 'Practice What You Preach', 'Souls of Black', 'The Legacy', 'More than Meets the Eye'],
        'integrantes': ['Chuck Billy', 'Eric Peterson', 'Alex Skolnick', 'Steve Di Giorgio', 'Gene Hoglan'],
        'formacao': 1983,
        'genero': 'Thrash Metal'
    }
};

console.log(bandasDetalhadas);


// Convertendo as chaves do objeto para um array
const bandasNomes = Object.keys(bandasDetalhadas);

for (var i = 0; i < bandasNomes.length; i++) {
    const banda = bandasNomes[i];
    const detalhes = bandasDetalhadas[banda];
    if (detalhes.formacao === 1981) {
        console.log(`Banda: ${banda}`);
        console.log(`Músicas: ${detalhes.musicas.join(', ')}`);
        console.log(`Integrantes: ${detalhes.integrantes.join(', ')}`);
        console.log(`Formação: ${detalhes.formacao}`);
        console.log(`Gênero: ${detalhes.genero}`);
        console.log('---');
    }
}


bandasNomes.forEach(banda => {
    const detalhes = bandasDetalhadas[banda];
    if (detalhes.formacao === 1981) {
        console.log(`Banda: ${banda}`);
        console.log(`Músicas: ${detalhes.musicas.join(', ')}`);
        console.log(`Integrantes: ${detalhes.integrantes.join(', ')}`);
        console.log(`Formação: ${detalhes.formacao}`);
        console.log(`Gênero: ${detalhes.genero}`);
        console.log('---');
    }
});