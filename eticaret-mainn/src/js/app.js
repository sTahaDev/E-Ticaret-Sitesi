let mysepet = [];
let sepetGozuktu = false;
let isSepetegit = false;

$(document).ready(function () {
   function app(){
        $(".sepetShow").hide();
        for (let index = 0; index < Items.length; index++) {
        
        $("#mycards").append(' <div class="col"> <div class="card" id="'+Items[index].id+'" style="width: 18rem; height: 28rem;"></div> </div> ');
        $("#"+Items[index].id).append('<img src="'+Items[index].imgurl+'" class="card-img-bottom" alt="..." style="width:95%; height:58%; margin-left: 3%; margin-top:2% ">');
        $("#"+Items[index].id).append('<div class="card-body"><h5 class="card-title">'+Items[index].name +'</h5> <p class="card-text">'+Items[index].comment +'</p> <h5>'+Items[index].price +' TL</h5> <a  id="'+Items[index].id +'" class="btn btn-primary" >Satın Al</a></div>');
        
        }
    
        $("#mycards").children(".col").children(".card").children(".card-body").children("a").click(function (e) { 
        mysepet.push({"name":Items[$(this).attr("id")].name,"price":Items[$(this).attr("id")].price})
        console.log(mysepet)
        $(".sepetShow").show();
        if (sepetGozuktu == false){
            $(".sepetShow").append('<h5 id="sepeth5"></h5> <a class="btn btn-danger" id="sepetegit" >Sepete Git</a>');
            $(".sepetShow").children("h5").text("Sepetinizde "+mysepet.length +" ürün bulunmakta");
            sepetGozuktu = true;
        }else{
            $(".sepetShow").children("h5").text("Sepetinizde "+mysepet.length +" ürün bulunmakta");
            
        } 
        $("#sepetegit").click(function (e) { 
           $("body").html(" ");
           for (let index = 0; index < mysepet.length; index++) {
            $("body").append("<center><div><h3>"+mysepet[index].name+": "+mysepet[index].price +" TL</h3></div> </center>");
            
           }
           $("body").append("<center><button id='mybtnOnay' class='btn btn-primary'>Onayla</button></center>");
           $("#mybtnOnay").click(function (e) { 
            alert("Rüyanıza Kargolandı")
            
           });
            
        });
        
        
        
        });
    }
    app();
    
    
    
}); 