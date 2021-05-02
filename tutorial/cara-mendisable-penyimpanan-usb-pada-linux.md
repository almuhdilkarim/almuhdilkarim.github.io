---
author	 	: Al Muhdil Karim
title    	: "Cara Mendisable Penyimpanan Usb Pada Linux"
date		: 2021-04-23T02:47:09+07:00
draft		: true
date		: 2021-04-23T02:47:09+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



```
Disable drivers like USB storage when not used, to prevent unauthorized storage or data theft https://cisofy.com/lynis/controls/USB-1000/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `blacklist usb-storage` pada file tersebut