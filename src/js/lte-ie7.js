/* Use this script if you need to support IE 7 and IE 6. */

$(function(){

	if($.browser.msie && $.browser.version-8<0) {
		function addIcon(el, entity) {
			var html = el.innerHTML;
			el.innerHTML = '<i style="font-family: \'icons\'">' + entity + '</i>' + html;
		}
		var icons = {
				'icon-warning' : '&#x21;',
				'icon-picture' : '&#x22;',
				'icon-hash' : '&#x23;',
				'icon-basket' : '&#x24;',
				'icon-tag' : '&#x25;',
				'icon-arrow-up' : '&#x26;',
				'icon-arrow-down' : '&#x27;',
				'icon-arrow-left' : '&#x28;',
				'icon-arrow-right' : '&#x29;',
				'icon-newspaper' : '&#x2a;',
				'icon-plus-alt' : '&#x2b;',
				'icon-user' : '&#x2c;',
				'icon-minus-alt' : '&#x2d;',
				'icon-pie' : '&#x2e;',
				'icon-denied' : '&#x2f;',
				'icon-seven-segment' : '&#x30;',
				'icon-seven-segment-2' : '&#x31;',
				'icon-seven-segment-3' : '&#x32;',
				'icon-seven-segment-4' : '&#x33;',
				'icon-seven-segment-5' : '&#x34;',
				'icon-seven-segment-6' : '&#x35;',
				'icon-seven-segment-7' : '&#x36;',
				'icon-seven-segment-8' : '&#x37;',
				'icon-seven-segment-9' : '&#x38;',
				'icon-seven-segment-10' : '&#x39;',
				'icon-arrow-down-alt1' : '&#x3a;',
				'icon-arrow-up-alt1' : '&#x3b;',
				'icon-arrow-left-alt1' : '&#x3c;',
				'icon-copy' : '&#x3d;',
				'icon-arrow-right-alt1' : '&#x3e;',
				'icon-help' : '&#x3f;',
				'icon-at' : '&#x40;',
				'icon-phone' : '&#x41;',
				'icon-calendar' : '&#x43;',
				'icon-remove' : '&#x44;',
				'icon-stats-up' : '&#x45;',
				'icon-loading' : '&#x46;',
				'icon-link' : '&#x47;',
				'icon-home' : '&#x48;',
				'icon-info' : '&#x49;',
				'icon-refresh' : '&#x4a;',
				'icon-aperture' : '&#x4b;',
				'icon-map-pin-fill' : '&#x4c;',
				'icon-envelope' : '&#x4d;',
				'icon-comments' : '&#x4e;',
				'icon-minus' : '&#x4f;',
				'icon-plus' : '&#x50;',
				'icon-exit' : '&#x51;',
				'icon-enter' : '&#x52;',
				'icon-floppy' : '&#x53;',
				'icon-libreoffice' : '&#x54;',
				'icon-file-word' : '&#x55;',
				'icon-file-excel' : '&#x56;',
				'icon-file-pdf' : '&#x57;',
				'icon-x' : '&#x58;',
				'icon-checkmark' : '&#x59;',
				'icon-support' : '&#x5a;',
				'icon-undo' : '&#x5b;',
				'icon-bug' : '&#x42;',
				'icon-redo' : '&#x5d;',
				'icon-clock' : '&#x5e;',
				'icon-chart-alt' : '&#x5f;',
				'icon-bars' : '&#x60;',
				'icon-cloud-download' : '&#x61;',
				'icon-cloud-upload' : '&#x62;',
				'icon-calendar-2' : '&#x63;',
				'icon-cog' : '&#x64;',
				'icon-earth' : '&#x65;',
				'icon-star' : '&#x66;',
				'icon-star-2' : '&#x67;',
				'icon-star-3' : '&#x68;',
				'icon-info-2' : '&#x69;',
				'icon-reload-alt' : '&#x6a;',
				'icon-key-stroke' : '&#x6b;',
				'icon-map-pin-stroke' : '&#x6c;',
				'icon-mail' : '&#x6d;',
				'icon-heart' : '&#x6e;',
				'icon-heart-2' : '&#x6f;',
				'icon-pencil' : '&#x70;',
				'icon-backspace' : '&#x71;',
				'icon-backspace-2' : '&#x72;',
				'icon-magnifying-glass' : '&#x73;',
				'icon-wrench' : '&#x74;',
				'icon-busy' : '&#x75;',
				'icon-out' : '&#x76;',
				'icon-grid-view' : '&#x77;',
				'icon-x-altx-alt' : '&#x78;',
				'icon-check-alt' : '&#x79;',
				'icon-arrow-up-2' : '&#x7a;',
				'icon-arrow-left-2' : '&#x7b;',
				'icon-arrow-down-2' : '&#x7c;',
				'icon-arrow-right-2' : '&#x7d;',
				'icon-flag' : '&#x5c;',
				'icon-left-quote' : '&#x201c;',
				'icon-right-quote' : '&#x201d;'
			},
			els = document.getElementsByTagName('*'),
			i, attr, html, c, el;
		for (i = 0; i < els.length; i += 1) {
			el = els[i];
			attr = el.getAttribute('data-icon');
			if (attr) {
				addIcon(el, attr);
			}
			c = el.className;
			c = c.match(/icon-[^\s'"]+/);
			if (c) {
				addIcon(el, icons[c[0]]);
			}
		}
	};
});
