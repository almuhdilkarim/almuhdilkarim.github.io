---
author	 	: Al Muhdil Karim
title    	: "Memperkuat Keamanan Sistem Operasi Linux Dengan Mendisable Service Xinetd"
date		: 2021-04-23T02:30:44+07:00
draft		: true
date		: 2021-04-23T02:30:44+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



```
If there are no xinetd services required, it is recommended that the daemon be removed https://cisofy.com/lynis/controls/INSE-8100/
```

Troubleshot untuk result ini adalah:

- eksekusi perintah `systewmctl stop xinetd`
- eksekusi perintah `systewmctl disable xinetd`
- eksekusi perintah `yum remove xinetd`