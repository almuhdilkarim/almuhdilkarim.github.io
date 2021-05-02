---
author	 	: Al Muhdil Karim
title    	: "Memperkuat Kemanan Server Linux Dengan Menambahkan Masa Kadaluarsa Password"
date		: 2021-04-23T01:39:37+07:00
draft		: true
date		: 2021-04-23T01:39:37+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
When possible set expire dates for all password protected accounts https://cisofy.com/lynis/controls/AUTH-9282/
```

Troubleshot untuk result ini adalah:

- chage -M 365 root (Jika ada user lain maka eksekusi dengan perintah yang sama ex : chage -M 365 johndoe )
- passwd root ( Jika ada user lain maka eksekusi dengan perintah yang sama ex : passwd johndoe )