var elForm = document.querySelector('.travel__form'),
    elInput = document.querySelector('.travel__form-input'),
    elValidator = document.querySelector('.validator'),
    elFoot = document.querySelector('.travel__transport-time.foot'),
    elBicycle = document.querySelector('.travel__transport-time.bicycle'),
    elCar = document.querySelector('.travel__transport-time.car'),
    elPlane = document.querySelector('.travel__transport-time.plane');

// Transport types speeds
var footSpeed = 3.6,
    bicycleSpeed = 20.1,
    carSpeed = 70,
    planeSpeed = 800;

function transportTime(time) {
    var hour = Math.floor(time),
        minute = Math.floor((time - hour) * 60),
        secunde = Math.floor(((time - hour)*60 - minute) * 60),
        result = `${hour}soat ` + `${minute}minut ` + `${secunde}secund`;
    return result;
}

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var elInputValue = Number(elInput.value.trim());

    elInput.value = null;
    if( elInputValue < 0 || isNaN(elInputValue)) {
        elValidator.style.color = 'red';
        elValidator.textContent = 'Masofani to\'g\'ri kiriting';
        return;
    }else {
        elValidator.style.color = 'transparent';
    }

    var elFootResult = elInputValue / footSpeed,
        elBicycleResult = elInputValue / bicycleSpeed,
        elCarResult = elInputValue / carSpeed,
        elPlaneResult = elInputValue / planeSpeed;

    elFoot.textContent = transportTime(elFootResult);
    elBicycle.textContent = transportTime(elBicycleResult);
    elCar.textContent = transportTime(elCarResult);
    elPlane.textContent = transportTime(elPlaneResult);
})