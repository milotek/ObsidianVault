> [!TLDR] TL:DR
> Packets are used for **efficient and reliable transmission of data**. Instead of transferring a huge file as a single data block, sending it in smaller packets improves transmission rates. Packets also enable multiple computers to share the same connection.

When sending data across a network, they are broken up into small chunks, know as **packets**. These units are sent asynchronously for quicker transfer

-----
## Structure
The structure of a packet depends on its protocol. Typically a packet has a header and a payload.
#### **Header**
The header keeps overhead information about the packet, the service, and other transmission-related data. For example, data transfer over the Internet requires breaking down the data into IP packets, which is defined in IP (Internet Protocol), and an IP packet includes:

- The source IP address, which is the IP address of the machine sending the data.
- The destination IP address, which is the machine or device to which the data is sent.
- The sequence number of the packets, a number that puts the packets in order such that they are reassembled in a way to get the original data back exactly as it was prior to transmission.
- The type of service
- Flags
- And some other technical data

#### **Payload**
*Represents the bulk of the packet (all the above is considered as overhead), and is actually the data being carried.*


-----
## Example
Consider a **10GB** video has to be sent across a network.

If each packet contains `1500 bytes` of data:
- **10GB** is `10,000,000 bytes`.
- Divide total bytes by packet size...
- Could be sent in $\frac{10000000}{1500}= 6,666,667$ packets.


