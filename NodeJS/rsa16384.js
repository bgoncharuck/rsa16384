const bbi = require ('./bbi/bbi.js');
let bbif = new bbi();

function key (modulus, exponent) {
	this.modulus = modulus;
	this.exponent = exponent;
}

function twoKeys (publicKey, privateKey) {
	this.publicKey = publicKey;
	this.privateKey = privateKey;
}

function encrypted () {
	this.length = 0;
	this.encryptedText = new Array();
}

function genarete_keys () {
	let firstPrime = new bbi();
	let secondPrime = new bbi();

	let from = new bbi (false, 5);
	let limit = new bbi ();
	limit.Set_Max();

	while (firstPrime.CompareUnsigned(secondPrime) === 0) {
		firstPrime.Copy (randomPrime (from, limit));
		secondPrime.Copy (randomPrime (from, limit));
	}

	const modulus = firstPrime.Mult_New (secondPrime);

	let privateKey = new key(modulus,0);
	let publicKey = new key(modulus,0);

	let totient = eulerTotient (modulus);
	/*TODO*/
	// if (isPowerOfTwo (modulus)) totient.Bits_ShiftRight (1);

	privateKey.exponent = randomPrime(1, totient);
	publicKey.exponent = modularMultiplicativeInverse (privateKey.exponent, totient);

	return new twoKeys (publicKey, privateKey);
}
