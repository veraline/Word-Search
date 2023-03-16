// searchinput
// searchbtn
const Dictionary =  (word)=> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14e95bcdf7mshf35d105e0dbb311p1b21b0jsna5fe4ca4a911',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            wordheading.innerHTML = response.word;
            definition.innerHTML = response.definition;

        })
            
        .catch(err => console.error(err));
}
searchbtn.addEventListener("click", (e)=> {
e.preventDefault()
Dictionary(searchinput.value)
});