---
author	 	: Al Muhdil Karim
title    	: "Cara Menyimpan Rules Firewalls Sehingga Tetap Ada Ketika Di Restart"
date		: 2021-04-23T02:58:04+07:00
draft		: true
date		: 2021-04-23T02:58:04+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

In /etc/sysconfig/iptables-config check for :

Save current firewall rules on restart.
Value: yes|no, default: no
Saves all firewall rules to /etc/sysconfig/iptables if firewall gets
restarted.
IPTABLES_SAVE_ON_RESTART="yes"