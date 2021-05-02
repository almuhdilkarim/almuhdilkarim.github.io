---
author	 	: Al Muhdil Karim
title    	: "Meningkat Kemanan Ipv4 Menggunakan Systecl"
date		: 2021-04-23T03:14:23+07:00
draft		: true
date		: 2021-04-23T03:14:23+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

````
##################################
#### ipv4 networking Security ####
##################################

## Disabel Forwarding
net.ipv4.conf.all.forwarding = 0
net.ipv4.conf.default.accept_redirects = 0

## Log martian packets
net.ipv4.conf.default.log_martians = 1
net.ipv4.conf.all.log_martians = 1

## Protection against spoofing attacks
# Enable source validation by reversed path, as specified in RFC1812
net.ipv4.conf.all.rp_filter=1

## BLOCK PING REQUEST
net.ipv4.icmp_echo_ignore_all = 1

## ANTI DDOS
net.ipv4.neigh.default.gc_thresh1 = 4096
net.ipv4.neigh.default.gc_thresh2 = 8192
net.ipv4.neigh.default.gc_thresh3 = 16384
net.ipv4.neigh.default.gc_interval = 5
net.ipv4.tcp_max_tw_buckets = 2000000

## TCP SYN cookie protection (default)
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_syn_retries =2
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_max_syn_backlog =4096

## protect against tcp time-wait assassination hazards
## drop RST packets for sockets in the time-wait state
net.ipv4.tcp_rfc1337 = 1

## tcp timestamps
## + protect against wrapping sequence numbers (at gigabit speeds)
## + round trip time calculation implemented in TCP
## - causes extra overhead and allows uptime detection by scanners like nmap
## enable @ gigabit speeds
#net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_timestamps = 1

## ignore echo broadcast requests to prevent being part of smurf attacks (default)
net.ipv4.icmp_echo_ignore_broadcasts = 1

## ignore bogus icmp errors (default)
net.ipv4.icmp_ignore_bogus_error_responses = 1

## send redirects (not a router, disable it)
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0

## ICMP routing redirects (only secure)
#net.ipv4.conf.all.secure_redirects = 1 (default)
net.ipv4.conf.default.accept_redirects=0
net.ipv4.conf.all.accept_redirects=0
net.ipv6.conf.default.accept_redirects=0
net.ipv6.conf.all.accept_redirects=0

# Do not accept source routing
net.ipv4.conf.default.accept_source_route = 0

# Accept packets with SRR option? No
net.ipv4.conf.all.accept_source_route = 0

# Controls source route verification
net.ipv4.conf.default.rp_filter = 1 

# Harden Bootstrap Protocol (BOOTP)
net.ipv4.conf.all.bootp_relay=0

# Don't proxy arp for anyone
net.ipv4.conf.all.proxy_arp=0
# Modes for sending replies in response to received ARP requests that resolve local target IP addresses
# Mode '1': reply only if the target IP address is local address configured on the incoming interface
net.ipv4.conf.all.arp_ignore=1
# Restriction levels for announcing the local source IP address from IP packets in ARP requests sent on interface
# Mode '2': ignore the source address in the IP packet and try to select local address that we prefer for talks with the target host
net.ipv4.conf.all.arp_announce=2
````

