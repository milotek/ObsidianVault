Every desktop OS agrees that you need one key you hold down to make the other keys do interesting things. Not one of them agrees on which key that is, where it lives, what it's called, or how many jobs it should be doing at once.

I own three keyboards across two operating systems:


| Home                                      | Travel                                    | Office                                    |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| **Wooting 80HE**                              | **Standard MacBook built-in keyboard**        | **HHKB Hybrid Type-S**                        |
| ![[Pasted image 20260830222522.png\|300]] | ![[Pasted image 20260830222547.png\|300]] | ![[Pasted image 20260830222737.png\|300]] |
Before you accuse me of larp, and also buying needlessly expensive keyboards:
1. I got literally all of them for free.
2. I use all of them a pretty much equal amount. It's not for show!

Until this week though, when moving between machines, I had to feel around and make the same 10~ stupid misinputs before I could copy a line of text. Every switch cost me five minutes of quitting things I meant to copy and copying things I meant to quit.

After about 8 months of putting up with this, I decided to sit down and actually look at why this is so bad.
I already knew it was worse than "the keys are in different places" - I had an existing setup that worked well enough for me not to get *super* confused, but by no means was it perfect.

## macOS has three modifiers and three jobs

This is the bit I prefer about Apple:

- **Cmd** is the *application* modifier. Copy, paste, quit, close, save, find, new tab. If it's a thing an app does, it's Cmd.
- **Ctrl** is the *terminal* modifier. Control codes. `^C`, `^D`, `^Z`. It has almost no other job - it's basically vestigial outside a terminal.
- **Option** is the *text* modifier. Word-wise navigation, alt characters.

Three modifiers, three clean jobs, no overlap. Cmd+C copies text and it copies text *everywhere*, including inside a terminal, because interrupting a program was never Cmd's job in the first place.

## Linux and Windows have two modifiers and about four jobs

Ctrl is the application modifier **and** the terminal modifier. Same key, two jobs, and those two jobs collide head-on at exactly one chord: **Ctrl+C**.

Ctrl+C means "copy" in every application on your machine except the one you spend all day in, where it means "kill whatever's running". So the terminal emulators all invented **Ctrl+Shift+C** for copy, which is a chord nobody's pinky asked for and which exists purely as an apology for a design decision made in 1978.

Then there's **Super**, the window manager key, which barely does anything on a stock install and does everything on mine. macOS has no equivalent, because on macOS the window manager key is *also* Cmd - Cmd+Q, Cmd+W, Cmd+Tab.

So the modifier count doesn't even line up. Mac: three keys, three jobs. Linux: two keys, four jobs, one of them double-booked.

## and then the physical layout is inverted too

Here's the actually infuriating part. Bottom-left row, left to right:

| | corner | 2nd | 3rd | space |
| ----- | ----- | ----- | ----- | ----- |
| **PC** | Ctrl | Win | Alt | ␣ |
| **Mac** | Ctrl | Option | Cmd | ␣ |

Look at the slot next to space. On the PC it's **Alt** - the modifier you use least. On the Mac it's **Cmd** - the modifier you use for literally everything. The key your thumb falls onto naturally is the most important modifier on one machine and the least important on the other, and *the two OSes put their most-used modifier at opposite ends of the same four keys.*

That's not a preference thing you can train around. That's your hands being asked to hold two contradictory maps.

And then the HHKB shows up and makes it worse, because it doesn't have a bottom-left Ctrl **at all**. There is a plastic blocker where the key should be. Out of spite, I assume.

Which is fine, actually, because it forces the answer: **your most restrictive keyboard picks the vocabulary for everything else.** The only positions all three of my boards share are the caps row and the two keys left of space. So that's the whole vocabulary. Done.

## The fix is one key

Caps Lock. It's the best real estate on any keyboard - home row, right under your pinky, identical position on all three of my boards, and by default it does *nothing of value*. Shouting is not a use case.

So Caps Lock becomes the everything-modifier:

- **Ctrl** on the PC
- **Cmd** on the Mac

