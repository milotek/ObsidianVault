A subnet mask is a 32-bit number that is used to divide an IP address into network and host portions.
- It is represented in decimal format, such as 255.255.255.0, where each octet represents 8 bits.
- The subnet mask is used in conjunction with the IP address to determine which part of the address is the network portion and which part is the host portion.
- By applying the subnet mask to an IP address using the AND operation, we can determine the network address of a given host.
- Subnet masks are essential for routing data packets within inside a network and ensuring that they reach the correct destination.

-----
## Examples
#### Question 2
The IP Address of a host is `172.16.12.54` and its subnet mask is `255.255.255.240`.
- What is the **address ID** of the network (subnet)?
- What is the **broadcast address** for this subnet?

> [!NOTE]- Answer
> To find the **network address** (subnet ID):
> 1. Convert the IP address and subnet mask to binary:
>    - IP Address (172.16.12.54): `10101100.00010000.00001100.00110110`
>    - Subnet Mask (255.255.255.240): `11111111.11111111.11111111.11110000`
> 
> 2. Perform a bitwise AND operation between the IP address and subnet mask:
>    - Address ID: `10101100.00010000.00001100.00110000` or `172.16.12.48`
> 
> -----
> 
> To find the **broadcast address** for this subnet:
> 1. Invert the subnet mask to get the wildcard mask:
>    - Wildcard Mask: `00000000.00000000.00000000.00001111`
> 
> 2. Perform a bitwise OR operation between the inverted wildcard mask and the network address:
>    - Broadcast Address: `172.16.12.63`


#### Question 3
A device is allocated the IP address 124.95.87.78. The subnet mask is 255.255.255.192. The device has some packets to send to another device with IP address



#### Question 4
A computer with a host interface IP address 192.168.1.5 sends an IP datagram to a computer with IP address 192.168.2.3. In each case the subnet mask expressed in IPv4 dotted decimal notation is 255.255.255.0. The default gateway for the computer 192.168.1.5 is 192.168.1.1. Explain why the IP datagram is sent to the default gateway for forwarding to 192.168.2.3