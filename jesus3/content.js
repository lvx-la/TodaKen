insuite_main.onload = function () {
    let countDownDays;
    let countDownWeeks;
    let progress;
    let howManyDays;
    let err;

    function getDaysnWeeks() {
        var today = new Date();
        var finishDay = new Date(2022, 2, 31, 17, 0, 0);
        var startedDay = new Date(2021, 3, 16, 8, 0, 0);

        var countDownMs = finishDay.getTime() - today.getTime();
        countDownDays = Math.ceil(countDownMs / (1000*60*60*24));
        countDownWeeks = Math.ceil(countDownDays / 7);

        //全体の日にちとそれに対する進捗（日）
        progress = Math.ceil((today.getTime() - startedDay.getTime()) / (1000*60*60*24));
        howManyDays = Math.ceil((finishDay.getTime() - startedDay.getTime()) / (1000*60*60*24));

        return 0;
    }

    function duplicate(shitenPolicyDiv) {
        //新要素作成
        var contentArea = shitenPolicyDiv;
        var cloneElement = contentArea.cloneNode(true);
        cloneElement.id = "personal_policy";

        cloneElement.children[0].src = "https://lh3.googleusercontent.com/YXMfHnvsXNU8K6ItxNhYOUwy2vClaRpH_KgFDWR5Ki4BA-zlTGaYJjEMRgew4mYkpbbAVMVzMlfNpTNFQfYYSkynMGIHsrZDgw7r3JI=s660"; //画像ファイルにしとく
        cloneElement.children[1].textContent = "今こそ未来（来年度）を見据え耐え抜く時だ";
        
        var apendProgressBar = document.createElement("progress");
        apendProgressBar.setAttribute("id", "countdownToHell");
        apendProgressBar.setAttribute("value", progress);
        apendProgressBar.setAttribute("max", howManyDays);
        cloneElement.appendChild(apendProgressBar);
        
        contentArea.after(cloneElement);

        return 0;
    }

    function main() {
        err = getDaysnWeeks();
        if(err != 0){
            console.log("DEATH AT Function getDaysnWeeks");
        }
        //JSでこれめっちゃ意味なかった

        //TODO DOMの指定だけできれば後は完成（のはず）
        if (insuite_main.querySelectorAll('.message-box').length) {
            shitenPolicyClass = insuite_main.getElementsByClassName("message-box");
            duplicate(shitenPolicyClass[1]);
        } else {
            console.log("Could Not Find any classes in documents");
        }
    }

    main();

    /*
    var elementcDownDays = document.getElementById("cDownDays");
    elementcDownDays.innerHTML = "後" + countDownDays + "日";

    var elementcDownWeeks = document.getElementById("cDownWeeks");
    elementcDownWeeks.innerHTML = countDownWeeks + "週間";

    //progress bar
    elementProgressBar = document.getElementById("cDownProgress");
    var progressUntilFinish = Math.ceil((today.getTime() - startedDay.getTime()) / (1000*60*60*24));
    var howManyDays = Math.ceil((finishDay.getTime() - startedDay.getTime()) / (1000*60*60*24));
    elementProgressBar.max = howManyDays;
    elementProgressBar.value = progressUntilFinish;
    */


}