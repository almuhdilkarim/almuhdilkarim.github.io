---
author	 	: Al Muhdil Karim
title    	: "Cara Meningkatkan Keamanan Ssh Pada Server Linux"
date		: 2021-04-23T02:43:37+07:00
draft		: true
date		: 2021-04-23T02:43:37+07:00
description	: ""
Tags		: []
Categories	: []
math	    : false
DisableComments: false

---

```
Consider hardening SSH configuration - Details : AllowTcpForwarding (set YES to NO) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config'
- tambahkan pad line paling bawah `AllowTcpForwarding no`

```
Consider hardening SSH configuration - Details : ClientAliveCountMax (set 3 to 2) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `ClientAliveCountMax 2`

```
Consider hardening SSH configuration - Details : Compression (set YES to NO) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `Compression no`

```
Consider hardening SSH configuration - Details : LogLevel (set INFO to VERBOSE) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `LogLevel VERBOSE`

```
Consider hardening SSH configuration - Details : MaxAuthTries (set 6 to 3) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `MaxAuthTries 3`

```
Consider hardening SSH configuration - Details : MaxSessions (set 10 to 2) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `MaxSessions 2`

```
Consider hardening SSH configuration - Details : PermitRootLogin (set YES to (FORCED-COMMANDS-ONLY|NO|PROHIBIT-PASSWORD|WITHOUT-PASSWORD)) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `PermitRootLogin no`

```
Consider hardening SSH configuration - Details : Port (set 22 to ) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `Port 19150`

```
Consider hardening SSH configuration - Details : TCPKeepAlive (set YES to NO) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `TCPKeepAlive no`

```
Consider hardening SSH configuration - Details : UseDNS (set YES to NO) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config`
- tambahkan pad line paling bawah `UseDNS no`

```
Consider hardening SSH configuration - Details : AllowAgentForwarding (set YES to NO) https://cisofy.com/lynis/controls/SSH-7408/
```

Troubleshot untuk result ini adalah:

- buka file `nano /etc/ssh/sshd_config'
- tambahkan pad line paling bawah `AllowAgentForwarding no`