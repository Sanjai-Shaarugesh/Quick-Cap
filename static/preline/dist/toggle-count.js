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
				684: function (t, e, n) {
					/*
					 * HSToggleCount
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
					var u = (function (t) {
						function e(e, n) {
							var o = t.call(this, e, n) || this,
								i = e.getAttribute('data-hs-toggle-count'),
								l = i ? JSON.parse(i) : {},
								u = r(r({}, l), n);
							return (
								(o.target = (null == u ? void 0 : u.target)
									? 'string' == typeof (null == u ? void 0 : u.target)
										? document.querySelector(u.target)
										: u.target
									: null),
								(o.min = (null == u ? void 0 : u.min) || 0),
								(o.max = (null == u ? void 0 : u.max) || 0),
								(o.duration = (null == u ? void 0 : u.duration) || 700),
								(o.isChecked = o.target.checked || !1),
								o.target && o.init(),
								o
							);
						}
						return (
							i(e, t),
							(e.prototype.toggleChange = function () {
								(this.isChecked = !this.isChecked), this.toggle();
							}),
							(e.prototype.init = function () {
								var t = this;
								this.createCollection(window.$hsToggleCountCollection, this),
									this.isChecked && (this.el.innerText = String(this.max)),
									(this.onToggleChangeListener = function () {
										return t.toggleChange();
									}),
									this.target.addEventListener(
										'change',
										this.onToggleChangeListener,
									);
							}),
							(e.prototype.toggle = function () {
								this.isChecked ? this.countUp() : this.countDown();
							}),
							(e.prototype.animate = function (t, e) {
								var n = this,
									o = 0,
									i = function (r) {
										o || (o = r);
										var l = Math.min((r - o) / n.duration, 1);
										(n.el.innerText = String(Math.floor(l * (e - t) + t))),
											l < 1 && window.requestAnimationFrame(i);
									};
								window.requestAnimationFrame(i);
							}),
							(e.prototype.countUp = function () {
								this.animate(this.min, this.max);
							}),
							(e.prototype.countDown = function () {
								this.animate(this.max, this.min);
							}),
							(e.prototype.destroy = function () {
								var t = this;
								this.target.removeEventListener(
									'change',
									this.onToggleChangeListener,
								),
									(window.$hsToggleCountCollection =
										window.$hsToggleCountCollection.filter(function (e) {
											return e.element.el !== t.el;
										}));
							}),
							(e.getInstance = function (t, e) {
								var n = window.$hsToggleCountCollection.find(function (e) {
									return (
										e.element.el ===
										('string' == typeof t ? document.querySelector(t) : t)
									);
								});
								return n ? (e ? n : n.element) : null;
							}),
							(e.autoInit = function () {
								window.$hsToggleCountCollection ||
									(window.$hsToggleCountCollection = []),
									window.$hsToggleCountCollection &&
										(window.$hsToggleCountCollection =
											window.$hsToggleCountCollection.filter(function (t) {
												var e = t.element;
												return document.contains(e.el);
											})),
									document
										.querySelectorAll(
											'[data-hs-toggle-count]:not(.--prevent-on-load-init)',
										)
										.forEach(function (t) {
											window.$hsToggleCountCollection.find(function (e) {
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
					})(l(n(961)).default);
					window.addEventListener('load', function () {
						u.autoInit();
					}),
						'undefined' != typeof window && (window.HSToggleCount = u),
						(e.default = u);
				},
			},
			e = {};
		var n = (function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var r = (e[o] = { exports: {} });
			return t[o].call(r.exports, r, r.exports, n), r.exports;
		})(684);
		return n;
	})(),
);
