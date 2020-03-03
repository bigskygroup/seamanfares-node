var ajaxBox_offsetX = 0;
var ajaxBox_offsetY = 0;
var ajax_list_externalFile = 'https://achelper.sky-tours.com/autocomplete?format=legacy'; // Path to external file
var minimumLettersBeforeLookup = 2; // Number of letters entered before a lookup is performed.

var ajax_list_objects = new Array();
var ajax_list_cachedLists = new Array();
var ajax_list_activeInput = false;
var ajax_list_activeItem;
var ajax_list_optionDivFirstItem = false;
var ajax_list_currentLetters = new Array();
var ajax_optionDiv = false;
var ajax_optionDiv_iframe = false;

var ajax_list_MSIE = false;
if(navigator.userAgent.indexOf('MSIE')>=0 && navigator.userAgent.indexOf('Opera')<0)ajax_list_MSIE=true;

var currentListIndex = 0;
var listIndex = 0;


$(function initCityAirportAC() {
    var processLegacyACData = function (d) {
        var result=[],
            items = (d||'').split('|');
        for(var x=0; x<items.length; x++){
            if(!items[x].length) continue;
            result.push({
                value: items[x].replace(/^\t/,''),
                label: items[x].replace(/^\t/,''),
                shift: !!items[x].match(/\t/),
                valid: !!items[x].match(/\s\(\w+\)\s\w{3}/)
            });
        }
        return result;
    };
    var cache = {};
    var ac = $( ".cityapac" )
        .on('focus',function () {
            // this.value='';
            this.select();
        })
    .autocomplete({
        minLength: 2,
        source: function( request, response ) {
            var term = request.term,
                el = $(this);
            if(term.match(/\s\(\w+\)\s\w{3}$/)) return;
            if ( term in cache ) {
                response( cache[ term ] );
                return;
            }
            var lang = $('#lang').val();
            var remoteRq = {
                q: term,
                hl: lang,
            };
            $.get( ajax_list_externalFile, remoteRq, function( data, status, xhr ) {
                var dataArr = processLegacyACData(data);
                if(status=='success'){
                    cache[ term ] = dataArr;
                }
                response( dataArr );
            });
        },
        select: function( event, ui ) {
            var $this = $(this);
            if(!ui.item.valid) return false;
            $this.val(ui.item.value);
            var copyto = $this.data('copyto');
            if(copyto)
                $(copyto).val(ui.item.value);
            $this.blur(); //TODO: maybe tabnext

            if(document.getElementById($this.attr('name') + '_hidden'))document.getElementById($this.attr('name') + '_hidden').value = $this.attr('id');

            if (document.getElementById('map-canvas')) {
                var obj = {};
                obj = $($('.aworld_input').map(function() {
                    if ($(this).val() != '') {
                        return $(this).val();
                    }
                }));
                var cities = $.makeArray(obj);
                for (var i = 0, j = 1; i < cities.length; i++) {
                    // debugger;
                    cleanMap();
                    if (cities[i] != cities[i+1]) {
                        createMarker(cities[i],j);
                        j++;
                        cleanMap();
                    }
                }
            }

        },
        focus: function( event, ui ) {
            if(!ui.item.valid) return false;
        }
    });

    var _renderItem = function( ul, item ) {
        // console.log('_renderItem', item);
        if(item.valid)
            return $( "<li>" )
                .addClass( "optionDiv" )
                .attr( "data-value", item.value)
                .css('padding-left', item.shift ? 20 : 0)
                .append( item.label )
                .appendTo( ul );
        else{
            return $('<div>')
                .addClass( 'ui-state-disabled' )
                .append( item.label )
                .appendTo( ul );
        }
    };

    ac.each(function() {
        $(this).data( "ui-autocomplete" )._renderItem = _renderItem;
    });

});

function ajax_getTopPos(inputObj)
{

  var returnValue = inputObj.offsetTop;
  while((inputObj = inputObj.offsetParent) != null){
    returnValue += inputObj.offsetTop;
  }
  return returnValue;
}
function ajax_list_cancelEvent()
{
    return false;
}

function ajax_getLeftPos(inputObj)
{
  var returnValue = inputObj.offsetLeft;
  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;

  return returnValue;
}



