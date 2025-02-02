---
sidebar_position: 2
---

# Installation

This guide will walk you through the steps to install MetaCall on **Windows**, **Linux**, and **macOS**.

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows" default>

### Windows
    In order to install MetaCall on Windows, **powershell** can be used:

- `powershell` :

  ```
  powershell -NoProfile -ExecutionPolicy unrestricted -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; &([scriptblock]::Create((Invoke-WebRequest -UseBasicParsing 'https://raw.githubusercontent.com/metacall/install/master/install.ps1')))"
  ```

<br />

### Additional Parameters for Windows

- `-InstallDir <directory>` : Defines a custom folder in order to install MetaCall in, otherwise it uses `%LocalAppData%\MetaCall` by default.

- `-Version <version>` : Version of the tarball to be downloaded. Versions are available [here](https://github.com/metacall/distributable-windows/releases). Uses latest version by default.

- `-FromPath <path>` : Install MetaCall from an existing distributable tarball, path must point to a tarball downloaded from [releases](https://github.com/metacall/distributable-windows/releases).

Example usage:

- Install tarball version `v0.1.0` into `D:\metacall` :

  ```powershell
  powershell -NoProfile -ExecutionPolicy unrestricted -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; &([scriptblock]::Create((Invoke-WebRequest -UseBasicParsing 'https://raw.githubusercontent.com/metacall/install/master/install.ps1'))) -InstallDir 'D:\metacall' -Version '0.1.0'"
  ```

</TabItem>
<TabItem value="linux/macos" label="Linux / macOS">

### Linux / macOS
    In order to install MetaCall on Linux / macOS,    **curl**, **wget** can be used:

- `curl` :
    ```
    curl -sL https://raw.githubusercontent.com/metacall/install/master/install.sh | sh
    ```

- `wget` :
    ```
    wget -O - https://raw.githubusercontent.com/metacall/install/master/install.sh | sh
    ```

<br />

### Additional Parameters for Linux / macOS

- `--update` : Updates automatically MetaCall if it is already installed without asking to the user.

- `--uninstall` : Uninstalls MetaCall if it is already installed without asking to the user. Overwrites the update command.

- `--docker-install` : Runs Docker installation overwriting Docker fallback option over binary installation.

- `--no-check-certificate` : When running binary installation (the default one), disables checking certificates when downloading the tarball. Useful for environments where there is not certificates, but insecure.

- `--no-docker-fallback` : When running binary installation (the default one), disables Docker installation as fallback if the binary installation fails.

- `--from-path <path>` : Installs MetaCall from specific path, the `<path>` points to a previously download tarball located in your file system.

Example usage :

- Install with `curl` without checking certificates and without docker fallback:

  ```sh
  curl --insecure -sL https://raw.githubusercontent.com/metacall/install/master/install.sh | sh -s -- --no-check-certificate --no-docker-fallback
  ```

- Install with `wget` using Docker installer:

  ```sh
  wget -O - https://raw.githubusercontent.com/metacall/install/master/install.sh | sh -s -- --docker-install
  ```

- Install with `wget` from a existing tarball located at `/root/downloads/metacall-tarball-linux-amd64.tar.gz`:

  ```sh
  wget -O - https://raw.githubusercontent.com/metacall/install/master/install.sh | sh -s -- --from-path /root/downloads/metacall-tarball-linux-amd64.tar.gz
  ```

- Install `metacall` in a BusyBox without certificates:

  ```sh
  wget --no-check-certificate -O - https://raw.githubusercontent.com/metacall/install/master/install.sh | sh -s -- --no-check-certificate
  ```

</TabItem>
</Tabs>


