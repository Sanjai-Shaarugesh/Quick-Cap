var e = {
		189: (e, t, n) => {
			n.d(t, { Fy: () => o });
			const o = [
				'ArrowUp',
				'ArrowLeft',
				'ArrowDown',
				'ArrowRight',
				'Home',
				'End',
			];
		},
		615: (e, t, n) => {
			n.d(t, { A: () => o });
			class o {
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
			n.d(t, { JD: () => o });
			const o = (e, t, n = null) => {
				const o = new CustomEvent(e, {
					detail: { payload: n },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(o);
			};
		},
	},
	t = {};
function n(o) {
	var s = t[o];
	if (void 0 !== s) return s.exports;
	var i = (t[o] = { exports: {} });
	return e[o](i, i.exports, n), i.exports;
}
(n.d = (e, t) => {
	for (var o in t)
		n.o(t, o) &&
			!n.o(e, o) &&
			Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
}),
	(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var o = {};
n.d(o, { A: () => c });
var s = n(926),
	i = n(615),
	r = n(189);
/*
 * HSTabs
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends i.A {
	constructor(e, t, n) {
		super(e, t, n),
			(this.toggles = this.el.querySelectorAll('[data-hs-tab]')),
			(this.extraToggleId = this.el.getAttribute('data-hs-tab-select')),
			(this.extraToggle = document.querySelector(this.extraToggleId)),
			(this.current = Array.from(this.toggles).find((e) =>
				e.classList.contains('active'),
			)),
			(this.currentContentId = this.current.getAttribute('data-hs-tab')),
			(this.currentContent = document.querySelector(this.currentContentId)),
			(this.prev = null),
			(this.prevContentId = null),
			(this.prevContent = null),
			(this.eventType = 'click'),
			(this.onToggleClickListener = []),
			this.init();
	}
	toggleClick(e) {
		this.open(e);
	}
	extraToggleChange(e) {
		this.change(e);
	}
	init() {
		this.createCollection(window.$hsTabsCollection, this),
			this.toggles.forEach((e) => {
				this.onToggleClickListener.push({
					el: e,
					fn: () => this.toggleClick(e),
				}),
					e.addEventListener(
						this.eventType,
						this.onToggleClickListener.find((t) => t.el === e).fn,
					);
			}),
			this.extraToggle &&
				((this.onExtraToggleChangeListener = (e) => this.extraToggleChange(e)),
				this.extraToggle.addEventListener(
					'change',
					this.onExtraToggleChangeListener,
				));
	}
	open(e) {
		var t, n;
		(this.prev = this.current),
			(this.prevContentId = this.currentContentId),
			(this.prevContent = this.currentContent),
			(this.current = e),
			(this.currentContentId = this.current.getAttribute('data-hs-tab')),
			(this.currentContent = document.querySelector(this.currentContentId)),
			(null === (t = null == this ? void 0 : this.prev) || void 0 === t
				? void 0
				: t.ariaSelected) && (this.prev.ariaSelected = 'false'),
			this.prev.classList.remove('active'),
			this.prevContent.classList.add('hidden'),
			(null === (n = null == this ? void 0 : this.current) || void 0 === n
				? void 0
				: n.ariaSelected) && (this.current.ariaSelected = 'true'),
			this.current.classList.add('active'),
			this.currentContent.classList.remove('hidden'),
			this.fireEvent('change', {
				el: e,
				prev: this.prevContentId,
				current: this.currentContentId,
			}),
			(0, s.JD)('change.hs.tab', e, {
				el: e,
				prev: this.prevContentId,
				current: this.currentContentId,
			});
	}
	change(e) {
		const t = document.querySelector(`[data-hs-tab="${e.target.value}"]`);
		t && t.click();
	}
	destroy() {
		this.toggles.forEach((e) => {
			e.removeEventListener(
				this.eventType,
				this.onToggleClickListener.find((t) => t.el === e).fn,
			);
		}),
			(this.onToggleClickListener = []),
			this.extraToggle &&
				this.extraToggle.removeEventListener(
					'change',
					this.onExtraToggleChangeListener,
				),
			(window.$hsTabsCollection = window.$hsTabsCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const n = window.$hsTabsCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return n ? (t ? n : n.element) : null;
	}
	static autoInit() {
		window.$hsTabsCollection ||
			((window.$hsTabsCollection = []),
			document.addEventListener('keydown', (e) => l.accessibility(e))),
			window.$hsTabsCollection &&
				(window.$hsTabsCollection = window.$hsTabsCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll(
					'[role="tablist"]:not(select):not(.--prevent-on-load-init)',
				)
				.forEach((e) => {
					window.$hsTabsCollection.find((t) => {
						var n;
						return (
							(null === (n = null == t ? void 0 : t.element) || void 0 === n
								? void 0
								: n.el) === e
						);
					}) || new l(e);
				});
	}
	static open(e) {
		const t = window.$hsTabsCollection.find((t) =>
				Array.from(t.element.toggles).includes(
					'string' == typeof e ? document.querySelector(e) : e,
				),
			),
			n = Array.from(t.element.toggles).find(
				(t) => t === ('string' == typeof e ? document.querySelector(e) : e),
			);
		n && !n.classList.contains('active') && t.element.open(n);
	}
	static accessibility(e) {
		const t = document.querySelector('[data-hs-tab]:focus');
		if (t && r.Fy.includes(e.code) && !e.metaKey) {
			const n = t
				.closest('[role="tablist"]')
				.getAttribute('data-hs-tabs-vertical');
			switch ((e.preventDefault(), e.code)) {
				case 'true' === n ? 'ArrowUp' : 'ArrowLeft':
					this.onArrow();
					break;
				case 'true' === n ? 'ArrowDown' : 'ArrowRight':
					this.onArrow(!1);
					break;
				case 'Home':
					this.onStartEnd();
					break;
				case 'End':
					this.onStartEnd(!1);
			}
		}
	}
	static onArrow(e = !0) {
		const t = document
				.querySelector('[data-hs-tab]:focus')
				.closest('[role="tablist"]'),
			n = window.$hsTabsCollection.find((e) => e.element.el === t);
		if (n) {
			const t = e
					? Array.from(n.element.toggles).reverse()
					: Array.from(n.element.toggles),
				o = t.find((e) => document.activeElement === e);
			let s = t.findIndex((e) => e === o);
			(s = s + 1 < t.length ? s + 1 : 0), t[s].focus(), t[s].click();
		}
	}
	static onStartEnd(e = !0) {
		const t = document
				.querySelector('[data-hs-tab]:focus')
				.closest('[role="tablist"]'),
			n = window.$hsTabsCollection.find((e) => e.element.el === t);
		if (n) {
			const t = e
				? Array.from(n.element.toggles)
				: Array.from(n.element.toggles).reverse();
			t.length && (t[0].focus(), t[0].click());
		}
	}
	static on(e, t, n) {
		const o = window.$hsTabsCollection.find((e) =>
			Array.from(e.element.toggles).includes(
				'string' == typeof t ? document.querySelector(t) : t,
			),
		);
		o && (o.element.events[e] = n);
	}
}
window.addEventListener('load', () => {
	l.autoInit();
}),
	'undefined' != typeof window && (window.HSTabs = l);
const c = l;
var a = o.A;
export { a as default };
