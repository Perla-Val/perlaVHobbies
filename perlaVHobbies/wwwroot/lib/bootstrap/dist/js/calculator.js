$(document).ready(function () {
    $('#calculatorForm').submit(function (e) {
        e.preventDefault();
        var hours = parseInt($('#hours').val());
        var hourlyRate = parseInt($('#hourlyRate').val());
        if (!isNaN(hours) && hours > 0) {
            var total = hours * hourlyRate;
            $('#total').text('Total: $' + total);
        } else {
            alert('Please enter a valid number of hours.');
        }
    });
});