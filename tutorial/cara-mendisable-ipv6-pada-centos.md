---
author	 	: Al Muhdil Karim
title    	: "Cara Mendisable Ipv6 Pada Centos"
date		: 2021-04-23T03:07:20+07:00
draft		: true
date		: 2021-04-23T03:07:20+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

## Instruction

* Edit sysctl.conf  
   `nano /etc/sysctl.conf`
* Add following text to systctl.conf:\
  ` # Disable IPV-6`\
      `net.ipv6.conf.all.disable_ipv6 = 1`\
      `net.ipv6.conf.default.disable_ipv6 = 1`
* To write and config this setting launch command:\
  `sysctl -p`


## Note

   * Pastikan anda mengubah configurasi ssh, dengan menambahkan sintax dibawah pada file /etc/ssh/sshd_conf:\
      `AddressFamily inet`\
     setelah itu restart service ssh dengan:\
     `systemctl restart sshd`
    
     
