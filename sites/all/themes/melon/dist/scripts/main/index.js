!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("undefined"!=typeof exports?exports:e.dragscroll={})}(this,function(e){var t,o,i=window,a=document,n="mousemove",s="mouseup",r="mousedown",l="EventListener",c="add"+l,d="remove"+l,h=[],f=function(e,l){for(e=0;e<h.length;)l=h[e++],l=l.container||l,l[d](r,l.md,0),i[d](s,l.mu,0),i[d](n,l.mm,0);for(h=[].slice.call(a.getElementsByClassName("dragscroll")),e=0;e<h.length;)!function(e,l,d,h,f,p){(p=e.container||e)[c](r,p.md=function(t){e.hasAttribute("nochilddrag")&&a.elementFromPoint(t.pageX,t.pageY)!=p||(h=1,l=t.clientX,d=t.clientY,t.preventDefault())},0),i[c](s,p.mu=function(){h=0},0),i[c](n,p.mm=function(i){h&&((f=e.scroller||e).scrollLeft-=t=-l+(l=i.clientX),f.scrollTop-=o=-d+(d=i.clientY),e==a.body&&((f=a.documentElement).scrollLeft-=t,f.scrollTop-=o))},0)}(h[e++])};"complete"==a.readyState?f():i[c]("load",f,0),e.reset=f}),function(e,t){t.behaviors.horizon={attach:function(o,i){e(".pager--infinite-scroll .pager__item a").addClass("btn btn-default");var a=!i.currentUser,n=!1,s=e("#favourites-modal");e("a.flag").on("click tap press",function(o){e.ajax({url:t.settings.basePath+"views/ajax",type:"POST",dataType:"json",data:"view_name=favourites&view_display_id=block_counter",success:function(t){a&&!n&&s.modal();var o=t[1].data;e("#favourites-counter").replaceWith(o)},error:function(e){console.log("error occurred")}})}),e(document).bind("flagGlobalAfterLinkUpdate",function(t,o){var i=e("#node-"+o.contentId+" .favourite a"),a=i.find(".flag-description");i.hasClass("flagged")?(a.html(a.html().replace(/Add/g,"Saved")),i.find(".icon").addClass("fas text-highlight").removeClass("far")):(a.html(a.html().replace(/Saved/g,"Add")),i.find(".icon").addClass("far").removeClass("fas"))}),s.find(".no-thanks").on("click tap press",function(e){s.modal("hide")}),t.settings.facebookPopup&&!n&&s.modal(),s.on("hidden.bs.modal",function(){n=!0}),e(".mobile-search button").html('<i class="fas fa-search"></i>'),e(".mobile-search .form-text").attr("placeholder","Search")}},t.behaviors.horizon_forms={attach:function(t,o){var i=e("#mailing-list-signup-modal form");i.attr("id",i.attr("id")+"--modal"),i.find("input").each(function(t){e(this).attr("id",e(this).attr("id")+"--modal")}),i.find("label").each(function(t){e(this).attr("for",e(this).attr("for")+"--modal")});var a=e(".webform-client-form-32");e(".webform-component-checkboxes label",a);e(".form-type-bef-checkbox label",t).once("bef-checkbox-pretty-checkbox",function(){e(this).prepend("<span></span>")}),e(".webform-client-form-32 .webform-component-checkboxes .form-checkboxes",t).once("sign-up-pretty-checkbox",function(){e(this).children().each(function(){e(this).find("input").prependTo(e(this).find(".form-type-checkbox")),e(this).find("label").prepend("<span></span")})}),e(".webform-client-form .form-item [id]").each(function(){if(this.id.includes("edit-submitted")){var t=Math.random().toString(36).substr(2,5),o=this.id,i=o.replace("edit-submitted","el")+"-"+t;e('[id="'+this.id+'"]:gt(0)').attr("data-id",i)}}),e(".webform-client-form .form-item [data-id]").each(function(){e(this).attr("id",e(this).attr("data-id")),e(this).siblings("label").attr("for",e(this).attr("data-id"))});var n=e(".view-events .view-filters"),s=e(".calendar-date",n),r=e("#edit-field-event-date-value-value-date");s.on("click tap press",function(t){s.removeClass("selected"),e(this).addClass("selected"),r.val(e(this).attr("data-value")).change()}),s.each(function(t){e(this).removeClass("selected"),r.val()==e(this).attr("data-value")&&e(this).addClass("selected")}),e(".view-events .view-filters",t).once("event-filters",function(){var t=e(".form-checkboxes.bef-select-all-none.bef-processed, .form-checkboxes.bef-required-filter-processed",n);if(t.length){t.removeClass("form-control form-checkboxes");e(".bef-checkboxes label.option",t).each(function(t,o){var i=e(this).prev().val(),a=e(this).text().replace(/\s+/g,"-").toLowerCase();a=a.replace(",","").replace("&",""),e(this).addClass("label--"+i),e(this).addClass("label label--"+a)})}e(".views-exposed-widgets #edit-reset",n).removeClass("btn-primary"),e(".views-exposed-widgets #edit-reset",n).on("click tap press",function(e){})})}};var o={common:{init:function(){function t(){e("#notifications-banner").length>0&&(e("#notifications-banner").hasClass("fixed-bottom")?e("body").css("padding-bottom",e("#notifications-banner").outerHeight()):e("body").css("padding-top",e("#notifications-banner").outerHeight()))}function o(){e("body").css("padding-top",e("#header").outerHeight()+e("#alertSignUp").outerHeight()),e(".offcanvas-collapse").css("top",e("#alertSignUp").outerHeight()+e("#header").outerHeight()),e(window).width>767&&e("body.front .node-slide").css("height",e(window).height()-e("#alertSignUp").outerHeight()-e("#header").outerHeight())}t(),o(),e(window).resize(function(){t(),o()}),e(".form-type-radio, .form-type-checkbox").addClass("form-check"),e(".form-type-radio input, .form-type-checkbox input").addClass("form-check-input"),e(".form-type-radio label, .form-type-checkbox input").addClass("form-check-label"),e(".node-event-teaser, .node-artist-teaser").matchHeight({byRow:!1}),e(".view-search-api .node-teaser").matchHeight({byRow:!1}),e(document).ajaxSuccess(function(){e(".node-event-teaser, .node-artist-teaser").matchHeight({byRow:!1}),e(".view-search-api .node-teaser").matchHeight({byRow:!1})});var i=e("#navbar-toggler");e(".offcanvas-collapse").css("top",e("#alertSignUp").outerHeight()+e("#header").outerHeight()),e('[data-toggle="offcanvas"]').on("click tap press",function(t){e(".offcanvas-collapse").toggleClass("open"),i.toggleClass("collapsed"),e("body").toggleClass("modal-open"),e("#collapseSignUp").collapse("hide")}),e(".umbrella-list li:not(:first-child) a").addClass("btn btn-nav"),e('[data-toggle="tooltip"]').tooltip(),e(".pager--infinite-scroll .pager__item a").addClass("btn btn-info"),e(".teaser-card .image img:not(.replace-as-bg)").each(function(t,o){var i=e(this).attr("src");e(this).closest(".teaser-block").css({"background-image":'url("'+i+'")',"background-size":"cover"}),e(this).hide()}),e(".field-type-video-embed-field .embedded-video").addClass("embed-responsive embed-responsive-16by9").find("iframe").addClass("embed-responsive-item"),e(".teaser-card, .go-to-first-link").css("cursor","pointer").on("click tap press",function(t){if("I"===t.target.nodeName)return!1;var o=e(this).find("a:not(.flag)").attr("href");return t.preventDefault(),o.length>0&&(window.location=o),!1}),e("#homepage-sign-up-block").css("cursor","pointer").on("click tap press",function(t){e("#mailing-list-signup-modal").modal("show")}),e(".node .sidebar .details .icon").css("cursor","pointer").on("click tap press",function(t){t.preventDefault();var o=e(this).next("a").attr("href");return o.length>0&&(window.location=o),!1}),e('a[href*="#"]').not('[data-toggle="collapse"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=e(this.hash);o=o.length?o:e("[name="+this.hash.slice(1)+"]"),o.length&&(t.preventDefault(),e("html, body").animate({scrollTop:o.offset().top},1e3,function(){var t=e(o);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}})},finalize:function(){window.sr=ScrollReveal(),window.sr.reveal(".reveal")}},front:{init:function(){console.log("Welcome to Horizon Festival"),e("#block-views-events-block-2 .node-event-teaser, .node-artist-teaser").matchHeight({byRow:!0}),e("#block-views-events-block-2 .view-search-api .node-teaser").matchHeight({byRow:!1}),e("#alertSignUp").length>0&&(e("#alertSignUp").on("closed.bs.alert",function(){Cookies.set("horizon_show_signup","hide"),e("#header").css("top",0),e(".offcanvas-collapse").css("top",e("#alertSignUp").outerHeight()+e("#header").height()),e("body").css("padding-top",e("#header").outerHeight())}),e("#collapseSignUp").on("hidden.bs.collapse",function(){e("body").css("padding-top",e("#header").outerHeight()+e("#alertSignUp").outerHeight()),e("body.front .node-slide").css("height",e(window).height()-e("#alertSignUp").outerHeight()-e("#header").outerHeight()),e("#header").css("top",e("#alertSignUp").outerHeight())}).on("shown.bs.collapse",function(){e("body").css("padding-top",e("#header").outerHeight()+e("#alertSignUp").outerHeight()),e("body.front .node-slide").css("height",e(window).height()-e("#alertSignUp").outerHeight()-e("#header").outerHeight()),e("#header").css("top",e("#alertSignUp").outerHeight())}),void 0===Cookies.get("horizon_show_signup")&&Cookies.set("horizon_show_signup",!0),"hide"==Cookies.get("horizon_show_signup")?e("#alertSignUp").alert("close"):e("#alertSignUp").slideDown("fast",function(){e("#header").css("top",e("#alertSignUp").outerHeight())}))}},node_type_event:{init:function(){console.log("event!"),e(".carousel-video-modal").detach().appendTo("body"),e(".carousel-video-modal").on("hide.bs.modal",function(t){e(".carousel-video-modal iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),e(".field-name-field-hero-carousel").slick({centerMode:!0,infinite:!0,variableWidth:!0,lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:576,settings:{centerMode:!1,variableWidth:!1,slidesToShow:1,slidesToScroll:1}}]})}}},i={fire:function(e,t,i){var a,n=o;t=void 0===t?"init":t,a=""!==e,a=a&&n[e],(a=a&&"function"==typeof n[e][t])&&n[e][t](i)},loadEvents:function(){i.fire("common"),e.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(e,t){i.fire(t),i.fire(t,"finalize")}),i.fire("common","finalize")}};e(document).ready(i.loadEvents)}(jQuery,Drupal);
//# sourceMappingURL=main.js.map

(function($) {

  console.log("Welcome to the Archive of Horizon Festival 2020");

  $('body.node-type-event .field-name-field-hero-carousel').slick({
    centerMode: true, 
    infinite: true,
    variableWidth: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
      {
        breakpoint: 576,
        settings: {
          //arrows: false,
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#block-views-hero-block-3 .home-carousel').slick({
    centerMode: false,
    infinite: true,
    variableWidth: false,
  //  lazyLoad: 'ondemand',
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"
    
  });

})(jQuery); // Fully reference jQuery after this point.