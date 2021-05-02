---
author	 	: Al Muhdil Karim
title    	: "Cara Memperkuat Algoritma Enkripsi Password Di Linux Pada PAM"
date		: 2021-04-23T01:24:00+07:00
draft		: true
date		: 2021-04-23T01:24:00+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

`Configure minimum encryption algorithm rounds in /etc/login.defs https://cisofy.com/lynis/controls/AUTH-9230/`

Troubleshot untuk result ini adalah:

- Edit file `nano /etc/login.defs`
- Cari line `ENCRYPT_METHOD`
- tambahkan `SHA_CRYPT_MIN_ROUNDS 20000`, dibawah line `ENCRYPT_METHOD`\

`Configure maximum encryption algorithm rounds in /etc/login.defs https://cisofy.com/lynis/controls/AUTH-9230/`
Troubleshot untuk result ini adalah:

- Edit file `nano /etc/login.defs`
- Cari line `ENCRYPT_METHOD`
- tambahkan `SHA_CRYPT_MAX_ROUNDS 50000`, dibawah line `ENCRYPT_METHOD/SHA_CRYPT_MIN_ROUNDS`