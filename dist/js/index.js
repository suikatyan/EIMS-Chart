"use strict";
$(() => {
    if (window.location.href.includes("eims.tes.co.jp/portal/diligences/view")) {
        (new EIMSChart()).initialize();
    }
});
