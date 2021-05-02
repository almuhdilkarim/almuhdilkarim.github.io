---
author	 	: Al Muhdil Karim
title    	: "Mendisable Firmware Yang Tidak Digunakan Pada Linux"
date		: 2021-04-23T02:45:28+07:00
draft		: true
date		: 2021-04-23T02:45:28+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



```
Disable drivers like firewire storage when not used, to prevent unauthorized storage or data theft https://cisofy.com/lynis/controls/STRG-1846/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `firewire-ohci` pada file tersebut