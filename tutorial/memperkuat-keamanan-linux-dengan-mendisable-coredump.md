---
author	 	: Al Muhdil Karim
title    	: "Memperkuat Keamanan Linux Dengan Mendisable Coredump"
date		: 2021-04-23T02:33:10+07:00
draft		: true
date		: 2021-04-23T02:33:10+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
If not required, consider explicit disabling of core dump in /etc/security/limits.conf file https://cisofy.com/lynis/controls/KRNL-5820/
```

Troubleshot untuk result ini adalah:

- Edit file $ nano /etc/security/limits.conf\
- Cari line berikut

```
#<domain>      <type>  <item>         <value>
#

#*               soft    core            0
#*               hard    rss             10000
#@student        hard    nproc           20
```

- Uncomment tanda kedua tanda (`*`) dan ganti value menjadi 0, lihat contoh berikut

```
#<domain>      <type>  <item>         <value>
#

*               soft    core            0
*               hard    rss             0
#@student        hard    nproc          20
```