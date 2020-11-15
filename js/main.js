$(document).ready(function () {
    const valRules = {
        weight: {
            required: true,
            digits: true,
            range: [88, 353],
        },
        height: {
            required: true,
            digits: true,
            range: [59, 79],
        },
    };

    const valMessages = {
        weight: 'Please enter a number between 88 and 353 lbs',
        height: 'Please enter a number between 59 and 79 inches',
    };

    $('form').validate(
        {
            rules: valRules,
            messages: valMessages,
            submitHandler: bmiSubmit(),
        }
    );

    function bmiSubmit() {
        console.debug('???')
        const bmi = ( //Mass divided by height
            $('#weight').val() / Math.sqrt($('#height').val())
        )
        let bmiClass = '';

        if (bmi <= 18) {
            bmiClass = 'underweight';
        } else if (bmi <= 23) {
            bmiClass = 'normal';
        } else {
            bmiClass = 'overweight';
        }

        $('#bmiOut').text('Your BMI Class is ' + bmiClass +
            ' with a BMI value of ' + bmi);
    }
});