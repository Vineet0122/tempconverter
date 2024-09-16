function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('tempValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = celsiusToFahrenheit(value);
        } else if (toUnit === "Kelvin") {
            result = celsiusToKelvin(value);
        } else {
            result = value;
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            result = fahrenheitToCelsius(value);
        } else if (toUnit === "Kelvin") {
            result = fahrenheitToKelvin(value);
        } else {
            result = value;
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            result = kelvinToCelsius(value);
        } else if (toUnit === "Fahrenheit") {
            result = kelvinToFahrenheit(value);
        } else {
            result = value;
        }
    }

    document.getElementById('result').textContent = `${value} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}
