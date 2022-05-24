           // num = num +１;
           //   getDATA();
          const element1 = document.getElementById("myBar1");
          const element2 = document.getElementById("myBar2");     
          let width = 0;
          $(function(){
 	         const id = setInterval(getDATA, 3000);
 	       //  const id2 = setInterval(getDATA2, 5000);  
          });
               
          function getDATA() {
        	     //  var num += 1 ;
        	     //  num += 1 ;
        	     //  document.getElementById("date").innerHTML = text;    	 
               //  dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"); // Saturday, June 9th, 2007, 5:46:21 PM
               //  $('#date').html(text);
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
                 	           $("#h11").html('股票名稱：' + item3 ); 
                             }
                             if (key3 === '6') {
                 	           $("#h12").html('股價：' + item3 ); 
                             }
                             if (key3 === '11') {
                 	           $("#h13").html('(漲／跌)：' + item3 ); 
                             } 
                             if (key3 === '12') {
                 	           $("#h14").html('最高：' + item3 ); 
                             }
                             if (key3 === '13') {
                 	           $("#h15").html('最低：' + item3 ); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
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
                 	              $("#h21").html('股票名稱：' + item31 ); 
                             }
                             if (key31 === '6') {
                 	              $("#h22").html('股價：' + item31 ); 
                             }
                             if (key31 === '11') {
                 	              $("#h23").html('(漲／跌)：' + item31 ); 
                             } 
                             if (key31 === '12') {
                 	              $("#h24").html('最高：' + item31 ); 
                             }
                             if (key31 === '13') {
                 	              $("#h25").html('最低：' + item31 ); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                  }
                 });
                });    
              //  Ending another stock section   
               };           
