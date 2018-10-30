#pragma once

typedef struct __rsa_public_key rsa_public_key;
typedef struct __rsa_private_key rsa_private_key;
typedef struct __rsa_string_encrypted rsa_string_encrypted;

void rsa_keys_generate (rsa_public_key * pub, rsa_private_key * priv) ;

rsa_string_encrypted * rsa_string_encrypt (const char * str, rsa_public_key * key) ;

char * rsa_string_decrypt (const rsa_string_encrypted * self, rsa_private_key * key) ;
