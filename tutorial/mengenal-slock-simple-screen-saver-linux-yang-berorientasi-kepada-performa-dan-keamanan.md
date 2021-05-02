---
author			: Al Muhdil Karim
title				: Mengenal Slock - Screen Saver Linux Yang Sederhana Namun Full Performance
date				: 2021-04-20T01:52:41+00:00
draft			: false
math	        : false
description : Mengenail lebih dekat slockm screen saver linux yang full performance dan cara installasinya di linux.
---

Slock adalah aplikasi yang berfugsi untuk mengunci layar ( Screen locker ) pada sistem operasi berbasis linux. Tujuannya adalah menjaga perangkat dari pihak yang tidak berwenang saat perangkat ditinggalkan dalam keadaan hidup. 

Slock merupakan singkatan dari "Simplest X display locker". Memang dalam rancanganya, slock didesain dengan sangat minimalis. Karena didesain secara minimalis, maka anda jangan terlalu berharap menemukan tampilan yang menarik saat menggunakan slock.

Ketika anda mengunci layar menggunakan slock, tampilan layar anda akan berubah menjadi hitam (blank). Pada saat layar terkunci dan anda mengetikan sesuatu pada keyboard, warna layar yang awalnya hitam (blank) akan berubah menjadi warna merah atau biru.  

Walupun memiliki tampilan yang sangat sederhana, slock mempunyai beberapa kelebihan. Yang pertama adalah slock bekerja dengan sangat cepat, bahkan untuk perangkat-perangkat yang cukup tua. 

Selain itu, slock juga ramah dalam penggunaan memory, slock tidak membutuhkan alokasi memory ( RAM ) yang besar untuk dijalankan. Kelebihan slock yang terakhir terkait dengan desain minimalisnya. Karena slock di desain secara minimalis, jika ditemukan celah keamanan akan lebih mudah untuk di perbaiki ( patch ). 

## Instalasi Slock di Arch Linux

* Buka terminal emulator
* Update repository arch  linux menggunakan perintah
```sh
	sudo pacman -Syy
```
* Setelah itu, ketikan perintah berikut untuk memulai proses  installasi :
```sh
	sudo pacman -S slock
```
Tunggu beberapa saat sampai proses installasi selesai.

## Instalasi Slock di Linux Ubuntu

* Buka terminal emulator 
* Update repository ubuntu terlebih dahulu, dengan mengetikan perintah
```sh
	sudo apt-get update -y
```
* Setelah itu, ketikan perintah berikut untuk memulai proses installasi :
```sh
	sudo apt-get install -y slock
```
Tunggu beberapa saat, sampai proses installasi selesai.

## Instalasi  Slock di Linux Fedora

* Buka terminal emulator 
* Update repository menggunakan perintah
```sh
	sudo yum -y update
```
* Setelah itu ketikan perintah berikut untuk memulai proses installasi :
```sh
	sudo yum -y install slock
```
Tunggu beberapa saat, sampai proses installasi selesai.

##  Cara Mengunci Layar Menggunakan Slock 
* Buka terminal  emulator
* Ketikan perintah berikut :
```sh
 slock
```
Setelah anda mengetikan perintah di atas dan layar perangkat anda akan menjadi hitam ( blank ), berati layar anda telah terkunci oleh slock.


## Cara Membuka Layar Yang Terkunci

Untuk membuka layar yang terkunci oleh slock anda cukup,
* Menekan tombol apa saja pada keyboard
* Ketika warna layar berubah menjadi biru atau merah, ketikan password anda.

Simple ya cara buka layarnya? mungkin ini adalah salah satu faktor yang mebuat slock dikenal sebagai  "simplest screen locker". Ketika aplikasi screen locker lain membutuhkan username dan password untuk membuka kunci layar, dengan menggunakan slock kita hanya butuh menginput password untuk membuka kunci layar.

Simplisitas yang ditawarkan oleh slock ini yang membuat saya menjadikan slock sebagai screen lockerfavorit saya ( kalau bisa pakai password aja, kenapa mesti ketik username, hehe).

## Tips : Otomasi Penguncian  Layar Menggunakan Systemd

Dalam langkah sebelumnya, untuk mengunci layar kita perlu membuka terminal terlebih dahulu, lalu mengetikan perinah `slock`. Walaupun tidak terlalu ribet, namun bagi saya ini adalah hal yang merepotkan, karena masih ada peluang untuk di otomasi.

Nah, dalam tips ini, kita akan membuat slock secara otomatis mengunci layar, ketika keadaan layar masuk kedalam keadaan sleep. Sehingga kita tidak perlu mengulang langkah manual sebelumnya.

Untuk  membuat slock berfungsi secatra otomatis, kita akan membuat sebuah daemon pada systemd. Berikut langkahnya,

* Buka terminal
* Buat file konfigurasi slock pada systemd menggunakan perintah
```sh
sudo nano /etc/systemd/system/slock@.service
```
* Copy configurasi berikut kedalam file tersebut
```sh
[Unit]
Description=Lock X session using slock for user %i
Before=sleep.target

[Service]
User=%i
Environment=DISPLAY=:0
ExecStartPre=/usr/bin/xset dpms force suspend
ExecStart=/usr/bin/slock

[Install]
WantedBy=sleep.target
```
* Selanjutnya save configurasi dengan menekan tombol `Ctrl+X`, ketika muncul dialog ketikan `Y` dan tekan ENTER
* Untuk mengaktivasi konfigurasi, silahkan restart perangkat anda. Namun, Jika anda malas untuk merestart perangkat, anda bisa mengetikan perintah berikut pada terminal anda.
```sh
sudo systemd daemon-reload
```
Sekarang slock secara otomatis akan mengunci layar ketika posisi perangkat anda dalam keadaan sleep.

## Artikel Terkait

[Cara Mengganti Warna Default Pada Slock Screen Locker ](https://almuhdilkarim.com/blog/mengganti-warna-pada-slock-screen-locker/)

## Referensi
1. [Arch Wiki](https://wiki.archlinux.org/index.php/Slock)
2. [Suckless.org](https://tools.suckless.org/slock/)


