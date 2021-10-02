"use strict";

const Config = imports.misc.config;
const GLib = imports.gi.GLib;

const ByteArray = imports.byteArray;

function info(msg) {
  log(`[${Config}.name] - ${msg}`);
}

function exec(cmd, success, error) {
  info(cmd);
  const [res, out, err, status] = GLib.spawn_command_line_sync(cmd);
  if (res) {
    if (success) success(out);
  } else {
    if (error) error(err);
  }
  info("res");
  info(res);
  info("status");
  info(status);
}

function changeWallpaper() {
  const path = "/home/sombriks/Imagens/wallpapers";
  exec(`ls ${path}`, (out) => {
    const filenames = ByteArray.toString(out).split("\n");
    const idx = Math.round(Math.random() * filenames.length);
    const cmd = "gsettings set org.gnome.desktop.background picture-uri";
    exec(`${cmd} ${path}/${filenames[idx].replaceAll(" ","\\ ")}`);
  });
}
