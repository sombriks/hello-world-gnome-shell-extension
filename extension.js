"use strict";

const Main = imports.ui.main;
const Config = imports.misc.config;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const St = imports.gi.St;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const GObject = imports.gi.GObject;

function disable() {
  log("TEST hello world -- disable!");
  if (shellHelloWorld) shellHelloWorld.destroy();
}

let ShellHelloWorld = GObject.registerClass(
  {
    GTypeName: "ShellHelloWorld",
  },
  _ShellHelloWorld
);

class _ShellHelloWorld extends PanelMenu.Button {
  _init() {
    super._init(0.0, "Hello World");
    const hbox = new St.BoxLayout({  });
    const gicon = Gio.icon_new_for_string(Me.path + "/picture_09.jpg");
    const icon = new St.Icon({ gicon: gicon, icon_size: "24" });

    hbox.add_child(icon);
    this.add_child(hbox);
  }
}

let shellHelloWorld;

function enable() {
  log("TEST hello world -- enable!");
  shellHelloWorld = new ShellHelloWorld();
  Main.panel.addToStatusArea("shel-hello-world", shellHelloWorld);
}
