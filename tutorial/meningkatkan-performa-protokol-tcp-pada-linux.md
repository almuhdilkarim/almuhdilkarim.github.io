---
author	 	: Al Muhdil Karim
title    	: "Meningkatkan Performa Protokol Tcp Pada Linux"
date		: 2021-04-23T03:04:09+07:00
draft		: true
date		: 2021-04-23T03:04:09+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

````
## Instruction 

* Buat  /etc/sysctl.d/10-tcp-ip-perfomance.conf
* Untuk menggunakan configurasi, ketikan perintah `sysctl --system`. Ketikan perintah tersebut setiap penggantian configurasi

## Configration

​```config

#### ipv4 networking Performance ####

## Increasing the size of the receive queue
net.core.netdev_max_backlog = 16384

##Increase the maximum connections

net.core.somaxconn = 512

### Warning: Increasing this value may only increase performance on high-loaded servers 
### and may cause as slow processing rate (e.g. a single threaded blocking server) 
### or insufficient number of worker threads/processes 

## Increase the memory dedicated to the network interfaces

net.core.rmem_default = 1048576
net.core.rmem_max = 16777216
net.core.wmem_default = 1048576
net.core.wmem_max = 16777216
net.core.optmem_max = 65536
net.ipv4.tcp_rmem = 4096 1048576 2097152
net.ipv4.tcp_wmem = 4096 65536 16777216

#Enable TCP Fast Open
net.ipv4.tcp_fastopen = 3

# Tweak the pending connection handling
net.ipv4.tcp_max_syn_backlog = 8192

# Prevent Simple dos Attack
net.ipv4.tcp_max_tw_buckets = 2000000

# Avoid from running out of available network sockets
net.ipv4.tcp_tw_reuse = 1

#Enable BBR
net.core.default_qdisc = cake
net.ipv4.tcp_congestion_control = bbr

​```

## Explanation

tambahkan sintaks dari setiap poin hadening yang ingin di set

(N/A)

## REFERENCE

* https://wiki.archlinux.org/index.php/Sysctl#TCP/IP_stack_hardening

````

