$(document).ready((function(){new LazyLoad({elements_selector:".reviews__content",unobserve_entered:!0,callback_enter:function(i){$(".reviews__slider").css({display:"block"}),new Swiper(".reviews__slider",{slidesPerView:1,spaceBetween:35,loop:!0,loopedSlides:5,loopAdditionalSlides:5,initialSlide:3,speed:800,pagination:{el:".reviews__pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{},768:{},1024:{},1200:{spaceBetween:35,slidesPerView:1}},on:{slideChange:function(i){e=i.activeIndex,s.slideTo(e)}}})}});var e,i=$(".js-m-cases-item");mask('input[type="tel"]'),i.each((function(){var e=$(this),i=e.find("iframe")[0];new Vimeo.Player(i).getDuration().then((function(i){var s=Math.ceil(i/60);e.find(".js-m-cases-duration").text(s+"хв")}))})),$(".js-m-cases-slider")[0]&&new Swiper(".js-m-cases-slider",{slidesPerView:3,spaceBetween:50,observer:!0,observeParents:!0,loop:!1,speed:300,navigation:{nextEl:".js-m-cases-arrow-next",prevEl:".js-m-cases-arrow-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2,spaceBetween:50},1200:{slidesPerView:3}}});var s=new Swiper(".reviews__users",{slidesPerView:1,spaceBetween:35,loop:!0,loopedSlides:5,loopAdditionalSlides:5,speed:800,effect:"fade",fadeEffect:{crossFade:!0},initialSlide:3});$(".js-cases-play-btn").on("click",(function(){$(".js-m-cases-item").find(".js-m-cases-video").removeClass("active"),$(this).closest(".js-m-cases-item").find(".js-m-cases-video").addClass("active");var e=$(this).closest(".js-m-cases-item"),i=e.find("iframe")[0],s=new Vimeo.Player(i);$(".js-m-cases-item").not(e).each((function(){var e=$(this).find("iframe")[0],i=new Vimeo.Player(e);i.setCurrentTime(0),i.pause()})),s.play()})),$("input").each((function(){$(this).change((function(){var e=$(this).val(),i=$(this).attr("data-target");e?$("#"+i).css("display","none"):$("#"+i).css("display","block")}))}));$(window).width();$(".js-standart-phone-button").click((function(){$("#tarifs-first-popup").css({opacity:"1",visibility:"visible"}),$("#tarifs__popup-bg").css({opacity:"1",visibility:"visible"})})),$(".js-standart-button").click((function(){$(".js-tarifs-phone").css({display:"block"});var e=$(this).data("id");$("#tariff_id").val(e),$("#tarifs-first-popup").css({opacity:"1",visibility:"visible"}),$("#tarifs__popup-bg").css({opacity:"1",visibility:"visible"}),$(".js-error-name").hide(),$(".js-error-phone").hide(),$(".js-error-email").hide()})),$("#tarifs__popup-bg").click((function(){$("#tarifs-first-popup").css({opacity:"0",visibility:"hidden"}),$("#tarifs__popup-bg").css({opacity:"0",visibility:"hidden"}),$("#tarifs-second-popup").css({opacity:"0",visibility:"hidden"})})),$("#popup-close-button").click((function(){$("#tarifs-first-popup").css({opacity:"0",visibility:"hidden"}),$("#tarifs__popup-bg").css({opacity:"0",visibility:"hidden"})})),$("#popup-close-button2").click((function(){$("#tarifs-second-popup").css({opacity:"0",visibility:"hidden"}),$("#tarifs__popup-bg").css({opacity:"0",visibility:"hidden"})})),$(".js-book-btn").click((function(){$(".js-bookPlace-popup").show(),$(".js-bookPlace-popup-bg").show()})),$(".js-bookPlace-popup-bg").click((()=>{$(".js-bookPlace-popup").hide(),$(".js-bookPlace-popup-bg").hide()}))})),$(document).ready((function(){$(".js-order-form").on("submit",(function(e){e.preventDefault(),$(".js-error-name").hide(),$(".js-error-phone").hide(),$(".js-error-email").hide();var i=$(this),s=(i.data("reg"),i.find('input[name="name"]')),t=i.find('input[name="phone"]'),o=i.find('input[name="email"]'),a=!1;s.val().length<2&&(a=!0,$(".js-error-name").css("display","block")),t.val().length<10&&(a=!0,$(".js-error-phone").css("display","block")),o.val().length<7&&(a=!0,$(".js-error-email").css("display","block")),a||$.post("https://pay.voloshyn.site/1/api/add_client?get_pay_form=1&prefix_pid=1",i.serializeArray(),(function(e){if("error"==e.status&&$.each(e.error,(function(e,i){"name"==e&&$(".js-error-name").css("display","block"),"phone"==e&&$(".js-error-phone").css("display","block"),"email"==e&&$(".js-error-email").css("display","block")})),"ok"==e.status){e.pay_link;$(".js-modal-form").hide(),$(".js-after-order-1").show(),$(".js-after-order-1 .modal__error-descr").html(e.pay_form),$(".modal__error-title").hide()}}),"json")}))}));