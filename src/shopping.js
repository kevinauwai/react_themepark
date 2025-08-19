import { productlist } from "./data";
class UIGoods{
    constructor(g){
        this.data=g;
        this.choose=0;
    }
    //get total price
    getTotalPrice(){
        return this.data.price*this.choose;
    }
    isChoose(){
        return this.choose>0;
    }
    increase(){
        this.choose++;
    }
    decrease(){
        if(this.choose===0){    
            return;
        }
        this.choose--;
    }
}
class UIData{
    constructor(){
        let uiGoods=[];
        for(let i=0;i<productlist.length;i++){
            let uig=new UIGoods(productlist[i]);
            uiGoods.push(uig);
        }
        this.uiGoods=uiGoods;
    }
    getTotalPrice(){
        const result = this.uiGoods.reduce( ( sum, { x } ) => sum + x.choose , 0);
        return result;
    }
    increase(index){
        this.uiGoods[index].increase();
    }
    decrease(index){
        this.uiGoods[index].decrease();
    }
    getTotalChooseNumber(){

    }
}
const UIShop =new UIData();
export default UIShop;
