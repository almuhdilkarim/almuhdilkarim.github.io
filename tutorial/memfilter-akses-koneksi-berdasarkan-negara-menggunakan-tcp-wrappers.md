---
author	 	: Al Muhdil Karim
title    	: "Memfilter Akses Ssh Berdasarkan Negara Menggunakan Tcp Wrappers"
date		: 2021-04-23T03:17:40+07:00
draft		: true
date		: 2021-04-23T03:17:40+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

### INSTRUCTION

* Install GeoIP and GeoIP Database
  `yum install GeoIP`
* Create the SSH/FTP Filter Script
  `$ nano /root/hanzo/geo-ipfilter.sh`
* Copy this script
  ```script

  ```
* Make this script executable
 `chmod +x /root/hanzo/geo-ipfilter.sh`

* adding below line in /etc/hosts.deny
 ```script
    sshd: ALL
    vsftpd: ALL
 ```
* Edit /etc/hosts.allow and allow only those ips which are allowed by your IP filter script
  ```script
     sshd : ALL : spawn /root/hanzo/geo-ipfilter.sh %a
     vsftp: ALL: spawn /root/hanzo/geo-ipfilter.sh %a
  ```
  
### REFERENCE

https://tecadmin.net/allow-server-access-based-on-country/


## Script



```
### INSTRUCTION
### geo-ipfilter-strict-telegram.sh

* Install GeoIP and GeoIP Database
  `yum install GeoIP`
* Create the SSH/FTP Filter Script
  `$ nano /root/hanzo/geo-ipfilter.sh`
* Copy this script
  ```script

   ```
* Make this script executable
 `chmod +x /root/hanzo/geo-ipfilter.sh`
 
* adding below line in /etc/hosts.deny
 ```script
    sshd: ALL
    vsftpd: ALL
 ```
* Edit /etc/hosts.allow and allow only those ips which are allowed by your IP filter script
  ```script
     sshd : ALL : spawn /root/hanzo/geo-ipfilter.sh %a
     vsftp: ALL: spawn /root/hanzo/geo-ipfilter.sh %a
  ```
  
### REFERENCE

https://tecadmin.net/allow-server-access-based-on-country/

```

```
!/bin/bash
# License: WTFPL
### geo-ipfilter-strict.sh Variant 2

# UPPERCASE space-separated country codes to ACCEPT
ALLOW_COUNTRIES="ID"
LOGDENY_FACILITY="authpriv.notice"

  if [ $# -ne 1 ]; then
    echo "Usage:  `basename $0` " 1>&2
    exit 0 # return true in case of config issue
  fi

  if [[ "`echo $1 | grep ':'`" != "" ]] ; then
        COUNTRY=`/usr/bin/geoiplookup6 "$1" | awk -F ": " '{ print $2 }' | awk -F "," '{ print $1 }' | head -n 1`
  else
      	COUNTRY=`/usr/bin/geoiplookup "$1" | awk -F ": " '{ print $2 }' | awk -F "," '{ print $1 }' | head -n 1`
  fi

  [[ $ALLOW_COUNTRIES =~ $COUNTRY ]] && RESPONSE="ALLOW" || RESPONSE="DENY"
  
  if [[ "$RESPONSE" == "ALLOW" ]] ; then
    logger -p $LOGDENY_FACILITY "$RESPONSE sshd connection from $1 ($COUNTRY)"
    /usr/bin/echo `/usr/bin/date` access granted from $1 $COUNTRY>>/var/log/sshd/geo-granted-sshd.log
    exit 0
  else
    logger -p $LOGDENY_FACILITY "$RESPONSE sshd connection from $1 ($COUNTRY)"
    /usr/bin/echo `/usr/bin/date` access denied from $1 Country $COUNTRY>>/var/log/sshd/geo-denied-sshd.log
    exit 1
  fi

```

```
!/bin/bash
# License: WTFPL
### geo-ipfilter-strict.sh Variant 3

# UPPERCASE space-separated country codes to ACCEPT
ALLOW_COUNTRIES="ID"
LOGDENY_FACILITY="authpriv.notice"

  if [ $# -ne 1 ]; then
    echo "Usage:  `basename $0` " 1>&2
    exit 0 # return true in case of config issue
  fi

  if [[ "`echo $1 | grep ':'`" != "" ]] ; then
        COUNTRY=`/usr/bin/geoiplookup6 "$1" | awk -F ": " '{ print $2 }' | awk -F "," '{ print $1 }' | head -n 1`
  else
      	COUNTRY=`/usr/bin/geoiplookup "$1" | awk -F ": " '{ print $2 }' | awk -F "," '{ print $1 }' | head -n 1`
  fi

  [[ $COUNTRY = "IP Address not found" || $ALLOW_COUNTRIES =~ $COUNTRY ]] && RESPONSE="ALLOW" || RESPONSE="DENY"

  if [[ "$RESPONSE" == "ALLOW" ]] ; then
    logger -p $LOGDENY_FACILITY "$RESPONSE sshd connection from $1 ($COUNTRY)"
    /usr/bin/echo `/usr/bin/date` access granted from $1 $COUNTRY>>/var/log/sshd/geo-granted-sshd.log
    exit 0
  else
    logger -p $LOGDENY_FACILITY "$RESPONSE sshd connection from $1 ($COUNTRY)"
    /usr/bin/echo `/usr/bin/date` access denied from $1 Country $COUNTRY>>/var/log/sshd/geo-denied-sshd.log
    exit 1
  fi

```

