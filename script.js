$("img").each( function( ) {
    var src = $(this).attr("src");
    if( /\.gif$/i.test(src)) {
        $(this).attr( "src", src.replace( /\.gif$/, ".gif?rnd=" + Math.floor(Math.random() * 100) + 1));
    }
});