---
author	 	: Al Muhdil Karim
title    	: "mengamankan-linux-dengan-menambahkan-konfigurasi-kofigurasi-anti-dos-pada-sysctld"
date		: 2021-04-23T03:08:35+07:00
draft		: true
date		: 2021-04-23T03:08:35+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

systctl.d/09-FIREWALL.conf


## ANTI DDOS
```
#net.netfilter.nf_conntrack_max = 10000000
net.netfilter.nf_conntrack_max = 2000000
net.netfilter.nf_conntrack_tcp_loose = 0
net.netfilter.nf_conntrack_tcp_timeout_established = 1800
net.netfilter.nf_conntrack_tcp_timeout_close = 10
net.netfilter.nf_conntrack_tcp_timeout_close_wait = 10
net.netfilter.nf_conntrack_tcp_timeout_fin_wait = 20
net.netfilter.nf_conntrack_tcp_timeout_last_ack = 20
net.netfilter.nf_conntrack_tcp_timeout_syn_recv = 20
net.netfilter.nf_conntrack_tcp_timeout_syn_sent = 20
net.netfilter.nf_conntrack_tcp_timeout_time_wait = 10
```