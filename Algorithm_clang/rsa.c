#include "rsa.h"

#include "bbia/bbia.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define throw(MSG) fprintf(stderr, "%s\n",MSG)

static struct __rsa_key {
	bbia * modulus;
	bbia * exponent;
}
static typedef struct __rsa_key rsa_key;

struct __rsa_public_key {
	rsa_key * public;
}

struct __rsa_private_key {
	rsa_key * private;
}

struct __rsa_string_encrypted {
	bbia ** self;
	int size;
	rsa_public_key * public;
}

void rsa_keys_generate (rsa_public_key * pub, rsa_private_key * priv) {

}

rsa_string_encrypted * rsa_string_encrypt (const char * str, rsa_public_key * key) {

	return NULL;
}

char * rsa_string_decrypt (const rsa_string_encrypted * self, rsa_private_key * key) {

	return NULL;
}
