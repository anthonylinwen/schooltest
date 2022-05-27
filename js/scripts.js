           // num = num +１;
           //   getDATA();
          const element1 = document.getElementById("myBar1");
          const element2 = document.getElementById("myBar2");     
          let width = 0;
          let text ='' ;
          $(function(){
 	         const id = setInterval(getDATA, 15000);
 	       //  const id2 = setInterval(getDATA2, 5000);  
          });
               
          function getDATA() {
          	   var d = new Date();
        	     //  var num += 1 ;
        	     //  num += 1 ;
        	     //  document.getElementById("date").innerHTML = text;    	 
              // text = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"); // Saturday, June 9th, 2007, 5:46:21 PM
               $('#date1').html(d.getMonth() + '/' + d.getDate() + '__' + d.getHours() + ':'  + d.getMinutes());
               if (width === 100) {
                   clearInterval(id1);
                   } else {
                    width += 7 ;
                   if (width > 50) width = width-50 ; 
                      element1.style.width = width + '%'; 
                      element2.style.width = width + '%'; 
                   }            	
                $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2449:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');
                    var itemData = item1; 	          
                    $.each(itemData,function(key2,item2){
                    	if (key2  === 'quote' ) {
                    		  var itemData2 = item2;
                    		//  console.log(itemData2); 	
                    		  $.each(itemData2,function(key3,item3){  
                             if (key3 === '200009') {
                 	           $("#span11").html(item3); 
                             }
                             if (key3 === '6') {
                 	           $("#span12").html(item3);}
                             if (key3 === '11') {
                             	  if (item3> 0) 
                             	      {
                             	       	$("#span12").addClass("risePrice"); 
                             	       	$("#span13").addClass("risePrice"); 
                             	       // $("#span13").html("＋" +　item3); 	
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#span12").addClass("flatPrice"); 
                             	       $("#span13").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#span12").addClass("fellPrice"); 
                             	       $("#span13").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#span13").html(item3); 
                             } 
                             if (key3 === '12') {
                 	               $("#span14").html(item3); 
                             }
                             if (key3 === '13') {
                 	               $("#span15").html(item3); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#span14").html() >= $("#span12").html() - $("#span13").html())
                       {
                       	  $("#span14").addClass("highestPrice");
                       }  
                       else {
                       	  $("#span14").addClass("lowestPrice");
                       }
                       if ($("#span15").html() >= $("#span12").html() - $("#span13").html())
                       {
                       	  $("#span15").addClass("highestPrice");
                       }  
                       else {
                       	  $("#span15").addClass("lowestPrice");
                       }                  
                  }
                 });
                });     
                     
              //  Another stock section   
                 $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2324:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 	          
                    $.each(itemData11,function(key21,item21){
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#span21").html(item31); 
                             }
                             if (key31 === '6') {
                 	              $("#span22").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#span22").addClass("risePrice"); 
                             	       	$("#span23").addClass("risePrice"); 
                             	       // $("#span13").html("＋" +　item3); 	
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                             	  	 	  $("#span22").addClass("flatPrice"); 
                             	        $("#span23").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#span22").addClass("fellPrice"); 
                             	       $("#span23").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#span23").html(item31); 
                             } 
                             if (key31 === '12') {
                 	               $("#span24").html(item31); 
                             }
                             if (key31 === '13') {
                 	               $("#span25").html(item31); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#span24").html() >= $("#span22").html() - $("#span23").html())
                          {
                       	    $("#span24").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span24").addClass("lowestPrice");
                          }
                       if ($("#span25").html() >= $("#span22").html() - $("#span23").html())
                          {
                       	  $("#span25").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span25").addClass("lowestPrice");
                       }                  
                  }
                 });
                });    
              //  Ending another stock section 
              //  Weighed index  section   
                 $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?symbol=TWS:TSE01:INDEX&resolution=D&quote=1&from=NaN&to=NaN',function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 	          
                    $.each(itemData11,function(key21,item21){
                      if (key21  === 'o' ){
                    	   $("#wi-o").html('開:' + item21); 
                      	}
                    	if (key21  === 'h' ){
                    	   $("#wi-h").html('高:' +item21); 
                    	 	}
                    	if (key21  === 'l' ){
                    	   $("#wi-l").html('低:' + item21); 
                    	 	}
                    	if (key21  === 'c' ){
                    	   $("#wi-c").html('尾:' + item21);                     	                   	 	
                    	}
                    	
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#wi-t").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#wi-d").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                              	  	  $("#wi-d").addClass("flatPrice");                             	  	 		
                             	  	 }
                             	  	 else {

                             	       $("#wi-d").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#wi-d").html('(+/-)' +　item31); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#span24").html() >= $("#span22").html() - $("#span23").html())
                          {
                       	    $("#span24").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span24").addClass("lowestPrice");
                          }
                       if ($("#span25").html() >= $("#span22").html() - $("#span23").html())
                          {
                       	  $("#span25").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span25").addClass("lowestPrice");
                       }                  
                  }
                 });
                });    
              //  Ending Weighed index section     
               };           
