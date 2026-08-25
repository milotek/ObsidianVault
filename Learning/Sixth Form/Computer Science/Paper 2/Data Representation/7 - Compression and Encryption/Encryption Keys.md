> The encryption key, or vernam cipher has been proven to be the only cipher that is truely **unbreakable** - as long as certain rules are followed.

- The one time pad (or **key**) must be truely random.
- It must be used only once (unreused/single use)
- The key must be the same length as the data you're encoding
- Must be hand delivered to the recipient
*(technically, you could just securely send it but that's a security risk as you are relying on thr security of whatever service it's being sent by)*

-----
## How it works

To decode something with a decryption key, an **XOR** (see [[! - Logic Gates]]) algorithm is used.

Because the key is the same length as the data, the encoded binary value is compared with the decryption key's binary value

It's easier to see this diagram I just drew out:

