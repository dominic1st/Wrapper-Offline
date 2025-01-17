const httpz = require("@octanuary/httpz")
const asset = require("./asset");
const char = require("./char");
const exporter = require("./exporter");
const flash = require("./flash");
const movie = require("./movie");
const theme = require("./theme");
const settings = require("./settings");
const tts = require("./tts");
const watermark = require("./watermark");
const waveform = require("./waveform");
const group = new httpz.Group();

group.add(asset);
group.add(char);
group.add(exporter);
group.add(flash);
group.add(movie);
group.add(theme);
group.add(settings);
group.add(tts);
group.add(watermark);
group.add(waveform);

module.exports = group;
