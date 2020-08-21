 
   var total=0;
   var i=1;        
          function add(n){
            marque = "marque" +n;
            priceId= "price" + n;
            quantitéId = "quantité" +n;
            name= documentgetElementById(marque).innerHTML;
            price =document.getElementById(priceId).innerHTML;
            quantité= document.getElementById(quantitéId).value;
            var node = document.createElement("LI");
            item = "item" +i;
            node.setAttribute("id",item)
            itemCost[i-1] = Number(price) * Number(quantité);
            i+=1;
            var textnode = element.createTextNode(name+" "+quantité+" x "+price+"size:"+size);
            node.appendChild(textnode);
            document.getElementsById("items").appendChild(node);

            total += Number(price) * Number(quantité);
            document.getElementsById("total").innerHTML="total: " + total.toFixed(2) ;
          }

          let visitorName = prompt("Bonjour,Entrez votre nom : ")          