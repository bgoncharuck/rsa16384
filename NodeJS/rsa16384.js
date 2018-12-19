let fs = require('fs');
const {bbi} = require ('./bbi/bbi.js');
const Constants = require('./bbi/bbi_constants.js');

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
	let firstPrime = randomPrime();
	let secondPrime = randomPrime();

	while (firstPrime.CompareUnsigned(secondPrime) === 0) {
		firstPrime = randomPrime();
		secondPrime = randomPrime();
	}

	console.log (firstPrime.toBaseOfTwo(64));
	console.log (secondPrime.toBaseOfTwo(64));
	/*
	const modulus = firstPrime.Mult_New (secondPrime);

	let privateKey = new key(modulus,0);
	let publicKey = new key(modulus,0);

	let totient = eulerTotient (modulus);
	// @TODO
	// if (isPowerOfTwo (modulus)) totient.Bits_ShiftRight (1);

	privateKey.exponent = randomPrime(1, totient);
	publicKey.exponent = modularMultiplicativeInverse (privateKey.exponent, totient);

	return new twoKeys (publicKey, privateKey);
	*/
}

// genarete_keys();
