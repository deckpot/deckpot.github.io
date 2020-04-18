var tronWeb;
var waiting = 0;
var currentAddr;
async function main() {

    if (typeof(window.tronWeb) === 'undefined') {
        console.log('Waiting for tronWeb...');
        waiting += 1;
        if (waiting == 5) {
           // $("#tronWebModal").modal("hide");
          //  $("#noTronWebModal").modal("show");
             $('#check').modal('show');
        }
        setTimeout(main, 1000);
    } else {
        tronWeb = window.tronWeb;
        Decker = await tronWeb.contract().at("TPFYV7tbxZYpfdmrk8w8oWEXACTyEuBidW");
        
        BigNumber = tronWeb.BigNumber;
        currentAddr = tronWeb.defaultAddress['base58'];
        setTimeout(function() {
          //  $("#tronWebModal").modal("hide");
           // $("#noTronWebModal").modal("hide");
             $('#check').modal('hide');
        }, 2000);
        setInterval(function() {
            mainloop();
        }, 2000);
    }
}




function nFormatter(num) {
    isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
        formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }
    if (isNegative) {
        formattedNumber = '-' + formattedNumber
    }
    return formattedNumber;
}




function mainloop() {
    if (tronWeb.defaultAddress['base58'] !== currentAddr) {
        location.reload();
    }
    
    
     document.getElementById('referralAddress').value = currentAddr; 
    
      var dataRef = window.location.origin + "?ref=" + tronWeb.defaultAddress['base58']
       document.getElementById('referralURL').value = dataRef; 
    
 Decker.hasClaimed(currentAddr).call().then(result => {
        var amount = ((result.toString()));

          if(amount == "false"){
          
           $("#airdrop").show();
      }
      else{
          
           $("#airdrop").hide();
      }

    });
    
   


    console.log(currentAddr);
    
    Decker.TronBalnce().call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
       document.getElementById("bal").textContent = (amount / 1e6).toFixed(4);
        document.getElementById("bal2").textContent = (amount / 1e6).toFixed(4);


    });
    
      Decker.contractBalance().call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
       document.getElementById("contractBalance").textContent = (amount / 1e6).toFixed(4);
       


    });
    
    
      Decker.stakeBalance(currentAddr).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
       document.getElementById("stakebal").textContent = (amount / 1e6).toFixed(4);


    });
    
    
    
    
    
      Decker.DeckBal(currentAddr).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
       document.getElementById("deck").textContent = amount;


    });
    
    
    
    
    
     Decker.unitOwned(currentAddr,0).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
             document.getElementById("unit0").textContent = 'Not Owned / 10';
            
            }
            else if(amount >= 10){
                $("#ft0").hide();
                $("#ft1").hide();
                document.getElementById("unit0").textContent = amount;
                  }
         else{
               $("#ft0").hide();
              document.getElementById("unit0").textContent = amount + "/ 10";
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });
      Decker.unitOwned(currentAddr,1).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
             document.getElementById("unit1").textContent = 'Not Owned / 8';
            
            }
             else if(amount >= 8){
                 $("#ft2").hide();
                document.getElementById("unit1").textContent = amount;
                 
                  }
         else{
              document.getElementById("unit1").textContent = amount + "/ 8";
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });  Decker.unitOwned(currentAddr,2).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
             
             document.getElementById("unit2").textContent = 'Not Owned / 6';
            
            }
          else if(amount >= 6){
              $("#ft3").hide();
                document.getElementById("unit2").textContent = amount;
                  }
         else{
              document.getElementById("unit2").textContent = amount + "/ 6";
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });  Decker.unitOwned(currentAddr,3).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
             document.getElementById("unit3").textContent = 'Not Owned / 4';
            
            }
             else if(amount >= 4){
                 $("#ft4").hide();
                document.getElementById("unit3").textContent = amount;
                  }
         else{
              document.getElementById("unit3").textContent = amount + "/ 4";
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });  Decker.unitOwned(currentAddr,4).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
             document.getElementById("unit4").textContent = 'Not Owned / 1';
            
            }
            
         else{
             $("#ft6").hide();
              document.getElementById("unit4").textContent = 'Deck Boost Activated';
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });  Decker.unitOwned(currentAddr,5).call().then(result => {
        //console.log("sellPrice", result);
        var amount = ((result.toString()));
         
         if(amount < 1){
              document.getElementById("unit5").textContent = 'Not Owned / 1';
            
            }
         else{
              
             document.getElementById("unit4").textContent = 'Deck Boost Activated';
         }
      //  document.getElementById("bal").textContent = amount / 1e6;


    });   
    
    
    
    
 
    
    
    
    
 
}



 



function claimAirdrop() {
    
     var _trxneeded =  (document.getElementById('Address').value);
     Decker.claimAirdrop(_trxneeded).send({

    }).then(result => {
         
          $("#exampleModal").modal('hide');
         
        callback();
    }).catch((err) => {
        console.log(err)
    });

}






