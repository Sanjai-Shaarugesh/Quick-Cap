var e = {
		615: (e, t, n) => {
			n.d(t, { A: () => i });
			class i {
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
			n.d(t, { JD: () => i });
			const i = (e, t, n = null) => {
				const i = new CustomEvent(e, {
					detail: { payload: n },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(i);
			};
		},
	},
	t = {};
function n(i) {
	var s = t[i];
	if (void 0 !== s) return s.exports;
	var l = (t[i] = { exports: {} });
	return e[i](l, l.exports, n), l.exports;
}
(n.d = (e, t) => {
	for (var i in t)
		n.o(t, i) &&
			!n.o(e, i) &&
			Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
}),
	(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var i = {};
n.d(i, { A: () => r });
var s = n(926),
	l = n(615);
/*
 * HSPinInput
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class o extends l.A {
	elementInput(e, t) {
		this.onInput(e, t);
	}
	elementPaste(e) {
		this.onPaste(e);
	}
	elementKeydown(e, t) {
		this.onKeydown(e, t);
	}
	elementFocusin(e) {
		this.onFocusIn(e);
	}
	elementFocusout(e) {
		this.onFocusOut(e);
	}
	constructor(e, t) {
		super(e, t);
		const n = e.getAttribute('data-hs-pin-input'),
			i = n ? JSON.parse(n) : {},
			s = Object.assign(Object.assign({}, i), t);
		(this.items = this.el.querySelectorAll('[data-hs-pin-input-item]')),
			(this.currentItem = null),
			(this.currentValue = new Array(this.items.length).fill('')),
			(this.placeholders = []),
			(this.availableCharsRE = new RegExp(
				(null == s ? void 0 : s.availableCharsRE) || '^[a-zA-Z0-9]+$',
			)),
			(this.onElementInputListener = []),
			(this.onElementPasteListener = []),
			(this.onElementKeydownListener = []),
			(this.onElementFocusinListener = []),
			(this.onElementFocusoutListener = []),
			this.init();
	}
	init() {
		this.createCollection(window.$hsPinInputCollection, this),
			this.items.length && this.build();
	}
	build() {
		this.buildInputItems();
	}
	buildInputItems() {
		this.items.forEach((e, t) => {
			this.placeholders.push(e.getAttribute('placeholder') || ''),
				e.hasAttribute('autofocus') && this.onFocusIn(t),
				this.onElementInputListener.push({
					el: e,
					fn: (e) => this.elementInput(e, t),
				}),
				this.onElementPasteListener.push({
					el: e,
					fn: (e) => this.elementPaste(e),
				}),
				this.onElementKeydownListener.push({
					el: e,
					fn: (e) => this.elementKeydown(e, t),
				}),
				this.onElementFocusinListener.push({
					el: e,
					fn: () => this.elementFocusin(t),
				}),
				this.onElementFocusoutListener.push({
					el: e,
					fn: () => this.elementFocusout(t),
				}),
				e.addEventListener(
					'input',
					this.onElementInputListener.find((t) => t.el === e).fn,
				),
				e.addEventListener(
					'paste',
					this.onElementPasteListener.find((t) => t.el === e).fn,
				),
				e.addEventListener(
					'keydown',
					this.onElementKeydownListener.find((t) => t.el === e).fn,
				),
				e.addEventListener(
					'focusin',
					this.onElementFocusinListener.find((t) => t.el === e).fn,
				),
				e.addEventListener(
					'focusout',
					this.onElementFocusoutListener.find((t) => t.el === e).fn,
				);
		});
	}
	checkIfNumber(e) {
		return e.match(this.availableCharsRE);
	}
	autoFillAll(e) {
		Array.from(e).forEach((e, t) => {
			if (!(null == this ? void 0 : this.items[t])) return !1;
			(this.items[t].value = e),
				this.items[t].dispatchEvent(new Event('input', { bubbles: !0 }));
		});
	}
	setCurrentValue() {
		this.currentValue = Array.from(this.items).map((e) => e.value);
	}
	toggleCompleted() {
		this.currentValue.includes('')
			? this.el.classList.remove('active')
			: this.el.classList.add('active');
	}
	onInput(e, t) {
		const n = e.target.value;
		if (
			((this.currentItem = e.target),
			(this.currentItem.value = ''),
			(this.currentItem.value = n[n.length - 1]),
			!this.checkIfNumber(this.currentItem.value))
		)
			return (this.currentItem.value = this.currentValue[t] || ''), !1;
		if ((this.setCurrentValue(), this.currentItem.value)) {
			if (
				(t < this.items.length - 1 && this.items[t + 1].focus(),
				!this.currentValue.includes(''))
			) {
				const e = { currentValue: this.currentValue };
				this.fireEvent('completed', e),
					(0, s.JD)('completed.hs.pinInput', this.el, e);
			}
			this.toggleCompleted();
		} else t > 0 && this.items[t - 1].focus();
	}
	onKeydown(e, t) {
		'Backspace' === e.key &&
			t > 0 &&
			('' === this.items[t].value
				? ((this.items[t - 1].value = ''), this.items[t - 1].focus())
				: (this.items[t].value = '')),
			this.setCurrentValue(),
			this.toggleCompleted();
	}
	onFocusIn(e) {
		this.items[e].setAttribute('placeholder', '');
	}
	onFocusOut(e) {
		this.items[e].setAttribute('placeholder', this.placeholders[e]);
	}
	onPaste(e) {
		e.preventDefault(),
			this.items.forEach((t) => {
				document.activeElement === t &&
					this.autoFillAll(e.clipboardData.getData('text'));
			});
	}
	destroy() {
		this.el.classList.remove('active'),
			this.items.length &&
				this.items.forEach((e) => {
					e.removeEventListener(
						'input',
						this.onElementInputListener.find((t) => t.el === e).fn,
					),
						e.removeEventListener(
							'paste',
							this.onElementPasteListener.find((t) => t.el === e).fn,
						),
						e.removeEventListener(
							'keydown',
							this.onElementKeydownListener.find((t) => t.el === e).fn,
						),
						e.removeEventListener(
							'focusin',
							this.onElementFocusinListener.find((t) => t.el === e).fn,
						),
						e.removeEventListener(
							'focusout',
							this.onElementFocusoutListener.find((t) => t.el === e).fn,
						);
				}),
			(this.items = null),
			(this.currentItem = null),
			(this.currentValue = null),
			(window.$hsPinInputCollection = window.$hsPinInputCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const n = window.$hsPinInputCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return n ? (t ? n : n.element) : null;
	}
	static autoInit() {
		window.$hsPinInputCollection || (window.$hsPinInputCollection = []),
			window.$hsPinInputCollection &&
				(window.$hsPinInputCollection = window.$hsPinInputCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-pin-input]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsPinInputCollection.find((t) => {
						var n;
						return (
							(null === (n = null == t ? void 0 : t.element) || void 0 === n
								? void 0
								: n.el) === e
						);
					}) || new o(e);
				});
	}
}
window.addEventListener('load', () => {
	o.autoInit();
}),
	'undefined' != typeof window && (window.HSPinInput = o);
const r = o;
var u = i.A;
export { u as default };
