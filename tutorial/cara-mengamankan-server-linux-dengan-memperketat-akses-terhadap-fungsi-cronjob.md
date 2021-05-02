---
author	 	: Al Muhdil Karim
title    	: "Cara Mengamankan Server Linux Dengan Memperketat Akses Terhadap Servis Crond"
date		: 2021-04-23T02:03:44+07:00
draft		: true
date		: 2021-04-23T02:03:44+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



Consider restricting file permissions - Details : See screen output or log file - Solution : Use chmod to change file permissions https://cisofy.com/lynis/controls/FILE-7524/

Troubleshot untuk result ini adalah:

- eksekusi perintah `chmod 600 /etc/crontab`
- eksekusi perintah `chmod 700 /etc/cron.d`
- eksekusi perintah `chmod 700 /etc/cron.daily`
- eksekusi perintah `chmod 700 /etc/cron.hourly`
- eksekusi perintah `chmod 700 /etc/cron.weekly`
- eksekusi perintah `chmod 600 /etc/cron.monthly`