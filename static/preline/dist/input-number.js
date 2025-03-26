!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var i in n) ('object' == typeof exports ? exports : t)[i] = n[i];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				961: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 });
					var n = (function () {
						function t(t, e, n) {
							(this.el = t),
								(this.options = e),
								(this.events = n),
								(this.el = t),
								(this.options = e),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, e) {
								var n;
								t.push({
									id:
										(null === (n = null == e ? void 0 : e.el) || void 0 === n
											? void 0
											: n.id) || t.length + 1,
									element: e,
								});
							}),
							(t.prototype.fireEvent = function (t, e) {
								if ((void 0 === e && (e = null), this.events.hasOwnProperty(t)))
									return this.events[t](e);
							}),
							(t.prototype.on = function (t, e) {
								this.events[t] = e;
							}),
							t
						);
					})();
					e.default = n;
				},
				332: function (t, e, n) {
					/*
					 * HSInputNumber
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var i,
						r =
							(this && this.__extends) ||
							((i = function (t, e) {
								return (
									(i =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, e) {
												t.__proto__ = e;
											}) ||
										function (t, e) {
											for (var n in e)
												Object.prototype.hasOwnProperty.call(e, n) &&
													(t[n] = e[n]);
										}),
									i(t, e)
								);
							}),
							function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Class extends value ' +
											String(e) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = t;
								}
								i(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((n.prototype = e.prototype), new n()));
							}),
						o =
							(this && this.__assign) ||
							function () {
								return (
									(o =
										Object.assign ||
										function (t) {
											for (var e, n = 1, i = arguments.length; n < i; n++)
												for (var r in (e = arguments[n]))
													Object.prototype.hasOwnProperty.call(e, r) &&
														(t[r] = e[r]);
											return t;
										}),
									o.apply(this, arguments)
								);
							},
						s =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var u = n(292),
						a = (function (t) {
							function e(e, n) {
								var i = t.call(this, e, n) || this;
								(i.input =
									i.el.querySelector('[data-hs-input-number-input]') || null),
									(i.increment =
										i.el.querySelector('[data-hs-input-number-increment]') ||
										null),
									(i.decrement =
										i.el.querySelector('[data-hs-input-number-decrement]') ||
										null),
									i.input && i.checkIsNumberAndConvert();
								var r = i.el.dataset.hsInputNumber,
									s = r ? JSON.parse(r) : { step: 1 },
									u = o(o({}, s), n);
								return (
									(i.minInputValue = 'min' in u ? u.min : 0),
									(i.maxInputValue = 'max' in u ? u.max : null),
									(i.step = 'step' in u && u.step > 0 ? u.step : 1),
									i.init(),
									i
								);
							}
							return (
								r(e, t),
								(e.prototype.inputInput = function () {
									this.changeValue();
								}),
								(e.prototype.incrementClick = function () {
									this.changeValue('increment');
								}),
								(e.prototype.decrementClick = function () {
									this.changeValue('decrement');
								}),
								(e.prototype.init = function () {
									this.createCollection(window.$hsInputNumberCollection, this),
										this.input && this.increment && this.build();
								}),
								(e.prototype.checkIsNumberAndConvert = function () {
									var t = this.input.value.trim(),
										e = this.cleanAndExtractNumber(t);
									null !== e
										? ((this.inputValue = e), (this.input.value = e.toString()))
										: ((this.inputValue = 0), (this.input.value = '0'));
								}),
								(e.prototype.cleanAndExtractNumber = function (t) {
									var e = [],
										n = !1;
									t.split('').forEach(function (t) {
										t >= '0' && t <= '9'
											? e.push(t)
											: '.' !== t || n || (e.push(t), (n = !0));
									});
									var i = e.join(''),
										r = parseFloat(i);
									return isNaN(r) ? null : r;
								}),
								(e.prototype.build = function () {
									this.input && this.buildInput(),
										this.increment && this.buildIncrement(),
										this.decrement && this.buildDecrement(),
										this.inputValue <= this.minInputValue &&
											((this.inputValue = this.minInputValue),
											(this.input.value = ''.concat(this.minInputValue))),
										this.inputValue <= this.minInputValue && this.changeValue(),
										this.input.hasAttribute('disabled') &&
											this.disableButtons();
								}),
								(e.prototype.buildInput = function () {
									var t = this;
									(this.onInputInputListener = function () {
										return t.inputInput();
									}),
										this.input.addEventListener(
											'input',
											this.onInputInputListener,
										);
								}),
								(e.prototype.buildIncrement = function () {
									var t = this;
									(this.onIncrementClickListener = function () {
										return t.incrementClick();
									}),
										this.increment.addEventListener(
											'click',
											this.onIncrementClickListener,
										);
								}),
								(e.prototype.buildDecrement = function () {
									var t = this;
									(this.onDecrementClickListener = function () {
										return t.decrementClick();
									}),
										this.decrement.addEventListener(
											'click',
											this.onDecrementClickListener,
										);
								}),
								(e.prototype.changeValue = function (t) {
									var e, n;
									void 0 === t && (t = 'none');
									var i = { inputValue: this.inputValue },
										r =
											null !== (e = this.minInputValue) && void 0 !== e
												? e
												: Number.MIN_SAFE_INTEGER,
										o =
											null !== (n = this.maxInputValue) && void 0 !== n
												? n
												: Number.MAX_SAFE_INTEGER;
									switch (
										((this.inputValue = isNaN(this.inputValue)
											? 0
											: this.inputValue),
										t)
									) {
										case 'increment':
											var s = this.inputValue + this.step;
											(this.inputValue = s >= r && s <= o ? s : o),
												(this.input.value = this.inputValue.toString());
											break;
										case 'decrement':
											var a = this.inputValue - this.step;
											(this.inputValue = a >= r && a <= o ? a : r),
												(this.input.value = this.inputValue.toString());
											break;
										default:
											var l = isNaN(parseInt(this.input.value))
												? 0
												: parseInt(this.input.value);
											(this.inputValue = l >= o ? o : l <= r ? r : l),
												this.inputValue <= r &&
													(this.input.value = this.inputValue.toString());
									}
									(i.inputValue = this.inputValue),
										this.inputValue === r
											? (this.el.classList.add('disabled'),
												this.decrement && this.disableButtons('decrement'))
											: (this.el.classList.remove('disabled'),
												this.decrement && this.enableButtons('decrement')),
										this.inputValue === o
											? (this.el.classList.add('disabled'),
												this.increment && this.disableButtons('increment'))
											: (this.el.classList.remove('disabled'),
												this.increment && this.enableButtons('increment')),
										this.fireEvent('change', i),
										(0, u.dispatch)('change.hs.inputNumber', this.el, i);
								}),
								(e.prototype.disableButtons = function (t) {
									void 0 === t && (t = 'all'),
										'all' === t
											? (('BUTTON' !== this.increment.tagName &&
													'INPUT' !== this.increment.tagName) ||
													this.increment.setAttribute('disabled', 'disabled'),
												('BUTTON' !== this.decrement.tagName &&
													'INPUT' !== this.decrement.tagName) ||
													this.decrement.setAttribute('disabled', 'disabled'))
											: 'increment' === t
												? ('BUTTON' !== this.increment.tagName &&
														'INPUT' !== this.increment.tagName) ||
													this.increment.setAttribute('disabled', 'disabled')
												: 'decrement' === t &&
													(('BUTTON' !== this.decrement.tagName &&
														'INPUT' !== this.decrement.tagName) ||
														this.decrement.setAttribute(
															'disabled',
															'disabled',
														));
								}),
								(e.prototype.enableButtons = function (t) {
									void 0 === t && (t = 'all'),
										'all' === t
											? (('BUTTON' !== this.increment.tagName &&
													'INPUT' !== this.increment.tagName) ||
													this.increment.removeAttribute('disabled'),
												('BUTTON' !== this.decrement.tagName &&
													'INPUT' !== this.decrement.tagName) ||
													this.decrement.removeAttribute('disabled'))
											: 'increment' === t
												? ('BUTTON' !== this.increment.tagName &&
														'INPUT' !== this.increment.tagName) ||
													this.increment.removeAttribute('disabled')
												: 'decrement' === t &&
													(('BUTTON' !== this.decrement.tagName &&
														'INPUT' !== this.decrement.tagName) ||
														this.decrement.removeAttribute('disabled'));
								}),
								(e.prototype.destroy = function () {
									var t = this;
									this.el.classList.remove('disabled'),
										this.increment.removeAttribute('disabled'),
										this.decrement.removeAttribute('disabled'),
										this.input.removeEventListener(
											'input',
											this.onInputInputListener,
										),
										this.increment.removeEventListener(
											'click',
											this.onIncrementClickListener,
										),
										this.decrement.removeEventListener(
											'click',
											this.onDecrementClickListener,
										),
										(window.$hsInputNumberCollection =
											window.$hsInputNumberCollection.filter(function (e) {
												return e.element.el !== t.el;
											}));
								}),
								(e.getInstance = function (t, e) {
									var n = window.$hsInputNumberCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return n ? (e ? n : n.element) : null;
								}),
								(e.autoInit = function () {
									window.$hsInputNumberCollection ||
										(window.$hsInputNumberCollection = []),
										window.$hsInputNumberCollection &&
											(window.$hsInputNumberCollection =
												window.$hsInputNumberCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-input-number]:not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												window.$hsInputNumberCollection.find(function (e) {
													var n;
													return (
														(null === (n = null == e ? void 0 : e.element) ||
														void 0 === n
															? void 0
															: n.el) === t
													);
												}) || new e(t);
											});
								}),
								e
							);
						})(s(n(961)).default);
					window.addEventListener('load', function () {
						a.autoInit();
					}),
						'undefined' != typeof window && (window.HSInputNumber = a),
						(e.default = a);
				},
				292: function (t, e) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.menuSearchHistory =
							e.classToClassList =
							e.htmlToElement =
							e.afterTransition =
							e.dispatch =
							e.debounce =
							e.isJson =
							e.isDirectChild =
							e.isFormElement =
							e.isParentOrElementHidden =
							e.isEnoughSpace =
							e.isIpadOS =
							e.isIOS =
							e.getZIndex =
							e.getClassPropertyAlt =
							e.getClassProperty =
							e.stringToBoolean =
								void 0),
						(e.getHighestZIndex = function (t) {
							var e = Number.NEGATIVE_INFINITY;
							return (
								t.forEach(function (t) {
									var n = i(t);
									'auto' !== n && (n = parseInt(n, 10)) > e && (e = n);
								}),
								e
							);
						});
					e.stringToBoolean = function (t) {
						return 'true' === t;
					};
					e.getClassProperty = function (t, e, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(t).getPropertyValue(e) || n).replace(
								' ',
								'',
							)
						);
					};
					e.getClassPropertyAlt = function (t, e, n) {
						void 0 === n && (n = '');
						var i = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (i = t);
							}),
							i.match(/:(.*)]/) ? i.match(/:(.*)]/)[1] : n
						);
					};
					var i = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = i;
					e.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					e.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					e.isDirectChild = function (t, e) {
						for (var n = t.children, i = 0; i < n.length; i++)
							if (n[i] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, n, i, r) {
						void 0 === n && (n = 'auto'),
							void 0 === i && (i = 10),
							void 0 === r && (r = null);
						var o = e.getBoundingClientRect(),
							s = r ? r.getBoundingClientRect() : null,
							u = window.innerHeight,
							a = s ? o.top - s.top : o.top,
							l = (r ? s.bottom : u) - o.bottom,
							c = t.clientHeight + i;
						return 'bottom' === n
							? l >= c
							: 'top' === n
								? a >= c
								: a >= c || l >= c;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var r = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								r(t.parentElement))
						);
					};
					e.isParentOrElementHidden = r;
					e.isJson = function (t) {
						if ('string' != typeof t) return !1;
						var e = t.trim()[0],
							n = t.trim().slice(-1);
						if (('{' === e && '}' === n) || ('[' === e && ']' === n))
							try {
								return JSON.parse(t), !0;
							} catch (t) {
								return !1;
							}
						return !1;
					};
					e.debounce = function (t, e) {
						var i;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var r = [], o = 0; o < arguments.length; o++)
									r[o] = arguments[o];
								clearTimeout(i),
									(i = setTimeout(function () {
										t.apply(n, r);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, n) {
						void 0 === n && (n = null);
						var i = new CustomEvent(t, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(i);
					};
					e.afterTransition = function (t, e) {
						var n = function () {
								e(), t.removeEventListener('transitionend', n, !0);
							},
							i = window.getComputedStyle(t),
							r = i.getPropertyValue('transition-duration');
						'none' !== i.getPropertyValue('transition-property') &&
						parseFloat(r) > 0
							? t.addEventListener('transitionend', n, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, n, i) {
						void 0 === n && (n = ' '),
							void 0 === i && (i = 'add'),
							t.split(n).forEach(function (t) {
								return 'add' === i ? e.classList.add(t) : e.classList.remove(t);
							});
					};
					e.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (t) {
							this.historyIndex = t;
						},
						existsInHistory: function (t) {
							return t > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			e = {};
		var n = (function n(i) {
			var r = e[i];
			if (void 0 !== r) return r.exports;
			var o = (e[i] = { exports: {} });
			return t[i].call(o.exports, o, o.exports, n), o.exports;
		})(332);
		return n;
	})(),
);
