---
sticker: lucide//file-question
tags: questions, comp-sci, completed
---
## Question 1
![[Pasted image 20250103231753.png]]

![[Pasted image 20250103231837.png]]

The answer is **D** as the rest API will be on the endpoint (server), not client.



![[Pasted image 20250103231922.png]]

![[Pasted image 20250104005720.png]]

Representation 2 uses **XML** or **B**.



![[Pasted image 20250104005835.png]]

JSON is more compact in terms of filesize and text-length, and is more easily parsed / integrated by Javascript.



![[Pasted image 20250104010720.png]]

That each buyer will only view a certain property at most once per day.



![[Pasted image 20250104010707.png]]

```sql
SELECT PropertyID, Street, Bedrooms, AskingPrice
FROM Buyer, Property
WHERE BuyerID = 23
AND DesiredArea = Area
AND Bedrooms >= MinBedrooms
AND Price <= MaximumPrice
ORDER BY AskingPrice DESC
```

-----
## Question 2
![[Pasted image 20250104123553.png]]

**Record locking** is a way to prevent two or more users from editing/saving a record in a database at the same time.
For example: When user A wants to edit a specific record, while he is in the process of editing it, everyone else who tries to access it too will be denied write access. Once the record is saved or edits are cancelled, the lock is released. This way, records can never be saved as to overwrite other concurrent edits, preserving data integrity.

