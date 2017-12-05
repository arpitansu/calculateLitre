var Calculation = /** @class */ (function () {
    function Calculation() {
        this.amount = parseFloat(document.getElementById("amount").value);
        this.rate = parseFloat(document.getElementById("rate").value);
        this.dc = parseFloat(document.getElementById("dc").value);
    }
    Calculation.prototype.ltr = function () {
        var l = ((this.amount) / (this.rate + this.dc + (this.dc * 0.18)));
        return parseFloat(l.toFixed(2));
    };
    Calculation.prototype.cAmount = function () {
        return parseFloat((this.ltr() * this.rate).toFixed(2));
    };
    Calculation.prototype.cDeliveryCharge = function () {
        return parseFloat((this.ltr() * this.dc).toFixed(2));
    };
    Calculation.prototype.cGst = function () {
        return parseFloat((this.cDeliveryCharge() * 0.18).toFixed(2));
    };
    Calculation.prototype.total = function () {
        return (this.cAmount() + this.cGst() + this.cDeliveryCharge());
    };
    Calculation.prototype.print = function () {
        document.getElementById("l").innerHTML = "" + this.ltr();
        document.getElementById("a").innerHTML = "" + this.cAmount();
        document.getElementById("r").innerHTML = "" + this.cDeliveryCharge();
        document.getElementById("d").innerHTML = "" + this.cGst();
        document.getElementById("total").innerHTML = "" + this.total();
    };
    return Calculation;
}());
function init() {
    var a = new Calculation();
    a.print();
}
