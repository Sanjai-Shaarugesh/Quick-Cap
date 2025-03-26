!(function (t, o) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = o();
	else if ('function' == typeof define && define.amd) define([], o);
	else {
		var i = o();
		for (var e in i) ('object' == typeof exports ? exports : t)[e] = i[e];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				961: (t, o) => {
					Object.defineProperty(o, '__esModule', { value: !0 });
					var i = (function () {
						function t(t, o, i) {
							(this.el = t),
								(this.options = o),
								(this.events = i),
								(this.el = t),
								(this.options = o),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, o) {
								var i;
								t.push({
									id:
										(null === (i = null == o ? void 0 : o.el) || void 0 === i
											? void 0
											: i.id) || t.length + 1,
									element: o,
								});
							}),
							(t.prototype.fireEvent = function (t, o) {
								if ((void 0 === o && (o = null), this.events.hasOwnProperty(t)))
									return this.events[t](o);
							}),
							(t.prototype.on = function (t, o) {
								this.events[t] = o;
							}),
							t
						);
					})();
					o.default = i;
				},
				347: function (t, o, i) {
					/*
					 * HSRangeSlider
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var e,
						n =
							(this && this.__extends) ||
							((e = function (t, o) {
								return (
									(e =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, o) {
												t.__proto__ = o;
											}) ||
										function (t, o) {
											for (var i in o)
												Object.prototype.hasOwnProperty.call(o, i) &&
													(t[i] = o[i]);
										}),
									e(t, o)
								);
							}),
							function (t, o) {
								if ('function' != typeof o && null !== o)
									throw new TypeError(
										'Class extends value ' +
											String(o) +
											' is not a constructor or null',
									);
								function i() {
									this.constructor = t;
								}
								e(t, o),
									(t.prototype =
										null === o
											? Object.create(o)
											: ((i.prototype = o.prototype), new i()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (t) {
											for (var o, i = 1, e = arguments.length; i < e; i++)
												for (var n in (o = arguments[i]))
													Object.prototype.hasOwnProperty.call(o, n) &&
														(t[n] = o[n]);
											return t;
										}),
									r.apply(this, arguments)
								);
							},
						s =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(o, '__esModule', { value: !0 });
					var l = (function (t) {
						function o(o, i, e) {
							var n = t.call(this, o, i, e) || this,
								s = o.getAttribute('data-hs-range-slider'),
								l = s ? JSON.parse(s) : {};
							return (
								(n.concatOptions = r(r(r({}, l), i), {
									cssClasses: r(
										r({}, noUiSlider.cssClasses),
										n.processClasses(l.cssClasses),
									),
								})),
								n.init(),
								n
							);
						}
						return (
							n(o, t),
							Object.defineProperty(o.prototype, 'formattedValue', {
								get: function () {
									var t = this,
										o = this.el.noUiSlider.get();
									if (Array.isArray(o) && this.format) {
										var i = [];
										return (
											o.forEach(function (o) {
												i.push(t.format.to(o));
											}),
											i
										);
									}
									return this.format ? this.format.to(o) : o;
								},
								enumerable: !1,
								configurable: !0,
							}),
							(o.prototype.processClasses = function (t) {
								var o = {};
								return (
									Object.keys(t).forEach(function (i) {
										i &&
											(o[i] = ''
												.concat(noUiSlider.cssClasses[i], ' ')
												.concat(t[i]));
									}),
									o
								);
							}),
							(o.prototype.init = function () {
								var t, o, i, e, n, r, s, l, a, c, u, d, f;
								this.createCollection(window.$hsRangeSliderCollection, this),
									(
										'object' ==
										typeof (null === (t = this.concatOptions) || void 0 === t
											? void 0
											: t.formatter)
											? 'thousandsSeparatorAndDecimalPoints' ===
												(null ===
													(i =
														null === (o = this.concatOptions) || void 0 === o
															? void 0
															: o.formatter) || void 0 === i
													? void 0
													: i.type)
											: 'thousandsSeparatorAndDecimalPoints' ===
												(null === (e = this.concatOptions) || void 0 === e
													? void 0
													: e.formatter)
									)
										? this.thousandsSeparatorAndDecimalPointsFormatter()
										: (
													'object' ==
													typeof (null === (n = this.concatOptions) ||
													void 0 === n
														? void 0
														: n.formatter)
														? 'integer' ===
															(null ===
																(s =
																	null === (r = this.concatOptions) ||
																	void 0 === r
																		? void 0
																		: r.formatter) || void 0 === s
																? void 0
																: s.type)
														: 'integer' ===
															(null === (l = this.concatOptions) || void 0 === l
																? void 0
																: l.formatter)
											  )
											? this.integerFormatter()
											: 'object' ==
													typeof (null === (a = this.concatOptions) ||
													void 0 === a
														? void 0
														: a.formatter) &&
												((null ===
													(u =
														null === (c = this.concatOptions) || void 0 === c
															? void 0
															: c.formatter) || void 0 === u
													? void 0
													: u.prefix) ||
													(null ===
														(f =
															null === (d = this.concatOptions) || void 0 === d
																? void 0
																: d.formatter) || void 0 === f
														? void 0
														: f.postfix)) &&
												this.prefixOrPostfixFormatter(),
									noUiSlider.create(this.el, this.concatOptions),
									this.concatOptions.disabled && this.setDisabled();
							}),
							(o.prototype.formatValue = function (t) {
								var o,
									i,
									e,
									n,
									r,
									s,
									l,
									a,
									c,
									u = '';
								return (
									'object' ==
									typeof (null === (o = this.concatOptions) || void 0 === o
										? void 0
										: o.formatter)
										? ((null ===
												(e =
													null === (i = this.concatOptions) || void 0 === i
														? void 0
														: i.formatter) || void 0 === e
												? void 0
												: e.prefix) &&
												(u +=
													null ===
														(r =
															null === (n = this.concatOptions) || void 0 === n
																? void 0
																: n.formatter) || void 0 === r
														? void 0
														: r.prefix),
											(u += t),
											(null ===
												(l =
													null === (s = this.concatOptions) || void 0 === s
														? void 0
														: s.formatter) || void 0 === l
												? void 0
												: l.postfix) &&
												(u +=
													null ===
														(c =
															null === (a = this.concatOptions) || void 0 === a
																? void 0
																: a.formatter) || void 0 === c
														? void 0
														: c.postfix))
										: (u += t),
									u
								);
							}),
							(o.prototype.integerFormatter = function () {
								var t,
									o = this;
								(this.format = {
									to: function (t) {
										return o.formatValue(Math.round(t));
									},
									from: function (t) {
										return Math.round(+t);
									},
								}),
									(null === (t = this.concatOptions) || void 0 === t
										? void 0
										: t.tooltips) &&
										(this.concatOptions.tooltips = this.format);
							}),
							(o.prototype.prefixOrPostfixFormatter = function () {
								var t,
									o = this;
								(this.format = {
									to: function (t) {
										return o.formatValue(t);
									},
									from: function (t) {
										return +t;
									},
								}),
									(null === (t = this.concatOptions) || void 0 === t
										? void 0
										: t.tooltips) &&
										(this.concatOptions.tooltips = this.format);
							}),
							(o.prototype.thousandsSeparatorAndDecimalPointsFormatter =
								function () {
									var t,
										o = this;
									(this.format = {
										to: function (t) {
											return o.formatValue(
												new Intl.NumberFormat('en-US', {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}).format(t),
											);
										},
										from: function (t) {
											return parseFloat(t.replace(/,/g, ''));
										},
									}),
										(null === (t = this.concatOptions) || void 0 === t
											? void 0
											: t.tooltips) &&
											(this.concatOptions.tooltips = this.format);
								}),
							(o.prototype.setDisabled = function () {
								this.el.setAttribute('disabled', 'disabled'),
									this.el.classList.add('disabled');
							}),
							(o.prototype.destroy = function () {
								var t = this;
								this.el.noUiSlider.destroy(),
									(this.format = null),
									(window.$hsRangeSliderCollection =
										window.$hsRangeSliderCollection.filter(function (o) {
											return o.element.el !== t.el;
										}));
							}),
							(o.getInstance = function (t, o) {
								void 0 === o && (o = !1);
								var i = window.$hsRangeSliderCollection.find(function (o) {
									return (
										o.element.el ===
										('string' == typeof t ? document.querySelector(t) : t)
									);
								});
								return i ? (o ? i : i.element.el) : null;
							}),
							(o.autoInit = function () {
								window.$hsRangeSliderCollection ||
									(window.$hsRangeSliderCollection = []),
									window.$hsRangeSliderCollection &&
										(window.$hsRangeSliderCollection =
											window.$hsRangeSliderCollection.filter(function (t) {
												var o = t.element;
												return document.contains(o.el);
											})),
									document
										.querySelectorAll(
											'[data-hs-range-slider]:not(.--prevent-on-load-init)',
										)
										.forEach(function (t) {
											window.$hsRangeSliderCollection.find(function (o) {
												var i;
												return (
													(null === (i = null == o ? void 0 : o.element) ||
													void 0 === i
														? void 0
														: i.el) === t
												);
											}) || new o(t);
										});
							}),
							o
						);
					})(s(i(961)).default);
					window.addEventListener('load', function () {
						l.autoInit();
					}),
						'undefined' != typeof window && (window.HSRangeSlider = l),
						(o.default = l);
				},
			},
			o = {};
		var i = (function i(e) {
			var n = o[e];
			if (void 0 !== n) return n.exports;
			var r = (o[e] = { exports: {} });
			return t[e].call(r.exports, r, r.exports, i), r.exports;
		})(347);
		return i;
	})(),
);
