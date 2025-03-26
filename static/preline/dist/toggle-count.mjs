var t = {
		615: (t, e, n) => {
			n.d(e, { A: () => o });
			class o {
				constructor(t, e, n) {
					(this.el = t),
						(this.options = e),
						(this.events = n),
						(this.el = t),
						(this.options = e),
						(this.events = {});
				}
				createCollection(t, e) {
					var n;
					t.push({
						id:
							(null === (n = null == e ? void 0 : e.el) || void 0 === n
								? void 0
								: n.id) || t.length + 1,
						element: e,
					});
				}
				fireEvent(t, e = null) {
					if (this.events.hasOwnProperty(t)) return this.events[t](e);
				}
				on(t, e) {
					this.events[t] = e;
				}
			}
		},
	},
	e = {};
function n(o) {
	var i = e[o];
	if (void 0 !== i) return i.exports;
	var s = (e[o] = { exports: {} });
	return t[o](s, s.exports, n), s.exports;
}
(n.d = (t, e) => {
	for (var o in e)
		n.o(e, o) &&
			!n.o(t, o) &&
			Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
}),
	(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var o = {};
n.d(o, { A: () => l });
var i = n(615);
/*
 * HSToggleCount
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */ class s extends i.A {
	constructor(t, e) {
		super(t, e);
		const n = t.getAttribute('data-hs-toggle-count'),
			o = n ? JSON.parse(n) : {},
			i = Object.assign(Object.assign({}, o), e);
		(this.target = (null == i ? void 0 : i.target)
			? 'string' == typeof (null == i ? void 0 : i.target)
				? document.querySelector(i.target)
				: i.target
			: null),
			(this.min = (null == i ? void 0 : i.min) || 0),
			(this.max = (null == i ? void 0 : i.max) || 0),
			(this.duration = (null == i ? void 0 : i.duration) || 700),
			(this.isChecked = this.target.checked || !1),
			this.target && this.init();
	}
	toggleChange() {
		(this.isChecked = !this.isChecked), this.toggle();
	}
	init() {
		this.createCollection(window.$hsToggleCountCollection, this),
			this.isChecked && (this.el.innerText = String(this.max)),
			(this.onToggleChangeListener = () => this.toggleChange()),
			this.target.addEventListener('change', this.onToggleChangeListener);
	}
	toggle() {
		this.isChecked ? this.countUp() : this.countDown();
	}
	animate(t, e) {
		let n = 0;
		const o = (i) => {
			n || (n = i);
			const s = Math.min((i - n) / this.duration, 1);
			(this.el.innerText = String(Math.floor(s * (e - t) + t))),
				s < 1 && window.requestAnimationFrame(o);
		};
		window.requestAnimationFrame(o);
	}
	countUp() {
		this.animate(this.min, this.max);
	}
	countDown() {
		this.animate(this.max, this.min);
	}
	destroy() {
		this.target.removeEventListener('change', this.onToggleChangeListener),
			(window.$hsToggleCountCollection = window.$hsToggleCountCollection.filter(
				({ element: t }) => t.el !== this.el,
			));
	}
	static getInstance(t, e) {
		const n = window.$hsToggleCountCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return n ? (e ? n : n.element) : null;
	}
	static autoInit() {
		window.$hsToggleCountCollection || (window.$hsToggleCountCollection = []),
			window.$hsToggleCountCollection &&
				(window.$hsToggleCountCollection =
					window.$hsToggleCountCollection.filter(({ element: t }) =>
						document.contains(t.el),
					)),
			document
				.querySelectorAll('[data-hs-toggle-count]:not(.--prevent-on-load-init)')
				.forEach((t) => {
					window.$hsToggleCountCollection.find((e) => {
						var n;
						return (
							(null === (n = null == e ? void 0 : e.element) || void 0 === n
								? void 0
								: n.el) === t
						);
					}) || new s(t);
				});
	}
}
window.addEventListener('load', () => {
	s.autoInit();
}),
	'undefined' != typeof window && (window.HSToggleCount = s);
const l = s;
var r = o.A;
export { r as default };
