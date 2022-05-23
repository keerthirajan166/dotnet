load("galen-bootstrap/galen-bootstrap.js");

$galen.settings.website = "http://localhost:4200";

$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1600x900", ["desktop"]));
