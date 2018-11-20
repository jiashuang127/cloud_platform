/**
 * Created by camellibby on 16/11/4.
 */
(function ($) {
$.fn.checkAll = function () {
    return this.each(function(){

        var table = $(this),
            check_all = table.find('thead>tr>th :checkbox'),
            check_items = table.find('tbody>tr>td>div :checkbox');

        check_all.on('click', function () {
            var checked = $(this).prop('checked');
            check_items.each(function () {
                $(this).prop('checked', checked);
            });
        });

        check_items.on('click', function () {
            check_all.prop('checked', check_items.length == table.find('tbody>tr>td:nth-child(1) :checked').length);
        });

    });
};

    // $.fn.publishedSwitch = function (options) {
    //     var defaults = {
    //         inverse: true,
    //         onText: "开启",
    //         offText: "关闭"
    //     };

    //     var options = $.extend(defaults, options)

    //     return this.each(function(){

    //         $(this).bootstrapSwitch({
    //             inverse: options.inverse,
    //             onText: options.onText,
    //             offText: options.offText
    //         }).on("switchChange.bootstrapSwitch", function (e, data) {
    //             var url = $(this).data('url');
    //             $.post({
    //                 url: url,
    //                 method: 'post',
    //                 success: function (data) {

    //                 }
    //             });
    //         });

    //     });
    // }
})(jQuery);

$(function () {
    //$('.date').datepicker({
    //    changeMonth: true,
    //    changeYear: true,
    //    showOtherMonths: true,
    //    selectOtherMonths: true
    //});
    //
    //$('.tabs').tabs();

    $('.table-style').checkAll();

    // $('.published').publishedSwitch();
});