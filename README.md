# hello world gnome shell extension

simple hello world for gnome shell extensions

## how to debug an extension

- install it, there is a [script](test-locally.sh) to help that
- restart gnome-shell
- see log messages with `journalctl -e | grep gnome-shell`

after restart your extension should be visible either in
<https://extensions.gnome.org/local/> or gnome shell extensions app available in
your distro repo.

## how to publish an extension

TBD
