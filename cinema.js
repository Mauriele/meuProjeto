// const textoBoasVindas = "Sejam bem vindos ao cinema da DH!";

// module.exports = textoBoasVindas;
const filmes = require('./database/catalogo.json')


function adicionarFilme(filme) { // ouvinte adicionar filme
    filmes.push(filme)
}


function buscarFilme(codigo) {
    return filmes.find((filme) => {
        return filme.codigo === codigo // true || false
    })
}
const listarTodosOsFilmes = () => {
    filmes.forEach((filme) => {
        
        console.log(`
        Filme: ${filme.titulo}
        Lançou no ano: ${filme.anoLancamento}
        ${filme.emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'}
     `)

    })
}
listarTodosOsFilmes();

const listarFilmesEmCartaz = () => {
    for(let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];

        if(filme.emCartaz) {
            console.log(`
            Filme: ${filme.titulo}
            Lançou no ano: ${filme.anoLancamento}
            ${filme.emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'}
            `)
        }
    }
}

const alterarStatusEmCartaz = (codigo, callback) => {
    const filmeEncontrado = callback(codigo);
        
    
    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
    console.log(filmeEncontrado);
}

adicionarFilme({
    codigo: 3,
    titulo: 'Homem Aranha 3',
    duracao: 3.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});


// const filmeEncontrado = buscarFilme(2);

// filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
// console.log('Filme encontrado:', filmeEncontrado);
alterarStatusEmCartaz(2, buscarFilme);



const  listarFilmesDeLongaDuracao = () => {
     return filmes.filter((filme) => {
     return filme.duracao >= 2;
})  
}
const filmesFiltradosDuracaoLonga = listarFilmesDeLongaDuracao();
console.log(filmesFiltradosDuracaoLonga);










