$(".rotate").textrotator({
  animation: "flipUp",
  speed: 2000
});


$(function() {
    $('#fader img:not(:first)').hide();
    $('#fader img').css('position', 'absolute');
    $('#fader img').css('top', '0px');
    $('#fader img').css('left', '50%');
    $('#fader img').each(function() {
        var img = $(this);
        $('<img>').attr('src', $(this).attr('src')).load(function() {
            img.css('margin-left', -this.width / 2 + 'px');
        });
    });

    var pause = false;
    
    function fadeNext() {
        $('#fader img').first().fadeOut().appendTo($('#fader'));
        $('#fader img').first().fadeIn();
    }

    function fadePrev() {
        $('#fader img').first().fadeOut();
        $('#fader img').last().prependTo($('#fader')).fadeIn();
    }

    $('#fader, #next').click(function() {
        fadeNext();
    });

    $('#prev').click(function() {
        fadePrev();
    });

    $('#fader, .button').hover(function() {
        pause = true;
    },function() {
        pause = false;
    });

    function doRotate() {
        if(!pause) {
            fadeNext();
        }    
    }
    
    var rotate = setInterval(doRotate, 2000);
});