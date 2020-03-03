// convert all characters to lowercase to simplify testing
var agt = navigator.userAgent.toLowerCase();

// *** BROWSER VERSION ***
// Note: On IE5, these return 4, so use is_ie5up to detect IE5.
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

// Note: Opera and WebTV spoof Navigator.  We do strict client detection.
// If you want to allow spoofing, take out the tests for opera and webtv.
var is_nav      = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                    && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                    && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var is_nav2     = (is_nav && (is_major == 2));
var is_nav3     = (is_nav && (is_major == 3));
var is_nav4     = (is_nav && (is_major == 4));
var is_nav4up   = (is_nav && (is_major >= 4));
var is_navonly  = (is_nav && ((agt.indexOf(";nav") != -1) ||
                  (agt.indexOf("; nav") != -1)));
var is_nav6     = (is_nav && (is_major == 5));
var is_nav6up   = (is_nav && (is_major >= 5));
var is_gecko    = (agt.indexOf('gecko') != -1);

var is_chrome   = (agt.indexOf('chrome') != -1);

var is_ie       = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3      = (is_ie && (is_major < 4));
var is_ie4      = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie4up    = (is_ie && (is_major >= 4));
var is_ie5      = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie5up    = (is_ie && !is_ie3 && !is_ie4);
var is_ie5_5up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5);
var is_ie6      = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie6up    = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

var is_opera    = (agt.indexOf("opera") != -1);
var is_opera2   = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
var is_opera3   = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
var is_opera4   = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
var is_opera5   = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

var search_service = new Array();
search_service['amadeus']      = 'A';
search_service['auto']         = 'AT';
search_service['aviacentr']    = 'AV';
search_service['cache']        = 'CH';
search_service['destinia']     = 'D';
search_service['hitchhiker']   = 'H';
search_service['igola']        = 'IG';
search_service['kiwi']         = 'Q';
search_service['mahanair']     = 'MH';
search_service['malindoair']   = 'M';
search_service['multireisen']  = 'V';
search_service['myfarebox']    = 'F';
search_service['nosupplier']   = 'NS';
search_service['pegasus']      = 'G';
search_service['picasso']      = 'P';
search_service['pkfare']       = 'R';
search_service['priceline']    = 'J';
search_service['rehlat']       = 'RH';
search_service['special_ibe']  = 'SI';
search_service['tourconex']    = 'X';
search_service['trafree']      = 'E';
search_service['travelcaster'] = 'C';
search_service['travelfusion'] = 'N';
search_service['travelport']   = 'T';
search_service['tripninja']    = 'O';
search_service['tripstack']    = 'I';
search_service['undertrail']   = 'U';
search_service['wetkt']        = 'WT';
search_service['xmlagency']    = 'XA';
search_service['ypsilon']      = 'L';

function CheckDate(date1,date2) {
  if (date1 != '' && date2 != '') {
    var m1 = Number(date1.substr(0,2));
    var d1 = Number(date1.substr(3,2));
    var y1 = Number(date1.substr(6,4));
    var t1 = $('#id_time_depart').val();
    if (t1 == 'any') {
      var hr1 = 0;
      var mn1 = 0;
    } else {
      var hr1 = Number(t1.substr(0,2));
      var mn1 = Number(t1.substr(3,2));
    }
    var m2 = Number(date2.substr(0,2));
    var d2 = Number(date2.substr(3,2));
    var y2 = Number(date2.substr(6,4));
    var t2 = $('#id_time_arrive').val();
    if (t2 == 'any') {
      var hr2 = 0;
      var mn2 = 0;
    } else {
      var hr2 = Number(t2.substr(0,2));
      var mn2 = Number(t2.substr(3,2));
    }
    var from = new Date(y1,m1 - 1,d1,hr1,mn1);
    var to   = new Date(y2,m2 - 1,d2,hr2,mn2);
    var msLeft = to.getTime() - from.getTime();
    if (msLeft < 0) return false;
  }
  return true;
}

function CheckFromDate(date) {
  if (date != '') {
    var m = Number(date.substr(0,2));
    var d = Number(date.substr(3,2));
    var y = Number(date.substr(6,4));
    var t = $('#id_time_depart').val();
    if (t == 'any') {
      var hr = 0;
      var mn = 0;
    } else {
      var hr = Number(t.substr(0,2));
      var mn = Number(t.substr(3,2));
    }
    var date1 = new Date(y,m - 1,d,hr,mn);
    var date2 = new Date();
    if (date1.getTime() < (date2.getTime() + 64800000)) {
      return false;
    }
  }
  return true;
}

