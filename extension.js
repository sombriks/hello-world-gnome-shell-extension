"use strict";

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const GObject = imports.gi.GObject;

const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

// this is how to import local modules
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { info, changeWallpaper } = Me.imports.xpto;

class _ShellHelloWorld extends PanelMenu.Button {
  _init() {
    super._init(0.0, "Hello World");
    const hbox = new St.BoxLayout();
    const icon = new St.Icon({
      icon_name: "preferences-desktop-wallpaper-symbolic",
    });

    hbox.add_child(icon);
    this.add_child(hbox);
    info("done that, been there");
    this.connect("button_press_event", changeWallpaper);
  }
}

let ShellHelloWorld = GObject.registerClass(
  {
    GTypeName: "ShellHelloWorld",
  },
  _ShellHelloWorld
);

let shellHelloWorld;

function enable() {
  info("hello world -- enable!");
  shellHelloWorld = new ShellHelloWorld();
  Main.panel.addToStatusArea("shel-hello-world", shellHelloWorld);
}

function disable() {
  info("hello world -- disable!");
  shellHelloWorld.destroy();
}
