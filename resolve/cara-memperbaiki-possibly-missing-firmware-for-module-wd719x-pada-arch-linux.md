---
author	 	: Al Muhdil Karim
title    	: "Memperbaiki Possibly Missing Firmware for Module: Wd719x Pada Arch Linux"
date		: 2021-04-24T23:34:25+07:00
draft		: false
date		: 2021-04-24T23:34:25+07:00
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
  git clone https://aur.archlinux.org/wd719x-firmware.git
  ```

* Masuk kedalam folder firmware

  ```
  cd wd719x-firmware
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

