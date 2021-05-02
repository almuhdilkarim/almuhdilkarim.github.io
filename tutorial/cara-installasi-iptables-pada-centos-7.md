---
author	 	: Al Muhdil Karim
title    	: "Cara Installasi Iptables Pada Centos 7"
date		: 2021-04-23T02:51:55+07:00
draft		: true
date		: 2021-04-23T02:51:55+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

## Preparation

  Untuk menginstall iptables, jika dalam sistem telah terinstall firewalld, maka kita harus menghapus terlebih dahulu firewalld. \

  * `sudo systemctl stop firewalld`
  * `sudo systemctl disable firewalld`
  * `sudo systemctl mask --now firewalld`


## Installation

  * install the iptables-service package from the CentOS repositories:\
    `sudo yum install iptables-services`
  * Once the package is installed start the Iptables service:\
    `sudo systemctl start iptables`\
     `sudo systemctl start ip6tables`
  * Enable the Iptables service to start automatically on system boot:\
    `sudo systemctl enable iptables`\
    `sudo systemctl enable ip6tables`
  * Check the iptables service status with:\
    `sudo systemctl status iptables`\
    `sudo systemctl status ip6tables`
  * To check the current iptables rules use the following commands:\
    `sudo iptables -nvL`\
    `sudo ip6tables -nvL`



Versi 2



## Preparation

  Untuk menginstall iptables, jika dalam sistem telah terinstall firewalld, maka kita harus menghapus terlebih dahulu firewalld. \

  * `sudo systemctl stop firewalld`
  * `sudo systemctl disable firewalld`
  * `sudo systemctl mask --now firewalld`


## Installation

  * install the iptables-service package from the CentOS repositories:\
    `sudo yum install iptables-services`
  * Once the package is installed start the Iptables service:\
    `sudo systemctl start iptables`\
     `sudo systemctl start ip6tables`
  * Enable the Iptables service to start automatically on system boot:\
    `sudo systemctl enable iptables`\
    `sudo systemctl enable ip6tables`
  * Check the iptables service status with:\
    `sudo systemctl status iptables`\
    `sudo systemctl status ip6tables`
  * To check the current iptables rules use the following commands:\
    `sudo iptables -nvL`\
    `sudo ip6tables -nvL`

## General information

  Berikut ini adalah informasi umum terkait dengan iptables

  Configuration rules file untuk IPV-4\
  ` /etc/sysconfig/iptables`

  Configuration rules file untuk IPV-6\
   ` /etc/sysconfig/ip6tables`

## REFERENCE

* https://wiki.archlinux.org/index.php/Simple_stateful_firewall
* http://www.auxnet.org/index.php/the-news/216-how-to-protect-from-port-scanning-and-smurf-attack-in-linux-server-by-iptables
* https://javapipe.com/blog/iptables-ddos-protection/
* https://medium.com/@iced_burn/iptables-rules-and-commands-79ac2b386004
* https://security.stackexchange.com/questions/146432/iptables-rules-to-prevent-ip-spoofing
* https://linoxide.com/firewall/block-common-attacks-iptables/
* https://its.uiowa.edu/support/article/1348