/**
 * new-product.js
 */

 "use strict";

 $(document).ready(function(){
     $("#productForm").submit(
         function(event){
             event.preventDefault();
             const prodName = $("#name").val();
             const quantity = $("#quantityInStock").val();
             const suplier = $("#supplier").val();

             const divFormData = $("#result");
             $("#pname").text(prodName);
             $("#qty").text(quantity);
             $("#sup").text(suplier);
            
             divFormData.css("display","block");
         }
     );
 });