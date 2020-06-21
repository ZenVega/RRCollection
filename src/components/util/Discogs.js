import SearchResults from "../SearchResults";

let accessToken;
const currentToken = "pfhxUdKkCqRawkjVbfAXkzKBDRJvRKnvmxZquXnY"
const consumerKey='PQYJQipgIMyRliujEVoK';
const consumerSecret='ygoVRGIVowNmHBqguJYlDqmEEEjTXpWd';
const urls={
    RequestToken: 'https://api.discogs.com/oauth/request_token',
    Authorize: 'https://www.discogs.com/oauth/authorize',
    AccessToken:	'https://api.discogs.com/oauth/access_token'
};

const Discogs = {

  getAccessToken(){
    if(accessToken){
      return;
    }
/* 
    fetch('https://api.discogs.com/oauth/request_token',{headers:{Content-Type: application/x-www-form-urlencoded
    Authorization:
            OAuth oauth_consumer_key="your_consumer_key",
            oauth_nonce="random_string_or_timestamp",
            oauth_signature="your_consumer_secret&",
            oauth_signature_method="PLAINTEXT",
            oauth_timestamp="current_timestamp",
            oauth_callback="your_callback"
    User-Agent: some_user_agent`}
  }) */
  },

  search(term){

  }
}

export default Discogs;