function ajax_option_setValue(e,inputObj)
{
    if(!inputObj)inputObj=this;
    var tmpValue = inputObj.innerHTML;
    if(ajax_list_MSIE)tmpValue = inputObj.innerText;else tmpValue = inputObj.textContent;
    if(!tmpValue)tmpValue = inputObj.innerHTML;
    tmpValue = (tmpValue||'').replace(/^\t/,''); //strip hierarchy tabulation in names
    ajax_list_activeInput.value = tmpValue;
    if(document.getElementById(ajax_list_activeInput.name + '_hidden'))document.getElementById(ajax_list_activeInput.name + '_hidden').value = inputObj.id;
    listIndex++;

    if(ajax_list_activeInput.id == 'id_from')document.getElementById('id_back_to').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to')document.getElementById('id_back_from').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_1')document.getElementById('id_from_2').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_2')document.getElementById('id_from_3').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_3')document.getElementById('id_from_4').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_4')document.getElementById('id_from_5').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_5')document.getElementById('id_from_6').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_6')document.getElementById('id_from_7').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_7')document.getElementById('id_from_8').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_8')document.getElementById('id_from_9').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_9')document.getElementById('id_from_10').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_10')document.getElementById('id_from_11').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_11')document.getElementById('id_from_12').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_12')document.getElementById('id_from_13').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_13')document.getElementById('id_from_14').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_14')document.getElementById('id_from_15').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_15')document.getElementById('id_from_16').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_16')document.getElementById('id_from_17').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_17')document.getElementById('id_from_18').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_18')document.getElementById('id_from_19').value = ajax_list_activeInput.value;
    if(ajax_list_activeInput.id == 'id_to_19')document.getElementById('id_from_20').value = ajax_list_activeInput.value;

    if (document.getElementById('map-canvas')) {
        var obj = {};
        obj = $($('.aworld_input').map(function() {
            if ($(this).val() != '') {
                return $(this).val();
            }
        }));
        var cities = $.makeArray(obj);
        for (var i = 0, j = 1; i < cities.length; i++) {
            cleanMap();
            if (cities[i] != cities[i+1]) {
                createMarker(cities[i],j);
                j++;
                cleanMap();
            }
        }
    }
    ajax_options_hide();
}

function ajax_options_hide()
{
    if(ajax_optionDiv)ajax_optionDiv.style.display='none';
    if(ajax_optionDiv_iframe)ajax_optionDiv_iframe.style.display='none';
}

function ajax_options_rollOverActiveItem(item,fromKeyBoard)
{
    if(ajax_list_activeItem)ajax_list_activeItem.className='optionDiv';
    item.className='optionDivSelected';
    ajax_list_activeItem = item;

    if(fromKeyBoard){
        if(ajax_list_activeItem.offsetTop>ajax_optionDiv.offsetHeight){
            ajax_optionDiv.scrollTop = ajax_list_activeItem.offsetTop - ajax_optionDiv.offsetHeight + ajax_list_activeItem.offsetHeight + 2 ;
        }
        if(ajax_list_activeItem.offsetTop<ajax_optionDiv.scrollTop)
        {
            ajax_optionDiv.scrollTop = 0;
        }
    }
}

function ajax_option_list_buildList(letters,paramToExternalFile)
{

    ajax_optionDiv.innerHTML = '';
    ajax_list_activeItem = false;
    if(ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()].length<=1){
        ajax_options_hide();
        return;
    }



    ajax_list_optionDivFirstItem = false;
    var optionsAdded = false;
    for(var no=0;no<ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()].length;no++){
        if(ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()][no].length==0)continue;
        optionsAdded = true;
        var div = document.createElement('DIV');
        var items = ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()][no].split(/###/gi);

        if(ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()].length==1 && ajax_list_activeInput.value == items[0]){
            ajax_options_hide();
            return;
        }

        div.innerHTML = items[items.length-1];
        div.id = items[0];
        div.className='optionDiv';
        if(div.innerHTML.match(/^\t/)){
            div.style['padding-left'] = '20px';
            div.innerHTML.replace(/^\t/,'');
        }
        div.onmouseover = function(){ ajax_options_rollOverActiveItem(this,false) }
        div.onclick = ajax_option_setValue;
        if(!ajax_list_optionDivFirstItem)ajax_list_optionDivFirstItem = div;
        ajax_optionDiv.appendChild(div);
    }
    if(optionsAdded){
        ajax_optionDiv.style.display='block';
        if(ajax_optionDiv_iframe)ajax_optionDiv_iframe.style.display='';
        ajax_options_rollOverActiveItem(ajax_list_optionDivFirstItem,true);
    }

}

function ajax_option_list_showContent(ajaxIndex,inputObj,paramToExternalFile,whichIndex)
{
    if(whichIndex!=currentListIndex)return;
    var letters = inputObj.value;
    var content = ajax_list_objects[ajaxIndex].response;
    var elements = content.split('|');
    ajax_list_cachedLists[paramToExternalFile][letters.toLowerCase()] = elements;
    ajax_option_list_buildList(letters,paramToExternalFile);

}

function ajax_option_resize(inputObj)
{
    ajax_optionDiv.style.top = (ajax_getTopPos(inputObj) + inputObj.offsetHeight + ajaxBox_offsetY) + 'px';
    ajax_optionDiv.style.left = (ajax_getLeftPos(inputObj) + ajaxBox_offsetX) + 'px';
    if(ajax_optionDiv_iframe){
        ajax_optionDiv_iframe.style.left = ajax_optionDiv.style.left;
        ajax_optionDiv_iframe.style.top = ajax_optionDiv.style.top;
    }

}

