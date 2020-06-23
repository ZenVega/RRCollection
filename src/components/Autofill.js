
let term = "o";
let array = ["word", "shit", "lol"];

const Autofill = (term, array) => {

  let suggestions = array.filter(
    string => 
     string.toLowerCase().indexOf(term.toLowerCase()) > -1);

     console.log(suggestions);
     return suggestions;
  
}

Autofill(term, array);

export default Autofill;