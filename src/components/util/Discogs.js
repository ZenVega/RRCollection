let accessToken = 'KQwObWgCUrcCfvnCNnNOozvzErTYdCmLEWLcyJoV';

const Discogs = {

  search(term, type){
    return fetch(`https://api.discogs.com/database/search?q=${term}&${type}`, {headers: {Authorization: `Discogs token=${accessToken}`}}
    ).then(response => response.json()
    ).then(responseJSON => {return responseJSON});
  }
}

export default Discogs;