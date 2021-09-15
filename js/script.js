//Answer To The Question Number:1 start
$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});
//Answer To The Question Number:2 start
$(document).ready(function () {
  $("button").click(function () {
    $("#demo2").hide();
  });
});
//Answer To The Question Number:3 start
$(document).ready(function () {
  $("#demo333").click(function () {
    $("#demo3").hide();
  });
});
//Answer To The Question Number:4 start
$(document).ready(function () {
  $("#demoo4").click(function () {
    $("*").hide();
  });
});
//Answer To The Question Number:5 start
$(document).ready(function () {
  $("#demoo5").click(function () {
    $(this).hide();
  });
});
//Answer To The Question Number:6 start
$(document).ready(function () {
  $("button").click(function () {
    $("p.intro").hide();
  });
});
//Answer To The Question Number:7 start
$(document).ready(function () {
  $("#demoo7").click(function () {
    $("#demo7:first").hide();
  });
});
//Answer To The Question Number:8 start
$(document).ready(function () {
  $("#demoo8").click(function () {
    $("ul li:first").hide();
  });
});
//Answer To The Question Number:9 start
$(document).ready(function () {
  $("#demoo9").click(function () {
    $("[href]").hide();
  });
});
//Answer To The Question Number:10 start
$(document).ready(function () {
  $("#demoo10").click(function () {
    $("a[target='_blank']").hide();
  });
});
//Answer To The Question Number:11 start
$(document).ready(function () {
  $("#demoo11").click(function () {
    $("a[target!='_blank11']").hide();
  });
});
//Answer To The Question Number:12 start
$(document).ready(function () {
  $("tr:even").css("background-color", "yellow");
});
//Answer To The Question Number:13 start
$(document).ready(function () {
  $("#demo7").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
  });
});
//Answer To The Question Number:14 start
$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide();
  });
  $("#show").click(function () {
    $("#demo13").show();
  });
});
//Answer To The Question Number:15 start
$(document).ready(function () {
  $("#demoo15").click(function () {
    $("#demo15").hide(1000);
  });
});
//Answer To The Question Number:16 start
$(document).ready(function () {
  $("#demoo16").click(function () {
    $("#demo16").toggle();
  });
});
//Answer To The Question Number:17 start
$(document).ready(function () {
  $("#demoo18").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
//Answer To The Question Number:18 start
$(document).ready(function () {
  $("#demoo188").click(function () {
    $("#divv1").fadeOut();
    $("#divv2").fadeOut("slow");
    $("#divv3").fadeOut(3000);
  });
});
//Answer To The Question Number:19 start
$(document).ready(function () {
  $("#demoo19").click(function () {
    $("#div19").fadeToggle();
    $("#div299").fadeToggle("slow");
    $("#div399").fadeToggle(3000);
  });
});
//Answer To The Question Number:20 start
$(document).ready(function () {
  $("#demoo20").click(function () {
    $("#div20").fadeTo("slow", 0.15);
    $("#div200").fadeTo("slow", 0.4);
    $("#div300").fadeTo("slow", 0.7);
  });
});
//Answer To The Question Number:21 start
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });
});
//Answer To The Question Number:22 start
$(document).ready(function () {
  $("#flip1").click(function () {
    $("#panel1").slideUp("slow");
  });
});
//Answer To The Question Number:23 start
$(document).ready(function () {
  $("#flip2").click(function () {
    $("#panel2").slideToggle("slow");
  });
});
//Answer To The Question Number:24 start
$(document).ready(function () {
  $("#demoo24").click(function () {
    $("div").animate({ left: "250px" });
  });
});
//Answer To The Question Number:25 start
$(document).ready(function () {
  $("#demoo25").click(function () {
    $("divv").animate({
      left: "250px",
      height: "+=150px",
      width: "+=150px",
    });
  });
});
//Answer To The Question Number:26 start
$(document).ready(function () {
  $("#demoo26").click(function () {
    $("div26").animate({
      height: "toggle",
    });
  });
});
//Answer To The Question Number:27 start
$(document).ready(function () {
  $("#demoo27").click(function () {
    var div = $("div27");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.8" }, "slow");
  });
});
//Answer To The Question Number:28 start
$(document).ready(function () {
  $("#flip28").click(function () {
    $("#panel28").slideDown(5000);
  });
  $("#stop").click(function () {
    $("#panel28").stop();
  });
});
//Answer To The Question Number:29 start
$(document).ready(function () {
  $("#demoo29").click(function () {
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});
//Answer To The Question Number:30 start
$(document).ready(function () {
  $("#demoo30").click(function () {
    alert("Value: " + $("#test").val());
  });
});
//Answer To The Question Number:31 start
$(document).ready(function () {
  $("#demoo31").click(function () {
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });
});
//Answer To The Question Number:32 start
function afterText() {
  var txt1 = "<b>I </b>"; // Create element with HTML
  var txt2 = $("<i></i>").text("love "); // Create with jQuery
  var txt3 = document.createElement("b"); // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3); // Insert new elements after img
}
//Answer To The Question Number:33 start
$(document).ready(function () {
  $("#demoo3333").click(function () {
    $("p").remove(".test, .demo");
  });
});
//Answer To The Question Number:34 start
$(document).ready(function () {
  $("#demoo34").click(function () {
    $("h5, h6").toggleClass("blue");
  });
});
//Answer To The Question Number:35 start
$(document).ready(function () {
  $("demoo35").click(function () {
    $("#demo35").css({ "background-color": "yellow", "font-size": "200%" });
  });
});
//Answer To The Question Number:36 start
$(document).ready(function () {
  $(".descendants").find("*").css({ color: "red", border: "2px solid red" });
});

//Answer To The Question Number:37 start
$(document).ready(function () {
  $("#demoo37").click(function () {
    $("#div37").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success")
        alert("External content loaded successfully!");
      if (statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});
//Answer To The Question Number:38 start
$.noConflict();
jQuery(document).ready(function () {
  jQuery("#demoo38").click(function () {
    jQuery("#demo38").text("jQuery is still working!");
  });
});
//Answer To The Question Number:39 start
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Answer To The Question Number:40 start
$(document).ready(function () {
  $("#demoo400").click(function () {
    $("#demo40000").hide("slow", function () {
      alert("The paragraph is now hidden");
    });
  });
});
