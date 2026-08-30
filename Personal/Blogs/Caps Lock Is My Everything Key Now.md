I own three keyboards and, until this week, three sets of muscle memory.

- **Wooting 80HE** — my main board, lives on the NixOS PC, sometimes visits the Mac
- **HHKB Hybrid Type-S** — Mac only, because I am a man of culture
- **The MacBook's own keyboard** — because sometimes you're on the sofa

Every time I switched devices my hands would spend the first five minutes quitting things I meant to copy and copying things I meant to quit. So I decided to fix it properly: one muscle memory, three keyboards, two operating systems. How hard could it be?

## The HHKB is the boss of everyone

Here's the thing nobody tells you about unifying keyboards: you don't get to choose the layout. Your *most restrictive* keyboard chooses it for you. The HHKB has no bottom-left Ctrl key. It just doesn't. There's a blocker there. Its Control key lives where Caps Lock lives on normal keyboards, which HHKB people will tell you is the correct place with the energy of a street preacher.

So the common physical vocabulary across all three boards is: the caps position, the two keys left of space, and that's basically it. Everything had to be built out of those.

## The one weird trick

Turns out the entire problem collapses into a single realisation:

**Linux apps hang every shortcut off Ctrl in exactly the places macOS hangs them off Cmd.**

Ctrl+C / Cmd+C. Ctrl+W / Cmd+W. Ctrl+T, Ctrl+S, Ctrl+F, Ctrl+Z — it's a one-to-one mapping. Which means if one physical key sends **Ctrl on the PC** and **Cmd on the Mac**, nearly every shortcut you have ever used just… lines up. For free.

That key is Caps Lock. Obviously it's Caps Lock. Caps Lock is the best real estate on the entire board — home row, pinky, does nothing of value by default. On the Wooting it's Ctrl at the hardware level, on the HHKB it's already the Control key, and macOS will happily remap it to Cmd in System Settings. No drivers, no daemons.

## The part where I almost installed Karabiner

It wasn't all smooth. We went on a whole journey (with Claude, who to its credit kept ranking its own previous plan as worse each time I changed the requirements) through increasingly cursed designs:

1. Make the PC terminal conditionally treat Ctrl+C as copy-or-interrupt depending on selection *(felt hacky)*
2. Bend the Mac to behave like a PC, via Karabiner-Elements, an app-sniffing rule, and a scheme where two keys send *different Cmd keys* so the daemon can tell them apart *(genuinely deranged)*
3. Realise I don't actually use any of the shortcuts that made options 1 and 2 complicated

The lesson: **macOS is granite, Linux is clay.** Cocoa hardwires its conventions and gives you almost no native remapping, while literally everything on my PC — Hyprland binds, Ghostty keys, zsh — is a line of Nix in a flake. Bend the clay. Always bend the clay.

## The final scheme

| chord | what it does | everywhere? |
| ----- | ----- | ----- |
| caps + C / V | copy / paste, **including in terminals** | yes |
| caps + Q | quit | yes |
| caps + W | close tab | yes |
| caps + shift + C | kill a terminal program | yes |
| win key | window manager stuff (PC) / spare Cmd (Mac) | yes |

The PC side was comically small in the end: one Hyprland bind (`CTRL,Q → killactive`), four Ghostty keybind lines, done. The Mac side is Caps→Cmd plus shuffling Option/Cmd one slot over so the physical positions match, all in firmware and System Settings.

Interrupting a program is caps+shift+C now instead of plain Ctrl+C, which sounds like heresy but is actually just the macOS model — clipboard on the main modifier, raw control bytes demoted to a shifted corner. Windows and Linux terminals overload Ctrl because of decisions made before I was born. Which brings me to:

## Things I learned against my will

- **I have been an emacs user this entire time.** My zsh runs in "emacs mode". So does yours, probably. Every Ctrl+A, Ctrl+R and Ctrl+W you've ever pressed at a prompt is an Emacs chord. The vim config was a cover story.
- **Your terminal and your shell do not talk to each other.** They exchange raw bytes over a protocol designed for 1978 hardware. Plain arrow keys are standardised; *modified* arrow keys are a later extension that zsh's defaults simply don't know, which is why ctrl+arrow printed `;5D` confetti at my prompt until I bound four escape sequences by hand. The reason you've never seen this is that oh-my-zsh ships those exact lines to millions of people. Hand-rolled config means you get to meet the raw defaults personally.
- **Ctrl+Backspace has no standard encoding at all.** Ghostty sends `^H`, fixable with one bindkey. The zellij web client sends… a literal capital B. Just the letter B. That one's an upstream bug and no amount of config can un-destroy information.

## The seams I'm keeping

Full honesty: GUI text navigation still speaks two dialects (Ctrl+arrow words on Linux, Option+arrow on Mac — Cocoa hardwires it and I refuse to run a daemon over it), and the MacBook's ⌥ keycap now quits applications, which will confuse exactly one category of person: anyone who touches my laptop. 

This is a feature.
