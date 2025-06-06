var e = {
		615: (e, t, i) => {
			i.d(t, { A: () => s });
			class s {
				constructor(e, t, i) {
					(this.el = e),
						(this.options = t),
						(this.events = i),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var i;
					e.push({
						id:
							(null === (i = null == t ? void 0 : t.el) || void 0 === i
								? void 0
								: i.id) || e.length + 1,
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
	},
	t = {};
function i(s) {
	var n = t[s];
	if (void 0 !== n) return n.exports;
	var o = (t[s] = { exports: {} });
	return e[s](o, o.exports, i), o.exports;
}
(i.d = (e, t) => {
	for (var s in t)
		i.o(t, s) &&
			!i.o(e, s) &&
			Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
	(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var s = {};
i.d(s, { A: () => l });
var n = i(615);
/*
 * HSTextareaAutoHeight
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */ class o extends n.A {
	constructor(e, t) {
		super(e, t);
		const i = e.getAttribute('data-hs-copy-markup'),
			s = i ? JSON.parse(i) : {},
			n = Object.assign(Object.assign({}, s), t);
		(this.defaultHeight = (null == n ? void 0 : n.defaultHeight) || 0),
			this.init();
	}
	elementInput() {
		this.textareaSetHeight(3);
	}
	init() {
		this.createCollection(window.$hsTextareaAutoHeightCollection, this),
			this.setAutoHeight();
	}
	setAutoHeight() {
		this.isParentHidden()
			? this.callbackAccordingToType()
			: this.textareaSetHeight(3),
			(this.onElementInputListener = () => this.elementInput()),
			this.el.addEventListener('input', this.onElementInputListener);
	}
	textareaSetHeight(e = 0) {
		(this.el.style.height = 'auto'),
			(this.el.style.height =
				this.checkIfOneLine() && this.defaultHeight
					? `${this.defaultHeight}px`
					: `${this.el.scrollHeight + e}px`);
	}
	checkIfOneLine() {
		const e = this.el.clientHeight;
		return !(this.el.scrollHeight > e);
	}
	isParentHidden() {
		return (
			this.el.closest('.hs-collapse') ||
			this.el.closest('.hs-overlay') ||
			this.el.closest('[role="tabpanel"]')
		);
	}
	parentType() {
		return this.el.closest('.hs-collapse')
			? 'collapse'
			: this.el.closest('.hs-overlay')
				? 'overlay'
				: !!this.el.closest('[role="tabpanel"]') && 'tabs';
	}
	callbackAccordingToType() {
		var e;
		if ('tabs' === this.parentType()) {
			const t =
					null === (e = this.el.closest('[role="tabpanel"]')) || void 0 === e
						? void 0
						: e.id,
				i = document
					.querySelector(`[data-hs-tab="#${t}"]`)
					.closest('[role="tablist"]'),
				{ element: s } = window.HSTabs.getInstance(i, !0) || null;
			s.on('change', () => {
				if (!this.el) return !1;
				this.textareaSetHeight(3);
			});
		} else if ('collapse' === this.parentType()) {
			const e = this.el.closest('.hs-collapse').id,
				{ element: t } = window.HSCollapse.getInstance(
					`[data-hs-collapse="#${e}"]`,
					!0,
				);
			t.on('beforeOpen', () => {
				if (!this.el) return !1;
				this.textareaSetHeight(3);
			});
		} else {
			if ('overlay' !== this.parentType()) return !1;
			{
				const { element: e } = window.HSOverlay.getInstance(
					this.el.closest('.hs-overlay'),
					!0,
				);
				e.on('open', () => {
					if (!this.el) return !1;
					this.textareaSetHeight(3);
				});
			}
		}
	}
	destroy() {
		this.el.removeEventListener('input', this.onElementInputListener),
			(window.$hsTextareaAutoHeightCollection =
				window.$hsTextareaAutoHeightCollection.filter(
					({ element: e }) => e.el !== this.el,
				));
	}
	static getInstance(e, t) {
		const i = window.$hsTextareaAutoHeightCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element) : null;
	}
	static autoInit() {
		window.$hsTextareaAutoHeightCollection ||
			(window.$hsTextareaAutoHeightCollection = []),
			window.$hsTextareaAutoHeightCollection &&
				(window.$hsTextareaAutoHeightCollection =
					window.$hsTextareaAutoHeightCollection.filter(({ element: e }) =>
						document.contains(e.el),
					)),
			document
				.querySelectorAll(
					'[data-hs-textarea-auto-height]:not(.--prevent-on-load-init)',
				)
				.forEach((e) => {
					if (
						!window.$hsTextareaAutoHeightCollection.find((t) => {
							var i;
							return (
								(null === (i = null == t ? void 0 : t.element) || void 0 === i
									? void 0
									: i.el) === e
							);
						})
					) {
						const t = e.getAttribute('data-hs-textarea-auto-height'),
							i = t ? JSON.parse(t) : {};
						new o(e, i);
					}
				});
	}
}
window.addEventListener('load', () => {
	o.autoInit();
}),
	'undefined' != typeof window && (window.HSTextareaAutoHeight = o);
const l = o;
var a = s.A;
export { a as default };
