function Cart() {
    //state variable
  const Product=["Milk","Tea","Butter","Cheese","Maggie"]
  const Price=[100,30,120,220,200];
  var Product_Qty=[0,0,0,0,0];
  var [Quantity,Set_Quantity]=React.useState(Product_Qty);
  var [Total_Quantity, Set_Total_Quantity]=React.useState(0);
    
   var Calulate_Qty=()=>{
     var total=0;
     Quantity.forEach(q=> {
       total +=q;
     });
     return total;
   };
   
  var Calcluate_Amount = () => {
      var total = 0;
      Quantity.forEach((q, index) => {
        total += q * Price[index];
      });
  
      return total;
    };
    
   var AddToCart = index => {
      Set_Quantity(Quantity.map((q, i) => i == index ? q + 1 : q));
    };
  
    function RemoveCart(index) {
      Set_Quantity(Quantity.map((q, i) => i == index && q > 0 ? q - 1 : q));
    };
  
    return (
      React.createElement("div", null,
      Product.map((nm, index) => 
      React.createElement("div", { key: index }, 
      React.createElement("h3", null, nm, " : ", Price[index], ", Qty: ",
      Quantity[index]), 
      React.createElement("button", { onClick: () => AddToCart(index) }, "Add"), 
      React.createElement("button", { onClick: () => RemoveCart(index) }, "Remove"))), 
  
      React.createElement("h4", null, "Total Quantity :- ", Calulate_Qty()), 
      React.createElement("h4", null, "Total Amount :- ", Calcluate_Amount())));
  };
  ReactDOM.render( <Cart/>, document.getElementById("root"));