function CheckFromDate2(date) {
  if (date != '') {
    var date1 = new Date(date);
    var date2 = new Date();
    if (date1.getTime() > (date2.getTime() + (329 * 86400000))) {
      return false;
    }
  }
  return true;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name,value,props) {
    props = props || {};
    var exp = props.expires;
    if (typeof exp == "number" && exp) {
        var d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in props) {
        updatedCookie += "; " + propName;
        var propValue = props[propName];
        if (propValue !== true) { updatedCookie += "=" + propValue; }
    }
    document.cookie = updatedCookie;
}

function validated(string) {
    for (var i = 0, output = '', valid = "0123456789-"; i < string.length; i++)
        if (valid.indexOf(string.charAt(i)) != -1)
            output += string.charAt(i)
    return output;
}

function validated2(string) {
    for (var i = 0, output = '', valid = "0123456789"; i < string.length; i++)
        if (valid.indexOf(string.charAt(i)) != -1)
            output += string.charAt(i)
    return output;
}

function hideServices(id) {
    ($('#' + id).css('display') == 'none') ? $('#' + id).css('display','') : $('#' + id).css('display','none');
}

function hideCard(message,message_default) {
    ($('#dyn_payment').val() == 'skytours' || ($('#dyn_payment').val() == 'astropay' && ($('#dyn_pay_method').val() == 'creditcard_mx' || $('#dyn_pay_method').val() == 'creditcard_br' || $('#dyn_pay_method').val() == 'creditcard_ar' || $('#dyn_pay_method').val() == 'creditcard_co'))) ? $('#card_payment').css('display','') : $('#card_payment').css('display','none');
    ($('#dyn_payment').val() == 'astropay' && ($('#dyn_pay_method').val() == 'creditcard_mx' || $('#dyn_pay_method').val() == 'creditcard_br' || $('#dyn_pay_method').val() == 'creditcard_ar' || $('#dyn_pay_method').val() == 'creditcard_co')) ? $('#card_payment_astropay').css('display','') : $('#card_payment_astropay').css('display','none');
    ($('#dyn_payment').val() == 'astropay' && ($('#dyn_pay_method').val() == 'creditcard_mx' || $('#dyn_pay_method').val() == 'creditcard_br' || $('#dyn_pay_method').val() == 'creditcard_ar' || $('#dyn_pay_method').val() == 'creditcard_co')) ? $('#header_card_payment').html(message) : $('#header_card_payment').html(message_default);
    ($('#dyn_payment').val() == 'astropay' && $('#dyn_pay_method').val() != 'creditcard_mx' && $('#dyn_pay_method').val() != 'creditcard_br' && $('#dyn_pay_method').val() != 'creditcard_ar' && $('#dyn_pay_method').val() != 'creditcard_co') ? $('#other_payment_astropay').css('display','') : $('#other_payment_astropay').css('display','none');
    ($('#dyn_pay_method').val() == 'ideal') ? $('#ideal_payment').css('display','') : $('#ideal_payment').css('display','none');
}

function hidePayment(message) {
    $('#change_payment_method').html('<span class="btn btn-primary"> <i class="glyphicon glyphicon-plus"></i> ' + message + '</span>');
    $('input:radio[name="name_pay_service"]').each(function() {
        if ($(this).prop('checked') == false) {
            $(this).parent().parent().parent().hide();
            $(this).parent().parent().parent().prev().hide();
        }
    });
}

function showPayment() {
    $('#change_payment_method').html('&nbsp;');
    $('input:radio[name="name_pay_service"]').each(function() {
        if ($(this).prop('checked') == false) {
            $(this).parent().parent().parent().show();
            $(this).parent().parent().parent().prev().show();
        }
    });
}

