// 改变时间戳
export default function(a, num) {
    var a = a * 1000
    var newDate = new Date()
    Date.prototype.format = function (format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                    date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }
    newDate.setTime(a);
    switch (num) {
        case 1:
            return (newDate.format('yyyy/MM/dd h:m:s'));
            break;
        case 2:
            return (newDate.format('dd'));
            break;
        case 3:
            return (newDate.format('h:mm'));
            break;
        default:
            break;
    }
}

