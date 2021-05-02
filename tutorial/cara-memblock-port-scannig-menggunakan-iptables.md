---
author	 	: Al Muhdil Karim
title    	: "Cara Memblock Port Scannig Menggunakan Iptables"
date		: 2021-04-23T02:53:57+07:00
draft		: true
date		: 2021-04-23T02:53:57+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---



## Instruction

Rules berikut ini digunakan untuk memitigasi aktivitas scaning port

## Catatan
* jangan lupa Menambhakan bagian `## Restore`, jika menggunakan rules ini
* waktu blokir bisa diautr dengan mengatur option `--seconds 60` pada baris sintaks


### SYN Port Scaning Method
Tambahkan sintaks berikut di dalam file config /etc/sysconfig/iptables

```Config
## Block SYN port scanning
-I TCP -p tcp -m recent --update --rsource --seconds 60 --name TCP-PORTSCAN -j REJECT --reject-with tcp-reset
-D INPUT -p tcp -j REJECT --reject-with tcp-reset
-A INPUT -p tcp -m recent --set --rsource --name TCP-PORTSCAN -j REJECT --reject-with tcp-reset
```

### UDP Port Scaning Method

``` Config
iptables -I UDP -p udp -m recent --update --rsource --seconds 60 --name UDP-PORTSCAN -j REJECT --reject-with icmp-port-unreachable
iptables -D INPUT -p udp -j REJECT --reject-with icmp-port-unreachable
iptables -A INPUT -p udp -m recent --set --rsource --name UDP-PORTSCAN -j REJECT --reject-with icmp-port-unreachable
```

### Restore
``` Config
iptables -D INPUT -j REJECT --reject-with icmp-proto-unreachable
iptables -A INPUT -j REJECT --reject-with icmp-proto-unreachable
```