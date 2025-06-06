var e = {
		615: (e, t, o) => {
			o.d(t, { A: () => n });
			class n {
				constructor(e, t, o) {
					(this.el = e),
						(this.options = t),
						(this.events = o),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var o;
					e.push({
						id:
							(null === (o = null == t ? void 0 : t.el) || void 0 === o
								? void 0
								: o.id) || e.length + 1,
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
		926: (e, t, o) => {
			o.d(t, { yd: () => n });
			const n = (e, t) => {
				const o = () => {
						t(), e.removeEventListener('transitionend', o, !0);
					},
					n = window.getComputedStyle(e),
					i = n.getPropertyValue('transition-duration');
				'none' !== n.getPropertyValue('transition-property') &&
				parseFloat(i) > 0
					? e.addEventListener('transitionend', o, !0)
					: t();
			};
		},
	},
	t = {};
function o(n) {
	var i = t[n];
	if (void 0 !== i) return i.exports;
	var s = (t[n] = { exports: {} });
	return e[n](s, s.exports, o), s.exports;
}
(o.d = (e, t) => {
	for (var n in t)
		o.o(t, n) &&
			!o.o(e, n) &&
			Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
}),
	(o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var n = {};
o.d(n, { A: () => l });
var i = o(926),
	s = o(615);
/*
 * HSRemoveElement
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class r extends s.A {
	constructor(e, t) {
		super(e, t);
		const o = e.getAttribute('data-hs-remove-element-options'),
			n = o ? JSON.parse(o) : {},
			i = Object.assign(Object.assign({}, n), t);
		(this.removeTargetId = this.el.getAttribute('data-hs-remove-element')),
			(this.removeTarget = document.querySelector(this.removeTargetId)),
			(this.removeTargetAnimationClass =
				(null == i ? void 0 : i.removeTargetAnimationClass) || 'hs-removing'),
			this.removeTarget && this.init();
	}
	elementClick() {
		this.remove();
	}
	init() {
		this.createCollection(window.$hsRemoveElementCollection, this),
			(this.onElementClickListener = () => this.elementClick()),
			this.el.addEventListener('click', this.onElementClickListener);
	}
	remove() {
		if (!this.removeTarget) return !1;
		this.removeTarget.classList.add(this.removeTargetAnimationClass),
			(0, i.yd)(this.removeTarget, () =>
				setTimeout(() => this.removeTarget.remove()),
			);
	}
	destroy() {
		this.removeTarget.classList.remove(this.removeTargetAnimationClass),
			this.el.removeEventListener('click', this.onElementClickListener),
			(window.$hsRemoveElementCollection =
				window.$hsRemoveElementCollection.filter(
					({ element: e }) => e.el !== this.el,
				));
	}
	static autoInit() {
		window.$hsRemoveElementCollection ||
			(window.$hsRemoveElementCollection = []),
			window.$hsRemoveElementCollection &&
				(window.$hsRemoveElementCollection =
					window.$hsRemoveElementCollection.filter(({ element: e }) =>
						document.contains(e.el),
					)),
			document
				.querySelectorAll(
					'[data-hs-remove-element]:not(.--prevent-on-load-init)',
				)
				.forEach((e) => {
					window.$hsRemoveElementCollection.find((t) => {
						var o;
						return (
							(null === (o = null == t ? void 0 : t.element) || void 0 === o
								? void 0
								: o.el) === e
						);
					}) || new r(e);
				});
	}
}
window.addEventListener('load', () => {
	r.autoInit();
}),
	'undefined' != typeof window && (window.HSRemoveElement = r);
const l = r;
var a = n.A;
export { a as default };
