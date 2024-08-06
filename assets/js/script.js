document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("videoPopup");
    var videoFrame = document.getElementById("videoFrame");

    $('.has-popup-video').click(function(){    
        
        var ytVideo = $(this).data('value');

        popup.style.display = "flex";
        videoFrame.src = 'https://www.youtube.com/embed/'+ ytVideo;
    })

    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
        popup.style.display = "none";
        videoFrame.src = ""; // Stop the video when closing the popup
    }

});
