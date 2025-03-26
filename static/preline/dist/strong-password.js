!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var s in n) ('object' == typeof exports ? exports : t)[s] = n[s];
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
				97: function (t, e, n) {
					/*
					 * HSStrongPassword
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var s,
						i =
							(this && this.__extends) ||
							((s = function (t, e) {
								return (
									(s =
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
									s(t, e)
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
								s(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((n.prototype = e.prototype), new n()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (t) {
											for (var e, n = 1, s = arguments.length; n < s; n++)
												for (var i in (e = arguments[n]))
													Object.prototype.hasOwnProperty.call(e, i) &&
														(t[i] = e[i]);
											return t;
										}),
									r.apply(this, arguments)
								);
							},
						o =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var a = n(292),
						l = (function (t) {
							function e(e, n) {
								var s = t.call(this, e, n) || this;
								(s.isOpened = !1),
									(s.strength = 0),
									(s.passedRules = new Set());
								var i = e.getAttribute('data-hs-strong-password'),
									o = i ? JSON.parse(i) : {},
									a = r(r({}, o), n);
								return (
									(s.target = (null == a ? void 0 : a.target)
										? 'string' == typeof (null == a ? void 0 : a.target)
											? document.querySelector(a.target)
											: a.target
										: null),
									(s.hints = (null == a ? void 0 : a.hints)
										? 'string' == typeof (null == a ? void 0 : a.hints)
											? document.querySelector(a.hints)
											: a.hints
										: null),
									(s.stripClasses =
										(null == a ? void 0 : a.stripClasses) || null),
									(s.minLength = (null == a ? void 0 : a.minLength) || 6),
									(s.mode = (null == a ? void 0 : a.mode) || 'default'),
									(s.popoverSpace =
										(null == a ? void 0 : a.popoverSpace) || 10),
									(s.checksExclude =
										(null == a ? void 0 : a.checksExclude) || []),
									(s.availableChecks = [
										'lowercase',
										'uppercase',
										'numbers',
										'special-characters',
										'min-length',
									].filter(function (t) {
										return !s.checksExclude.includes(t);
									})),
									(s.specialCharactersSet =
										(null == a ? void 0 : a.specialCharactersSet) ||
										'!"#$%&\'()*+,-./:;<=>?@[\\\\\\]^_`{|}~'),
									s.target && s.init(),
									s
								);
							}
							return (
								i(e, t),
								(e.prototype.targetInput = function (t) {
									this.setStrength(t.target.value);
								}),
								(e.prototype.targetFocus = function () {
									(this.isOpened = !0),
										this.hints.classList.remove('hidden'),
										this.hints.classList.add('block'),
										this.recalculateDirection();
								}),
								(e.prototype.targetBlur = function () {
									(this.isOpened = !1),
										this.hints.classList.remove(
											'block',
											'bottom-full',
											'top-full',
										),
										this.hints.classList.add('hidden'),
										(this.hints.style.marginTop = ''),
										(this.hints.style.marginBottom = '');
								}),
								(e.prototype.targetInputSecond = function () {
									this.setWeaknessText();
								}),
								(e.prototype.targetInputThird = function () {
									this.setRulesText();
								}),
								(e.prototype.init = function () {
									this.createCollection(
										window.$hsStrongPasswordCollection,
										this,
									),
										this.availableChecks.length && this.build();
								}),
								(e.prototype.build = function () {
									var t = this;
									this.buildStrips(),
										this.hints && this.buildHints(),
										this.setStrength(this.target.value),
										(this.onTargetInputListener = function (e) {
											return t.targetInput(e);
										}),
										this.target.addEventListener(
											'input',
											this.onTargetInputListener,
										);
								}),
								(e.prototype.buildStrips = function () {
									if (((this.el.innerHTML = ''), this.stripClasses))
										for (var t = 0; t < this.availableChecks.length; t++) {
											var e = (0, a.htmlToElement)('<div></div>');
											(0, a.classToClassList)(this.stripClasses, e),
												this.el.append(e);
										}
								}),
								(e.prototype.buildHints = function () {
									var t = this;
									(this.weakness =
										this.hints.querySelector(
											'[data-hs-strong-password-hints-weakness-text]',
										) || null),
										(this.rules =
											Array.from(
												this.hints.querySelectorAll(
													'[data-hs-strong-password-hints-rule-text]',
												),
											) || null),
										this.rules.forEach(function (e) {
											var n,
												s = e.getAttribute(
													'data-hs-strong-password-hints-rule-text',
												);
											(null === (n = t.checksExclude) || void 0 === n
												? void 0
												: n.includes(s)) && e.remove();
										}),
										this.weakness && this.buildWeakness(),
										this.rules && this.buildRules(),
										'popover' === this.mode &&
											((this.onTargetFocusListener = function () {
												return t.targetFocus();
											}),
											(this.onTargetBlurListener = function () {
												return t.targetBlur();
											}),
											this.target.addEventListener(
												'focus',
												this.onTargetFocusListener,
											),
											this.target.addEventListener(
												'blur',
												this.onTargetBlurListener,
											));
								}),
								(e.prototype.buildWeakness = function () {
									var t = this;
									this.checkStrength(this.target.value),
										this.setWeaknessText(),
										(this.onTargetInputSecondListener = function () {
											return setTimeout(function () {
												return t.targetInputSecond();
											});
										}),
										this.target.addEventListener(
											'input',
											this.onTargetInputSecondListener,
										);
								}),
								(e.prototype.buildRules = function () {
									var t = this;
									this.setRulesText(),
										(this.onTargetInputThirdListener = function () {
											return setTimeout(function () {
												return t.targetInputThird();
											});
										}),
										this.target.addEventListener(
											'input',
											this.onTargetInputThirdListener,
										);
								}),
								(e.prototype.setWeaknessText = function () {
									var t = this.weakness.getAttribute(
											'data-hs-strong-password-hints-weakness-text',
										),
										e = JSON.parse(t);
									this.weakness.textContent = e[this.strength];
								}),
								(e.prototype.setRulesText = function () {
									var t = this;
									this.rules.forEach(function (e) {
										var n = e.getAttribute(
											'data-hs-strong-password-hints-rule-text',
										);
										t.checkIfPassed(e, t.passedRules.has(n));
									});
								}),
								(e.prototype.togglePopover = function () {
									var t = this.el.querySelector('.popover');
									t && t.classList.toggle('show');
								}),
								(e.prototype.checkStrength = function (t) {
									var e = new Set(),
										n = {
											lowercase: /[a-z]+/,
											uppercase: /[A-Z]+/,
											numbers: /[0-9]+/,
											'special-characters': new RegExp(
												'['.concat(this.specialCharactersSet, ']'),
											),
										},
										s = 0;
									return (
										this.availableChecks.includes('lowercase') &&
											t.match(n.lowercase) &&
											((s += 1), e.add('lowercase')),
										this.availableChecks.includes('uppercase') &&
											t.match(n.uppercase) &&
											((s += 1), e.add('uppercase')),
										this.availableChecks.includes('numbers') &&
											t.match(n.numbers) &&
											((s += 1), e.add('numbers')),
										this.availableChecks.includes('special-characters') &&
											t.match(n['special-characters']) &&
											((s += 1), e.add('special-characters')),
										this.availableChecks.includes('min-length') &&
											t.length >= this.minLength &&
											((s += 1), e.add('min-length')),
										t.length || (s = 0),
										s === this.availableChecks.length
											? this.el.classList.add('accepted')
											: this.el.classList.remove('accepted'),
										(this.strength = s),
										(this.passedRules = e),
										{ strength: this.strength, rules: this.passedRules }
									);
								}),
								(e.prototype.checkIfPassed = function (t, e) {
									void 0 === e && (e = !1);
									var n = t.querySelector('[data-check]'),
										s = t.querySelector('[data-uncheck]');
									e
										? (t.classList.add('active'),
											n.classList.remove('hidden'),
											s.classList.add('hidden'))
										: (t.classList.remove('active'),
											n.classList.add('hidden'),
											s.classList.remove('hidden'));
								}),
								(e.prototype.setStrength = function (t) {
									var e = this.checkStrength(t),
										n = e.strength,
										s = { strength: n, rules: e.rules };
									this.hideStrips(n),
										this.fireEvent('change', s),
										(0, a.dispatch)('change.hs.strongPassword', this.el, s);
								}),
								(e.prototype.hideStrips = function (t) {
									Array.from(this.el.children).forEach(function (e, n) {
										n < t
											? e.classList.add('passed')
											: e.classList.remove('passed');
									});
								}),
								(e.prototype.recalculateDirection = function () {
									(0, a.isEnoughSpace)(
										this.hints,
										this.target,
										'bottom',
										this.popoverSpace,
									)
										? (this.hints.classList.remove('bottom-full'),
											this.hints.classList.add('top-full'),
											(this.hints.style.marginBottom = ''),
											(this.hints.style.marginTop = ''.concat(
												this.popoverSpace,
												'px',
											)))
										: (this.hints.classList.remove('top-full'),
											this.hints.classList.add('bottom-full'),
											(this.hints.style.marginTop = ''),
											(this.hints.style.marginBottom = ''.concat(
												this.popoverSpace,
												'px',
											)));
								}),
								(e.prototype.destroy = function () {
									var t = this;
									this.target.removeEventListener(
										'input',
										this.onTargetInputListener,
									),
										this.target.removeEventListener(
											'focus',
											this.onTargetFocusListener,
										),
										this.target.removeEventListener(
											'blur',
											this.onTargetBlurListener,
										),
										this.target.removeEventListener(
											'input',
											this.onTargetInputSecondListener,
										),
										this.target.removeEventListener(
											'input',
											this.onTargetInputThirdListener,
										),
										(window.$hsStrongPasswordCollection =
											window.$hsStrongPasswordCollection.filter(function (e) {
												return e.element.el !== t.el;
											}));
								}),
								(e.getInstance = function (t, e) {
									var n = window.$hsStrongPasswordCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return n ? (e ? n : n.element.el) : null;
								}),
								(e.autoInit = function () {
									window.$hsStrongPasswordCollection ||
										(window.$hsStrongPasswordCollection = []),
										window.$hsStrongPasswordCollection &&
											(window.$hsStrongPasswordCollection =
												window.$hsStrongPasswordCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-strong-password]:not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												if (
													!window.$hsStrongPasswordCollection.find(
														function (e) {
															var n;
															return (
																(null ===
																	(n = null == e ? void 0 : e.element) ||
																void 0 === n
																	? void 0
																	: n.el) === t
															);
														},
													)
												) {
													var n = t.getAttribute('data-hs-strong-password'),
														s = n ? JSON.parse(n) : {};
													new e(t, s);
												}
											});
								}),
								e
							);
						})(o(n(961)).default);
					window.addEventListener('load', function () {
						l.autoInit();
					}),
						document.addEventListener('scroll', function () {
							if (!window.$hsStrongPasswordCollection) return !1;
							var t = window.$hsStrongPasswordCollection.find(function (t) {
								return t.element.isOpened;
							});
							t && t.element.recalculateDirection();
						}),
						'undefined' != typeof window && (window.HSStrongPassword = l),
						(e.default = l);
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
									var n = s(t);
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
						var s = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (s = t);
							}),
							s.match(/:(.*)]/) ? s.match(/:(.*)]/)[1] : n
						);
					};
					var s = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = s;
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
						for (var n = t.children, s = 0; s < n.length; s++)
							if (n[s] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, n, s, i) {
						void 0 === n && (n = 'auto'),
							void 0 === s && (s = 10),
							void 0 === i && (i = null);
						var r = e.getBoundingClientRect(),
							o = i ? i.getBoundingClientRect() : null,
							a = window.innerHeight,
							l = o ? r.top - o.top : r.top,
							u = (i ? o.bottom : a) - r.bottom,
							c = t.clientHeight + s;
						return 'bottom' === n
							? u >= c
							: 'top' === n
								? l >= c
								: l >= c || u >= c;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var i = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								i(t.parentElement))
						);
					};
					e.isParentOrElementHidden = i;
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
						var s;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var i = [], r = 0; r < arguments.length; r++)
									i[r] = arguments[r];
								clearTimeout(s),
									(s = setTimeout(function () {
										t.apply(n, i);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, n) {
						void 0 === n && (n = null);
						var s = new CustomEvent(t, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(s);
					};
					e.afterTransition = function (t, e) {
						var n = function () {
								e(), t.removeEventListener('transitionend', n, !0);
							},
							s = window.getComputedStyle(t),
							i = s.getPropertyValue('transition-duration');
						'none' !== s.getPropertyValue('transition-property') &&
						parseFloat(i) > 0
							? t.addEventListener('transitionend', n, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, n, s) {
						void 0 === n && (n = ' '),
							void 0 === s && (s = 'add'),
							t.split(n).forEach(function (t) {
								return 'add' === s ? e.classList.add(t) : e.classList.remove(t);
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
		var n = (function n(s) {
			var i = e[s];
			if (void 0 !== i) return i.exports;
			var r = (e[s] = { exports: {} });
			return t[s].call(r.exports, r, r.exports, n), r.exports;
		})(97);
		return n;
	})(),
);
