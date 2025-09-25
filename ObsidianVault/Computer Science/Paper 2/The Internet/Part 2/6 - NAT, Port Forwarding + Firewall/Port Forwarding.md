When you use [[Network Address Translation]], all devices behind the NAT device will appear as a single IP address. The outside world sees it as one thing.

So, for someone outside trying to communicate with something behind the NAT device, it has no way of communicating specifically with that device. All it knows is that one public IP address.

To fix this, you have port forwarding. What port forwarding does is tells the NAT device that all inbound communication on a specific port is meant for a specific device behind the NAT. So when it sees an inbound communication on that port, it will automatically forward that traffic to the private IP address you specified.

-----
## Example
Let's say you want your friend to play on your Minecraft server that you host on your LAN home network, using Minecraft's open to LAN feature.

![[Pasted image 20241114093029.png|500]]

For your friend to join you, you will need to set [[port forwarding]] up. In your router settings put in port forwarding. 

```
Port: 25565
Private IP Address: 192.168.1.2
```

That is basically telling the router that anything that comes in on port 20, send that packet directly to the device with IP address 10.0.0.5. Is that correct?

Also, does an xbox one use port 20 by default?