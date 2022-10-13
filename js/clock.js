$(function(){
    
    setInterval(function(){
        let clock = moment().format('h:mm:ss');
        $('#clock').html(clock);
    },1000);

});