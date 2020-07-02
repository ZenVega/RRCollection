
let term = "ceremony+zoo+cover"
const apiKey = 'AIzaSyBbq5ebwcFrug6PCf5jBp_6IhXa09KsALM'

/* key=API_KEY */

const Covers = {

  search(term){
    return fetch(`https://www.google.com/search?q=${term}&tbm=isch&key=${apiKey}`, {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}}
    ).then(response => response.json()
    ).then(responseJSON => console.log(responseJSON));
  }
}

export default Covers;