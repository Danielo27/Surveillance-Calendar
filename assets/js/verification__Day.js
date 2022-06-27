/*Danielo27 Surveillance Calendar v0.1.1*/

function verificationDay(request) {
    var response = 0;
    switch (request) {
        case 0:
            response = 1;
            break;
        case 1:
            response = 2;
            break;
        case 2:
            response = 3;
            break;
        case 3:
            response = 4;
            break;
        case 4:
            response = 5;
            break;
        case 5:
            response = 6;
            break;
        case 6:
            response = 0;
            break;
    }
    return response;
}