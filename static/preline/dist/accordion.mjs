var e = {
		615: (e, t, o) => {
			o.d(t, { A: () => i });
			class i {
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
			o.d(t, { JD: () => s, PK: () => i, gj: () => n, yd: () => l });
			/*
			 * @version: 2.7.0
			 * @author: Preline Labs Ltd.
			 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
			 * Copyright 2024 Preline Labs Ltd.
			 */
			const i = (e) => 'true' === e,
				n = (e, t, o = '') =>
					(window.getComputedStyle(e).getPropertyValue(t) || o).replace(
						' ',
						'',
					);
			const s = (e, t, o = null) => {
					const i = new CustomEvent(e, {
						detail: { payload: o },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(i);
				},
				l = (e, t) => {
					const o = () => {
							t(), e.removeEventListener('transitionend', o, !0);
						},
						i = window.getComputedStyle(e),
						n = i.getPropertyValue('transition-duration');
					'none' !== i.getPropertyValue('transition-property') &&
					parseFloat(n) > 0
						? e.addEventListener('transitionend', o, !0)
						: t();
				};
		},
	},
	t = {};
function o(i) {
	var n = t[i];
	if (void 0 !== n) return n.exports;
	var s = (t[i] = { exports: {} });
	return e[i](s, s.exports, o), s.exports;
}
(o.d = (e, t) => {
	for (var i in t)
		o.o(t, i) &&
			!o.o(e, i) &&
			Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
}),
	(o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var i = {};
o.d(i, { A: () => c });
var n = o(926),
	s = o(615);
/*
 * HSAccordion
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends s.A {
	constructor(e, t, o) {
		super(e, t, o),
			(this.toggle = this.el.querySelector('.hs-accordion-toggle') || null),
			(this.content = this.el.querySelector('.hs-accordion-content') || null),
			this.update(),
			(this.isToggleStopPropagated = (0, n.PK)(
				(0, n.gj)(this.toggle, '--stop-propagation', 'false') || 'false',
			)),
			this.toggle && this.content && this.init();
	}
	init() {
		this.createCollection(window.$hsAccordionCollection, this),
			(this.onToggleClickListener = (e) => this.toggleClick(e)),
			this.toggle.addEventListener('click', this.onToggleClickListener);
	}
	toggleClick(e) {
		this.isToggleStopPropagated && e.stopPropagation(),
			this.el.classList.contains('active') ? this.hide() : this.show();
	}
	show() {
		var e;
		if (
			this.group &&
			!this.isAlwaysOpened &&
			this.group.querySelector(':scope > .hs-accordion.active') &&
			this.group.querySelector(':scope > .hs-accordion.active') !== this.el
		) {
			window.$hsAccordionCollection
				.find(
					(e) =>
						e.element.el ===
						this.group.querySelector(':scope > .hs-accordion.active'),
				)
				.element.hide();
		}
		if (this.el.classList.contains('active')) return !1;
		this.el.classList.add('active'),
			(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
				? void 0
				: e.ariaExpanded) && (this.toggle.ariaExpanded = 'true'),
			(this.content.style.display = 'block'),
			(this.content.style.height = '0'),
			setTimeout(() => {
				(this.content.style.height = `${this.content.scrollHeight}px`),
					(0, n.yd)(this.content, () => {
						(this.content.style.display = 'block'),
							(this.content.style.height = ''),
							this.fireEvent('open', this.el),
							(0, n.JD)('open.hs.accordion', this.el, this.el);
					});
			});
	}
	hide() {
		var e;
		if (!this.el.classList.contains('active')) return !1;
		this.el.classList.remove('active'),
			(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
				? void 0
				: e.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
			(this.content.style.height = `${this.content.scrollHeight}px`),
			setTimeout(() => {
				this.content.style.height = '0';
			}),
			(0, n.yd)(this.content, () => {
				(this.content.style.display = ''),
					(this.content.style.height = '0'),
					this.fireEvent('close', this.el),
					(0, n.JD)('close.hs.accordion', this.el, this.el);
			});
	}
	update() {
		if (
			((this.group = this.el.closest('.hs-accordion-group') || null),
			!this.group)
		)
			return !1;
		(this.isAlwaysOpened =
			this.group.hasAttribute('data-hs-accordion-always-open') || !1),
			window.$hsAccordionCollection.map(
				(e) => (
					e.id === this.el.id &&
						((e.element.group = this.group),
						(e.element.isAlwaysOpened = this.isAlwaysOpened)),
					e
				),
			);
	}
	destroy() {
		var e;
		(null === (e = null == l ? void 0 : l.selectable) || void 0 === e
			? void 0
			: e.length) &&
			l.selectable.forEach((e) => {
				e.listeners.forEach(({ el: e, listener: t }) => {
					e.removeEventListener('click', t);
				});
			}),
			this.onToggleClickListener &&
				this.toggle.removeEventListener('click', this.onToggleClickListener),
			(this.toggle = null),
			(this.content = null),
			(this.group = null),
			(this.onToggleClickListener = null),
			(window.$hsAccordionCollection = window.$hsAccordionCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const o = window.$hsAccordionCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return o ? (t ? o : o.element.el) : null;
	}
	static show(e) {
		const t = window.$hsAccordionCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && 'block' !== t.element.content.style.display && t.element.show();
	}
	static hide(e) {
		const t = window.$hsAccordionCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && 'block' === t.element.content.style.display && t.element.hide();
	}
	static autoInit() {
		window.$hsAccordionCollection || (window.$hsAccordionCollection = []),
			window.$hsAccordionCollection &&
				(window.$hsAccordionCollection = window.$hsAccordionCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('.hs-accordion:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsAccordionCollection.find((t) => {
						var o;
						return (
							(null === (o = null == t ? void 0 : t.element) || void 0 === o
								? void 0
								: o.el) === e
						);
					}) || new l(e);
				});
	}
	static treeView() {
		if (!document.querySelectorAll('.hs-accordion-treeview-root').length)
			return !1;
		(this.selectable = []),
			document.querySelectorAll('.hs-accordion-treeview-root').forEach((e) => {
				const t =
						null == e ? void 0 : e.getAttribute('data-hs-accordion-options'),
					o = t ? JSON.parse(t) : {};
				this.selectable.push({
					el: e,
					options: Object.assign({}, o),
					listeners: [],
				});
			}),
			this.selectable.length &&
				this.selectable.forEach((e) => {
					const { el: t } = e;
					t.querySelectorAll('.hs-accordion-selectable').forEach((t) => {
						const o = (o) => this.onSelectableClick(o, e, t);
						t.addEventListener('click', o),
							e.listeners.push({ el: t, listener: o });
					});
				});
	}
	static toggleSelected(e, t) {
		t.classList.contains('selected')
			? t.classList.remove('selected')
			: (e.el
					.querySelectorAll('.hs-accordion-selectable')
					.forEach((e) => e.classList.remove('selected')),
				t.classList.add('selected'));
	}
	static on(e, t, o) {
		const i = window.$hsAccordionCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		i && (i.element.events[e] = o);
	}
}
(l.onSelectableClick = (e, t, o) => {
	e.stopPropagation(), l.toggleSelected(t, o);
}),
	window.addEventListener('load', () => {
		l.autoInit(),
			document.querySelectorAll('.hs-accordion-treeview-root').length &&
				l.treeView();
	}),
	'undefined' != typeof window && (window.HSAccordion = l);
const c = l;
var r = i.A;
export { r as default };
