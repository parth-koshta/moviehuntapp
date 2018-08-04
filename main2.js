// tt0978718 no poster
// tt1285016 with poster
// apikey=5b101d64


$(document).ready(() => {
	$('input').keypress(function (e) {
	 var key = e.which;
	 if(key == 13)  // the enter key code
	  {
	    $('#submit-button-id').click();
	    return false;  
	  }
	});   


	$('#submit-button-id').click(() => {
		// location.reload();
		// $('.movie-cards-head').html('');

		getAllData();

		
	})
})


let getAllData = () => {
	// $('#submit-button-id').click(() => {
	// 	location.reload();
	// }


	let movieId = $('#movie-id-id').val();
	let movieName = $('#movie-title-id').val();
	let movieYear = $('#movie-year-id').val();
	// $('.movie-cards-head').html('');

	console.log("requesting");

	console.log(movieId)
	console.log(movieName)
	console.log(movieYear)
	console.log(`https://www.omdbapi.com/?s=${movieName}&y=${movieYear}&i=${movieId}&apikey=5b101d64`);

	$.ajax({
		type: 'GET',
		dataType: 'json',
		async: true,
		url : `https://www.omdbapi.com/?s=${movieName}&y=${movieYear}&i=${movieId}&apikey=5b101d64`,

		success: (data) => {
			$('.movie-cards-wrapper').html('');


			$('html, body').animate({
		        scrollTop: $(".movie-cards-head").offset().top
		    }, 1000);


			console.log("requesting")
			console.log(data)
			// $('.movie-cards-head').html('');


			if((movieId !== '' || movieId !== null) && (movieName === '' || movieName === null)) {
				if(data.Response === 'False') {
					alert("something is wrong")
				} else {
					if(data.Poster === "N/A"){
					let tempCard = `<div class="card movie-info-card" style="width: 18rem;">
			                      <img class="card-img-top movie-card-img" src='images/dummy2.png' alt="Card image cap">
			                      <div class="card-body">
			                        <h4 class="card-title">${data.Title}</h4>
			                        <p class="card-text">Year: ${data.Year}</p>
			                        <p class="card-text">Type: ${data.Type}</p>
			                        <p class="card-text">imdbID: ${data.imdbID}</p>
			                        <p class="card-text">imdbRating: ${data.imdbRating}</p>
			                      </div>
			                    </div>`

			    $('.movie-cards-wrapper').append(tempCard)
				
			} else {
				let tempCard = `<div class="card movie-info-card" style="width: 18rem;">
			                      <img class="card-img-top movie-card-img" src='${data.Poster}' alt="Card image cap">
			                      <div class="card-body">
			                        <h4 class="card-title">${data.Title}</h4>
			                        <p class="card-text">Year: ${data.Year}</p>
			                        <p class="card-text">Type: ${data.Type}</p>
			                        <p class="card-text">imdbID: ${data.imdbID}</p>
			                        <p class="card-text">imdbRating: ${data.imdbRating}</p>
			                      </div>
			                    </div>`

			    $('.movie-cards-wrapper').append(tempCard)
			}
				}

				
			} else {
				let searchData = data.Search;

				if(data.Response === 'False') {
					alert("something is wrong")
				} else {
					for(movie of searchData) {
						if(movie.Poster === "N/A"){
					let tempCard = `<div class="card movie-info-card" style="width: 18rem;">
			                      <img class="card-img-top movie-card-img" src='images/dummy2.png' alt="Card image cap">
			                      <div class="card-body">
			                        <h4 class="card-title">${movie.Title}</h4>
			                        <p class="card-text">Year: ${movie.Year}</p>
			                        <p class="card-text">Type: ${movie.Type}</p>
			                        <p class="card-text">imdbID: ${movie.imdbID}</p>
			                      </div>
			                    </div>`

			    $('.movie-cards-wrapper').append(tempCard)
				
			} else {
				let tempCard = `<div class="card movie-info-card" style="width: 18rem;">
			                      <img class="card-img-top movie-card-img" src='${movie.Poster}' alt="Card image cap">
			                      <div class="card-body">
			                        <h4 class="card-title">${movie.Title}</h4>
			                        <p class="card-text">Year: ${movie.Year}</p>
			                        <p class="card-text">Type: ${movie.Type}</p>
			                        <p class="card-text">imdbID: ${movie.imdbID}</p>
			                      </div>
			                    </div>`

			    $('.movie-cards-wrapper').append(tempCard)
			}
					}
				}

		}
			}
	})
}