And that's basically it. That one substitution does almost all the work, because Linux apps hang their shortcuts off Ctrl in exactly the places macOS hangs them off Cmd. Ctrl+C / Cmd+C. Ctrl+W / Cmd+W. Ctrl+T, Ctrl+S, Ctrl+F, Ctrl+Z, Ctrl+A. The two OSes have been *agreeing on the letters this entire time* and disagreeing only about which key you hold. Change the key and the disagreement evaporates.

What my hands now know, on every board, on both OSes:

| chord | does |
| ----- | ----- |
| **caps + C / V** | copy / paste, *everywhere*, terminals included |
| **caps + Q** | quit the app |
| **caps + W** | close the tab |
| **caps + shift + C** | kill a terminal program |
| **caps + T / S / F / Z / A** | new tab / save / find / undo / select all |
| **win + Q / W** | window manager: close the window |
| **alt** (next to space) | just be Alt/Option, thanks |

And what each *position* has to send to make that true:

| position | on the PC | on the Mac |
| ----- | ----- | ----- |
| caps row | Ctrl | **Cmd** |
| win slot | Super (Hyprland) | **Cmd** again - a duplicate, and fine, quit works from both |
| alt slot | Alt | Option |
| corner *(where it exists)* | Ctrl | real Ctrl, for the rare thing that genuinely needs it |

The Mac column is the giveaway: I'm sending Cmd from two different positions and I do not care even slightly. Nobody's hands know what a duplicate modifier is.

### the one place they still genuinely disagree

The terminal, obviously. Somebody has to lose the Ctrl+C fight, and macOS's split is the correct one, so **the PC terminal gets bent to the Mac convention**: clipboard lives on the main modifier, interrupt gets demoted to the shifted variant. Caps+C copies, caps+shift+C kills. This is the inverse of every Linux terminal's default and it is right.

## How each machine actually gets there

**The PC (NixOS)** - comically little, all of it in the flake:

- Hyprland: `CTRL,Q → killactive`, so caps+Q quits like Cmd+Q does
- Ghostty: `ctrl+c/v` → copy/paste, `ctrl+shift+c/v` → the raw `^C`/`^V` bytes
- a handful of zsh bindkeys so ctrl/alt+arrows and ctrl+backspace do word things instead of printing escape-code confetti

**Wooting on the Mac** - a second Wootility profile, exactly one key different: Caps → Cmd. The Win key already *is* Cmd as far as macOS is concerned, and Alt is already Option. Two layouts, one key of difference between them.

**HHKB** - DIP switches into Mac mode, then the Keymap Tool shunts everything one slot over in firmware: Control→Cmd, Alt keycap→Cmd, ◇→Option, and right-Alt gets to be the board's only real Ctrl. It lives in the keyboard, so it works over Bluetooth, on anything, with no software on the host at all.

**MacBook internal** - System Settings → modifier keys: Caps Lock→Cmd, Option→Cmd, Cmd→Option. The ⌥ keycap now quits applications, which confuses precisely one category of person: anyone else who picks up my laptop. This is a feature.

**Mac Ghostty** - two lines, so caps+shift+C/V sends raw bytes there too, same as the PC.

No Karabiner. No daemon sitting in the menu bar sniffing which app has focus. Firmware, a settings panel, and some Nix.

## The seams I'm keeping

GUI text navigation still speaks two dialects - Ctrl+arrow for word-jumps on Linux, Option+arrow on Mac. Cocoa hardwires it, and I am not running a background daemon over one arrow key.

And the keycap legends now lie on two of the three boards. Keycaps are for tourists. My hands don't read.

> [!NOTE]- Things I learned against my will
> - My zsh runs in "emacs mode", and so does yours, probably. Every Ctrl+A and Ctrl+R you've ever typed at a prompt is an Emacs chord. The vim config was a cover story.
> - Your terminal and your shell talk to each other in raw bytes over a protocol designed for 1978 hardware. Modified arrow keys aren't in the standard set, which is why ctrl+arrow printed `;5D` at my prompt until I bound the sequences by hand.
> - Ctrl+Backspace has no standard encoding at all. Ghostty sends `^H`. The zellij web client sends a literal capital B. Just the letter B. Nobody knows why.
