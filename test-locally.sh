#!/bin/sh

# same uuid from metadata.json
export _EXTUUID=hello-world-gnome-shell@sombriks
export _EXTENSION=~/.local/share/gnome-shell/extensions/$_EXTUUID

rm -rf $_EXTENSION
mkdir $_EXTENSION
cp \
extension.js \
metadata.json \
xpto.js \
$_EXTENSION

dbus-run-session -- gnome-shell --nested --wayland
