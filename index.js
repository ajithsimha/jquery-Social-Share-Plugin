$(document).ready(function(){
    $("#share").click( function(){
        
		$('.circle').css('display','block');
        
		$('.fb').animate({
            'margin-top': '10px',
            'margin-left': '10px'
        }, "slow");
        $('.tw').animate({
            'margin-top': '50px',
            'margin-left': '40px'
        }, "slow");
        $('.gp').animate({
            'margin-top': '95px',
            'margin-left': '40px'
        }, "slow");
        $('.li').animate({
            'margin-top': '135px',
            'margin-left': '10px'
        }, "slow");
    });
    
    $('.fb').mouseover(function(){
        $(this).animate({
            'width':'40px',
            'height':'40px'
        });
    });
    $('.fb').mouseout(function(){
        $(this).animate({
            'width':'30px',
            'height':'30px'
        });
    });
    
    $('.tw').mouseover(function(){
        $(this).animate({
            'width':'40px',
            'height':'40px'
        });
    });
    $('.tw').mouseout(function(){
        $(this).animate({
            'width':'30px',
            'height':'30px'
        });
    });
    
    $('.gp').mouseover(function(){
        $(this).animate({
            'width':'40px',
            'height':'40px'
        });
    });
    $('.gp').mouseout(function(){
        $(this).animate({
            'width':'30px',
            'height':'30px'
        });
    });
    
    $('.li').mouseover(function(){
        $(this).animate({
            'width':'40px',
            'height':'40px'
        });
    });
    $('.li').mouseout(function(){
        $(this).animate({
            'width':'30px',
            'height':'30px'
        });
    });
    
});