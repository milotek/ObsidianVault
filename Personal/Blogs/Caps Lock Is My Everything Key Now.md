I own three keyboards and, until this week, three sets of muscle memory.

- **Wooting 80HE** — my main board, lives on the NixOS PC, sometimes visits the Mac
- **HHKB Hybrid Type-S** — Mac only, because I am a man of culture
- **The MacBook's own keyboard** — because sometimes you're on the sofa

Every time I switched devices my hands would spend the first five minutes quitting things I meant to copy and copying things I meant to quit. So: one muscle memory, three keyboards, two operating systems. This post is the spec.

## What I wanted the keys to do

Everything below is by **physical position** (I'm using Windows key names for positions, because that's what my hands think in). The rule I wanted, on every board, on both OSes:

| chord | does | where |
| ----- | ----- | ----- |
| **caps + C / V** | copy / paste | *everywhere*, including inside terminals |
| **caps + Q** | quit the app | everywhere |
| **caps + W** | close the tab | everywhere |
| **caps + shift + C** | kill a terminal program | everywhere |
| **caps + T / S / F / Z / A** | new tab / save / find / undo / select all | everywhere |
| **win + Q / W** | window manager: close the window | everywhere |
| **alt** (next to space) | just be Alt/Option | everywhere |

Caps Lock is the whole trick. It's the best real estate on the board — home row, pinky, does nothing of value by default — and it becomes **the everything-modifier**: Ctrl on the PC, Cmd on the Mac. Since Linux apps hang every shortcut off Ctrl in exactly the places macOS hangs them off Cmd (Ctrl+C/Cmd+C, Ctrl+W/Cmd+W, Ctrl+T, Ctrl+S…), that one mapping makes nearly the entire table line up *for free*.

The terminal is the only place the two OSes genuinely disagree — Linux terminals overload Ctrl+C as "interrupt" — so the PC terminal gets bent to the macOS convention: clipboard on the main modifier, interrupt demoted to the shifted variant.

## Where the keys physically are

You don't get to choose the layout — your most restrictive keyboard chooses it for you, and the HHKB has no bottom-left Ctrl key at all (there's just a blocker there, out of spite). So the shared vocabulary is the caps position plus the two keys left of space:

| position | Wooting | HHKB | MacBook |
| ----- | ----- | ----- | ----- |
| caps row | Caps | Control | Caps Lock |
| corner | Ctrl | *(nothing!)* | Ctrl |
| win slot (2nd along) | Win | Alt keycap | Option keycap |
| alt slot (next to space) | Alt | ◇ keycap | Cmd keycap |

And what each position must *send*:

| position | on the PC | on the Mac |
| ----- | ----- | ----- |
| caps row | Ctrl | **Cmd** |
| win slot | Super (Hyprland) | **Cmd** (yes, a duplicate — that's fine, quit works from both) |
| alt slot | Alt | Option |
| corner (where it exists) | Ctrl | real Ctrl, for the rare thing that genuinely needs it |

## How each machine gets there

**The PC (NixOS)** — comically little, all in the flake:
- Hyprland: `CTRL,Q → killactive` (caps+Q quits, matching Cmd+Q)
- Ghostty: `ctrl+c/v` → copy/paste, `ctrl+shift+c/v` → the raw `^C`/`^V` bytes
- a few zsh bindkeys so ctrl/alt+arrows and ctrl+backspace do word things instead of printing escape-code confetti

**Wooting on the Mac** — a second Wootility profile, one key different: Caps → Cmd. The Win key already *is* Cmd to macOS, Alt already is Option.

**HHKB** — DIP switches into Mac mode, then the Keymap Tool shuffles everything one slot over in firmware: Control→Cmd, Alt keycap→Cmd, ◇→Option, and right-Alt becomes the board's only real Ctrl. Lives in the keyboard itself, works over Bluetooth on anything.

**MacBook internal** — System Settings modifier remaps: Caps Lock→Cmd, Option→Cmd, Cmd→Option. The ⌥ keycap now quits applications, which confuses exactly one category of person: anyone else who touches my laptop. This is a feature.

**Mac Ghostty** — two lines so caps+shift+C/V send the raw bytes there too, same as the PC.

No Karabiner, no daemons, no app-sniffing rules. Firmware, System Settings, and a handful of lines of Nix.

## The seams I'm keeping

GUI text navigation still speaks two dialects (Ctrl+arrow for words on Linux, Option+arrow on Mac — Cocoa hardwires it and I refuse to run a daemon over it). And the keycap legends now lie on two of three keyboards. Keycaps are for tourists; my hands don't read.

> [!NOTE]- Things I learned against my will
> - My zsh runs in "emacs mode" and so does yours, probably. Every Ctrl+A and Ctrl+R at a prompt is an Emacs chord. The vim config was a cover story.
> - Your terminal and shell exchange raw bytes over a protocol designed for 1978 hardware; modified arrow keys aren't in the standard set, which is why ctrl+arrow printed `;5D` at my prompt until I bound the sequences by hand.
> - Ctrl+Backspace has no standard encoding at all. Ghostty sends `^H`. The zellij web client sends a literal capital B. Just the letter B.
