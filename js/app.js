let friends = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function adicionar ()
{
    let friend = document.getElementById('nome-amigo');
    let list = document.getElementById('lista-amigos');
    friends.push(friend.value);

    if (list.textContent == '')
    {
        list.textContent = friend.value;
    }
    else {
        list.textContent += ', ' + friend.value;
    }

    friend.value = null;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear ()
{
    if (friends[0] == null)
        alert('the friends list is empty');
    else
    {
        let sortList = document.getElementById('lista-sorteio');
        embaralha(friends);
        let aux;
        for (aux = 0; aux < friends.length - 1; aux++)
        {
            sortList.innerHTML += `${friends[aux]} -> ${friends[aux+1]} <br>`;
            console.log(aux);
        }
        sortList.innerHTML += `${friends[aux]} -> ${friends[0]}`;
    }   
    
}

function reiniciar ()
{
    let list = document.getElementById('lista-amigos');
    let sortList = document.getElementById('lista-sorteio');

    list.textContent = null;
    sortList.innerHTML = null;
    friends = null;
    console.log(friends);
}