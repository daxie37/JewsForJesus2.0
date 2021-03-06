
/* color featured menu item buttons */
$( ".menu-item-912 a" ).css({"min-width":"12ex", "color": "#4080C0"}).prepend("<span class='lnr lnr-bubble live-chat-button-icon'></span>");
$( ".menu-item-903 a" ).css({"color": "#4080C0"});
$( ".menu-item-944 a" ).css({"background": "#63D6D9", "color": "#333333"});
$( ".menu-item-25422 a" ).addClass("header-dropdown-header-button");
$( ".menu-item-25124 a" ).addClass("header-dropdown-header-button");
$( ".menu-item-25423 a" ).addClass("header-dropdown-header-button");
$( ".bottom-nav .menu-item-24951 a" ).css({"color": "#FDCF56"});

/* move search bar to header */
$( "#et-secondary-nav" ).append( $( "<li class='menu-item menu-item-type-post_type menu-item-object-page jfj-search-form'></li>" ) );
$( "#et-secondary-nav li.jfj-search-form").append( $("form.et-search-form") );

/* add magnifier icon for searches */
$( "form.et-search-form" ).after( "<span class='lnr lnr-magnifier'></span>" );
$( "form .sf-input-text" ).after( "<span class='lnr lnr-magnifier'></span>" );

/* add footer */
$( "#footer-bottom .container" ).prepend("" +
    "<div class='white-text'></div><br>" +
    "<div class='row white-text'>" +
    "<div class='col-sm-6 col-md-3'>" +
    "<a href='http://dev01.jewsforjesus.org/'>" +
    "<div class='footer-logo-image'></div>" +
    "</a>" +
    "</div>" +
    "<div class='col-sm-6 col-md-4 col-md-offset-1 footer-logo-helper' style='border-left: 1px solid #AAAAAA;'><br>" +
    "<p> <b> Jews for Jesus </b>" +
    "<br> 60 Haight Street, San Francisco, CA 94102 </p>" +
    "<p> <a href='http://www.google.com/'>Contact</a>" +
    "<br> Phone: 415-864-2600" +
    "<br>Email: <a href='mailto:jfj@jewsforjesus.org' target='_blank' title='jfj@jewsforjesus.org'>jfj@jewsforjesus.org</a> </p> </div>" +
    "<div class='col-sm-12 col-md-4 social'><br>" +
    "<p align='center'>" +
    "<a href='http://www.youtube.com/c/jewsforjesus '> <img class='social-button-youtube'> </a>" +
    "<a href='https://twitter.com/JewsforJesus'> <img class='social-button-twitter'> </a>" +
    "<a href='https://plus.google.com/+jewsforjesus'> <img class='social-button-google'> </a>" +
    "<a href='https://www.facebook.com/jewsforjesus'> <img class='social-button-facebook'> </a>" +
    "</p><div class='clearfix'></div></div></div></div></div></div><div class='clearfix'></div><br><hr>");

/* make footer menu items responsive */
$( "#menu-footer-menu li:nth-child(1)" ).addClass( "col-lg-3 col-md-4 col-sm-6 col-xs-12" );
$( "#menu-footer-menu li:nth-child(2)" ).addClass( "col-lg-2 col-md-4 col-sm-6 col-xs-12" );
$( "#menu-footer-menu li:nth-child(3)" ).addClass( "col-lg-2 col-md-4 col-sm-6 col-xs-12" );
$( "#menu-footer-menu li:nth-child(4)" ).addClass( "col-lg-2 col-md-4 col-sm-6 col-xs-12" );
$( "#menu-footer-menu li:nth-child(5)" ).addClass( "col-lg-3 col-md-4 col-sm-6 col-xs-12" );
$( "#menu-footer-menu > li" ).last().after( "<div class='clearfix'></div>" );

/* reorder article image and article title*/
$( ".et_pb_row:first-child" ).first().before( $( ".et_post_meta_wrapper" ) );

/* full width header minimum height and top positioning */
$( ".et_pb_fullwidth_header" ).first().css( {"min-height": "480px", "margin-top": "-80px" } );

/* add spacing between label and icon for buttons
$( ".et_pb_button" ).prepend("<div style='float:left;width:1em;'></div>").append("<div style='float:right;width:1em;'></div>");
*/

/* spacer before content so header doesn't cover main content
$("#main-content").prepend("<div style='height:150px;'></div>");
 */

/* article search page */
$(".sf-field-search").addClass("col-sm-6 col-xs-12");
$(".sf-field-category").addClass("col-sm-3 col-xs-6 accent-yellow-background");
$(".sf-field-tag").addClass("col-sm-3 col-xs-6 accent-yellow-background");
$(".sf-field-author").addClass("col-sm-3 col-xs-6 accent-yellow-background");
$(".sf-field-sort_order").addClass("col-sm-3 col-xs-6 accent-yellow-background");
$(".sf-field-category h4").hide();
$(".sf-field-tag h4").hide();
$(".sf-field-search").prepend("<h2>Keywords</h2>");
$(".sf-field-category").before("<div class='clearfix'></div>");
