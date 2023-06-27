$(document).ready(function() {
  var iframe = $("#lessonVideo");
  var player = new Vimeo.Player(iframe);

  // Get cid from query
  var urlParams = new URLSearchParams(window.location.search);
  var cid = urlParams.get("cid");

  player.on("timeupdate", function(data) {
    var currentTime = data.seconds;
    var lastRequestTime = localStorage.getItem("lastRequestTime") || 0;

    if (currentTime - lastRequestTime > 10) {
      $.get(
        `https://crm.nexvel.education/5/api/add_field?cid=${cid}&key=video_duration&value=${currentTime}`,
        function(response) {
          // обработка ответа
          console.log(`Запрос отправлен ${currentTime}`)
        },
      );

      localStorage.setItem("lastRequestTime", currentTime);
    }
  });
});
