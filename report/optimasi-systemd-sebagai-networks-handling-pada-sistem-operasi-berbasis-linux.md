---
author			: Al Muhdil Karim
title				: Optimasi  Systemd Untuk Network Handling Pada Sistem Operasi Berbasis Linux
date			: 2021-04-20T11:52:41+00:00
draft			: true
math	        : false
description : Cara optimasi sumber daya menggunakan systemd untuk network handling pada sistem operasi berbasis linux

---

## Latar Belakang

Perangkat yang sering saya gunakan akhir akhir ini adalah Asus dengan Seri E202ES. Perangkat ini didukung oleh 2 core prosesor dengan besaran ram 2GB. Setiap byte RAM yang di optimasi akan sangat berharga untuk memberikan sumber daya komputasi bagi proses lainya di perangkat saya. 

Perangkat ini berbeda dengan perangkat saya lainya yang mempunyai dukungan yang lebih baik, dengan 8 Core Prosesor dan memory 12GB. Namun saya menyukai perangkat ini, karena dengan setiap keterbatasan yang ada biasanya muncul ide-ide yang belum terfikirkan sebelumnya,

Minimal bisa mendorong saya belajar lebih banyak dalam memahami sistem operasi berbasis linux. Sehingga saya bisa memahami desain sistem operasi yang aman dan memiliki performa yang cukup baik bahkan untuk perangkat dengan dukungan hardware pas-pasan. 

Salah satu module yang ingin saya optimasi adalah modul terkait network handling di linux. Siapa tau ada pedekatan yang lebih minim dalam penggunaan sumber daya memory. Untuk tujuan tersebut, saya untuk melakukan eksperimen kecil-kecilan ini.

## Spesikasi Teknis

Berikut gambaran dasar dari sistem operasi yang saya gunakan

| Item                       | Keterangan             |
| -------------------------- | ---------------------- |
| Sistem Operasi             | Arch Linux             |
| Kernel                     | Linux Hardened 5.11.15 |
| System And Service Manager | Systemd                |

## Pertanyaan Dasar

Pertanyaan dasar saya adalah "Bagaimana cara meminimalisir module yang bertanggungjawab dalam aktivitas Networking Pada sistem operasi berbasi linux ?" sehingga sistem operasi linux saya bisa bekerja dengan sumber daya memory dan prosesor yang lebih rendah.



## Cakupan Analisis

| No   | Komponen               |
| ---- | ---------------------- |
| 1    | Network Daemon         |
| 2    | System Resolve         |
| 3    | Firewall               |
| 4    | Network User Interface |



## Analisis Masalah

1. Pada proses booting systemd melakukan load untuk daemon networks dan memakan waktu serta resoure memory
2. Dalam beberapa rancangan sistem operasi, systemd menunggu koneksi tersambung terlebih dahulu sebelum melanjutkan loading terhadap service lainya, sehingga ini memperpanjang waktu load pada proses booting.
3. Pada layer user (user land), sistem tray dan network manager menggunakan sumber daya memory untuk berjalan dalam mode GUI.
4. aplikasi network manager biasanya membutuhkan dependensi lain untuk bisa beroperasi, sehingga di butuhkan resource memory tambahan untuk aplikasi pendukung network manager.

hasil analisis di atas, didapatkan dari data yang dihasilkan oleh tools analisis berikut

| No   | Tools           |
| ---- | --------------- |
| 1    | systemd-analyze |
| 2    | htop / Top      |



## Conceptual Approach

