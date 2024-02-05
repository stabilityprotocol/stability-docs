---
title: Rust Setup on Windows (using WSL)
description: Set up a local development environment for Substrate on Windows.
---

In general, UNIX-based operating systems—like macOS or Linux—provide a better development environment for developing Stability client. Most of developers worked have their enviroment setup in either MacOS or Linux, making much more easy to find support material in these enviroment than in Windows-based ones.

However, if your local computer uses Microsoft Windows instead of a UNIX-based operating system, you can configure it with additional software to make it a suitable development environment for developing Stability's client.
To prepare a development environment on a computer running Microsoft Windows, you can use Windows Subsystem for Linux (WSL) to emulate a UNIX operating environment.

## Before you begin

Before installing on Microsoft Windows, verify the following basic requirements:

- You have a computer running a supported version of the Microsoft Windows operating system.
- You must be running Microsoft Windows 10, version 2004 or later, or Microsoft Windows 11 to install Windows Subsystem for Linux on a computer with the Windows desktop operating system.
- You must be running Microsoft Windows Server 2019, or later, to install Windows Subsystem for Linux on a computer with the Windows server operating system.
- You have good internet connection and access to a shell terminal on your local computer.

## Set up Windows Subsystem for Linux

Windows Subsystem for Linux (WSL) enables you to emulate a Linux environment on a computer that uses the Windows operating system.

By using Windows Subsystem for Linux, create identical development enviroments to UNIX-based ones avoiding to configure a virtual machine image or a dual-boot operating system.

To prepare a development environment using Windows Subsystem for Linux:

1. Check your Windows version and build number to see if Windows Subsystem for Linux is enabled by default.

   If you have Microsoft Windows 10, version 2004 (Build 19041 and higher), or Microsoft Windows 11, Windows Subsystem for Linux is available by default and you can continue to the next step.

   If you have an older version of Microsoft Windows installed, see [WSL manual installation steps for older versions](https://docs.microsoft.com/en-us/windows/wsl/install-manual).
   If you are installing on an older version of Microsoft Windows, you can download and install WLS 2 if your computer has Windows 10, version 1903 or higher.

2. Select Windows PowerShell or Command Prompt from the Start menu, right-click, then **Run as administrator**.

3. In the PowerShell or Command Prompt terminal, run the following command:

   ```bash
   wsl --install
   ```

   This command enables the required WSL 2 components that are part of the Windows operating system, downloads the latest Linux kernel, and installs the Ubuntu Linux distribution by default.

   If you want to review the other Linux distributions available, run the following command:

   ```bash
   wsl --list --online
   ```

4. After the distribution is downloaded, close the terminal.

5. Click the Start menu, select **Shut down or sign out**, then click **Restart** to restart the computer.

   Restarting the computer is required to start the installation of the Linux distribution.
   It can take a few minutes for the installation to complete after you restart.

   For more information about setting up WSL as a development environment, see [Set up a WSL development environment](https://docs.microsoft.com/en-us/windows/wsl/setup/environment).

## Install required packages and Rust

To install the Rust toolchain on WSL:

1. Click the Start menu, then select **Ubuntu**.

1. Type a UNIX user name to create user account.

1. Type a password for your UNIX user, then retype the password to confirm it.

1. Download the latest updates for the Ubuntu distribution using the Ubuntu Advanced Packaging Tool (`apt`) by running the following command:

   ```bash
   sudo apt update
   ```

1. Add the required packages for the Ubuntu distribution by running the following command:

   ```bash
   sudo apt install --assume-yes git clang curl libssl-dev llvm libudev-dev make protobuf-compiler
   ```

1. Download the `rustup` installation program and use it to install Rust for the Ubuntu distribution by running the following command:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

1. Follow the prompts displayed to proceed with a default installation.

1. Update your current shell to include Cargo by running the following command:

   ```bash
   source ~/.cargo/env
   ```

1. Verify your installation by running the following command:

   ```bash
   rustc --version
   ```

1. Configure the Rust toolchain to use the latest stable version as the default toolchain by running the following commands:

   ```bash
   rustup default stable
   rustup update
   ```

1. Add the `nightly` version of the toolchain and the `nightly` WebAssembly (`wasm`) target to your development environment by running the following commands:

   ```bash
   rustup update nightly
   rustup target add wasm32-unknown-unknown --toolchain nightly
   ```

1. Verify the configuration of your development environment by running the following command:

   ```bash
   rustup show
   rustup +nightly show
   ```

   The command displays output similar to the following:

   ```bash
   # rustup show

   active toolchain
   ----------------

   stable-x86_64-unknown-linux-gnu (default)
   rustc 1.61.0 (fe5b13d68 2022-05-18)

   # rustup +nightly show

   active toolchain
   ----------------

   nightly-x86_64-unknown-linux-gnu (overridden by +toolchain on the command line)
   rustc 1.63.0-nightly (e71440575 2022-06-02)
   ```

## Check installation

After having the rust toolchain installed, now you can start developing Stability's blockchain client.

Build Stability's node with:

```bash
cargo build
```
