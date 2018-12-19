function isPrime (toCheck) {
	if (toCheck.Check_IsOne() || toCheck.Check_IsSystemInteger(2) || toCheck.Check_IsSystemInteger(3)) return true;
	if (toCheck.Mod_New(2) === 0 || toCheck.Mod_New(3) === 0)
        	return false;
	let forCompare = new bbi(toCheck);
	forCompare.Sqrt();
	for (let i = new bbi(false,2); forCompare.CompareUnsigned (i) !== -1; i.Add(6)) {
		if (toCheck.Mod_New(i) === 0  || toCheck.Mod_New(i.Add_New(2)) === 0) return false;
	}
	return true;
}

function fibonachi (num) {
	if (num <= 1) return new bbi(false,num);

	let b = new  bbi(false, 1);
	let a = new  bbi();
	let c = new  bbi();
	for (i = 2; i <= num; i++)
	{
		a.Add(b);
	   	c.Copy(a);
	   	a.Copy(b);
	   	b.Copy(c);
	}
	return b;
}

function randomPrime_old () {
	let byNumber = Math.random() * (0xFFFF*8);
	// let byNumber = 0xFFFF*8;
	let fibPrime = fibonachi (byNumber);
	while (isPrime(fibPrime) === false)
		fibPrime = fibonachi (Math.random() * (0xFFFF*8));
	return fibPrime;
}

function generatePrimesFibonachi (filepath, num) {
	let wrStream = fs.createWriteStream(filepath, {
	  flags: 'a' // 'a' means appending (old data will be preserved)
  	});

	let b = new  bbi(false, 1);
	let a = new  bbi();
	let c = new  bbi();
	for (i = 2; i <= 10; i++)
	{
		a.Add(b);
	   	c.Copy(a);
	   	a.Copy(b);
	   	b.Copy(c);
		if (isPrime(b)) {
			console.log(b.toBaseOfTwo(64));
			wrStream.write (b.toBaseOfTwo(64));
		}
	}

	wrStream.end();
}

generatePrimes (file, num) {

	
}

// let test = new bbi(false, 7919);
// let test = new bbi(false, 3);
// console.log(isPrime (test));
// let test = randomPrime();
// console.log(test.lvlButton);
generatePrimesFibonachi('primes.txt', 0xFFFF*8);
