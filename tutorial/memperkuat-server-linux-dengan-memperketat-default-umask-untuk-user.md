---
author	 	: Al Muhdil Karim
title    	: "Memperkuat Server Linux Dengan Memperketat Default Umask Untuk User"
date		: 2021-04-23T01:47:18+07:00
draft		: true
date		: 2021-04-23T01:47:18+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
Default umask in /etc/profile or /etc/profile.d/custom.sh could be more strict (e.g. 027) https://cisofy.com/lynis/controls/AUTH-9328/
```

Troubleshot untuk result ini adalah:

- Edit file `nano /etc/profile`
- cari `umask 002` dan ganti menjadi `umask 027`
- Edit file `/etc/init.d/functions`
- cari `umask 002` dan ganti menjadi `umask 027`