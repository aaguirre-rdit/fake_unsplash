import $ from 'jquery';


function getPics(callback){
    const url = 'https://picsum.photos/list';
    $.ajax
    ({
        type: "GET",
        url: url,
        success: function(data)
        {
            callback(data);
        },
        error: function(error){
            console.error('request failed')
        }
    });
}

export default getPics;
