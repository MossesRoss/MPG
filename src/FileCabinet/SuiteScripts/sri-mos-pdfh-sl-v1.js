/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
/*
Name        : PDF Generator
Author      : Mosses
Description : Helper suitelet to generate stuffs like pdfs
Version     : 1.0.0
*/
var ctsUtils, render;

var modules = ['./sri-mos-pc-mod-v1', 'N/render'];

define(modules, main);

function main(ctsModule, renderModule) {
    ctsUtils = ctsModule;
    render = renderModule;
    return { onRequest: onRequest }
}

function onRequest(scriptContext) {
    var renderer = render.create();
    let retHTML = ctsUtils.createHTML(scriptContext, myParams);
    var pdfContent = `<pdf>`+ retHTML +`</pdf>`;
    renderer.templateContent = pdfContent;
    var pdfFile = renderer.renderAsPdf();
    scriptContext.response.writeFile({
        file: pdfFile
    });
}
