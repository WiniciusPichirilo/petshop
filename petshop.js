//const pets = require('moment')
//Importação de modulos fora do arquivo

//const pets = require('.pets.json/moment')

//Importação de modulos de dentro do arquivo

//const pets = require('moment') //Importação de modulos fora do arquivo
const pets = require('./database/pets.json') //Importação de modulos de dentro do arquivo

// console.log(pets);

function listarPets() {
  for (let i = 0; i < pets.length; i++) {
    console.log('------------------')
    console.log('PET: ' + pets[i].id)
    console.log('NOME: ' + pets[i].nome)
    console.log('Espécie: ' + pets[i].especie)
    console.log('RAÇA: ' + pets[i].raca)
    console.log('Idade: ' + pets[i].idade)
    console.log('Gênero: ' + pets[i].genero)
    console.log('Serviços: ' + pets[i].servicos.join(' - '))
    console.log('É vacinado?: ' + pets[i].vacinado ? 'Sim' : 'Não')
    console.log()
  }
}

listarPets()
