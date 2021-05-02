---
author	 	: Al Muhdil Karim
title    	: "Contoh Konfigurasi Iptables Standard Untuk Website"
date		: 2021-04-23T02:59:20+07:00
draft		: true
date		: 2021-04-23T02:59:20+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
##############################################################
### IP TABLES CONFIG MINIMUM
###  crafted by Al Muhdil karim
##############################################################

## RULES
*filter
:INPUT DROP [0:0]
:FORWARD DROP [0:0]
:OUTPUT DROP [0:0]

## SECURITY
## PING PACKET
-A INPUT -p icmp -m icmp --icmp-type 8 -j DROP

### DROP spoofing packets
-A INPUT -s 10.0.0.0/8 -j DROP 
-A INPUT -s 169.254.0.0/16 -j DROP
-A INPUT -s 172.16.0.0/12 -j DROP
-A INPUT -s 127.0.0.0/8 -j DROP
-A INPUT -s 192.168.0.0/24 -j DROP
-A INPUT -s 224.0.0.0/4 -j DROP
-A INPUT -d 224.0.0.0/4 -j DROP
-A INPUT -s 240.0.0.0/5 -j DROP
-A INPUT -d 240.0.0.0/5 -j DROP
-A INPUT -s 0.0.0.0/8 -j DROP
-A INPUT -d 0.0.0.0/8 -j DROP
-A INPUT -d 239.255.255.0/24 -j DROP
-A INPUT -d 255.255.255.255 -j DROP

#for SMURF attack protection
-A INPUT -p icmp -m icmp --icmp-type address-mask-request -j DROP
-A INPUT -p icmp -m icmp --icmp-type timestamp-request -j DROP

# Droping all invalid packets
-A INPUT -m state --state INVALID -j DROP
-A FORWARD -m state --state INVALID -j DROP
-A OUTPUT -m state --state INVALID -j DROP

# flooding of RST packets, smurf attack Rejection
-A INPUT -p tcp -m tcp --tcp-flags RST RST -m limit --limit 2/second --limit-burst 2 -j ACCEPT

# Protecting portscans
# Attacking IP will be locked for 24 hours (3600 x 24 = 86400 Seconds)
-A INPUT -m recent --name portscan --rcheck --seconds 60 -j DROP
-A FORWARD -m recent --name portscan --rcheck --seconds 60 -j DROP

# Remove attacking IP after 24 hours
-A INPUT -m recent --name portscan --remove
-A FORWARD -m recent --name portscan --remove

# These rules add scanners to the portscan list, and log the attempt.
-A INPUT -p tcp -m tcp --dport 139 -m recent --name portscan --set -j LOG --log-prefix "portscan:"
-A INPUT -p tcp -m tcp --dport 139 -m recent --name portscan --set -j DROP

-A FORWARD -p tcp -m tcp --dport 139 -m recent --name portscan --set -j LOG --log-prefix "portscan:"
-A FORWARD -p tcp -m tcp --dport 139 -m recent --name portscan --set -j DROP


## SERVICE
### DNS
-A OUTPUT -p udp -s 193.168.195.2 -d 8.8.8.8  --sport 53 --dport 53  -m state --state NEW,ESTABLISHED -j ACCEPT
-A INPUT  -p udp -s 8.8.8.8 -d 193.168.195.2 --sport 53 --dport 53  -m state --state ESTABLISHED -j ACCEPT

### SSH
-A INPUT  -p tcp --dport 19150 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 19150 -m state --state ESTABLISHED -j ACCEPT

### CLOUDLFLARE HTTPS
-A INPUT  -p tcp --dport 443 -s 173.245.48.0/20 -d 193.168.195.2  -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 173.245.48.0/20 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 103.21.244.0/22 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 103.21.244.0/22 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 103.22.200.0/22 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 103.22.200.0/22 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 103.31.4.0/22 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 103.31.4.0/22 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 141.101.64.0/18 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 141.101.64.0/18 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 108.162.192.0/18 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 108.162.192.0/18 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 190.93.240.0/20 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 190.93.240.0/20 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 188.114.96.0/20 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 188.114.96.0/20 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 197.234.240.0/22 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 197.234.240.0/22 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 198.41.128.0/17 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 198.41.128.0/17 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 162.158.0.0/15 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 162.158.0.0/15 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 104.16.0.0/12 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 104.16.0.0/12 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 172.64.0.0/13 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 172.64.0.0/13 -m state --state ESTABLISHED -j ACCEPT
-A INPUT  -p tcp --dport 443 -s 131.0.72.0/22 -d 193.168.195.2 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -p tcp --sport 443 -s 193.168.195.2 -d 131.0.72.0/22 -m state --state ESTABLISHED -j ACCEPT

### TELEGRAM
-A OUTPUT -p tcp -s 193.168.195.2 -d api.telegram.org --dport 443 -m state --state NEW,ESTABLISHED -j ACCEPT
-A INPUT  -p tcp -s api.telegram.org -d 193.168.195.2 --dport 443 -m state --state ESTABLISHED -j ACCEPT

### GITHUB 
-A OUTPUT -p tcp -s 193.168.195.2 -d github.com --sport 443 -m state --state NEW,ESTABLISHED -j ACCEPT
-A INPUT  -p tcp -s github.com -d 193.168.195.2 --dport 443 -m state --state ESTABLISHED -j ACCEPT

## COMMIT
```



