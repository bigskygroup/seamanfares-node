/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
jQuery(function($){
    $.datepicker.regional['is'] = {
        closeText: 'Loka',
        prevText: '&#x3C; Fyrri',
        nextText: 'NÃŠsti &#x3E;',
        currentText: 'Ã dag',
        monthNames: ['JanÃºar','FebrÃºar','Mars','AprÃ­l','MaÃ­','JÃºnÃ­',
        'JÃºlÃ­','ÃgÃºst','September','OktÃ³ber','NÃ³vember','Desember'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','MaÃ­','JÃºn',
        'JÃºl','ÃgÃº','Sep','Okt','NÃ³v','Des'],
        dayNames: ['Sunnudagur','MÃ¡nudagur','ÃriÃ°judagur','MiÃ°vikudagur','Fimmtudagur','FÃ¶studagur','Laugardagur'],
        dayNamesShort: ['Sun','MÃ¡n','Ãri','MiÃ°','Fim','FÃ¶s','Lau'],
        dayNamesMin: ['Su','MÃ¡','Ãr','Mi','Fi','FÃ¶','La'],
        weekHeader: 'Vika',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['is']);
});