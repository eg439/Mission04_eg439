

$('#btnSend').click(function () {
    // getting info from the form
    asngPct = (((parseInt($('#assignments').val()))/100) * 0.50);

    groupPct = (((parseInt($('#groupProjects').val())) / 100) * 0.10);

    quizzPct = (((parseInt($('#quizzes').val())) / 100) * 0.10);

    midtermPct = (((parseInt($('#midtermExam').val())) / 100) * 0.10);

    finalPct = (((parseInt($('#finalExam').val())) / 100) * 0.10);

    intexPct = (((parseInt($('#intex').val())) / 100) * 0.10);

    // calculating totalpct
    totalPct = asngPct + groupPct + quizzPct + midtermPct + finalPct + intexPct;
    totalPct = totalPct.toFixed(2);

    // getting the output
    if (totalPct >= 94) {
        textResult = totalPct + '% is your percentage and A is your lettergrade';
    } else if ((totalPct < 94) & (totalPct >= 90)) {
        textResult = totalPct + '% is your percentage and A- is your lettergrade';
    } else if ((totalPct < 90) & (totalPct >= 87)) {
        textResult = totalPct + '% is your percentage and B+ is your lettergrade';
    } else if ((totalPct < 87) & (totalPct >= 84)) {
        textResult = totalPct + '% is your percentage and B is your lettergrade';
    } else if ((totalPct < 84) & (totalPct >= 80)) {
        textResult = totalPct + '% is your percentage and B- is your lettergrade';
    } else if ((totalPct < 80) & (totalPct >= 77)) {
        textResult = totalPct + '% is your percentage and C+ is your lettergrade';
    } else if ((totalPct < 77) & (totalPct >= 74)) {
        textResult = totalPct + '% is your percentage and C is your lettergrade';
    } else if ((totalPct < 74) & (totalPct >= 70)) {
        textResult = totalPct + '% is your percentage and C- is your lettergrade';
    } else if ((totalPct < 70) & (totalPct >= 67)) {
        textResult = totalPct + '% is your percentage and D+ is your lettergrade';
    } else if ((totalPct < 67) & (totalPct >= 64)) {
        textResult = totalPct + '% is your percentage and D is your lettergrade';
    } else if ((totalPct < 64) & (totalPct >= 60)) {
        textResult = totalPct + '% is your percentage and D- is your lettergrade';
    } else if (totalPct < 60) {
        textResult = totalPct + '% is your percentage and E is your lettergrade';
    }
    //returning the output to a paragraph tag
    return document.getElementById('output').innerHTML = textResult;

})

