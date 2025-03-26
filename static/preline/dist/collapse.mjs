var e = {
		615: (e, t, n) => {
			n.d(t, { A: () => s });
			class s {
				constructor(e, t, n) {
					(this.el = e),
						(this.options = t),
						(this.events = n),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var n;
					e.push({
						id:
							(null === (n = null == t ? void 0 : t.el) || void 0 === n
								? void 0
								: n.id) || e.length + 1,
						element: t,
					});
				}
				fireEvent(e, t = null) {
					if (this.events.hasOwnProperty(e)) return this.events[e](t);
				}
				on(e, t) {
					this.events[e] = t;
				}
			}
		},
		926: (e, t, n) => {
			n.d(t, { JD: () => s, yd: () => i });
			const s = (e, t, n = null) => {
					const s = new CustomEvent(e, {
						detail: { payload: n },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(s);
				},
				i = (e, t) => {
					const n = () => {
							t(), e.removeEventListener('transitionend', n, !0);
						},
						s = window.getComputedStyle(e),
						i = s.getPropertyValue('transition-duration');
					'none' !== s.getPropertyValue('transition-property') &&
					parseFloat(i) > 0
						? e.addEventListener('transitionend', n, !0)
						: t();
				};
		},
	},
	t = {};
function n(s) {
	var i = t[s];
	if (void 0 !== i) return i.exports;
	var o = (t[s] = { exports: {} });
	return e[s](o, o.exports, n), o.exports;
}
(n.d = (e, t) => {
	for (var s in t)
		n.o(t, s) &&
			!n.o(e, s) &&
			Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
	(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var s = {};
n.d(s, { A: () => a });
var i = n(926),
	o = n(615);
/*
 * HSCollapse
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends o.A {
	constructor(e, t, n) {
		super(e, t, n),
			(this.contentId = this.el.dataset.hsCollapse),
			(this.content = document.querySelector(this.contentId)),
			(this.animationInProcess = !1),
			this.content && this.init();
	}
	elementClick() {
		this.content.classList.contains('open') ? this.hide() : this.show();
	}
	init() {
		var e;
		this.createCollection(window.$hsCollapseCollection, this),
			(this.onElementClickListener = () => this.elementClick()),
			(null === (e = null == this ? void 0 : this.el) || void 0 === e
				? void 0
				: e.ariaExpanded) &&
				(this.el.classList.contains('open')
					? (this.el.ariaExpanded = 'true')
					: (this.el.ariaExpanded = 'false')),
			this.el.addEventListener('click', this.onElementClickListener);
	}
	hideAllMegaMenuItems() {
		this.content
			.querySelectorAll('.hs-mega-menu-content.block')
			.forEach((e) => {
				e.classList.remove('block'), e.classList.add('hidden');
			});
	}
	show() {
		var e;
		if (this.animationInProcess || this.el.classList.contains('open'))
			return !1;
		(this.animationInProcess = !0),
			this.el.classList.add('open'),
			(null === (e = null == this ? void 0 : this.el) || void 0 === e
				? void 0
				: e.ariaExpanded) && (this.el.ariaExpanded = 'true'),
			this.content.classList.add('open'),
			this.content.classList.remove('hidden'),
			(this.content.style.height = '0'),
			setTimeout(() => {
				(this.content.style.height = `${this.content.scrollHeight}px`),
					this.fireEvent('beforeOpen', this.el),
					(0, i.JD)('beforeOpen.hs.collapse', this.el, this.el);
			}),
			(0, i.yd)(this.content, () => {
				(this.content.style.height = ''),
					this.fireEvent('open', this.el),
					(0, i.JD)('open.hs.collapse', this.el, this.el),
					(this.animationInProcess = !1);
			});
	}
	hide() {
		var e;
		if (this.animationInProcess || !this.el.classList.contains('open'))
			return !1;
		(this.animationInProcess = !0),
			this.el.classList.remove('open'),
			(null === (e = null == this ? void 0 : this.el) || void 0 === e
				? void 0
				: e.ariaExpanded) && (this.el.ariaExpanded = 'false'),
			(this.content.style.height = `${this.content.scrollHeight}px`),
			setTimeout(() => {
				this.content.style.height = '0';
			}),
			this.content.classList.remove('open'),
			(0, i.yd)(this.content, () => {
				this.content.classList.add('hidden'),
					(this.content.style.height = ''),
					this.fireEvent('hide', this.el),
					(0, i.JD)('hide.hs.collapse', this.el, this.el),
					(this.animationInProcess = !1);
			}),
			this.content.querySelectorAll('.hs-mega-menu-content.block').length &&
				this.hideAllMegaMenuItems();
	}
	destroy() {
		this.el.removeEventListener('click', this.onElementClickListener),
			(this.content = null),
			(this.animationInProcess = !1),
			(window.$hsCollapseCollection = window.$hsCollapseCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t = !1) {
		const n = window.$hsCollapseCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return n ? (t ? n : n.element.el) : null;
	}
	static autoInit() {
		window.$hsCollapseCollection || (window.$hsCollapseCollection = []),
			window.$hsCollapseCollection &&
				(window.$hsCollapseCollection = window.$hsCollapseCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('.hs-collapse-toggle:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsCollapseCollection.find((t) => {
						var n;
						return (
							(null === (n = null == t ? void 0 : t.element) || void 0 === n
								? void 0
								: n.el) === e
						);
					}) || new l(e);
				});
	}
	static show(e) {
		const t = window.$hsCollapseCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && t.element.content.classList.contains('hidden') && t.element.show();
	}
	static hide(e) {
		const t = window.$hsCollapseCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && !t.element.content.classList.contains('hidden') && t.element.hide();
	}
	static on(e, t, n) {
		const s = window.$hsCollapseCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		s && (s.element.events[e] = n);
	}
}
window.addEventListener('load', () => {
	l.autoInit();
}),
	'undefined' != typeof window && (window.HSCollapse = l);
const a = l;
var h = s.A;
export { h as default };
