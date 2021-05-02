---
title : Cara Meminimalisir Serangan Brute Force Dan Dictionary Attack Pada Linux Menggunakan Fitur Hashing Rounds Pam 
date : 2021-04-23T00:35:16+07:00
draft : true
description : Berikut ini adalah cara meminimalisir serangan Brute Force dan dictionary attack pada system linux dengan menggunakan fitur hashing rounds PAM
tags : []
Categories : []
DisableComments : false
---



```
Check PAM configuration, add rounds if applicable and expire passwords to encrypt with new values https://cisofy.com/lynis/controls/AUTH-9229/
```

Troubleshot untuk result ini adalah:

- Edit file `nano /etc/pam.d/password-auth`
- cari line `password sufficient pam_unix.so try_first_pass use_authtok nullok sha512 shadow`
- ubah line tersebut menjadi '`password sufficient pam_unix.so try_first_pass use_authtok nullok sha512 shadow rounds=50000`'
- Edit file `nano /etc/pam.d/system-auth`
- cari line `password sufficient pam_unix.so try_first_pass use_authtok nullok sha512 shadow`
- ubah line tersebut menjadi '`password sufficient pam_unix.so try_first_pass use_authtok nullok sha512 shadow rounds=50000`'

