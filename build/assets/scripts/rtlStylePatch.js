// console.log(document.querySelector("html").getAttribute("lang"))

if (
    document
        .querySelector("html")
        .getAttribute("lang")
        .trim()
        .toLowerCase() === "ar"
) {
    document
        .querySelectorAll("button.btn.btn-success.btn-lg.font-size-30.col-xs-12.col-sm-8.col-md-8")
        .forEach(item => {
            item.style.direction = "ltr"
        })

         document
    .querySelectorAll("div.flight-form.col-xs-12  div.hidden-xs.hidden-sm.main-menu > ul.list-group > li > a.icn-transfers.icon.ellipsis")
    .forEach(item => {
        item.style.backgroundPosition = "right -249px"
    })

    document.querySelectorAll("div.hidden-xs.col-sm-4.col-md-5.text-white.text-left > h2").forEach(item => {
        item.style.textAlign = "right"
    })

    document
        .querySelectorAll(
            "div.col-xs-12.col-sm-12.col-md-12.padding-left-none.padding-right-none > div.checkbox.sky-checkbox.sky-checkbox-success.ellipsis"
        )
        .forEach(item => {
            item.style.marginRight = "14px"
        })

    document.querySelectorAll("a[onclick^=setLanguage").forEach(item => {
        if (item.onclick.toString().match(/'kw'/gi)) {
            item.childNodes[1].innerText = item.childNodes[1].innerText.slice(1)
        }
    })
    document.querySelectorAll(" span.flag.flag-kw").forEach(item => {
        item.nextElementSibling.innerText = item.nextElementSibling.innerText.slice(1)
    })

    document
        .querySelectorAll("div.panel-body > h1.hidden-xs.title-form.text-white.ellipsis.font-weight-normal")
        .forEach(item => {
            item.style.marginRight = "16px"
        })

    document.querySelectorAll("form#id_filter > .table-responsive > table").forEach(item => {
        item.setAttribute("align", "right")
    })

    document
        .querySelectorAll(
            "div.panel-heading > div.col-xs-12.padding-left-none.font-size-16 > div.col-xs-12.col-sm-4.padding-right-none.text-left"
        )
        .forEach(item => {
            item.style.textAlign = "right"
        })

    document
        .querySelectorAll("div#filtrate-main div.col-xs-12.col-sm-12.col-md-12.col-lg-12")
        .forEach(item => {
            // item.style.direction = "ltr"
            // item.style.textAlign = "right"
        })

    document.querySelectorAll("div#filtrate-main h3.pull-right > a[onclick] ").forEach(item => {
        item.insertAdjacentElement("afterend", document.createElement("br"))
        var curr = item.innerText.match(/([^\d,]+)/gi)[0]
        var price = item.innerText.match(/([\d,]+)/gi)[0]
        item.innerHTML =
            "<span style='display:inline-block; font-weight: bold'>" +
            price +
            "</span>" +
            " " +
            "<span style='display:inline-block; font-weight: bold'>" +
            curr +
            "</span>"
    })
    document.querySelectorAll("div.col-xs-12.col-sm-12.col-md-12 > h4.title_outbound").forEach(item => {
        item.style.marginTop = "26px"
    })
    document.querySelectorAll("div.col-xs-12.col-sm-12.col-md-12 > h4.title_inbound").forEach(item => {
        item.style.marginTop = "26px"
    })

    document
        .querySelectorAll("div#filtrate  div.row.top-buffer-10.flight-divider.mouse-hover-bg.padding-10")
        .forEach(item => {
            item.classList.remove("flight-divider")
        })

    document
        .querySelectorAll(
            "div > h4.title_outbound > div.col-xs-12.col-sm-6.col-md-6, div > h4.title_inbound > div.col-xs-12.col-sm-6.col-md-6"
        )
        .forEach(item => {
            item.classList.remove("col-xs-12", "col-sm-6", "col-md-6")
            item.classList.add("col-xs-6", "col-sm-5", "col-md-5")
            item.style.textAlign = "right"
        })

    document
        .querySelectorAll("#filtrate div.col-xs-6.visible-xs.padding-left-none.padding-right-none")
        .forEach(item => {
            item.classList.remove("visible-xs")
            item.style.display = "none"
        })

    document.querySelectorAll("#filtrate div.hidden-xs.col-sm-2.col-md-1").forEach(item => {
        item.classList.remove("hidden-xs")
        item.style.paddingRight = 0
    })

    document.querySelectorAll("#filtrate span.hidden-xs.hidden-sm").forEach(item => {
        item.classList.remove("hidden-xs", "hidden-sm")
    })

    document
        .querySelectorAll(
            "#filtrate div.col-xs-12.col-sm-10.col-md-11.padding-left-none.padding-right-none > div:nth-child(3)"
        )
        .forEach(item => {
            item.style.textAlign = "left"
        })
    document
        .querySelectorAll(
            "#filtrate div.col-xs-12.col-sm-9.col-md-9.text-center.padding-left-none.padding-right-none.bottom-buffer-10.search-color"
        )
        .forEach(item => {
            item.classList.remove("text-center")
        })

    document
        .querySelectorAll("#filtrate div.col-xs-6.col-sm-2.col-md-2.padding-left-none.padding-right-none")
        .forEach(item => {
            item.classList.remove("col-sm-2", "col-md-2")
            item.style.float = "right"
            item.style.clear = "both"
            // item.classList.add( "col-xs-5")
        })

    document
        .querySelectorAll(" #filtrate  div.col-xs-12.col-sm-1.padding-left-none.padding-right-none")
        .forEach(item => {
            item.classList.remove("col-xs-12", "col-sm-1")
            item.classList.add("col-xs-6")
            item.style.float = "right"
            item.style.marginTop = "5px"
            item.querySelector(":first-child").classList.remove("text-center")
        })

    document
        .querySelectorAll("#filtrate div.radio.sky-radio.sky-radio-success span.visible-xs")
        .forEach(item => {
            item.classList.remove("visible-xs")
        })
    document.querySelectorAll("#filtrate div.text-center.pointer.hidden-xs").forEach(item => {
        item.classList.remove("hidden-xs")
        item.style.display = "none"
    })

    document.querySelectorAll("div#filtrate-main strong.font-size-26 ").forEach(item => {
        var curr = item.innerText.match(/([^\d,]+)/gi)[0]
        var price = item.innerText.match(/([\d,]+)/gi)[0]
        item.innerHTML =
            "<span style='display:inline-block; font-weight: bold'>" +
            price +
            "</span>" +
            " " +
            "<span style='display:inline-block; font-weight: bold'>" +
            curr +
            "</span>"
    })

    document.querySelectorAll("div.well.search-box.white-bg div.col-xs-12.col-sm-12 > div").forEach(item => {
        item.classList.add("pull-left")
    })
    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12 div.col-xs-12.col-sm-11.pull-left > div"
        )
        .forEach(item => {
            item.classList.add("pull-left")
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12 div.col-xs-12.col-sm-11.pull-left  div.col-sm-12.hidden-xs.pull-left"
        )
        .forEach(item => {
            item.style.marginRight = "1em"
            item.style.marginTop = "1.2em"
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12 div.col-xs-12.col-sm-11.pull-left > div:first-child"
        )
        .forEach(item => {
            item.classList.remove("col-sm-5")
            item.classList.add("col-sm-4")
        })
    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12 div.col-xs-12.col-sm-11.pull-left > div:nth-child(2)"
        )
        .forEach(item => {
            item.classList.remove("col-xs-1")
            item.classList.add("col-xs-2")
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12 > div.col-sm-1.text-center.hidden-xs.pull-left"
        )
        .forEach(item => {
            item.classList.remove("hidden-xs")
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg div.col-xs-12.col-sm-12  div.col-xs-12.visible-xs.pull-left"
        )
        .forEach(item => {
            item.classList.remove("visible-xs")
            item.style.display = "none"
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg h4.title_outbound div.col-xs-12.text-left.text-small-xs.visible-xs, div.well.search-box.white-bg h4.title_inbound div.col-xs-12.text-left.text-small-xs.visible-xs "
        )
        .forEach(item => {
            item.classList.remove("visible-xs")
            item.style.display = "none"
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg h4.title_outbound div.col-sm-8.col-md-6.text-right.hidden-xs , div.well.search-box.white-bg h4.title_inbound div.col-sm-8.col-md-6.text-right.hidden-xs "
        )
        .forEach(item => {
            item.classList.remove("hidden-xs")
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg h4.title_outbound > div:first-child , div.well.search-box.white-bg h4.title_inbound  > div:first-child"
        )
        .forEach(item => {
            item.classList.remove("col-xs-12")
            item.classList.add("col-xs-6")
        })

    document
        .querySelectorAll(
            "div.well.search-box.white-bg h4.title_outbound > div:nth-child(2) , div.well.search-box.white-bg h4.title_inbound  > div:nth-child(2)"
        )
        .forEach(item => {
            item.classList.add("col-xs-6")
        })

    document
        .querySelectorAll("div.well.search-box.white-bg span.font-size-30.text-right.pull-right ")
        .forEach(item => {
            var curr = item.querySelector("strong").innerText.match(/([^\d,]+)/gi)[0]
            var price = item.querySelector("div#total_price3").innerText.match(/([\d,]+)/gi)[0]
            item.innerHTML =
                "<span style='display:inline-block; font-weight: bold'>" +
                price +
                "</span>" +
                " " +
                "<span style='display:inline-block; font-weight: bold'>" +
                curr +
                "</span>"
        })

    document.querySelectorAll("div.well.search-box.white-bg h4.title_inbound").forEach(item => {
        item.style.marginTop = "2em"
    })

    document.querySelectorAll("div.well.search-box.white-bg div.row.border-top-grey").forEach(item => {
        item.classList.remove("border-top-grey")
    })

    document.querySelectorAll("div#cars_search div.container-fluid > div.row > div").forEach(item => {
        item.classList.add("col-xs-11")
    })

    document
        .querySelectorAll(
            "div.well.white-bg div#additional-services-toggle > div.col-xs-12.col-sm-8.col-md-8.pull-left.padding-left-none > div > div"
        )
        .forEach(item => {
            item.style.textAlign = "right"
        })

    document
        .querySelectorAll(
            "div.well.white-bg div#additional-services-toggle strong  > span.text-success.font-size-22 "
        )
        .forEach(item => {
            var curr = item.innerText.match(/([^\d,]+)/gi)[0]
            var price = item.innerText.match(/([\d,]+)/gi)[0]
            item.innerHTML =
                "<span style='display:inline-block; font-weight: bold'>" +
                price +
                "</span>" +
                " " +
                "<span style='display:inline-block; font-weight: bold'>" +
                curr +
                "</span>"
        })

    document
        .querySelectorAll("div#view-total-price.text-success.text-right.font-size-30 > strong")
        .forEach(item => {
            var curr = item.innerText.match(/([^\d,]+)/gi)[0]
            var price = item.innerText.match(/([\d,]+)/gi)[0]
            item.innerHTML =
                "<span style='display:inline-block; font-weight: bold'>" +
                price +
                "</span>" +
                " " +
                "<span style='display:inline-block; font-weight: bold'>" +
                curr +
                "</span>"
        })

    document
    .querySelectorAll("div#accordion > div.panel.panel-default > div#collapseOne > div.panel-body > div.row" )
    .forEach(item => {
        item.style.marginRight = "10px"
    })

   

     // document
    // .querySelectorAll("")
    // .forEach(item => {
    //     item.style.direction = "ltr"
    // })
}
