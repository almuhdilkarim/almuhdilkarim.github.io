---
author	 	: Al Muhdil Karim
title    	: "Meningkatkan Kemanan Server Linux Dengan Meminimalisir Penggunaan Protocol"
date		: 2021-04-23T02:37:34+07:00
draft		: true
date		: 2021-04-23T02:37:34+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
Determine if protocol 'dccp' is really needed on this system https://cisofy.com/lynis/controls/NETW-3200/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `install dccp /bin/true` pada file tersebut

```
Determine if protocol 'sctp' is really needed on this system https://cisofy.com/lynis/controls/NETW-3200/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `install sctp /bin/true` pada file tersebut

```
Determine if protocol 'rds' is really needed on this system https://cisofy.com/lynis/controls/NETW-3200/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `install rds /bin/true` pada file tersebut

```
Determine if protocol 'tipc' is really needed on this system https://cisofy.com/lynis/controls/NETW-3200/
```

Troubleshot untuk result ini adalah:

- buat/buka file `nano /etc/modprobe.d/blacklist.conf'
- tambahkan `install tipc /bin/true` pada file tersebut