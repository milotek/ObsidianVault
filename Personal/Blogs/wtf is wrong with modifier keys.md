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

Ctrl is the application modifier **and** the terminal modifier. Same key, two jobs, and they collide head-on at exactly one chord: **Ctrl+C**.

Ctrl+C means "copy" in every app on the machine except the one I spend all day in, where it means "kill whatever's running". Terminals worked around it by inventing **Ctrl+Shift+C** for copy - a chord that only exists because Ctrl+C was already taken in 1978 and nobody could take it back.

Then there's **Super**, which does nothing on a stock install and runs my entire window manager. macOS has no equivalent, because there the window manager key is *also* Cmd - Cmd+Q, Cmd+W, Cmd+Tab.

Mac: three keys, three jobs. Linux: two keys, four jobs, one of them double-booked.

## and then the physical layout is inverted too

The bottom-left row on a PC goes Ctrl, Win, Alt, space. On a Mac it goes Ctrl, Option, Cmd, space. Same four slots, filled in opposite orders.

So the key my thumb lands on without thinking is **Alt** on the PC, the modifier I use least, and **Cmd** on the Mac, the modifier I use for everything.

Then the HHKB makes it worse, because it has no bottom-left Ctrl **at all** - there's a plastic blocker where the key should be.

![[01-boards-before.svg]]

That last one is the useful constraint, though, because it settles the whole design: **the most restrictive keyboard picks the vocabulary.** The only positions all three boards share are the caps row and the two keys left of space, so everything has to be built out of those.

## The fix is one key

Caps Lock. Home row, right under the pinky, identical position on all three boards, and it does nothing.

So it becomes the everything-modifier: **Ctrl on the PC, Cmd on the Mac.**

![[02-boards-after.svg]]

That single substitution does almost all the work, because Linux apps hang their shortcuts off Ctrl in exactly the places macOS hangs them off Cmd. Ctrl+C / Cmd+C, Ctrl+W / Cmd+W, Ctrl+T, Ctrl+S, Ctrl+F, Ctrl+Z, Ctrl+A. The two OSes were *agreeing on the letters the entire time* and only disagreeing about which key you hold down. Swap the key and the disagreement disappears.

What I get on every board, on both OSes:

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

The Mac column sends Cmd from two different positions, which looks like a mistake and isn't - a duplicate modifier costs nothing, and quit works from both.

### the one place they still disagree

The terminal. Something has to lose the Ctrl+C fight, and I'd rather it was the interrupt than the clipboard, so **the PC terminal gets bent to the Mac convention**: clipboard on the main modifier, interrupt demoted to the shifted variant. caps+C copies, caps+shift+C kills. That's the inverse of every Linux terminal default.

## How each machine actually gets there

**The PC (NixOS)** - three things, all of it in the flake.

Hyprland needs one extra bind, so that caps+Q quits the app the way Cmd+Q does:

```nix
"CTRL,Q, killactive,"
```

Ghostty swaps the clipboard and the control code round:

```nix
keybind = [
  "ctrl+c=copy_to_clipboard"
  "ctrl+v=paste_from_clipboard"
  "ctrl+shift+c=text:\\x03"
  "ctrl+shift+v=text:\\x16"
];
```

`\x03` is the raw interrupt byte and `\x16` the raw paste one - the shifted chords hand the terminal exactly what Ctrl+C and Ctrl+V used to.

Then zsh, which doesn't get word-wise movement for free and needs the escape sequences bound by hand:

```sh
bindkey "^[[1;5C" forward-word        # ctrl+right
bindkey "^[[1;5D" backward-word       # ctrl+left
bindkey "^[[1;3C" forward-word        # alt+right
bindkey "^[[1;3D" backward-word       # alt+left
bindkey "^H"      backward-kill-word  # ctrl+backspace
```

Binding both the `;5` (ctrl) and `;3` (alt) variants to the same widget is what makes the PC accept the Mac chord and vice versa, so I don't have to remember which dialect the machine speaks.

**Wooting on the Mac** - a second Wootility profile, exactly one key different: Caps becomes Cmd. The Win key already *is* Cmd as far as macOS is concerned and Alt is already Option, so the rest of the board carries over untouched.

**HHKB** - DIP switches into Mac mode, then the Keymap Tool shunts everything one slot over in firmware. Control becomes Cmd, the Alt keycap becomes Cmd, the Meta keycap becomes Option, and the right Alt becomes the board's only real Ctrl. It lives in the keyboard rather than the host, so it works over Bluetooth on anything I pair it to.

**MacBook internal** - System Settings, Keyboard, Modifier Keys. Caps Lock becomes Cmd, Option becomes Cmd, Cmd becomes Option.

**Mac Ghostty** - the same two shifted keybinds as the PC, so caps+shift+C/V sends raw bytes there too.