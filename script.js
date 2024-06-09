let jokeBtn= document.getElementById('joke-button');
jokeBtn.addEventListener('click',getJoke);

async function getJoke(){
    const apiURL ='https://official-joke-api.appspot.com/jokes/random';

    try{
        let response = await fetch (apiURL);
        // console.log(response);
        if (response.ok){
            let jokeData = await response.json();
            // console.log(jokeData);
            displayJoke(jokeData);
        }

        else{
            alert('failed to fetch code try again later');
            throw new Error('api request fail');
        }

    }

    catch(error){
        console.error('error',error);

    }
}

function displayJoke(joke){
    let setup = document.getElementById('setup');
    setup.innerHTML=joke.setup;

    let punchline = document.getElementById('punchline');
    punchline.innerHTML=joke.punchline;

}