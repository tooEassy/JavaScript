$(document).ready((function(){var e=$("#lessonVideo"),o=new Vimeo.Player(e),t=new URLSearchParams(window.location.search).get("cid");o.on("timeupdate",(function(e){var o=e.seconds,a=localStorage.getItem("lastRequestTime")||0;o-a>10&&($.get(`https://crm.nexvel.education/9/api/add_field?cid=${t}&key=video_duration&value=${o}`,(function(e){console.log(`Запрос отправлен ${o}`)})),localStorage.setItem("lastRequestTime",o))}))}));