#!/bin/sh

# same uuid from metadata.json
export _EXTUUID=hello-world-gnome-shell@sombriks
export _EXTENSION=~/.local/share/gnome-shell/extensions/$_EXTUUID

rm -rf $_EXTENSION
mkdir $_EXTENSION
cp extension.js metadata.json $_EXTENSION

# now type alt+F2 and 'r' to reload gnome shell # not working
# gnome-shell --replace # not working
# now restart session, replace or reload does not work on wayland