| Masalah                                                      | Pemecahan                                                    | Rasionalisasi                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Pada proses booting systemd melakukan load untuk daemon networks dan memakan waktu serta resoure memory | Disable auto start daemon network pada systemd. Start network daemon dilakukan dalam level user menggunakan custom scritp berbasis shell ( seperti bash / zsh ) | Untuk penggunaan harian , terkadang tidak selalu harus terhubung ke internet. Sehingga ketika daemon di aktivkan pada level user, tidak ada pemborosan memory untuk daemon dibandingkan dengan daemon yang aktiv secara otomatis pada saat proses booting |
| Dalam beberapa rancangan sistem operasi, systemd menunggu koneksi tersambung terlebih dahulu sebelum melanjutkan loading terhadap service lainya, sehingga ini memperpanjang waktu load pada proses booting. | Disable daemon network pada systemd.                         | Dengan mematikan daemon network, proses booting  tidak ada lagi proses "waiting for network connection". Kondisi ini akan meminimalisir penggunaan memory dan waktu booting |
| Pada layer user (user land), sistem tray dan network manager menggunakan sumber daya memory untuk berjalan dalam mode GUI. | Membuat antar muka cli yang interaktif dan bekerja independent | Aplikasi berbasis CLI menggunakan sumber daya yang lebih sedikit dibadingkan dengan aplikasi berbasis GUI. |
| aplikasi network manager biasanya membutuhkan dependensi lain untuk bisa beroperasi, sehingga di butuhkan resource memory tambahan untuk aplikasi pendukung network manager. | Mencari aplikasi network manager yang mampu berkerja secara standalone | Penggunaan dependensi aplikasi lainya bisa dimimalisir yang nantinya akan berdampak kepada pemangkasan penggunaan sumber daya memory.Karena tidak ada dependensi aplikasi lainya yang harus aktiv untuk menghandle networking pada sistem operasi |



## Practical Approach

### Clean Package

Dalam proses ini,disarankan untuk menghapus atau mendisable seluruh aplikasi network managemen seperti package network-manager pada sistem berbasis ubuntu atau debian atau aplikasi network mangement lainya. 

### Disable Auto Start Network Daemon Pada Proses Booting

Network Modul yang akan kita disable saat proses boot adalah :

* systemd-networkd
* systemd-resolved
* systemd-networkd.socket

Untuk disable systemd-networkd.socket, anda bisa mengetikan perintah berikut diterminal

```sh
sudo systemtctl disable systemd-networkd.socket
```

Untuk disable systemd-networkd, anda bisa mengetikan perintah berikut diterminal

```sh
sudo systemtctl disable systemd-networkd.socket
```

Sedangkan untuk disable systemd-resolved, anda bisa mengetikan perintah berikut diterminal

```sh
sudo systemtctl disable systemd-resolved
```



### Mencari aplikasi network manager yang mampu berkerja secara standalone

Untuk problematika ini kita bisa menggunakan network management sebagai berikut untuk setiap interface network yang ada

| Nama              | Network Management |
| ----------------- | ------------------ |
| Wlan ( Wireless ) | iwd                |
| Eht0 ( Ethernet ) | systemd-networkd   |

Untuk perangkat ehternet (jaringan kabel / LAN), pada dasarnya systemd-networkd telah menyediakan fitur yang bisa kita gunakan dalam memanajemen jaringan ethernet, sehingga kita tidak membutuhkan aplikasi tambahan untuk kebutuhan tersebut.

Sedangkan untuk interface wireless, systemd-networkd membutuhkan apikasi penhubung seperti wpa-suplicant atau iwd. dalam rancangan ini kita menggunakan iwd. 

Beberapa kelebihan iwd diantaranya :

1. Bekerja tanpa aplikasi pihak ketiga ( independent )
2. Berkerja langsung dalam level kernel
3. Untuk layanan enkripsi, iwd tidak membutuhkan aplikasi pihak ketiga seperti open-sll. Setiap aktivitas kriptografi menggunakan module bawaan yang telah disediakan kernel.
4. Iwd mempunyai dhcp server yang independent atau bisa dihubungkan dengan fitur dhcp yang dimiliki oleh systemd-networkd

### Start network daemon dilakukan dalam level user menggunakan custom scritp berbasis shell 

Untuk ini saya telah membuat shell script sederhana yang bisa digunakan untuk mengaktivkan atau menonaktivkan daemon dengan interaksi yang minim dalam penggunaan comand

