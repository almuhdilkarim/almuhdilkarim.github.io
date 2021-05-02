---
author	 	: Al Muhdil Karim
title    	: "Mengkonfigurasi Sysctl Untuk Memperkuat Keamanan Linux"
date		: 2021-04-23T02:35:53+07:00
draft		: true
date		: 2021-04-23T02:35:53+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
One or more sysctl values differ from the scan profile and could be tweaked - Solution : Change sysctl value or disable test (skip-test=KRNL-6000:<sysctl-key>) https://cisofy.com/lynis/controls/KRNL-6000/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config'\
- Copy paste dan simpan konten berikut

```
kernel.dmesg_restrict 1
kernel.kptr_restrict 2
kernel.sysrq 0
kernel.yama.ptrace_scope 2
net.ipv4.conf.all.forwarding 0
net.ipv4.conf.all.log_martians 1
net.ipv4.conf.default.accept_redirects 0
net.ipv4.conf.default.log_martians 1
net.ipv6.conf.all.accept_redirects 0
net.ipv6.conf.default.accept_redirects 0
```

- eksekusi perintah `sysctl --system`