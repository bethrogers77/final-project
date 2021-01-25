// A catfact is
// {
//    catfact: String,
//    votes: Number (defaults to 0)
// }

const catfactsCollection = firebase.database().ref('catfacts');

$('#catfact-form').on('submit', function (event) {
    event.preventDefault();

    const catfactText = $('#catfact').val();
    console.log(catfactText)
    if (catfactText.trim() !== '') {
        //add catfact to database
        catfactsCollection.push({
            catfact: catfactText.trim(),
            votes: 0,
        });


        //clear text
        $('#catfact').val('');


    }
});

catfactsCollection.on('value', function (results) {
    results.forEach(function (result) {
        console.log(result);
    });

})







// const catfactCollection = firebase.database().ref('catfact');

// // Create
// $('#catfact-form').on('submit', function (event) {
//   event.preventDefault();

//   const catfactText = $('#catfact').val();

//   if (catfactText.trim() !== '') {
//     // Add cat fact to Database
//     catfactCollection.push({
//       catfact: catfactText.trim(),
//       votes: 0,
//     });

//     // Clear Text
//     $('#catfact').val('');
//   }
// });

// // Read
// catfactCollection.on('value', function (results) {
//   const $catfactBoard = $('.catfact-board');
//   $catfactBoard.empty();

//   const list = [];
//   results.forEach(function (result) {
//     const { catfcat, votes } = result.val();
//     const key = result.key;

//     list.push({
//       catfact: catfact,
//       votes: votes,
//       key: key
//     });
//   });

//   list.sort(function (a, b) {
//     return b.votes - a.votes;
//   });

//   list.forEach(function (result) {
//     const { key, catfact, votes } = result;
//     // const catfact = result.val().catfact;
//     // const votes = result.val().votes;
//     // const key = result.key;
//     const $li = $('<li>').attr('data-catfact-id', key).text(catfact);
//     const $right = $('<div>').addClass('right').text('Votes: ' + votes);
//     const $upvote = $('<a>').attr('href', '#').addClass('upvote').text('+');
//     const $downvote = $('<a>').attr('href', '#').addClass('downvote').text('-');
//     const $remove = $('<a>').attr('href', '#').addClass('remove').text('remove');

//     $right.prepend($downvote);
//     $right.append($upvote);
//     $right.append($remove);
//     $li.append($right);
//     $catfactBoard.append($li);
//   })
// })

// // Update
// $('.catfact-board').on('click', 'a.upvote', function(event) {
//   event.preventDefault();

//   const key = $(event.target).closest('li').attr('data-catfact-id');
//   const catfactVotes = catfactCollection.child(key).child('votes');

//   catfactVotes.transaction(function (votes) {
//     return votes + 1;
//   });
// })

// $('.catfact-board').on('click', 'a.downvote', function(event) {
//   event.preventDefault();

//   const key = $(event.target).closest('li').attr('data-catfact-id');
//   const catfactVotes = catfactCollection.child(key).child('votes');

//   catfactVotes.transaction(function (votes) {
//     if (votes === 0) {
//       return votes;
//     }

//     return votes - 1;
//   });
// })

// // Delete
// $('.catfact-board').on('click', 'a.remove', function(event) {
//   event.preventDefault();

//   const key = $(event.target).closest('li').attr('data-catfact-id');
//   const catfactObj = catfactCollection.child(key);

//   catfactObj.remove();
// });
