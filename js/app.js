let friends = [];

//returns a random integer number 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function adicionar ()
{
    let friend = document.getElementById('nome-amigo');
    let list = document.getElementById('lista-amigos');

    //add the friend to the list of friends
    friends.push(friend.value);

    //if is empty, else...
    if (list.textContent == '')
    {
        list.textContent = friend.value;
    }
    else {
        list.textContent += ', ' + friend.value;
    }

    friend.value = null;

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < friends.length; i++) {
        //create a paragraph element for each friend
        let paragrafo = document.createElement('p');
        paragrafo.textContent = friends[i];
       
        //add a click event to remove the friend clicked
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        //add the paragraph to the list
        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(index) {
    friends.splice(index, 1);
    atualizarLista();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        //attribution by destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear ()
{
    if (friends[0] == null)
        alert('the friends list is empty!!!');
    else
    {
        //sort and increment the friends that picked each other

        let sortList = document.getElementById('lista-sorteio');
        sortList.innerHTML = '';
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
    //reset all the elements
    let list = document.getElementById('lista-amigos');
    let sortList = document.getElementById('lista-sorteio');

    list.textContent = null;
    sortList.innerHTML = null;
    friends = null;
    console.log(friends);
}