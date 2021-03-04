$.ajax({
    url: 'https://api.publicapis.org/entries',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
