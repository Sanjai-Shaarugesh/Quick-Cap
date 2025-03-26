!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
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
				144: function (t, e, n) {
					/*
					 * HSTextareaAutoHeight
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						i =
							(this && this.__extends) ||
							((o = function (t, e) {
								return (
									(o =
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
									o(t, e)
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
								o(t, e),
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
											for (var e, n = 1, o = arguments.length; n < o; n++)
												for (var i in (e = arguments[n]))
													Object.prototype.hasOwnProperty.call(e, i) &&
														(t[i] = e[i]);
											return t;
										}),
									r.apply(this, arguments)
								);
							},
						l =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var s = (function (t) {
						function e(e, n) {
							var o = t.call(this, e, n) || this,
								i = e.getAttribute('data-hs-copy-markup'),
								l = i ? JSON.parse(i) : {},
								s = r(r({}, l), n);
							return (
								(o.defaultHeight = (null == s ? void 0 : s.defaultHeight) || 0),
								o.init(),
								o
							);
						}
						return (
							i(e, t),
							(e.prototype.elementInput = function () {
								this.textareaSetHeight(3);
							}),
							(e.prototype.init = function () {
								this.createCollection(
									window.$hsTextareaAutoHeightCollection,
									this,
								),
									this.setAutoHeight();
							}),
							(e.prototype.setAutoHeight = function () {
								var t = this;
								this.isParentHidden()
									? this.callbackAccordingToType()
									: this.textareaSetHeight(3),
									(this.onElementInputListener = function () {
										return t.elementInput();
									}),
									this.el.addEventListener(
										'input',
										this.onElementInputListener,
									);
							}),
							(e.prototype.textareaSetHeight = function (t) {
								void 0 === t && (t = 0),
									(this.el.style.height = 'auto'),
									(this.el.style.height =
										this.checkIfOneLine() && this.defaultHeight
											? ''.concat(this.defaultHeight, 'px')
											: ''.concat(this.el.scrollHeight + t, 'px'));
							}),
							(e.prototype.checkIfOneLine = function () {
								var t = this.el.clientHeight;
								return !(this.el.scrollHeight > t);
							}),
							(e.prototype.isParentHidden = function () {
								return (
									this.el.closest('.hs-overlay.hidden') ||
									this.el.closest('[role="tabpanel"].hidden') ||
									this.el.closest('.hs-collapse.hidden')
								);
							}),
							(e.prototype.parentType = function () {
								return this.el.closest('.hs-collapse')
									? 'collapse'
									: this.el.closest('.hs-overlay')
										? 'overlay'
										: !!this.el.closest('[role="tabpanel"]') && 'tabs';
							}),
							(e.prototype.callbackAccordingToType = function () {
								var t,
									e = this;
								if ('tabs' === this.parentType()) {
									var n =
											null === (t = this.el.closest('[role="tabpanel"]')) ||
											void 0 === t
												? void 0
												: t.id,
										o = document
											.querySelector('[data-hs-tab="#'.concat(n, '"]'))
											.closest('[role="tablist"]');
									(window.HSTabs.getInstance(o, !0) || null).element.on(
										'change',
										function (t) {
											var e = document.querySelectorAll(
												''.concat(t.current, ' [data-hs-textarea-auto-height]'),
											);
											if (!e.length) return !1;
											e.forEach(function (t) {
												var e =
													window.HSTextareaAutoHeight.getInstance(t, !0) ||
													null;
												e && e.element.textareaSetHeight(3);
											});
										},
									);
								} else if ('collapse' === this.parentType()) {
									var i = this.el.closest('.hs-collapse').id;
									window.HSCollapse.getInstance(
										'[data-hs-collapse="#'.concat(i, '"]'),
										!0,
									).element.on('beforeOpen', function () {
										if (!e.el) return !1;
										e.textareaSetHeight(3);
									});
								} else {
									if ('overlay' !== this.parentType()) return !1;
									window.HSOverlay.getInstance(
										this.el.closest('.hs-overlay'),
										!0,
									).element.on('open', function () {
										if (!e.el) return !1;
										e.textareaSetHeight(3);
									});
								}
							}),
							(e.prototype.destroy = function () {
								var t = this;
								this.el.removeEventListener(
									'input',
									this.onElementInputListener,
								),
									(window.$hsTextareaAutoHeightCollection =
										window.$hsTextareaAutoHeightCollection.filter(function (e) {
											return e.element.el !== t.el;
										}));
							}),
							(e.getInstance = function (t, e) {
								var n = window.$hsTextareaAutoHeightCollection.find(
									function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									},
								);
								return n ? (e ? n : n.element) : null;
							}),
							(e.autoInit = function () {
								window.$hsTextareaAutoHeightCollection ||
									(window.$hsTextareaAutoHeightCollection = []),
									window.$hsTextareaAutoHeightCollection &&
										(window.$hsTextareaAutoHeightCollection =
											window.$hsTextareaAutoHeightCollection.filter(
												function (t) {
													var e = t.element;
													return document.contains(e.el);
												},
											)),
									document
										.querySelectorAll(
											'[data-hs-textarea-auto-height]:not(.--prevent-on-load-init)',
										)
										.forEach(function (t) {
											if (
												!window.$hsTextareaAutoHeightCollection.find(
													function (e) {
														var n;
														return (
															(null === (n = null == e ? void 0 : e.element) ||
															void 0 === n
																? void 0
																: n.el) === t
														);
													},
												)
											) {
												var n = t.getAttribute('data-hs-textarea-auto-height'),
													o = n ? JSON.parse(n) : {};
												new e(t, o);
											}
										});
							}),
							e
						);
					})(l(n(961)).default);
					window.addEventListener('load', function () {
						s.autoInit();
					}),
						'undefined' != typeof window && (window.HSTextareaAutoHeight = s),
						(e.default = s);
				},
			},
			e = {};
		var n = (function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var r = (e[o] = { exports: {} });
			return t[o].call(r.exports, r, r.exports, n), r.exports;
		})(144);
		return n;
	})(),
);
