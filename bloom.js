//<!--
// Feel free to use the style sheets and scripts, but please don't copycat my layouts!
N = (document.all) ? 0 : 1;
var ob;
var over = false;

var header_height = 19;

// mouse functions
function MD(e) {
	if (over)
	{
		if (N) {
		ob = document.getElementById("panel");
		X=e.layerX;
		Y=e.layerY;
		return false;
		}
		else {
		ob = document.getElementById("panel");
		ob = ob.style;
		X=e.offsetX;
		Y=e.offsetY;
		}
	}
}

function MM(e) {
if (ob) {
if (N) {
ob.style.top = e.pageY-Y;
ob.style.left = e.pageX-X;
	}
	else {
	ob.pixelLeft = event.clientX-X + document.body.scrollLeft;
	ob.pixelTop = event.clientY-Y + document.body.scrollTop;
	return false;
	}
   }
}

function MU() {
	ob = null;
}

// create page header
function genHeader(){
document.write("<iframe src =\"page_header.html\" width=\"100%\" height="+(header_height+1)+" frameborder=\"0\">");
document.write("<p>Your browser does not support iframes.</p>");
document.write("</iframe>");
}

// iframe sizing
function setIframeHeight(iframeName) {
  //var iframeWin = window.frames[iframeName];
  var iframeEl = document.getElementById? document.getElementById(iframeName): document.all? document.all[iframeName]: null;
  if (iframeEl) {
  iframeEl.style.height = "auto"; // helps resize (for some) if new doc shorter than previous
  //var docHt = getDocHeight(iframeWin.document);
  // need to add to height to be sure it will all show
  var h = alertSize();
  var new_h = (h-header_height-1);
  iframeEl.style.height = new_h + "px";
  //alertSize();
  }
}

function alertSize() {
  var myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myHeight = document.body.clientHeight;
  }
  //window.alert( 'Height = ' + myHeight );
  return myHeight;
}



if (N) {
document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP );
}

document.onmousedown = MD;
document.onmousemove = MM;
document.onmouseup = MU;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new
  Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92513393-1', 'auto'); ga('send', 'pageview');


//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-20146582-1']);
//_gaq.push(['_trackPageview']);
//
//(function() {
//  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})();

//$(document).ready(function(){
// $(".tabs li").click(function() {
//  $(this).parent().parent().find(".tab-content").hide();
//  var selected_tab = $(this).find("a").attr("href");
//  $(selected_tab).fadeIn();
//  $(this).parent().find("li").removeClass('current');
//  $(this).addClass("current");
//   return false;
//    });
//});

// -->
