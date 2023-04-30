function getDateTimeWithLuxon(){

    /* returns a string with 'DD/MM/YY HH:MM:SS' */

    const now = luxon.DateTime.now();
    let year = now.year.toString();
    let month = now.month.toString();
    let day = now.day.toString();
    let hour = now.hour.toString();
    let minute = now.minute.toString();
    let second = now.second.toString();
    if (now.month < 10){
        month = '0' + month;
    }
    if (now.day < 10){
        day = '0' + day;
    }
    if (now.hour < 10){
        hour = '0' + hour;
    }
    if (now.second < 10) {
        second = '0' + second;
    }
    if (now.minute <10) {
        minute = '0' + minute;
    }
    let fullDateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;

    return fullDateTime

}

function updateScroll(){
    var element =  document.getElementById("mainChat");
    element.scrollTop = element.scrollHeight;
}

/* function searchChat(){
    var input = document.getElementById('inputCercaChat');
    var filter = input.value.toUpperCase();
    var divChatCard = document.getElementById('divChatCard');



} */