function buy0() {
    
     var _trxneeded =  (document.getElementById('in0').value);
     var data = _trxneeded * 50e6;
     Decker.buyUnit(0,_trxneeded).send({callValue : data

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function buy1() {
    
     var _trxneeded =  (document.getElementById('in1').value);
     var data = _trxneeded * 100e6;
     Decker.buyUnit(1,_trxneeded).send({callValue : data

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}


function buy2() {
    
     var _trxneeded =  (document.getElementById('in2').value);
     var data = _trxneeded * 500e6;
     Decker.buyUnit(2,_trxneeded).send({callValue : data

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}
function buy3() {
    
     var _trxneeded =  (document.getElementById('in3').value);
     var data = _trxneeded * 1000e6;
     Decker.buyUnit(3,_trxneeded).send({callValue : data

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function buy4() {
     var _trxneeded =  (document.getElementById('in4').value);
     var data = _trxneeded * 3000e6;
     Decker.buyUnit(4,_trxneeded).send({ 

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}
function buy5() {
    
     var _trxneeded =  (document.getElementById('in5').value);
    
     Decker.buyUnit(5,_trxneeded).send({ 

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function withdraw() {
    
    
     Decker.withdraw().send({ 

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function StakeToken() {
    
     var _trxneeded =  (document.getElementById('stake').value);
    var data =  _trxneeded * 1e6;
    
     Decker.StakeToken(data).send({ 

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}

function UnStakeToken() {
    
     var _trxneeded =  (document.getElementById('stake').value);
    var data =  _trxneeded * 1e6;
    
     Decker.UnStakeToken(data).send({ 

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });

}









function recycle() {
    var _trxneeded = (document.getElementById('recyclebox').value);
    var _amt = _trxneeded * 1e6;


    var countrycode = (document.getElementById('number').value)

    Decker._addToRecycle(_amt, countrycode).send({

    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
        
       
    });

}






$('#in0').on('keyup input', function() {

  var amt =  document.getElementById('in0').value;
    document.getElementById('pirce0').textContent = amt * 50;
   
});
$('#in1').on('keyup input', function() {

  var amt =  document.getElementById('in1').value;
    document.getElementById('price1').textContent = amt * 100;
   
});
$('#in2').on('keyup input', function() {

  var amt =  document.getElementById('in2').value;
    document.getElementById('price2').textContent = amt * 500;
   
});
$('#in3').on('keyup input', function() {

  var amt =  document.getElementById('in3').value;
    document.getElementById('price3').textContent = amt * 1000;
   
});
$('#in4').on('keyup input', function() {

  var amt =  document.getElementById('in4').value;
    document.getElementById('price4').textContent = amt * 3000;
   
});
$('#in0').on('keyup input', function() {

  var amt =  document.getElementById('in0').value;
    document.getElementById('price5').textContent = amt * 5000;
   
});

$('#Address').on('keyup input', function() {

  var amt =  document.getElementById('Address').value;
    if( amt == currentAddr){
       
         document.getElementById('check').textContent = "False Address";
       
       }
    else{
         document.getElementById('check').textContent = "True Address";
    }
    
   
});
 



 

$('#f1').on('click', function(){

    document.getElementById('country').textContent = "Africa";
    document.getElementById('number').value = 0;
    $('.flags').removeClass("activeflag");
    $('#f1').addClass("activeflag");


});
$('#f2').on('click', function() {

    document.getElementById('country').textContent = "Asia";
    document.getElementById('number').value = 1;
    $('.flags').removeClass("activeflag");
    $('#f2').addClass("activeflag");
});
$('#f3').on('click', function() {

    document.getElementById('country').textContent = "England";
    document.getElementById('number').value = 2;
    $('.flags').removeClass("activeflag");
    $('#f3').addClass("activeflag");
});

$('#f4').on('click', function() {

    document.getElementById('country').textContent = "Australia";
    document.getElementById('number').value = 3;
    $('.flags').removeClass("activeflag");
    $('#f4').addClass("activeflag");

});



 



$('#f5').on('click', function() {

    document.getElementById('country').textContent = "Usa";
    document.getElementById('number').value = 4;
    $('.flags').removeClass("activeflag");
    $('#f5').addClass("activeflag");
});



$('#sellmc').on('keyup input', function() {
    var buy1 = Number($("#sellmc").val());
    var result = (buy1 / 500000);
    document.getElementById('selldata').textContent = result.toFixed(2);

});



$('#depo').on('keyup input', function() {
    var buy1 = Number($("#depo").val());
    var result = (buy1 * 1e6) / 1e6;
    document.getElementById('samount').textContent = result.toFixed(2);

});

$('#buy1').on('keyup input', function() {
    var buy1 = Number($("#buy1").val());
    var result = 30 * buy1;
    document.getElementById('apxamount').textContent = result.toFixed(2);

});


main();