**Timestamp ordering**, conversely, is a protocol that ensures that any conflicting read and write operations are executed in timestamp order.
Timestamps are generated at the start of a record edit.
*From: [PMT](https://pmt.physicsandmathstutor.com/download/computer-science/a-level/notes/aqa/10-fundamentals-of-databases/definitions.pdf)*

-----
## Question 3
![[Pasted image 20250104125538.png]]

The [[Domain Name System]]is a protocol that translates human-readable domain names into their respective IP addresses. It is comparable to a large, automated phone book for your internet browser. 

When a user enters a [[Domain]] (such as www.google.com), the domain name system will be used to find the according [[IP Address]] for it (which in Google's case, is 8.8.8.8).

The reason for its importance is it greatly simplifies web navigation. It is much easier for humans to remember a website domain vs a raw [[IP Address]]

-----
## Question 4
![[Pasted image 20250104130403.png]]

A DNS server translates human-readable domain names into their respective IP address. For example, www.google.com goes to [8.8.8.8](https://google.com/).

1. A situation where DNS would not be used is when an IP address is typed **directly** into the address bar, as opposed to using search or a domain name.
2. Another instance would be if the resource is located locally, in which case any internet protocols wouldn't be used at all.

-----
## Question 5
![[Pasted image 20250104130840.png]]

The key exchange problem refers to the fact that the  [[Encryption Keys]] used in symmetric ciphers like Vernam and Caeser **must be securely kept, and sent / transported**, either in person or online. There are issues with both, as real world transportation is extremely inefficient, while online transportation poses a number of cybersecurity risks.

-----
## Question 6
![[Pasted image 20250104131240.png]]

Using [[Asymmetric Encryption]]:

Computer B will decrypt the message using its **private key**, as the message was encrypted by Computer A with Computer B's **public key**.

To verify the digital signature, Computer B will use Computer A's **public key** to decrypt the signature and obtain the hash value created by Computer A. It will then compute its own hash value from the received message and compare it with the decrypted hash. If the two hash values match, it confirms that the message was sent by Computer A and has not been altered.

-----
## Question 7
![[Pasted image 20250104133752.png]]

- The system will be centralised which will mean administration and database access will be easier to manage.
- Running the database off the server will ensure it is always-online / persistant and not dependant on peers. This will also make it easier for database conflicts to be managed / concurrent access.



![[Pasted image 20250104141629.png]]

A thin-client network works by having heavy processing carried out on the **back-end** / server. A thin client relies on a network connection to a centeral server for full computing and does not do much processing on its own hardware.

It works by having the server hosting virtual desktops which thin clients then connect to. Mouse, keystrokes and all user inputs are sent to the server, which then transmits the computer display back to the thin client. On a thick client, a network connection is not required and processing is done locally, like a traditional PC does.

Because not much process is done on the client machine in thin-client, this significantly reduces the hardware requirements, meaning very cheap machines can be used, and pre-existing hardware can be re-used, saving money.



![[Pasted image 20250104143638.png]]

College network uses a different protocol from the Internet



-----
## Question 8
![[Pasted image 20250104151420.png]]

The student’s computer sends the data packet within the LAN using the **default gateway**, which is Router 1 in the **192.168.1.0/24 segment**. Router 1 inspects the packet's destination IP address, determines that it belongs to a different network, and forwards it to **Router 3**, which connects the LAN to the Internet. Router 3 uses **NAT (Network Address Translation)** to replace the private IP address of the student’s computer with the public IP address of the school’s network before sending the packet to the Internet.

On the Internet, the packet travels through various routers based on the destination IP address of the web server in Chicago. Each router along the way uses the **routing table** to decide the best path to the next hop, ensuring the packet moves closer to the server. When the packet reaches the server’s network, the **final router** routes the packet to the specific web server using the server’s local IP address. The web server then processes the data packet and prepares a response to send back to the student’s computer following a similar route in reverse.

-----
## Question 9
![[Pasted image 20250104153419.png]]

An [[IP Address]], or **I**nternet **P**rotocol address, is a unique address used to identify a device on the internet. 



![[Pasted image 20250104153745.png]]

A protocol refers to a set of rules defined for communication between devices / interfaces.



![[Pasted image 20250104153824.png]]

HTTP is commonly used and is needed to access websites and internet pages, which would assumably used for educational purposes.
Telnet is a legacy and insecure protocol by today's standards - no traffic is encrypted, and to have one open would be a security flaw.



![[Pasted image 20250104154006.png]]

The client-server model refers to the network architecture in which there is a central node, known as the server, which all clients have one single connection to. The server handles the majority of process-intensive tasks and the server is typically more powerful than a client for this reason.

To apply the security update to the company's server:
1. **Open FTP client** and use his login details + connection details to connect to the security update FTP server at `ftp.aqaservertools.com`.
2. **Download the security update** for the according piece of software from the FTP server onto his device.
3. **Disconnect from security update FTP server** and **connect to company FTP server** at `80.56.34.12`. 
4. **Upload the security update** to the company FTP server from his device that he downloaded earlier.

	*(Optional: replace outdated and insecure Telnet with superior SSH.)*

5. **Open Telnet client** and connect to company Telnet server. Once connected, he should run the command to restart the server / apply update patches.

-----
## Question 10
![[Pasted image 20250104184359.png]]

- Thin-client hardware requirements are typically much lower than thick-client, because much less processing is done on the client in thin, so therefore not much processing power is needed.
- Thick-client however needs more powerful, and therefore more expensive hardware, as most of the processing is done on the client.
- As for technical specs:
	- More bandwidth / faster download + upload speed required, as it will be a very network-intensive resource.
	- It will need multiple processors or a very fast CPU and clock speed, as well as multiple cores.
	- A lot of RAM and secondary storage to carry out resource-intensive tasks and store / host critical shared files for clients.

-----
## Question 11
![[Pasted image 20250104203237.png]]

![[Pasted image 20250104203244.png]]

A: `192.168.192.1`
B: `192.168.64.1`
C: `192.168.64.2`



![[Pasted image 20250104225843.png]]

The answer is **C** as that is the subnet mask for 20 bits.



![[Pasted image 20250104230604.png]]

We are running out of available IPv4 addresses to be assigned, as the limit is the 32 bit limit integer or around 4 billion ($2^{32} = 4,294,967,296$).
IPv6 has $2^{128}$ possible addresses.



![[Pasted image 20250104233952.png]]

Star topology.



![[Pasted image 20250104230619.png]]

The CSMA/CA protocol with RTS/CTS will manage this wireless transmission in a carefully coordinated sequence. The laptop first employs carrier sensing to monitor the wireless channel, waiting until it detects no ongoing transmissions. When the channel appears free, rather than immediately sending data, the laptop transmits a Request to Send (RTS) frame to the wireless access point, indicating how long it needs the channel. Upon receiving this request, the access point responds with a Clear to Send (CTS) frame if it's ready to handle the transmission. This CTS includes timing information that helps other nearby devices avoid transmitting during this period. Any other wireless devices that hear either the RTS or CTS will update their Network Allocation Vector (NAV) accordingly, staying quiet for the specified duration. Once the laptop receives the CTS, it can proceed to transmit its data frames to the access point, which will forward them to the destination computer. The access point confirms successful receipt of each data frame by sending back acknowledgment (ACK) frames. This systematic approach helps prevent data collisions in the shared wireless medium and ensures reliable transmission.

-----
## Question 12
![[Pasted image 20250104235752.png]]

SMTP (**S**imple **M**ail **T**ransfer **P**rotocol) - protocol that controls / infers sending and receiving email between machines.

SSH (**S**ecure **Sh**ell) - provides a secure command line interface so the server can be managed and administrated / maintained.

-----
## Question 13
![[CleanShot 2025-01-05 at 01.53.34@2x.png]]

What a boring question.
`111111111111111111111111111`



![[CleanShot 2025-01-05 at 01.57.17@2x.png]]

32 bits - 27 bits = 5 bits
$2^5$ - 2 = 30



![[CleanShot 2025-01-05 at 23.19.17@2x.png]]

DHCP or the **D**ynamic **H**ost **C**onfiguration **P**rotocol is a protocol used on networks to automate the configuration of IP address assignment, subnet masking, and the default gateway to hosts.
It makes connecting to a network easier as it is automated and is considered standard in most if not all modern routers. It also prevents IP addresses from being missassigned.

How it works:
1.   Host/connecting device sends request to discover a DHCP server.
2.   DHCP server offers configuration to host; **NE**. server gives IP address to host
3.   Host accepts offer of configuration from DHCP server
4.   DHCP server confirms that configuration has been allocated to host;



-----
## Question 14
![[CleanShot 2025-01-06 at 00.48.51@2x 1.png]]

The router will have been configured to port forward incoming web traffic on `XXXX` port(s) to the internal IP address of the web server at `192.168.16.12`.

For example - if it was a website, this would assumably port forward ports `80` and `443` to `192.168.16.12`, as these are HTTP and HTTPS respectively.



-----
## Question 15
![[CleanShot 2025-01-06 at 00.54.33@2x 1.png]]

Router and Firewall port: `187.17.10.25`
Router 2 port: `192.168.2.1`



-----
## Question 16
![[Pasted image 20250106215125.png]]

- Transport layer
- Client port number is assigned to client by transport layer, and then sent to the web server so it know where
- Web server uses `80` (`http`) or `443` (`https`) port and protocol to retrieve the webpage.



-----
## Question 17
![[Pasted image 20250106220824.png]]
![[Pasted image 20250106220837.png]]

`192.168.0.1`



![[Pasted image 20250106230822.png]]

Star topology



![[Pasted image 20250106230837.png]]

These devices are not directly connected to internet and are instead routed through a router and NAT, as there is not enough IP addresses to assign an individual IP address to every device in the world.

![[Pasted image 20250106231757.png]]

The desktop computer uses the subnet mask (255.255.255.0) to determine if the FTP server's IP address (67.84.23.102) is on the same network. It performs a logical AND operation between its own IP address and the subnet mask, and between the FTP server's IP address and the subnet mask. The resulting network IDs are compared. If the network IDs are different, the computer concludes that the FTP server is on a different network. The data is then sent to the default gateway (the combined device), which forwards it to the Internet.



![[Pasted image 20250106234236.png]]

The firewall acts as a whitelist for accepted web traffic between the LAN and Internet. It will block/allow traffic through specific ports + protocols, and block/allow traffic through certain domains/IP addresses.Baseband can only transmit one transmission at a time and uses up the whole bandwidth range.
Broadband is shared and allocates a split of the available bandwidth to each device connected on LAN.



![[Pasted image 20250106234509.png]]

The desktop computer uses the subnet mask (255.255.255.0) to determine if the FTP server's IP address (67.84.23.102) is on the same network. It performs a logical AND operation between its own IP address and the subnet mask, and between the FTP server's IP address and the subnet mask. The resulting network IDs are compared. If the network IDs are different, the computer concludes that the FTP server is on a different network. The data is then sent to the default gateway (the combined device), which forwards it to the Internet.



![[Pasted image 20250106234558.png]]

There is lower latency which is required for streaming video.

-----
## Question 18
![[CleanShot 2025-01-07 at 08.34.19@2x.png]]

The three labelled parts of the URL.
`https:` is the protocol.
`www.aqa.org.uk` is the domain.
`/gce/computing/2012comp2.pdf` is the directory/file pointer.
The top-level domain is the `.org.uk` part **only** (domain extension).

See [[Fully Qualified Domain Name]]for more info.




![[CleanShot 2025-01-07 at 08.37.37@2x.png]]

A DNS server translates human-readable domains into their respective IP Address.
For an example, if you sent `www.google.com` to a DNS server, it would return `8.8.8.8`, which is Google's IP.

1. If the user enters the direct IP address, such as `192.128.64.32` etc., it will not need to translate the address.
2. If the resource is local, or located on the user's hard drive, no internet protocols will be used at all.




-----
## Question 19
![[CleanShot 2025-01-07 at 08.42.34@2x.png]]
![[CleanShot 2025-01-07 at 08.42.42@2x.png]]

A suitable port for **A** would be `192.168.0.1` as this is a typical router's IP on LAN.
A suitable port for **B** would be `192.168.1.1` as indicated by the segment IP.
A suitable port for **the network adapter card in the student's computer** could be: `192.168.1.64` as that is assumably an unused IP in the correct segment in LAN.



![[CleanShot 2025-01-07 at 08.47.12@2x.png]]

[Bus](https://i.kym-cdn.com/entries/icons/original/000/044/551/dreamybus.jpg).



![[CleanShot 2025-01-07 at 08.48.35@2x.png]]

They would have used subnet mask `255.255.255.0` as all the IPs like `192.168.1.XXX` are valid, with the exception of **B**'s IP and 0 and 255.



![[CleanShot 2025-01-07 at 08.50.16@2x.png]]

An operating system designed specifically to be run by servers as opposed to a traditional home computer, to serve to clients. It is typically engineered for performance.



![[CleanShot 2025-01-07 at 08.51.26@2x.png]]

They could use a Wireless security protocol such as WPA2 or WPA3 to encrypt network traffic and thereby make it more secure.

Wifi has been chosen as bluetooth would be impractical and stupid.
(longer range, faster speeds, etc)



-----
## Question 20
![[CleanShot 2025-01-07 at 08.40.47@2x.png]]

The browser is operating in the transport layer 



-----
## Question 21
