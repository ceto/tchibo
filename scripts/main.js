"use strict";console.log("'Allo 'Allo!"),$(document).foundation(),$(document).ready(function(){function t(){$(".stations a").on("click",function(t){t.preventDefault()}),$('.question__block[data-qid="1"]').addClass("active"),$('.stations a[data-qid="1"]').addClass("active"),$('.answer input[type="radio"]').on("change",function(){var t=$(this).parents(".question__block").data("qid"),a=($(this).attr("value"),this);3!=t?setTimeout(function(){$('.question__block[data-qid="'+(t+1)+'"]').addClass("active"),$('.stations a[data-qid="'+(t+1)+'"]').addClass("active"),$(a).parents(".question__block").removeClass("active"),$('.stations a[data-qid="'+t+'"]').removeClass("active")},400):($(a).parents(".question__block").removeClass("active"),$('.stations a[data-qid="'+t+'"]').removeClass("active"),$("#thequiz").removeClass("jollathato"),setTimeout(function(){$("#thequiz").addClass("jollathato"),$("#thequiz").load("alma.html #result",function(){$(".pagehead").foundation("scrollToLoc","#thequiz")})},400))})}$(".menutoggle").click(function(t){$(".itemstohide").toggleClass("show")}),$(".headmain__videowrap").fitVids(),$(".movietile__thumb").click(function(t){t.preventDefault(),$(".headmain__videowrap iframe").attr("src",$(this).attr("href")),$(".headmain__movie__title").text($(this).parents(".movietile").find(".movietile__title").text()),$(".headmain__movie__lead").text($(this).parents(".movietile").find(".movietile__lead").text()),$(".headmain__movie__share a").attr("href",$(this).parents(".movietile").find(".movietile__share a").attr("href")),history.pushState(null,null,$(this).data("slug")),$(".pagehead").foundation("scrollToLoc","#headmain")}),$("#thequiz__start").click(function(a){a.preventDefault(),$("#thequiz").removeClass("jollathato"),setTimeout(function(){$("#thequiz").load($("#thequiz__start").attr("href")+" #quiz",function(){$("#thequiz").addClass("jollathato"),$(".pagehead").foundation("scrollToLoc","#thequiz"),t()})},200)})});