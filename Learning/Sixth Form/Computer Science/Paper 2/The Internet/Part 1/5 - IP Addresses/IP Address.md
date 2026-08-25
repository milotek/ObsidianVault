
An **Internet Protocol** address is a unique string of numbers separated by periods (IPv4) or colons (IPv6), assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions:

1. **Host Identification**: Identifies a device on a network.
2. **Location Addressing**: Indicates where the device is within the network.

-----
## Types of IP Addresses
# IPv4
IPv4 (Internet Protocol version 4) uses a 32-bit address space. It is represented in **dotted decimal notation**. An IPv4 address consists of four octets (8-bit segments), ranging from `0` to `255`, separated by periods.

Example: `192.168.1.1`

In total, there are $2^{32}$ possible IPv4 addresses, or  = **4,294,967,296**

> [!NOTE]- Classes of IP Addresses (IPv4)
> IPv4 addresses are categorised into different classes, mainly used in older network designs:
> 
> Class A:1.0.0.0 to 126.255.255.255
> Class B:128.0.0.0 to 191.255.255.255
> Class C:192.0.0.0 to 223.255.255.255

# IPv6
IPv6 (Internet Protocol version 6) was introduced because we were running out of IPv4 slots. IPv6 uses a 128-bit address space, expressed in **hexadecimal** and separated by colons.

**Example:** `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

There are $2^{128}$, or **340282366920938463463374607431768211456** possible IPv6 addresses, which allows for a vastly larger number of unique addresses than IPv4.

-----
## Public vs Private IP Addresses

- **Public IP Address**: A globally unique IP address that can be accessed over the internet. Assigned by your ISP (Internet Service Provider).
    
- **Private IP Address**: Used within a local network, not accessible from the outside. Typically, private IP ranges are:
    
    - `10.0.0.0` to `10.255.255.255`
    - `172.16.0.0` to `172.31.255.255`
    - `192.168.0.0` to `192.168.255.255`

---

## Static vs Dynamic IP Addresses

- **Static IP**: A fixed address manually configured and does not change.
    
- **Dynamic IP**: Assigned by a DHCP server and can change over time.
    

-----
## How to Find Your IP Address
You can go to [this site](https://whatismyip.com/) or try one of the methods below.

### Windows:
1. Open Command Prompt.
2. Type `ipconfig` and press Enter.

### macOS:
1. Open Terminal.
2. Type `ifconfig` and press Enter.

-----
## Subnet Mask
A subnet mask is used to divide an IP address into the **network** and **host** portions. It defines which part of the IP address refers to the network and which part refers to the device.

For example, the subnet mask `255.255.255.0` means the first three octets are for the network, and the last octet is for the device.

### CIDR Notation

Classless Inter-Domain Routing (CIDR) notation provides a more flexible way of designating IP ranges. It is written as:

```php
<IP Address>/<prefix length>

// Example: 192.168.1.0/24
//Here, /24 indicates that the first 24 bits are used for the network address.
```