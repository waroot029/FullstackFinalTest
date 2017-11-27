$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(req, res){

    var username = $('#username').val();
    var title = $('#title').val();
    var comment = $('#comment').val();
    var urlimg = $('#photo').val();
        moment.locale('th');
    var newpost = {
// POINT 8. Use jQuery to get form data and create an object for new post

        username : username,
        title : title,
        comment : comment,
        image_url : urlimg,
        create_date: moment().format('LLL')
    };
    console.log(newpost);

    var url = 'http://localhost:8080/api/posts';
    // POINT 9. Insert data to REST API with axios
    axios.post(url, newpost)
    .then(function (response) {
        window.location.href = 'http://localhost:8080/';
    })
    .catch(function (error) {
      console.log(error);
    });

}

function previewPhoto(src){
    $('#preview').attr('src', src);
}