function hideDisplayReturn() {
    var trip = $('#id_trip').val();
    if (trip == 'one') {
        $('#multi-block').css('display','none');
        $('#world-block').css('display','none');
        $('#oneway-block').css('display','none');
        $('#round-block').css('display','block');
        $('#id_back_from').val('');
        $('#id_back_to').val('');
        $('#id_date_arrive_view').val('');
        $('#id_date_arrive').val('');
    } else if (trip == 'multi') {
        var from1 = $('#id_from').val();
        var to1   = $('#id_to').val();
        var from2 = ($('#id_from_3').val() != '') ? $('#id_from_3').val() : $('#id_from').val();
        var date1 = $('#id_date_depart').val();
        var date2 = ($('#id_date_arrive').val() != '') ? $('#id_date_arrive').val() : $('#id_date_depart_2').val();
        $('#world-block').css('display','none');
        $('#round-block').css('display','none');
        $('#oneway-block').css('display','block');
        $('#multi-block').css('display','block');
        $('#id_from_1').val(from1);
        $('#id_to_1').val(to1);
        $('#id_date_depart_1').val(date1);
        $('#id_date_depart_view_1').val(date1);
        $('#id_from_2').val(to1);
        $('#id_to_2').val(from2);
        $('#id_date_depart_2').val(date2);
        $('#id_date_depart_view_2').val(date2);
    } else if (trip == 'world') {
        var from1 = $('#id_from').val();
        var to1   = $('#id_to').val();
        var from2 = ($('#id_from_3').val() != '') ? $('#id_from_3').val() : $('#id_from').val();
        var date1 = $('#id_date_depart').val();
        var date2 = ($('#id_date_arrive').val() != '') ? $('#id_date_arrive').val() : $('#id_date_depart_2').val();
        $('#multi-block').css('display','none');
        $('#round-block').css('display','none');
        $('#oneway-block').css('display','block');
        $('#world-block').css('display','block');
        $('#id_from_1').val(from1);
        $('#id_to_1').val(to1);
        $('#id_date_depart_1').val(date1);
        $('#id_date_depart_view_1').val(date1);
        $('#id_from_2').val(to1);
        $('#id_to_2').val(from2);
        $('#id_date_depart_2').val(date2);
        $('#id_date_depart_view_2').val(date2);
    } else {
        var from  = $('#id_from').val();
        var to    = $('#id_to').val();
        var date  = $('#id_date_depart').val();
        if (date == '') {
            var vdate = '';
            var adate = '';
        } else {
            var ndate = new Date();
            ndate.setTime(Date.parse(date));
            ndate.setDate(ndate.getDate() + 7);
            var vdate = $.datepicker.formatDate($.datepicker._defaults.dateFormat,ndate);
            var adate = $.datepicker.formatDate('mm/dd/yy',ndate);
        }
        $('#multi-block').css('display','none');
        $('#world-block').css('display','none');
        $('#oneway-block').css('display','block');
        $('#round-block').css('display','block');
        $('#id_back_from').val(to);
        $('#id_back_to').val(from);
        $('#id_date_arrive_view').val(vdate);
        $('#id_date_arrive').val(adate);
    }
}

function nameCreditCard(n) {
    var value = n;
    var cardName = '';

    var cards = new Array();
    cards[0]  = {cardName: "Visa", lengths: "13,16", prefixes: "4", checkdigit: true};
    cards[1]  = {cardName: "MasterCard", lengths: "16", prefixes: "51,52,53,54,55", checkdigit: true};
    cards[2]  = {cardName: "American Express", lengths: "15", prefixes: "34,37", checkdigit: true};
//    cards[2]  = {cardName: "DinersClub", lengths: "14,16", prefixes: "300,301,302,303,304,305,36,38,55", checkdigit: true};
//    cards[3]  = {cardName: "CarteBlanche", lengths: "14", prefixes: "300,301,302,303,304,305,36,38", checkdigit: true};
//    cards[4]  = {cardName: "American Express", lengths: "15", prefixes: "34,37", checkdigit: true};
//    cards[5]  = {cardName: "Discover", lengths: "16", prefixes: "6011,650", checkdigit: true};
//    cards[6]  = {cardName: "JCB", lengths: "15,16", prefixes: "3,1800,2131", checkdigit: true};
//    cards[7]  = {cardName: "enRoute", lengths: "15", prefixes: "2014,2149", checkdigit: true};
//    cards[8]  = {cardName: "Solo", lengths: "16,18,19", prefixes: "6334, 6767", checkdigit: true};
//    cards[9]  = {cardName: "Switch", lengths: "16,18,19", prefixes: "4903,4905,4911,4936,564182,633110,6333,6759", checkdigit: true};
//    cards[10] = {cardName: "Maestro", lengths: "16,18", prefixes: "5020,6", checkdigit: true};
//    cards[11] = {cardName: "VisaElectron", lengths: "16", prefixes: "417500,4917,4913", checkdigit: true};

    value = value.replace(/[\s-]/g,""); // remove spaces and dashes
    if (value.length == 0) { return cardName; } // no length

    var cardNo = value;
    var cardexp = /^[0-9]{13,19}$/;
    if (!cardexp.exec(cardNo)) { return cardName; } // has chars or wrong length

    cardNo = cardNo.replace(/\D/g,""); // strip down to digits

    var cardType = -1;
    for (var i = 0; i < cards.length; i++) {
        var prefix = new Array();
        prefix = cards[i].prefixes.split(",");
        for (j = 0; j < prefix.length; j++) {
            var exp = new RegExp("^" + prefix[j]);
            if (exp.test(cardNo)) {
                cardType = i;
                break;
            }
        }
        if (cardType != -1) { break; }
    }
    if (cardType == -1) { return cardName; } // card type not found

    cardName = cards[cardType].cardName;

    return cardName;
}

