---
author	 	: Al Muhdil Karim
title    	: "Cara Memperbaiki Possibly Missing Firmware for Module: Xhci_pci Pada Arch Linux"
date		: 2021-04-24T23:40:04+07:00
draft		: false
date		: 2021-04-24T23:40:04+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

* Buka terminal

* Masuk kedalam folder `/tmp`, dengan mengetikan perintah berikut di terminal

	 ```
   cd /tmp
	```

* Clone file firmware dari github

	 ```
  git clone https://aur.archlinux.org/upd72020x-fw.git
	```

* Masuk kedalam folder firmware

	  ```
  cd upd72020x-fw
	```

  

* Install firmware 

  ```
  makepkg -sri
  ```
  
* Update konfigurasi mkinitcpio

  ```
  sudo mklinitcpio -p linux
  ```

* Restart

	```
  systemd reboot
  ```

