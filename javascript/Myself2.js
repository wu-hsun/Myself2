
$(function(){

    var I = $('.about').offset().top
    var J = $('.exp').offset().top
    var K = $('.pro').offset().top
    var L = $('.contact').offset().top

    $('#btn1').click(function(){
        $('html,body').animate({scrollTop: I}, 400)
        return false
    })

    $('#btn2').click(function(){
        $('html,body').animate({scrollTop: J}, 600)
        return false
    })

    $('#btn3').click(function(){
        $('html,body').animate({scrollTop: K}, 800)
        return false
    })

    $('#btn4').click(function(){
        $('html,body').animate({scrollTop: L}, 1000)
        return false
    })

    $('#backTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000)
        return false
    })

    // document.getElementById('exp1').onmouseover = chText;
	// document.getElementById('exp2').onmouseover = chText;
	// document.getElementById('exp3').onmouseover = chText;
    // document.getElementById('exp4').onmouseover = chText;
    // document.getElementById('exp5').onmouseover = chText;

    for(var i = 1 ; i < 6 ; i++){
        $('#exp' + i).mouseover(chText)
    }

	var targetText = document.getElementById('myExp');

    var showTT = new Array()
    showTT[0] = '<p><span>儲備主管 - 2022<br>新覺吉業有限公司（建材／傢俱批發業）<br>經營管理主管 台中市神岡區</span><br><br>這是份外銷傢俱的批發業<br>廠外從計設-打模-客戶下單-製造-檢驗-修復-包裝到最後上櫃<br>場內從訂料-檢驗-倉儲-試組到最後廠商驗收<br>工作內容非常豐富且有趣<br>上網搜尋堆高機就在自己的摸索下學會開了<br>原本去當接班人，可惜最終還是耐不住長時間的等待</p>';
    
    // var showTT = new Array('<p><span>儲備主管 - 2022<br>新覺吉業有限公司（建材／傢俱批發業）<br>經營管理主管 台中市神岡區</span><br><br>這是份外銷傢俱的批發業<br>廠外從計設-打模-客戶下單-製造-檢驗-修復-包裝到最後上櫃<br>場內從訂料-檢驗-倉儲-試組到最後廠商驗收<br>工作內容非常豐富且有趣<br>上網搜尋堆高機就在自己的摸索下學會開了<br>原本去當接班人，可惜最終還是耐不住長時間的等待</p>');
    
    // var showTT = ['<p><span>儲備主管 - 2022<br>新覺吉業有限公司（建材／傢俱批發業）<br>經營管理主管 台中市神岡區</span><br><br>這是份外銷傢俱的批發業<br>廠外從計設-打模-客戶下單-製造-檢驗-修復-包裝到最後上櫃<br>場內從訂料-檢驗-倉儲-試組到最後廠商驗收<br>工作內容非常豐富且有趣<br>上網搜尋堆高機就在自己的摸索下學會開了<br>原本去當接班人，可惜最終還是耐不住長時間的等待</p>'];

	function chText (){

		if(this.id == 'exp1'){
			$('#myExp').html(showTT[0]);
		}
		if(this.id == 'exp2'){
			targetText.innerHTML = '<p><span>焊接技師 - 2021<br>松庚機械有限公司（金屬加工用機械製造修配業）<br>焊接人員 電銲、氬焊、洗床 新北市板橋區</span><br><br>想精進技能所以下班後找了一份兼職<br>在這有各形式的鐵器讓我完成焊接<br>沒想到焊接的手法還被同事競相效仿<br>老闆很欣賞我<br>喜歡把較難完成的焊接交由我完成<br>兼職和正職同時進步著的感覺讓我很愉快</p>';
		}
		if(this.id == 'exp3'){
			targetText.innerHTML = '<p><span>儲備主管 - 2018<br>玖聯實業有限公司（其他金屬相關製造業）<br>焊接人員 新北市三重區</span><br><br>因家庭因素收起了自己的事業來到這<br>在這學到焊接、雷射切割、折床、沖床和AUTO CAD繪圖<br>各項技術性的經驗<br>原本是要和同輩一起接下經營<br>但因上一輩留下的經營權問題而離開</p>';
		}
        if(this.id == 'exp4'){
			targetText.innerHTML = '<p><span>老闆 - 2016<br>RGB創意炒冰捲（餐飲業）<br>執行長 台中市北區</span><br><br>這份經驗真的非常的寶貴<br>一間店從無到有、到營運，每一刻都刻骨銘心<br>一路走來陸續有支持者加盟<br>每一步都讓我學到很多寶貴的經驗<br>很感謝大家，另外一提，有上新聞哦<br>右方影片中42秒受訪的就是我</p>';
		}
        if(this.id == 'exp5'){
			targetText.innerHTML = '<p><span>不動產經紀人 - 2015<br>永慶房屋仲介股份有限公司（不動產經營業）<br>不動產經紀人 新北市樹林區</span><br><br>完成不動產相關事務<br>幫助他人成家、換房圓夢<br>在這份工作學到聆聽他人需求和團隊合作<br>有幸在短短職涯中、蟬連兩個月的新人王<br>且在第三個月就與前輩的合作下就共同售出人生中第一間不動產<br>真的是一項不錯的工作經歷</p>';
		}

	}

})