function validateCreditCard2(n) {
    var value = n;

    var cards = new Array();
    cards[0]  = {cardName: "Visa", lengths: "13,16", prefixes: "4", checkdigit: true};
    cards[1]  = {cardName: "MasterCard", lengths: "16", prefixes: "2,5", checkdigit: true};
    cards[2]  = {cardName: "American Express", lengths: "15", prefixes: "34,37", checkdigit: true};
//    cards[1]  = {cardName: "MasterCard", lengths: "16", prefixes: "51,52,53,54,55", checkdigit: true};
//    cards[2]  = {cardName: "DinersClub", lengths: "14,16", prefixes: "300,301,302,303,304,305,36,38,55", checkdigit: true};
//    cards[3]  = {cardName: "CarteBlanche", lengths: "14", prefixes: "300,301,302,303,304,305,36,38", checkdigit: true};
//    cards[4]  = {cardName: "American Express", lengths: "15", prefixes: "34,37", checkdigit: true};
//    cards[5]  = {cardName: "Discover", lengths: "16", prefixes: "6011,650", checkdigit: true};
//    cards[6]  = {cardName: "JCB", lengths: "15,16", prefixes: "3,1800,2131", checkdigit: true};
//    cards[7]  = {cardName: "enRoute", lengths: "15", prefixes: "2014,2149", checkdigit: true};
//    cards[8]  = {cardName: "Solo", lengths: "16,18,19", prefixes: "6334, 6767", checkdigit: true};
//    cards[9]  = {cardName: "Switch", lengths: "16,18,19", prefixes: "4903,4905,4911,4936,564182,633110,6333,6759", checkdigit: true};
//    cards[10] = {cardName: "Maestro", lengths: "16,18", prefixes: "5020,6", checkdigit: true};
//    cards[11] = {cardName: "VisaElectron", lengths: "16", prefixes: "417500,4917,4913", checkdigit: true};

    value = value.replace(/[\s-]/g,""); // remove spaces and dashes
    if (value.length == 0) { return false; } // no length

    var cardNo = value;
    var cardexp = /^[0-9]{13,19}$/;
    if (!cardexp.exec(cardNo)) { return false; } // has chars or wrong length

    cardNo = cardNo.replace(/\D/g,""); // strip down to digits

    var cardType = -1;
    for (var i = 0; i < cards.length; i++) {
        var prefix = new Array();
        prefix = cards[i].prefixes.split(",");
        for (j = 0; j < prefix.length; j++) {
            var exp = new RegExp("^" + prefix[j]);
            if (exp.test(cardNo)) {
                cardType = i;
                break;
            }
        }
        if (cardType != -1) { break; }
    }
    if (cardType == -1) { return false; } // card type not found

    if (cards[cardType].checkdigit) {
        var checksum = 0;
        var mychar = "";
        var j = 1;

        var calc;
        for (i = cardNo.length - 1; i >= 0; i--) {
            calc = Number(cardNo.charAt(i)) * j;
            if (calc > 9) {
                checksum = checksum + 1;
                calc = calc - 10;
            }
            checksum = checksum + calc;
            if (j == 1) {j = 2} else {j = 1};
        }

        if (checksum % 10 != 0) { return false; } // not mod10
    }

    var lengthValid = false;
    var prefixValid = false;
    var prefix  = new Array();
    var lengths = new Array();

    prefix = cards[cardType].prefixes.split(",");
    for (i = 0; i < prefix.length; i++) {
        var exp = new RegExp("^" + prefix[i]);
        if (exp.test(cardNo)) prefixValid = true;
    }
    if (!prefixValid) { return false; } // invalid prefix

    lengths = cards[cardType].lengths.split(",");
    for (j = 0; j < lengths.length; j++) {
        if (cardNo.length == lengths[j]) lengthValid = true;
    }
    if (!lengthValid) { return false; } // wrong length

    return true;
}