function ajax_showOptions(inputObj,paramToExternalFile,e)
{
    if(e.keyCode==13 || e.keyCode==9)return;
    if(ajax_list_currentLetters[inputObj.name]==inputObj.value)return;
    if(!ajax_list_cachedLists[paramToExternalFile])ajax_list_cachedLists[paramToExternalFile] = new Array();
    ajax_list_currentLetters[inputObj.name] = inputObj.value;
    if(!ajax_optionDiv){
        ajax_optionDiv = document.createElement('DIV');
        ajax_optionDiv.id = 'ajax_listOfOptions';
        document.body.appendChild(ajax_optionDiv);

        if(ajax_list_MSIE){
            ajax_optionDiv_iframe = document.createElement('IFRAME');
            ajax_optionDiv_iframe.border='0';
            ajax_optionDiv_iframe.style.width = ajax_optionDiv.clientWidth + 'px';
            ajax_optionDiv_iframe.style.height = ajax_optionDiv.clientHeight + 'px';
            ajax_optionDiv_iframe.id = 'ajax_listOfOptions_iframe';

            document.body.appendChild(ajax_optionDiv_iframe);
        }

        var allInputs = document.getElementsByTagName('INPUT');
        for(var no=0;no<allInputs.length;no++){
            if(!allInputs[no].onkeyup)allInputs[no].onfocus = ajax_options_hide;
        }
        var allSelects = document.getElementsByTagName('SELECT');
        for(var no=0;no<allSelects.length;no++){
            allSelects[no].onfocus = ajax_options_hide;
        }

        var oldonkeydown=document.body.onkeydown;
        if(typeof oldonkeydown!='function'){
            document.body.onkeydown=ajax_option_keyNavigation;
        }else{
            document.body.onkeydown=function(){
                oldonkeydown();
            ajax_option_keyNavigation() ;}
        }
        var oldonresize=document.body.onresize;
        if(typeof oldonresize!='function'){
            document.body.onresize=function() {ajax_option_resize(inputObj); };
        }else{
            document.body.onresize=function(){oldonresize();
            ajax_option_resize(inputObj) ;}
        }

    }

    if(inputObj.value.length<minimumLettersBeforeLookup){
        ajax_options_hide();
        return;
    }


    ajax_optionDiv.style.top = (ajax_getTopPos(inputObj) + inputObj.offsetHeight + ajaxBox_offsetY) + 'px';
    ajax_optionDiv.style.left = (ajax_getLeftPos(inputObj) + ajaxBox_offsetX) + 'px';
    if(ajax_optionDiv_iframe){
        ajax_optionDiv_iframe.style.left = ajax_optionDiv.style.left;
        ajax_optionDiv_iframe.style.top = ajax_optionDiv.style.top;
    }

    ajax_list_activeInput = inputObj;
    ajax_optionDiv.onselectstart =  ajax_list_cancelEvent;
    currentListIndex++;
    var lang = $('html').attr('lang');
    if(ajax_list_cachedLists[paramToExternalFile][inputObj.value.toLowerCase()]){
        ajax_option_list_buildList(inputObj.value,paramToExternalFile,currentListIndex);
    }else{
        var tmpIndex=currentListIndex/1;
        ajax_optionDiv.innerHTML = '';
        var ajaxIndex = ajax_list_objects.length;
        ajax_list_objects[ajaxIndex] = new sack();
        var url = ajax_list_externalFile + '&' + paramToExternalFile + '=1&id=' + ajax_list_activeInput.id + '&q=' + encodeURIComponent(inputObj.value) + '&hl='+lang;
        ajax_list_objects[ajaxIndex].requestFile = url; // Specifying which file to get
        ajax_list_objects[ajaxIndex].onCompletion = function(){ ajax_option_list_showContent(ajaxIndex,inputObj,paramToExternalFile,tmpIndex); };   // Specify function that will be executed after file has been found
        ajax_list_objects[ajaxIndex].runAJAX();     // Execute AJAX function
    }


}

function ajax_option_keyNavigation(e)
{
    if(document.all)e = event;

    if(!ajax_optionDiv)return;
    if(ajax_optionDiv.style.display=='none')return;

    if(e.keyCode==38){  // Up arrow
        if(!ajax_list_activeItem)return;
        if(ajax_list_activeItem && !ajax_list_activeItem.previousSibling)return;
        ajax_options_rollOverActiveItem(ajax_list_activeItem.previousSibling,true);
    }

    if(e.keyCode==40){  // Down arrow
        if(!ajax_list_activeItem){
            ajax_options_rollOverActiveItem(ajax_list_optionDivFirstItem,true);
        }else{
            if(!ajax_list_activeItem.nextSibling)return;
            ajax_options_rollOverActiveItem(ajax_list_activeItem.nextSibling,true);
        }
    }

    if(e.keyCode==13 || e.keyCode==9){  // Enter key or tab key
        if(ajax_list_activeItem && ajax_list_activeItem.className=='optionDivSelected')ajax_option_setValue(false,ajax_list_activeItem);
        if(e.keyCode==13)return false; else return true;
    }
    if(e.keyCode==27){  // Escape key
        ajax_options_hide();
    }
}


document.documentElement.onclick = autoHideList;

function autoHideList(e)
{
    if(document.all)e = event;

    if (e.target) source = e.target;
        else if (e.srcElement) source = e.srcElement;
        if (source.nodeType == 3) // defeat Safari bug
            source = source.parentNode;
    if(source.tagName.toLowerCase()!='input' && source.tagName.toLowerCase()!='textarea')ajax_options_hide();

}
