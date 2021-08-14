window.onload = function() {
    var workersTable = document.getElementById("paginate_worker_search");
    var i = 0;

    for (let tr of workersTable.rows) {
        /* -------------- 年齢 ---------------*/
        var tjb = tr.cells[6];
        var tjbDiv = tjb.querySelector(".shortcut");
        var age = tjbDiv.children[1].textContent.substring(0, 2);
        //高齢者
        if( age >= 65 ){
            //console.log(age);
            workersTable.rows[i].style.backgroundColor = "#FFD700";
        //年少者
        }else if( age < 18 ){
            //console.log(age);
            workersTable.rows[i].style.backgroundColor = "#b0c4de";
        }

        /* -------------- 健康診断 ---------------*/
        var hearthCheckDay  = new Date(tr.cells[7].children[0].textContent);
        var today = new Date();
        today.setFullYear(today.getFullYear() - 1);
        if (hearthCheckDay < today) {
            tr.cells[7].style.color = "#ff0000";
            tr.cells[7].style.fontWeight = "bold";
        }

        /* -------------- 血圧 ---------------*/
        var bloodPressureTag = tr.cells[8].children[0];
        var bloodPressure = bloodPressureTag.textContent.split("～");

        //低血圧はどうしようもないのでとりま高血圧だけ
        if(bloodPressure[0] >= 170 || bloodPressure[1] >= 90) {
            workersTable.rows[i].style.backgroundColor = "#ffa07a";
        }

        i++;
    }
}
