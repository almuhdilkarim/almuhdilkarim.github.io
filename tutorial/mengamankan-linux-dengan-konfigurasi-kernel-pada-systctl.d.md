---
author	 	: Al Muhdil Karim
title    	: "Mengamankan Linux Dengan Konfigurasi Kernel Pada Systctl"
date		: 2021-04-23T03:11:49+07:00
draft		: true
date		: 2021-04-23T03:11:49+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
#ANTI DDOS
kernel.printk = 4 4 1 7
#kernel.panic = 10
#kernel.sysrq = 0
kernel.shmmax = 4294967296
kernel.shmall = 4194304
#kernel.core_uses_pid = 1
kernel.msgmnb = 65536
kernel.msgmax = 65536
# vm.swappiness = 20
# vm.dirty_ratio = 80
# vm.dirty_background_ratio = 5
# fs.file-max = 2097152

## Protects against creating or following links under certain conditions
# fs.protected_hardlinks=1
# fs.protected_symlinks=1

# Enable address Space Randomization
kernel.randomize_va_space = 2

# Restrict core dumps
# fs.suid_dumpable = 0

# Hide kernel pointers
# kernel.kptr_restrict = 1

# Restrict access to kernel logs
# kernel.dmesg_restrict = 1
```