function showPress(e) {
    if(!e) { var e = window.event; }
    if (e.keyCode) { code = (e.keyCode || e.charCode); }
    else { if (e.which) { code = e.which; }}
//    if (is_chrome) { return true; }
//    if (code < 8 || (code > 9 && code < 32) || (code > 32 && code < 37) || (code > 40 && code < 45) || (code > 46 && code < 65) || (code > 90 && code < 97) || code > 122) { return false; }
    if (code < 8 || (code > 9 && code < 32) || (code > 33 && code < 37) || (code > 40 && code < 45) || (code > 46 && code < 65) || (code > 90 && code < 97) || (code > 122 && code < 127)) { return false; }
    if (is_ie5up || is_opera5up) {
        if (code == 8470 || String.fromCharCode(code) == '%' || String.fromCharCode(code) == '&' || String.fromCharCode(code) == '(') { return false; }
    }
    if (is_gecko) {
        if (code == 8470 || (e.shiftKey && (String.fromCharCode(code) == '%' || String.fromCharCode(code) == '&' || String.fromCharCode(code) == '('))) { return false; }
    }
    return true;
}

function setLanguage(l) {
    $('#id_lang').val(l);
    $('#id_language').submit();
}

function setCurrency(c) {
    $('#id_curr').val(c);
    $('#id_currency').submit();
}

var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;

function mopen(id) {
    mcancelclosetime();
    if (ddmenuitem) ddmenuitem.style.display = 'none';
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.display = 'block';
}

function mclose() {
    if (ddmenuitem) ddmenuitem.style.display = 'none';
}

function mclosetime() {
    closetimer = window.setTimeout(mclose, timeout);
}

function mcancelclosetime() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

function showmenu_js(id) {
    document.getElementById('get_img_pan').innerHTML = drop_menu_img[id];
}

document.onclick = mclose;

function popUp(page,name,width,height) {
    new_window = window.open(page,name,'width=' + width + ',height=' + height + ',location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=0,toolbar=0,left=150,top=50,screenx=150,screeny=50');
    if (new_window.opener == null) {
        new_window.opener = self;
    }
    new_window.focus();
}

$(document).ready(function() {
    $('ul.footer_flags').hide();
    $('span.lang_footer').click(function() {
        $('ul.footer_flags').toggle();
    });
    if ($("#callus-banner").css('height') == '110px') {
        $("#callus-banner").delay($('#header-wrap').width() <= 850 ? 1000 : 8000).fadeIn(500);
    } else {
        $("#callus-banner").delay(200).fadeIn(300);
    }
});

$(".baggage_message").hide();
$(".baggage_info").click(function(){
    $(".baggage_message").slideToggle(300);
});

$(document).on("click", "#button-callus", function() {
  if ($("#callus-banner").css('height') == '25px') {
      $("#callus-banner").animate({ height: "110px" }, 500);
      $("#girl-callus").animate({ height: "110px" }, 500);
      $("#button-callus").removeClass("glyphicon-chevron-up");
      $("#button-callus").addClass("glyphicon-minus");
      return;
  };
  if ($("#callus-banner").css('height') == '110px') {
      $("#callus-banner").animate({ height: "25px" }, 500);
      $("#girl-callus").animate({ height: "70px" }, 500);
      $("#button-callus").removeClass("glyphicon-minus");
      $("#button-callus").addClass("glyphicon-chevron-up");
      return;
  };
});
