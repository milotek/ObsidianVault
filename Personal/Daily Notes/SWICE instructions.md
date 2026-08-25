---
aliases:
  - SWI:CE instructions
---
[Video demo](https://recall.googleplex.com/projects/125b4f51-b2cc-48ce-a4a3-1edd340cd0cf/sessions/b4a5e8e3-0449-4ee9-afca-9cb11fa4dc40)

1. Set mock capabilities header
	1. Install a google-internal chrome extension, [Zwieback Forge](https://chromewebstore.google.com/detail/zwieback-forge/jomhbanomhmjjembkijglfnmalffmmcl?authuser=0&hl=en), to set capabilities header for google.com. This extension can be installed from.
	2. Set a sample header value for TNG surface and with AIMode service and capabilities enabled ([screenshot](https://screenshot.googleplex.com/87EEu3aoraT3L7L)).: `CA0SAhgBEgIYAhICGEsSBBABGA4SBhACEAEYExIGEAIQAxgWEggQARACEAMYGBICGBsSBBAAGG8SAhgfEgIYIhIEEAAYJBIEEAAYYhICGCUSChABEAMQBBAFGCgSAhgpEggQARAFEAYYKxIEEAAYORIEEAAYSBICGC4SDBACEAMQBBAGEAUYMBIEEAAYaRIEEAAYWBICGEoSChAAEAEQAhADGD4SBBAAGDoSEBACEAUQCBADEAQQBhAHGE4SBBABGFQSGBAAEAEQAxAFEAQQCRAGEAcQHRAcEBUYYRICGCwSCBAAEAEQAhhnEgQQABhwEgQQARgLEgIYQxIEEAEYHBICGHQYAQ`
2. This feature of setting the header would eventually be supported in the Silk Web Inspector. But until then, manually set the header with the steps mentioned above.
3. Enable the Client emulator option in the [WebDevX settings](chrome-extension://gkekdedmpkcdfaopheedplemnmehgdni/app.html?page=options)
4. Open google.com in your desktop browser where the above extensions are installed.
5. Open DevTools > Silk Inspector (dev) tab and all the tabs.
6. Do a search to open SRP and switch to the AIMode tab.
7. Open Silk Method Calls and Silk Event Subscriptions and *observe that it shows some method and event subscription information*.
8. Enter the following details to test an AI mode input for example:
	- Service: `SilkAiModeApi`
	- Name: `AiModeInput`
	- Type: Event
	- Data: `Chh0aGlzIGlzIGFuIGFpIG1vZGUgaW5wdXQYAVgAYABoAXgAggELUTIwRWtzOGZFOWs=`
9. Scroll down to the client emulator tab - click the **Send** button next to the message.
10. Observe that a message has been sent to the AI mode tab:
	1. ![[Pasted image 20260820184424.png]]

11. To create your own data payload, use Protoshop ([screenshot](https://screenshot.googleplex.com/5RCNtGtUAuW5ZV4)).
	1. Open [https://protoshop.corp.google.com/](https://protoshop.corp.google.com/).
	2. Use `search.frontend.silk.apis.aimode.QueryPayload` as the message. 
	3. Copy the string from data above, without quotes.
	4. Use the Import from clipboard option to paste it into protoshop.
	5. Edit the value as needed.
	6. Copy the edited value using the Copy Proto option.
	7. Copy the value as base64 url.
	8. Use this value in the data field above.

---

Silk relies on a lot of AGSA specific assumptions and not everything will work 1:1 due to its inherit nature. 

With the devtools open, try changing the device dimensions to a mobile device: i.e: `Pixel 9`. This may fix some issues related to Silk.

![[Pasted image 20260820191300.png]]

---

You can also use the client emulator with a phone attached - simply repeat the steps above, but while using the Silk Web Inspector as normal, through chrome://inspect
Using this functionality, you will be able to do more extensive things, such as:

- [Send event messages (like ask AI Mode queries)](https://screencast.googleplex.com/cast/NDgyNjgzMzQ3MTE0MzkzNnw2Y2Q2NmYxNC1lZQ)
- [Fake the geolocation Silk reports](https://screencast.googleplex.com/cast/NjQ3NjU5NDAxMTk2MzM5MnxhODk0MmViMi1lOA)
- [Capture and edit Silk messages from a real client, to be reused without a device later](https://screencast.googleplex.com/cast/NTk5OTIyNjYxNzA2OTU2OHxmYTk3MzJiMS1hYw)

In addition, you can capture and then re-edit Silk messages through this (i.e: you won't have to extract the payload from DevTools console), and then edit it and add them to the client emulator.

Here's another example:

```md
## Pretend you're in Hong Kong
This one doesn't work with full client emulation, nor reliably, as the SRP gets your location in a variety of ways (Silk vs IP location, etc).

If you do it right, it should look like this: https://screenshot.googleplex.com/C6x8mCf3pPVon5W

You might have to disable your location permission in Google app settings if it doesn't work, or maybe your location has been cached, or maybe the SRP has mysteriously decided to use your IP to determine location instead. Either way, hopefully it will work for you.

Service: SilkGeolocationApi
Method: `getCurrentLocationWithOptions`
Type: Method Response
Response: `CiAIpKmds-0zEeCcEaW9UTZAGVD8GHPXilxAJQAA-kRQAQ==`

Service: SilkGeolocationApi
Method: `getGeolocationPermissionState`
Type: Method Response
Response: `Cg4gASoKCgIIARIECAEYAQ==`
```