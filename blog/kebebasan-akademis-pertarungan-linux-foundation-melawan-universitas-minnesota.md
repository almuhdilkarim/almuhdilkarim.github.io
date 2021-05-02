---
author	 	: Al Muhdil Karim
title    	: " Kebebasan Akademis ? Pertarungan Linux Foundation Melawan Universitas Minnesota"
date		: 2021-04-25T01:44:28+07:00
draft		: false
date		: 2021-04-25T01:44:28+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

{{< tweet 1384785747874656257 >}}

Greg Kroah Hartman adalah salah seorang maintenar yang bertanggung jawab dalam mengelola pengembangan kernel linux pada Linux Foundation. Linux Foundation adalah organisasi yang mendedikasikan kegiatannya untuk pengembangan kernel linux.

Dalam cuitannya, Greg mengungkapkan rasa kecewanya terhadap aktivitas riset yang dilakukan oleh Universitas  Minnesota. Selain Greg, banyak orang dalam komunitas linux merasa kecewa saat Universitas Minnesota menjadikan aktivitas pengembangan kernel sebagai objek eksperimen yang membahayakan bagi komunitas linux secara luas.

Polemik bermula dari aktivitas Universitas Minnesota yang mengajukan source code untuk tujuan perbaikan terhadap bugs dari kernel linux yang ada. Namun dalam source code yang diajukan oleh Universitas Minnesota, terdapat beberapa kode pemograman yang menimbulkan celah keamanan baru. 

Yang sangat disayangkan adalah, kode pemograman yang menimbulkan celah keamanan tersebut ternyata ditanamkan secara sengaja oleh Universitas Minnesota untuk sebuah penelitian ilmiah.

Berdasarkan catatan dari Linux Fundation, kejadian ini bukanlah kejadian yang pertama kalinya. Sebelumnya Universitas Minnesota juga pernah diberikan peringatan oleh Linux Foundation karena kasus yang sama.

Sebagai respon atas pemblokiran hak kontribusi oleh Linux Foudation terhadap  Universitas Minnesota. Universitas Minnesota menyatakan, "bahwa celah keamanan tersebut sengaja ditanamamkan untuk mengembangkan suatu kajian kemanan informasi terkait aktivitas penyerangan menggunakan pendekatan supply-chain.  Seluruh metode penelitian sampai dengan parameter ekperimen telah di evaluasi sebelumnya dan seharusnya dapat diterima."

## Mengenal Supply-Chain

Penyerangan dengan pendekatan supply-chain, adalah pendekatan serangan yang menjadikan jalur produksi suatu aplikasi sebgagai target serangan.  Dalam pendekatan ini , suatu celah keamanan ditanamkan saat aplikas sedang dibangun,  sehingga saat aplikasi diluncurkan kepada publik, penyerang bisa dengan mudah melakukan ekploitasi terhadap sistem informasi yang menggunakan aplikasi tersebut. 

Kerangka kerja yang berorientasi terhadap jalur produksi adalah pembeda antara pendekatan suply-chain dengan pendekatan serangan lainnya. Dalam pendekaan lainya, biasanya aktivitas peretasan berorientasi pada celah keamanan dari aplikasi yang telah berjalan di suatu sistem informasi atau menggunakan kelemahan yang berada dalam level pengguna.  

## Siapa Yang Salah ?

Ini adalah pertanyaan yang biasanya latah muncul ketika suatu permasalahan terjadi.  Secara pribadi, saya tidak terlalu menyukai pertanyaan ini. Karena menurut saya, pertanyaan semacam ini sangat jarang memberikan solusi dari suatu permasalahan dan malah memperluas cakupan permasalahan menjadi suatu peta konflik yang sentimentil. Saya lebih senang, memulai dengan pertanyaan, bagaimana kita mengurai permasalahanya ?  

## Bagaimana Permasalahanya ?

Kernel linux adalah salah satu projek sumber terbuka ( Open Source ), dimana setiap orang bisa ikut serta dalam  mengajukan perbaikan dan pengembangan proyek kernel linux. Hal ini berarti, setiap orang bisa memberikan source code yang telah mereka kembangkan kepada pengembang yang bertanggung jawab terhadap kernel linux.

Secara prosedur, source tersebut biasanya akan direview terlebih dahulu oleh maintener dari pada Linux Foundation. Namun perkembangan komunitas linux yang pada beberapa dekade mengalami peningkatan yang pesat. Membuat lonjakan pengajuan source kode perbaikan dan pengembangan. 

Dalam beberapa kasus mungkin saja terjadi ketidaksengajaan dari maintener pengembangan kernel dengan menyetujui source code yang didalamnya terdapat kode program yang membahayakan. 

