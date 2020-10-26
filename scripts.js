
// wait for dom load
$(function(){


    // variables
    const $browseContainer = $('#browse-container');
    const $browseButton = $('#browse-button');

    // load game data
    const games = getGames();
    loadBrowseResults(games);

    // listener for showing browse games section
    $browseButton.on('click', ()=>{

        displayBrowseResults(games);

    });

    // shows/hides the grid, will be changed to an option on nav bar later
    function displayBrowseResults(){

        if($browseContainer.is(':hidden')){

            $browseContainer.show();
        }
        else
            $browseContainer.hide();
    }

    // creates grid for games, 3 wide, however many deep
    function loadBrowseResults(gameArr){

        for( let i=0; i < gameArr.length; i++){

            $newGame = $('<div class="game"></div>')
            $title = $(`<p>${gameArr[i].title}</p>`);
            $company = $(`<p>${gameArr[i].company}</p>`);
            $genre = $(`<p>${gameArr[i].genre}</p>`);
            $rating = $(`<p>${gameArr[i].rating}</p>`);
            $image = $(`<img src="${gameArr[i].image}">`);
    
            $newGame.append($title,$company,$genre,$rating, $image);

            if(i%3 ==0){

                $row = $('<div class="row"></div>')
                $browseContainer.append($row);
            }
            else{

                $row = $('.row').last()
            }

            $row.append($newGame)
        }
    }
});


// temporary data loader for testing styles/data on page
// this will become a class method later
function getGames(){

    games = []

    for(let x=0; x<9; x++){

        newGame = new Game({

            title: "Resident Evil 2",
            company: "Capcom",
            genre: "Survival Horror",
            rating: "M",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/220px-Resident_Evil_2_Remake.jpg"
        })
        games.push(newGame)
    }

    return games;
}