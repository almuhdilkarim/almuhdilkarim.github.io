---
author	 	: Al Muhdil Karim
title    	: "Menambahkan Legal Banner Pada Linux Untuk Ssh Dan Local"
date		: 2021-04-23T01:55:18+07:00
draft		: true
date		: 2021-04-23T01:55:18+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



```
Add a legal banner to /etc/issue, to warn unauthorized users https://cisofy.com/lynis/controls/BANN-7126/
```

Troubleshot untuk result ini adalah:

template

```
_              _                                          
| | ____ _ _ __(_)_ __ ___    ___  ___ _ ____   _____ _ __ 
| |/ / _` | '__| | '_ ` _ \  / __|/ _ \ '__\ \ / / _ \ '__|
|   < (_| | |  | | | | | | | \__ \  __/ |   \ V /  __/ |   
|_|\_\__,_|_|  |_|_| |_| |_| |___/\___|_|    \_/ \___|_|   
                                                         
********************************************************************
*               ---- KARIM SERVER POLICY -----                     *
*                                                                  *
* This system is for the use of authorized users only.  Usage of   *
* this system may be monitored and recorded by system personnel.   *
*                                                                  *
* Anyone using this system expressly consents to such monitoring   *
* and is advised that if such monitoring reveals possible          *
* evidence of criminal activity, system personnel may provide the  *
* evidence from such monitoring to law enforcement officials.      *
*                                                                  *
********************************************************************
```

- eksekusi perintah `nano /etc/issue`, lalu copy paste template di atas
- eksekusi perintah `nano /etc/issue.net`, lalu copy paste template di atas
- eksekusi perintah `nano /etc/motd`, lalu copy paste template di atas