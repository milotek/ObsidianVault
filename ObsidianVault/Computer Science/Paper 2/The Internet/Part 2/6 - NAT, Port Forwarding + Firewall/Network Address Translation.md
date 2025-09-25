
[[Network Address Translation]], or [[Network Address Translation|NAT]], allows multiple devices within a local network to share a single public IP address for communication with external networks, such as the internet.

For example, your home router uses NAT.
When you use NAT, all devices behind the NAT device (in this case the router) will appear as a single IP address. The outside world sees it as one thing.

However, for someone outside trying to communicate with something behind the NAT device, it has no way of communicating specifically with that device. All it knows is that one public IP address.

To fix this, you have [[Port Forwarding]]. What port forwarding does is tells the NAT device that all inbound communication on a specific port is meant for a specific device behind the NAT. So when it sees an inbound communication on that port, it will automatically forward that traffic to the private IP address you specified.


![[Pasted image 20241017104444.png]]
