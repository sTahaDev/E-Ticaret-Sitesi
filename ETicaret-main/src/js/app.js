console.log("START");
let sepet = [];
let sepetGozuktu = false;
$(document).ready(function () {
    $(".sepetShow").hide();
   for (let index = 0; index < Items.length; index++) {
    
    $("#mycards").append(' <div class="col"> <div class="card" id="'+Items[index].id+'" style="width: 18rem; height: 28rem;"></div> </div> ');
    $("#"+Items[index].id).append('<img src="'+Items[index].imgurl+'" class="card-img-bottom" alt="..." style="width:95%; height:58%; margin-left: 3%; margin-top:2% ">');
    $("#"+Items[index].id).append('<div class="card-body"><h5 class="card-title">'+Items[index].name +'</h5> <p class="card-text">'+Items[index].comment +'</p> <h5>'+Items[index].price +' TL</h5> <a  id="'+Items[index].id +'" class="btn btn-primary">Satın Al</a></div>');
    
   }

   $("#mycards").children(".col").children(".card").children(".card-body").children("a").click(function (e) { 
    sepet.push({"name":Items[$(this).attr("id")].name,"price":Items[$(this).attr("id")].price})
    console.log(sepet)
    $(".sepetShow").show();
    if (sepetGozuktu == false){
        $(".sepetShow").append('<h5 id="sepeth5"></h5> <a class="btn btn-danger" id="sepetegit" href="./src/pages/sepet/sepet.html">Sepete Git</a>');
        $(".sepetShow").children("h5").text("Sepetinizde "+sepet.length +" ürün bulunmakta");
        sepetGozuktu = true;
    }else{
        $(".sepetShow").children("h5").text("Sepetinizde "+sepet.length +" ürün bulunmakta");
        
    }
    
    
    
   });
}); 
