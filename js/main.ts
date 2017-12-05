class Calculation{
    public amount
    public rate
    public dc


    constructor(){
        this.amount = parseFloat((<HTMLInputElement>document.getElementById("amount")).value)
        this.rate   = parseFloat((<HTMLInputElement>document.getElementById("rate")).value)
        this.dc     = parseFloat((<HTMLInputElement>document.getElementById("dc")).value)
    }

    public ltr(){
        let l = ( (this.amount) / (this.rate + this.dc + (this.dc * 0.18) ) )
        return parseFloat(l.toFixed(2));
    }

    public cAmount(){
        return parseFloat((this.ltr() * this.rate).toFixed(2))
    }

    public cDeliveryCharge(){
        return parseFloat((this.ltr() * this.dc).toFixed(2))
    }

    public cGst(){
        return parseFloat((this.cDeliveryCharge() * 0.18).toFixed(2))
    }

    public total(){
        return (this.cAmount() + this.cGst() + this.cDeliveryCharge())
    }

    public print(){
        document.getElementById("l").innerHTML = ""+this.ltr()
        document.getElementById("a").innerHTML = ""+this.cAmount()
        document.getElementById("r").innerHTML = ""+this.cDeliveryCharge()
        document.getElementById("d").innerHTML = ""+this.cGst()
        document.getElementById("total").innerHTML = ""+this.total()
    }

}


function init(){
    let a = new Calculation()
    a.print()
}






