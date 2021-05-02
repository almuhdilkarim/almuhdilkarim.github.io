---
author	 	: Al Muhdil Karim
title    	: "Meningkatkan Performa Ipv4 Dengan Menggunakan Konfigurasi Systctl"
date		: 2021-04-23T03:13:07+07:00
draft		: true
date		: 2021-04-23T03:13:07+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```\
#####################################
#### ipv4 networking Performance ####
#####################################

## Increasing the size of the receive queue
net.core.netdev_max_backlog = 16384

## Increase the maximum connections
net.core.somaxconn = 512

## Enable TCP Fast Open
net.ipv4.tcp_fastopen = 3

## Tweak the pending connection handling
net.ipv4.tcp_max_syn_backlog = 8192

# Avoid from running out of available network sockets
net.ipv4.tcp_tw_reuse = 1

#Enable BBR
net.core.default_qdisc = cake
net.ipv4.tcp_congestion_control = bbr

#Increase system IP port limits
net.ipv4.ip_local_port_range = 2000 65000
 
# RFC 1337 fix
net.ipv4.tcp_rfc1337=1
```