Faktor ketidaksengajaan ini yang dimamfaatkan oleh serangan dengan suply-chain untuk menyisipkan kerentenan yang disengaja. Sehingga fenomana tersebut dapat dikategorikan sebagai suatu celah dalam jalur produksi pengembangan aplikasi berbasis Open Source.

Celah tersebut yang dimamfaatkan oleh Universitas Minnesota dalam eksperimen pengujian keamanan pegembangan kernel linux menggunakan pendekatan suply-chain.  Universitas Minnesota dengan secara sengaja menanamkan kode progam berbahaya kedalam kode perbaikan yang mereka ajukan untuk tujuan pengembangan kernel linux . 

Masalahnya adala, kernel yang didalamnya terdapat source code dari Universitas Minnesota tersebut  akan disebarkan secara luas kepada semua komunitas linux. Tidak semua orang dalam Komunitas linux adalah orang-orang yang ahli dalam bidang pengembangan kernel.

Bahkan jika seorang pengguna tergolong sebagai pengguna linux pada tingkat mahir dan mempunyai keahlian dalam pengembangan kernel,  tidak semua juga mempunyai waktu untuk mereview kembali source code kernel memakan waktu yang cukup lama. Kebanyakan mereka akan menggunakan yang ada atau memodifikasi sedikit dari source code kernel untuk tujuan tertentu. 

Sederhananya, kernel yang  menyimpan source code Universitass Minnesota sebagai bagian dalam rilisnya akan membuat penggunanya berpotensi menjadi korban dari suatu serangan siber. 

Apalagi melihat fakta pengguna linux pada akhir-akhir ini, dimana pengguna linux mulai berkembang dari berbagai latar belakang. Linux digunakan mulai dari server pemerintahan dan perusahaan sampai dengan pengguna personal untuk komputer pribadi mereka. Aktvitas riset ini, tentu akan membawa komunitas pengguna ini kedalam suatu resiko keamanan.

Pertimbangan ini yang menjadi landasan dari Linux Foundation untuk menutup akses terhadap Universitas Minnesota dalam berkontribusi terhadap pengembangan kernel linux. 

Tindakan ini diambil, karena sebelumnya Universitas Minnesota pernah melakukan hal yang sama. Dalam kasus sebelumnya Universitas Minnesota telah diberikan peringatan oleh Linux Foundation.

## Bagaimana Solusinya ?

Untuk solusinya, saya bukanlah orang yang mempunyai wewenang. Saya hanyalah seorang pengguna linux reguler yang kebetulan tertarik dengan isu ini. Akan tetapi, saya mungkin boleh memberikan opini berdasarkan pendapat pribadi saya.

Riset yang dilakukan oleh Universitas Minnesota seharusnya mempunyai pertimbangan parameter resiko yang lebih terukur, sehingga tidak harus membahayakan banyak pihak dalam aktivitas riset yang dilakukanya. 

Cakupan riset yang dilakukan oleh universitas Minnesota mempunyai pretensi yang merugikan dalam skala luas. Bagi saya pribadi, nilai kebebasan akademis berbading lurus dengan tanggung jawab terhadap keberadaan orang lain di luar civitas akademika. 

Bagi Linux Foundation, saya bisa memahami ketidaksengajaan dalam menyetujui source code yang diajukan oleh Universitas Minnesota. Setiap harinya mungkin para maintener kernel linux  harus berhadap dengan ratusan sampai ribuan pengajuan source code. Melakukan review terhadap setiap pengajuan bukanlah hal yang mudah.

Hal yang manusiawi jika ada satu atau dua baris kode yang berisi kerentanan bisa terlewatkan dalam proses audit. Namun menutup akses terhadap suatu komunitas tertentu, menurut saya juga bukanlah langkah yang tepat. Langkah ini sedikit kontradiktir dengan tujuan awal keberadaan kernel linux. 

Secara pribadi, saya melihat fenoemena ini sebagai tantangan bagi komunitas linux khususnya dan open source secara luasnya. Kita mungkin bisa mulai berfikir bagaimana cara mengamankan jalur produksi dari pengalaman ini. Sehingga kedepanya proyek  linux atau proyek sumber terbuka lainya bisa menjadi lebih baik, baik untuk pengguna baru ataupun mahir. 


## Referensi

[Linux Fellow Bans University Contributing Kernel](https://www.tomshardware.com/news/linux-fellow-bans-university-contributing-kernel)

[University Minnesota Linux Kernel Ban Research](https://www.theverge.com/2021/4/22/22398156/university-minnesota-linux-kernal-ban-research)

[Greg Kroah Hartman Bans University Of Minesota From Linux Development For Deliberately Buggy Patches](https://www.zdnet.com/article/greg-kroah-hartman-bans-university-of-minnesota-from-linux-development-for-deliberately-buggy-patches/)

[University Of Minnesota Respond Linux](https://www.tomshardware.com/news/university-of-minnesota-responds-linux-ban)









