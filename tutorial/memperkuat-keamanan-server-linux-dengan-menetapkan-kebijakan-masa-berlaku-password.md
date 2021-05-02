---
author	 	: Al Muhdil Karim
title    	: "Memperkuat Keamanan Server Linux Dengan Menetapkan Kebijakan Masa Berlaku Password"
date		: 2021-04-23T01:42:12+07:00
draft		: true
date		: 2021-04-23T01:42:12+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
Configure minimum password age in /etc/login.defs https://cisofy.com/lynis/controls/AUTH-9286/
```

Troubleshot untuk result ini adalah:

- Edit file `nano /etc/login.defs`
- Cari line `PASS_MIN_DAYS`
- ganti `PASS_MIN_DAYS 0`, menjadi `PASS_MIN_DAYS 7`



- Edit file `nano /etc/login.defs`
- Cari line `PASS_MX_DAYS`
- ganti `PASS_MAX_DAYS 99999`, menjadi `PASS_MAX_DAYS 365`