```sh
#! /bin/bash
# Aplikasi untuk aktivasi network daemon dan network pheripheral 
# Depend
# 1. iwd
# 2. iptables

##===============================================
## Function systemd network module
##===============================================

function sysup_cockpit() {
	systemctl start systemd-netowrkd.socket &> /dev/null;
	systemctl start systemd-networkd &> /dev/null;
	systemctl start systemd-resolved &> /dev/null;
	systemctl start iptables &> /dev/null;
	systemctl start iwd &> /dev/null;
}

function sysdw_cockpit() {
	systemctl stop iptables &> /dev/null;
	systemctl stop iwd  &> /dev/null ; 
	systemctl stop systemd-resolved &> /dev/null;
	systemctl stop systemd-networkd.socket &> /dev/null ;
	systemctl stop systemd-networkd &> /dev/null ;
}

function sys_upg() {
		echo "Do you want to upgrade system?";
		read -p  "Type (Y) to uprade or type (n) to abort : " upgrade;
		if [ $upgrade == 'Y' ]; then
			pacman -Syu;
			echo "---------------------------------------------------------";
			echo " Progres Status :"
			echo "	Main System  [ Upgraded ]";
			echo "---------------------------------------------------------";
		fi
}

##===============================================
## Banner
##===============================================

function credit() {
	echo	"========================================================="
	echo	" __   __     ______     ______   ______   __     ______  "
	echo	"/\  -.\ \   /\  ___\   /\__  _\ /\  == \ /\ \   /\__  _\  "
	echo	"\ \ \-.  \  \ \  __\   \/_/\ \/ \ \  _-/ \ \ \  \/_/\ \/ " 
	echo	" \ \_\\ \_ \  \ \_____\    \ \_\  \ \_\    \ \_\    \ \_\ "
	echo	"  \/_/ \/_/   \/_____/     \/_/   \/_/     \/_/     \/_/ "
    echo	"                                                         "
    echo	" Author    : Al Muhdil Karim"
    echo	" Version   : Alpha 1.0 "
    echo	" Program : Network Daemon and Service  "
    echo	"=========================================================" 
}

function appstatus() {
	echo " DAEMON STATUS"
	systemdnt=$( systemctl status systemd-networkd | grep "dead");
	systemdrs=$( systemctl status systemd-networkd | grep "dead" );
	systemdfw=$( systemctl status iptables | grep "dead" );
	
	if [[ $systemdnt > 1 ]]; then
		ntres="Network  : Died | "
	else
		ntres="Network  : Active  | "
	fi
	
	if [[ $systemdrs > 1 ]]; then
		rsres=" Resolved  : Died | "
	else
		rsres=" Resolved :  Active  | "
	fi
	
	if [[ $systemdfw > 1 ]]; then
		fwres=" Firewall : Died"
	else
		fwres=" Firewall  : Active "
	fi
	echo " "$ntres$rsres$fwres;
	echo "---------------------------------------------------------"
}

function appopt() {
	echo    " Select Network Action by type number bellow";
	echo    " 	1. Enable Network";
	echo    " 	2. Disable Network";
	echo    " 	3. Exit";
	echo    " ---------------------------------------------------------";         
}
 
function banner() {
	clear;
	credit ;
	appstatus ;
	appopt ;
}
   
function main() {
	banner;
	read  -p "Type your action number : " device;
	while :
	do
		case $device in
			'1')
				echo "Activating module ..."
				sysup_cockpit;
				sleep 1;
				sys_upg;
				main ;;
			'2')
				echo "deactivating module ..."
				sysdw_cockpit;
     			sleep 1;
				main;;
			'3')
				clear;
				exit ;;
			*)
				main;;
		esac
	done
}
main

```



Script ini akan menampikan dialog interaktif yang berfungsi untuk mengaktivkan atau menonaktivkan  service

1. systemd-networkd - yang ditujukan untuk handling networking
2. systemd-resolved - yang ditujukan untuk handling dns
3. iptables - yang ditujukan untuk mengaktivkan firewall
4. iwd - yang ditujukan untuk handling koneksi berbasis wireless

Untuk menggunakan script di atas, anda dapat menggunakan langkah berikut

1. membuat file kosong dengan nama netpid.sh

   ```sh
   nano netpid.sh
   ```

2.  copy source code di atas kemudian save dengan menekan tombol "Ctrl+X"

3. berikan akses untuk di eksekusi

   ```sh
   chmod +x netpid.sh
   ```

   

4. eksekusi file dengan perintah

   ```sh
   ./netpid.sh
   ```

   atau

   ```sh
   /bin/bash netpid.sh
   ```

   

## Penutup

Pendekatan ini adalah hasil observasi sederhana penulis. Tentu masih banyak mempunyai kekurangan dari report sederha ini. Penulis sangat mengapresiasi setiap  komentar atau masukan atau perbaikan yang bisa mempertajam pendekatan ini.



