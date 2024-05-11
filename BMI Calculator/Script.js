const form = document.querySelector('form')
        // we can not select id 'height' here because it gives us empty value.
        // const height = parseInt(document.querySelector('#height').value)  // gives empty value.

        form.addEventListener('submit', function(e){
            e.preventDefault()

            const height = parseInt(document.querySelector('#height').value)
            const weight = parseInt(document.querySelector('#weight').value)
            const result = document.querySelector('#result')

            if(height === '' || height < 0 || isNaN(height))
            {
                result.innerHTML = `Please give a valid height ${height}`
            }
            if(weight === '' || weight < 0 || isNaN(weight))
            {
                result.innerHTML = `Please give a valid weight ${weight}`
            }
            else{
                const BMI = (weight/((height*height)/10000)).toFixed(2)
                // Show the result
                // result.innerHTML = `<span>${BMI}</span>`;

                if(BMI<18.6)
                {
                    result.innerHTML = `BMI value is ${BMI} and you are Under Weight`;
                }
                else if(BMI>=18.6 && BMI<=24.9)
                {
                    result.innerHTML = `BMI value is ${BMI} and you are Normal`;
                }
                else{
                    result.innerHTML = `BMI value is ${BMI} and you are Overweight`;
                }
            }
            
        })
