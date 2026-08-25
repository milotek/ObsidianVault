> nah that's the same issue, with the issue being that the sandbox is working as intended --
> 
> because the readme might be malicious (uploaded by someone with write-only access, or uploaded by accident from a folder of shady stuff) it is sandboxed in a way that prevents access into the rest of the server with your own account

This seems to only occur on Chrome and on my mobile devices it is just fine for me.

<img width="420" alt="README image displaying correctly in editor view" src="https://github.com/user-attachments/assets/dff9a581-6f57-481a-ad52-2209abc4198a" />

<img width="420" alt="README image not displaying correctly in file browser view" src="https://github.com/user-attachments/assets/b144faa3-7ef9-412f-b65e-499c319cc208" />

<img width="420" alt="README image displaying correctly in file browser view... on mobile?" src="https://github.com/user-attachments/assets/59570a1a-e6be-4570-b6bc-f14b0a3766c2" />

---

fwiw:
- I have `rwmd` perms.
- I'm reporting this from a work device which locks down certain things right now - although this same thing happens on my personal devices running desktop Chrome iirc.
- Even then, it's odd that this might be affected by work policies, since I can access the image itself just fine.

Happy to make a proper bug if it is not related / not fixed with the mentioned next release change :)