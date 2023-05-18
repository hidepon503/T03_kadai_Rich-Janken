// ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
    
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
// ハンバーガーメニューここまで



// 猫の鳴き声
const catV = new Audio("/audio/nakigoe.mp3");
const catV2 = new Audio("/audio/nakigoe2.mp3");
const catV3 = new Audio("/audio/nakigoe3.mp3");
const catV4 = new Audio("/audio/nakigoe4.mp3");

// 猫の写真
const umi = "./img/cats/umi.jpg";
const buu = "./img/cats/bu-.jpg";
const kiki = "./img/cats/kiki.jpg";
const maru = "./img/cats/maru.jpg";
const mi = "./img/cats/mi-.jpg";
const mohu = "./img/cats/mohu.jpg";
const nene = "./img/cats/nene.jpg";
const neru = "./img/cats/neru.jpg";
const ran = "./img/cats/ran.jpg";
const tama = "./img/cats/tama.jpg";

// マッチングスタートボタン
$("#matching-start").on("click", function () {
    $("#matching-start").css("display", "none");
    $("#matching-container").css("display", "block");
    $("#matching-container").css("display", "flex");
    $("#matching-container").css("justify-content", "center");
    $("#matching-container").css("align-items", "center");
    
    // Nextボタンを押した時の処理
        // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 10);
        let imgUrl = "";
        let name = "";
        let area = "";
        let age = "";
        let jander = "";
        let type = "";
        let discrition = "";
        
        if (i === 1) {
            imgUrl = umi;
            name = "うみ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "うみは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 2) {
            imgUrl = buu;
            name = "ぶー";
            area = "東京都";
            age = "2";
            jander = "オス";
            type = "雑種";
            discrition = "ぶーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 3) {
            imgUrl = kiki;
            name = "きき";
            area = "東京都";
            age = "1";
            jander = "メス";
            type = "雑種";
            discrition = "ききは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 4) {
            imgUrl = maru;
            name = "まる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "まるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 5) {
            imgUrl = mi;
            name = "みー";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "みーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 6) {
            imgUrl = mohu;
            name = "もふ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "もふは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander); 
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 7) {
            imgUrl = nene;
            name = "ねね";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種"; 
            discrition = "ねねは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 8) {
            imgUrl = neru;
            name = "ねる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "ねるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 9) {
            imgUrl = ran;
            name = "らん";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "らんは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        }
        else {
            imgUrl = tama;
            name = "たま";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "たまは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        };
});
// Next Buttonを押した時の処理

    $("#next").on("click", function () {
           // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 10);
        let imgUrl = "";
        let name = "";
        let area = "";
        let age = "";
        let jander = "";
        let type = "";
        let discrition = "";
        
        if (i === 1) {
            imgUrl = umi;
            name = "うみ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "うみは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 2) {
            imgUrl = buu;
            name = "ぶー";
            area = "東京都";
            age = "2";
            jander = "オス";
            type = "雑種";
            discrition = "ぶーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 3) {
            imgUrl = kiki;
            name = "きき";
            area = "東京都";
            age = "1";
            jander = "メス";
            type = "雑種";
            discrition = "ききは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 4) {
            imgUrl = maru;
            name = "まる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "まるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 5) {
            imgUrl = mi;
            name = "みー";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "みーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 6) {
            imgUrl = mohu;
            name = "もふ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "もふは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander); 
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 7) {
            imgUrl = nene;
            name = "ねね";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種"; 
            discrition = "ねねは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 8) {
            imgUrl = neru;
            name = "ねる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "ねるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 9) {
            imgUrl = ran;
            name = "らん";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "らんは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        }
        else {
            imgUrl = tama;
            name = "たま";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "たまは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        };
    });
    
    