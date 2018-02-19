/**
 * Checking the whole number
 */
function isPrime(number) {
    if(Number(number)) {
		
	  var MaxNumber = 0;

	  if (number%2 === 0 && number !== 2)
	  {
		return false;
	  }
	  
	  if (number === 2)
	  {
		return true;
	  }

	  MaxNumber = Math.sqrt(number)

	  for (var i = 3; i<MaxNumber; i+=2)
	  {
		if (number%i == 0)
		{
		  return false;
		}
	  }

	  return true;
	
	} else {
        console.log('Incorrect data!');
    }
}
