const link = 'https://lacapsule-deploymetovercel-back.vercel.app'
// const link = 'http://localhost:3000/'

console.log('Script loaded')

//Fonction qui affiche l'année en cours sur le front depuis l'information récupérée du lien /year
/*
Un objet au format:
{"year": 2024}
*/

fetch(`${link}/year`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year
    })

