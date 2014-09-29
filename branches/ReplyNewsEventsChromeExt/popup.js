	var nationalityValue = localStorage.nationality;
	var mainMenuValue = localStorage.mainMenu;
	
	var urlForScraper = "http://reply.eu/en/newsroom/newsitaly";
	var tipoNotizia = "NEWS";
	var sigla = "Italy";
	
	$(document).ready(function() {
			
			if(nationalityValue == "UK"){
				$('#UK').attr("class","button button2_select");
				$('#IT').attr("class","button");
				$('#DE').attr("class","button");
				sigla = "UK";
			}else if(nationalityValue == "DE"){
				$('#DE').attr("class","button button2_select");
				$('#UK').attr("class","button");
				$('#IT').attr("class","button");
				sigla = "Germany";
			}else{
				$('#IT').attr("class","button button2_select");
				$('#UK').attr("class","button");
				$('#DE').attr("class","button");
				sigla = "Italy";
			}
			$('#sigla').html(sigla);
			
			if(mainMenuValue == "news"){
				tipoNotizia = "NEWS";
				$('#news').attr("class","button button1_select");
				$('#events').attr("class","button");
				if(nationalityValue == "UK"){
					urlForScraper = "http://reply.eu/en/newsroom/newsuk/";
				}else if(nationalityValue == "DE"){
					urlForScraper = "http://reply.eu/en/newsroom/newsgermany/";
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/newsitaly/";
				}
			}else{
				tipoNotizia = "EVENT";
				$('#events').attr("class","button button1_select");
				$('#news').attr("class","button");
				if(nationalityValue == "UK"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsuk/";
				}else if(nationalityValue == "DE"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsgermany/";
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/eventsitaly/";
				}
			}	
			if(tipoNotizia == "EVENT"){
				$('#tipoNotizia').html("Events");
			}else{
				$('#tipoNotizia').html("News");
			}
			
			
			$('#reply_twitter_accounts').hide();
			 
			$("ul li").hover(
			  function () {
				  $(this).css("background","#3B3B3B");
			  }, 
			  function () {
				  $(this).css("background","");
			  }
			);
			
			$(".twitter_item").css("color","#000000")
			$(".twitter_item").hover(
			  function () {
				  $(this).css("color","#215231");
			  }, 
			  function () {
				  $(this).css("color","#000000");
			  }
			);			
			
			$("#reply_twitter").click(function () {
					$( "#reply_twitter_accounts" ).animate({
						opacity: 1,
						//left: "+=50",
						height: "toggle"
					  }, 3000, function() {
						// Animation complete.
					});
					
				 
				return false;
			});
			
			$("#UK").click(function () {
				$('#UK').attr("class","button button2_select");
				$('#IT').attr("class","button");
				$('#DE').attr("class","button");
				nationalityValue = "UK";
				
				if(tipoNotizia == "EVENT"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsuk/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("UK");
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/newsuk/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("UK");
				}
				
				ajaxLoadContent();
			});
			$("#IT").click(function () {
				$('#IT').attr("class","button button2_select");
				$('#UK').attr("class","button");
				$('#DE').attr("class","button");
				
				nationalityValue = "IT";
				
				if(tipoNotizia == "EVENT"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsitaly/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("Italy");
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/newsitaly/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("Italy");
				}
				
				ajaxLoadContent();
			});
			$("#DE").click(function () {
				$('#DE').attr("class","button button2_select");
				$('#UK').attr("class","button");
				$('#IT').attr("class","button");
				
				nationalityValue = "DE";
				
				if(tipoNotizia == "EVENT"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsgermany/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("Germany");
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/newsgermany/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("Germany");
				}
				
				ajaxLoadContent();
			});
			
			$("#news").click(function () {
				$('#news').attr("class","button button1_select");
				$('#events').attr("class","button");
				tipoNotizia = "NEWS";
				
				if(nationalityValue == "DE"){
					urlForScraper = "http://reply.eu/en/newsroom/newsgermany/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("Germany");
				}else if(nationalityValue == "UK"){
					urlForScraper = "http://reply.eu/en/newsroom/newsuk/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("UK");
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/newsitaly/";
					$("#tipoNotizia").html("News");
					$("#sigla").html("Italy");
				}
				
				ajaxLoadContent();
			});
			
			$("#events").click(function () {
				$('#news').attr("class","button");
				$('#events').attr("class","button button1_select");
				tipoNotizia = "EVENT";
				
				if(nationalityValue == "DE"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsgermany/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("Germany");
				}else if(nationalityValue == "UK"){
					urlForScraper = "http://reply.eu/en/newsroom/eventsuk/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("UK");
				}else{
					urlForScraper = "http://reply.eu/en/newsroom/eventsitaly/";
					$("#tipoNotizia").html("Events");
					$("#sigla").html("Italy");
				}
				
				ajaxLoadContent();
			});
			
			ajaxLoadContent();
	});
	
	
	function creaEntry(parUrl, parTitle, parDate, parSrc, parDescription, parTags){
	
		var urlNotizia = "http://reply.eu"+parUrl;

		var titleNotizia = parTitle;
		var dateNotizia = parDate;
		var srcNotizia = parSrc;
		
		var descriptionNotizia = parDescription;
		var tagsNotizia = parTags;
				
		var resultEntry = "<li><div style='position:relative;color:#FFFFFF;'>" +
				"<a class='titolo' href='"+urlNotizia+"' target='_blank'>" +
				titleNotizia +
				"</a>  <span class='reply_date'>["+dateNotizia+"]</span><br>" + 
					"<table>"+
						"<tr>"+
							"<td><img src='"+srcNotizia+"'/></td>" +
							"<td style='padding:5px;'>" +
							"<a href='https://twitter.com/share' class='twitter-share-button' data-text='"+titleNotizia+" in date ["+parDate+"] #ReplyEuChromeExt' data-url='"+urlNotizia+"' data-via='replyeu'>Tweet</a>" +
							"<div class='g-plusone' data-annotation='inline' data-size='medium' data-width='300' data-href='"+urlNotizia+"'></div><br>" +
							"<strong>"+tipoNotizia+"</strong> <span class='reply_tags'>["+tagsNotizia+"]</span><br>" + 
							descriptionNotizia +
							"</td>" +
						"</tr>" +
					"</table>" +
				"</div></li>"
				
		return resultEntry;
	
	}

	function ajaxLoadContent() {
			
			$("#loading").show();
			$(".content").html("");
			
			var urlNotizia = "";
			var titleNotizia = "";
			var dateNotizia = "";
			var srcNotizia = "";
			var descriptionNotizia = "";
			var tagsNotizia = "";
		
			$.ajax({
				url: urlForScraper,
				type: "GET",
				timeout: 5000,
				datattype: "html",
				success: function(data) {
				
						//scanner + parser
						$(data).find('div').each(function(){
							if($(this).attr("id") == "mostrecent"){
								var mostRecent = $(this);
								
								$(mostRecent).find('div').each(function(){
									if($(this).attr("class") == "risultati_ricerca"){
										var classRisultatiRicerca = $(this);
										
										$(classRisultatiRicerca).find('div').each(function(){
											if($(this).attr("class") == "col_sx"){
												var colSx = $(this);
												
												$(colSx).find('a').each(function(){
													//ottengo HREF
													urlNotizia = $(this).attr("href");
												});
												
												$(colSx).find('a img').each(function(){
													//ottengo SRC dell' immagine
													srcNotizia = $(this).attr("src");
												});
												
											}else if($(this).attr("class") == "col_dx"){
												var colDx = $(this);
												
												titleNotizia = $(colDx).find('h2 a').text();
												
												$(colDx).find('p').each(function(){
													if($(this).attr("class") == "float_sx"){
														dateNotizia = $(this).text().toString().replace(/(\t)+/g, '').replace(/(\s)+/g, '');
													}else if($(this).attr("class").indexOf("article_tag") >= 1){
														tagsNotizia = $(this).text().replace(" & ","&").replace(/(\t)+/g, '');
													}else if($(this).attr("class") == "search_dsc"){
														descriptionNotizia = $(this).text();
													}
												});
											
											}
										});
										
										//$("#response_parse_html").append(creaEntry(urlNotizia, titleNotizia, dateNotizia, srcNotizia, descriptionNotizia, tagsNotizia));
										
										$(".content").append(creaEntry(urlNotizia, titleNotizia, dateNotizia, srcNotizia, descriptionNotizia, tagsNotizia));
	
									}
									
								});

							}
						});
						
						$('#paging_container').pajinate({
							num_page_links_to_display : 3,
							items_per_page : 3	
						});
						//loading widgets Twitter in AJAX
						$.getScript('https://platform.twitter.com/widgets.js', function(){
							twttr.widgets.load();
						});
						//loading widgets Google in AJAX
						gapi.plusone.go();
						
						$("#loading").hide();
						
						$("ul li").hover(
						  function () {
							  $(this).css("background","#3B3B3B");
						  }, 
						  function () {
							  $(this).css("background","");
						  }
						);
							
				}
			});
			return false;
	}
	
	rewrites = [
	  [/chrome-extension:\/\/([a-z]+)\.twitter\.com/, 'https://$1.twitter.com'],
	  [/chrome-extension:\/\/([a-z]+)\.twimg\.com/, 'https://$1.twimg.com']
	];

	document.addEventListener('beforeload', function(e){
	  for (var i = 0, rule; rule = rewrites[i]; i++) {
		if (rule[0].test(e.url)) {
		  e.preventDefault();
		  e.stopPropagation();
		  e.srcElement.src = e.srcElement.src.replace(rule[0], rule[1]);
		  break;
		}
	  }
	}, true);