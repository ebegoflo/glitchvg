/*API MARVEL*/

const privatekey = '6dbfd3ff10999cc27fb6eb1515e8a9dfc028c57e',
      publickey = 'cd0774cd4df0fd681fb606595667496a',
      content = document.getElementById('content');

const getConnection = () => {
    const ts = Date.now(),
    hash = MD5(ts + privatekey + publickey),
      URL =   `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
/*hacemos la petición a marvel para que me devuelva el objeto tipo response y entro yay*/
/* json metodo del objeto response que me trae la data*/
  fetch(URL)
      .then(response => response.json())
      .then(response => {
          response.data.results.forEach(e => { /*recorro todos los elementos*/
              drawHero(e); /* y los proceso con esta funcion*/
          });
      });
};

/*crear elementos html para organizar informacion y poder darles estilos */

const drawHero = e => {
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`;
    const hero = `
    <div class= col s6 m6 s6>
      <h3>${e.name}</h3>
      <img src="${image}">
      <p>${e.description}</p>
    </div>
    `;
    content.insertAdjacentHTML('beforeEnd', hero);
};
/*yay*/

getConnection();
