$(document).ready(function () {
    const clickElClass = '.accordion';
    let currentElClickId = '';

    // Call button
    $(".nav-item").bind("click", function (event) {
        event.preventDefault();
        var clickedItem = $(this);
        $(".nav-item").each(function () {
            $(this).removeClass("active");
        });
        clickedItem.addClass("active");
    });

    $("#call").click(function () {
        $("#call-popup").removeClass("hide");
        $("#call-popup").addClass("show");
        $("#call").removeClass("show");
        $("#call").addClass("hide");
    });

    $(document).mouseup(function (e) {
        var container = $("#call-popup");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('show')) {
            $("#call-popup").removeClass("show");
            $("#call-popup").addClass("hide");
            $("#call").removeClass("hide");
            $("#call").addClass("show");
        }
    });

    // Accordion
    $(clickElClass).click(($ev) => {
        currentElClickId = "#" + $ev.currentTarget.id;
        $(clickElClass).each((index) => {
            if ($ev.currentTarget.id !== $(clickElClass)[index].id) {
                $('#' + $(".accordion")[index].id).hide()
            }
        })
    });

    // Back
    $(".back.btn").click(($ev) => {
        $ev.stopPropagation();
        $(clickElClass).each((index) => {
            $('#' + $(clickElClass)[index].id).show()
        });

        $('[data-parent="' + currentElClickId + '"]').removeClass('show')
    });
});


