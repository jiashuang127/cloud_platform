// $(document).ready(function(){
$(function () {
    initDropdown();
});

function DropDown(el) {
    this.dd = el;
    this.span = this.dd.children('span');
    this.li = this.dd.find('ul.dropdown li');
    this.val = '';
}

DropDown.prototype.initEvents = function () {
    var obj = this;
    obj.dd.off('click').on('click', function (event) {
        if (!$(this).hasClass("active")) {
            $(".dropdown_ul").removeClass('active');
        }
        $(this).toggleClass('active');
        event.stopPropagation();
    });
    obj.li.on('click', function () {
        var opt = $(this);
        obj.val = opt.html();
        if (obj.span.html() == obj.val) return;
        obj.span.html(obj.val).change();
        //把模拟选择框的值 赋给真实需要传给后台的input框
        opt.parent().prev('.sim_select_value').val($(this).data('value')).change();

    });
    $(document).click(function () {
        $('.test').removeClass('active');
    });

};

function initDropdown() {
    if ($(".dropdown_ul").length > 0) {
        $.each($(".dropdown_ul"), function (index, obj) {
            list = new DropDown($(obj));
            list.initEvents();
        });
    }
}

// 如果li中有selected的class, 则选择该选项，否则选择第一个
function selectOrFirst(obj) {
    var $this = $(obj).find("ul.dropdown"),
        $span = $this.siblings("span"),
        $input = $this.siblings(".sim_select_value");
    if ($input.val() == "") {
        if ($this.find("li.selected").length > 0) { //如果有active的则用active
            $li = $this.find("li.selected");
        } else { // 否则用第一个
            $li = $this.find("li:eq(0)");
        }
        $span.html($li.text());
        $input.val($li.data("value"))
    }
}