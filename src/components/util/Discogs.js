let accessToken = 'KQwObWgCUrcCfvnCNnNOozvzErTYdCmLEWLcyJoV';
const type = 'release_titles';

const Discogs = {


  search(term){
    return fetch(`https://api.discogs.com/database/search?q=${term}&${type}`, {headers: {Authorization: `Discogs token=${accessToken}`}}
    ).then(response => response.json()
    ).then(responseJSON => {return responseJSON});
  }
}

export default Discogs;