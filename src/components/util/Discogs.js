let accessToken = 'KQwObWgCUrcCfvnCNnNOozvzErTYdCmLEWLcyJoV';

const Discogs = {

  search(term){
    return fetch(`https://api.discogs.com/database/search?q=${term}&title`, {headers: {Authorization: `Discogs token=${accessToken}`}}
    ).then(response => response.json()
    ).then(responseJSON => {return responseJSON});
  }
}

export default Discogs;