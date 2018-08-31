


function startProcess() {

    var length;
    var width;
    var height;
    var i;
    var result;



    for (i = 1; i <= 10; i++) {
        length = i + 2;
        width = i + 3;
        height = i + 4;

        result = getVolume(length, width, height);

        if (result >= 0 && result <= 300) {

            document.write('Small Volume: ' + result + '<br>');
        }


        else if (result >= 301 && result <= 600) {
            document.write('Medium Volume: ' + result + '<br>');
        }

        else if (result >= 601 && result <= 1000) {
            document.write('Large Volume: ' + result + '<br>');
        }
        else if (result >= 1001) {
            document.write('Extra Large Volume: ' + result + '<br>');
        }
    }

}
   
  function getVolume(length, width, height) {
    return length * width * height;

}

