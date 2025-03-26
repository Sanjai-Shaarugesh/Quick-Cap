!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var i = e();
		for (var n in i) ('object' == typeof exports ? exports : t)[n] = i[n];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				961: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 });
					var i = (function () {
						function t(t, e, i) {
							(this.el = t),
								(this.options = e),
								(this.events = i),
								(this.el = t),
								(this.options = e),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, e) {
								var i;
								t.push({
									id:
										(null === (i = null == e ? void 0 : e.el) || void 0 === i
											? void 0
											: i.id) || t.length + 1,
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
					e.default = i;
				},
				812: function (t, e, i) {
					var n,
						o =
							(this && this.__extends) ||
							((n = function (t, e) {
								return (
									(n =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, e) {
												t.__proto__ = e;
											}) ||
										function (t, e) {
											for (var i in e)
												Object.prototype.hasOwnProperty.call(e, i) &&
													(t[i] = e[i]);
										}),
									n(t, e)
								);
							}),
							function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Class extends value ' +
											String(e) +
											' is not a constructor or null',
									);
								function i() {
									this.constructor = t;
								}
								n(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((i.prototype = e.prototype), new i()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (t) {
											for (var e, i = 1, n = arguments.length; i < n; i++)
												for (var o in (e = arguments[i]))
													Object.prototype.hasOwnProperty.call(e, o) &&
														(t[o] = e[o]);
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
					/*
					 * HSLayoutSplitter
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var a = i(292),
						s = (function (t) {
							function e(e, i) {
								var n,
									o = t.call(this, e, i) || this,
									l = e.getAttribute('data-hs-layout-splitter'),
									a = l ? JSON.parse(l) : {},
									s = r(r({}, a), i);
								return (
									(o.horizontalSplitterClasses =
										(null == s ? void 0 : s.horizontalSplitterClasses) || null),
									(o.horizontalSplitterTemplate =
										(null == s ? void 0 : s.horizontalSplitterTemplate) ||
										'<div></div>'),
									(o.verticalSplitterClasses =
										(null == s ? void 0 : s.verticalSplitterClasses) || null),
									(o.verticalSplitterTemplate =
										(null == s ? void 0 : s.verticalSplitterTemplate) ||
										'<div></div>'),
									(o.isSplittersAddedManually =
										null !==
											(n = null == s ? void 0 : s.isSplittersAddedManually) &&
										void 0 !== n &&
										n),
									(o.horizontalSplitters = []),
									(o.horizontalControls = []),
									(o.verticalSplitters = []),
									(o.verticalControls = []),
									(o.isDragging = !1),
									(o.activeSplitter = null),
									(o.onControlPointerDownListener = []),
									o.init(),
									o
								);
							}
							return (
								o(e, t),
								(e.prototype.controlPointerDown = function (t) {
									(this.isDragging = !0),
										(this.activeSplitter = t),
										this.onPointerDownHandler(t);
								}),
								(e.prototype.controlPointerUp = function () {
									(this.isDragging = !1),
										(this.activeSplitter = null),
										this.onPointerUpHandler();
								}),
								(e.prototype.init = function () {
									this.createCollection(
										window.$hsLayoutSplitterCollection,
										this,
									),
										this.buildSplitters(),
										e.isListenersInitialized ||
											(document.addEventListener(
												'pointermove',
												e.onDocumentPointerMove,
											),
											document.addEventListener(
												'pointerup',
												e.onDocumentPointerUp,
											),
											(e.isListenersInitialized = !0));
								}),
								(e.prototype.buildSplitters = function () {
									this.buildHorizontalSplitters(),
										this.buildVerticalSplitters();
								}),
								(e.prototype.buildHorizontalSplitters = function () {
									var t = this,
										e = this.el.querySelectorAll(
											'[data-hs-layout-splitter-horizontal-group]',
										);
									e.length &&
										(e.forEach(function (e) {
											t.horizontalSplitters.push({
												el: e,
												items: Array.from(
													e.querySelectorAll(
														':scope > [data-hs-layout-splitter-item]',
													),
												),
											});
										}),
										this.updateHorizontalSplitter());
								}),
								(e.prototype.buildVerticalSplitters = function () {
									var t = this,
										e = this.el.querySelectorAll(
											'[data-hs-layout-splitter-vertical-group]',
										);
									e.length &&
										(e.forEach(function (e) {
											t.verticalSplitters.push({
												el: e,
												items: Array.from(
													e.querySelectorAll(
														':scope > [data-hs-layout-splitter-item]',
													),
												),
											});
										}),
										this.updateVerticalSplitter());
								}),
								(e.prototype.buildControl = function (t, e, i) {
									var n;
									if (
										(void 0 === i && (i = 'horizontal'),
										this.isSplittersAddedManually)
									) {
										if (!(n = null == e ? void 0 : e.previousElementSibling))
											return !1;
										n.style.display = '';
									} else
										(n = (0, a.htmlToElement)(
											'horizontal' === i
												? this.horizontalSplitterTemplate
												: this.verticalSplitterTemplate,
										)),
											(0, a.classToClassList)(
												'horizontal' === i
													? this.horizontalSplitterClasses
													: this.verticalSplitterClasses,
												n,
											),
											n.classList.add('hs-layout-splitter-control');
									var o = { el: n, direction: i, prev: t, next: e };
									'horizontal' === i
										? this.horizontalControls.push(o)
										: this.verticalControls.push(o),
										this.bindListeners(o),
										e &&
											!this.isSplittersAddedManually &&
											t.insertAdjacentElement('afterend', n);
								}),
								(e.prototype.getSplitterItemParsedParam = function (t) {
									var e = t.getAttribute('data-hs-layout-splitter-item');
									return (0, a.isJson)(e) ? JSON.parse(e) : e;
								}),
								(e.prototype.getContainerSize = function (t, e) {
									return e
										? t.getBoundingClientRect().width
										: t.getBoundingClientRect().height;
								}),
								(e.prototype.getMaxFlexSize = function (t, e, i) {
									var n = this.getSplitterItemSingleParam(t, e);
									return 'number' == typeof n ? (n / 100) * i : 0;
								}),
								(e.prototype.updateHorizontalSplitter = function () {
									var t = this;
									this.horizontalSplitters.forEach(function (e) {
										var i = e.items;
										i.forEach(function (e) {
											t.updateSingleSplitter(e);
										}),
											i.forEach(function (e, n) {
												n >= i.length - 1
													? t.buildControl(e, null)
													: t.buildControl(e, i[n + 1]);
											});
									});
								}),
								(e.prototype.updateSingleSplitter = function (t) {
									var e = t.getAttribute('data-hs-layout-splitter-item'),
										i = (0, a.isJson)(e) ? JSON.parse(e) : e,
										n = (0, a.isJson)(e) ? i.dynamicSize : e;
									t.style.flex = ''.concat(n, ' 1 0');
								}),
								(e.prototype.updateVerticalSplitter = function () {
									var t = this;
									this.verticalSplitters.forEach(function (e) {
										var i = e.items;
										i.forEach(function (e) {
											t.updateSingleSplitter(e);
										}),
											i.forEach(function (e, n) {
												n >= i.length - 1
													? t.buildControl(e, null, 'vertical')
													: t.buildControl(e, i[n + 1], 'vertical');
											});
									});
								}),
								(e.prototype.updateSplitterItemParam = function (t, e) {
									var i = this.getSplitterItemParsedParam(t),
										n = e.toFixed(1),
										o =
											'object' == typeof i
												? JSON.stringify(r(r({}, i), { dynamicSize: +n }))
												: n;
									t.setAttribute('data-hs-layout-splitter-item', o);
								}),
								(e.prototype.onPointerDownHandler = function (t) {
									var e = t.el,
										i = t.prev,
										n = t.next;
									e.classList.add('dragging'),
										i.classList.add('dragging'),
										n.classList.add('dragging'),
										(document.body.style.userSelect = 'none');
								}),
								(e.prototype.onPointerUpHandler = function () {
									document.body.style.userSelect = '';
								}),
								(e.prototype.onPointerMoveHandler = function (t, e, i) {
									var n = e.prev,
										o = e.next,
										r = e.el.closest(
											'horizontal' === i
												? '[data-hs-layout-splitter-horizontal-group]'
												: '[data-hs-layout-splitter-vertical-group]',
										),
										l = 'horizontal' === i,
										a = this.getContainerSize(r, l),
										s = this.calculateAvailableSize(r, n, o, l, a),
										u = this.calculateResizedSizes(t, n, s, l),
										c = this.enforceLimits(u, n, o, a, s);
									this.applySizes(n, o, c, a);
								}),
								(e.prototype.bindListeners = function (t) {
									var e = this,
										i = t.el;
									this.onControlPointerDownListener.push({
										el: i,
										fn: function () {
											return e.controlPointerDown(t);
										},
									}),
										i.addEventListener(
											'pointerdown',
											this.onControlPointerDownListener.find(function (t) {
												return t.el === i;
											}).fn,
										);
								}),
								(e.prototype.calculateAvailableSize = function (t, e, i, n, o) {
									var r = t.querySelectorAll(
										':scope > [data-hs-layout-splitter-item]',
									);
									return (
										o -
										Array.from(r).reduce(function (t, o) {
											if (o === e || o === i) return t;
											var r = o.getBoundingClientRect();
											return (
												t +
												('fixed' === window.getComputedStyle(o).position
													? 0
													: n
														? r.width
														: r.height)
											);
										}, 0)
									);
								}),
								(e.prototype.calculateResizedSizes = function (t, e, i, n) {
									var o = n
											? e.getBoundingClientRect().left
											: e.getBoundingClientRect().top,
										r = Math.max(
											0,
											Math.min((n ? t.clientX : t.clientY) - o, i),
										);
									return { previousSize: r, nextSize: i - r };
								}),
								(e.prototype.enforceLimits = function (t, e, i, n, o) {
									var r = this.getMaxFlexSize(e, 'minSize', n),
										l = this.getMaxFlexSize(i, 'minSize', n),
										s = this.getMaxFlexSize(e, 'preLimitSize', n),
										u = this.getMaxFlexSize(i, 'preLimitSize', n),
										c = t.previousSize,
										p = t.nextSize;
									p < l ? (c = o - (p = l)) : c < r && (p = o - (c = r));
									var d = {
										prev: e,
										next: i,
										previousSize: c.toFixed(),
										previousFlexSize: (c / n) * 100,
										previousPreLimitSize: s,
										previousPreLimitFlexSize: (s / n) * 100,
										previousMinSize: r,
										previousMinFlexSize: (r / n) * 100,
										nextSize: p.toFixed(),
										nextFlexSize: (p / n) * 100,
										nextPreLimitSize: u,
										nextPreLimitFlexSize: (u / n) * 100,
										nextMinSize: l,
										nextMinFlexSize: (l / n) * 100,
										static: {
											prev: {
												minSize: this.getSplitterItemSingleParam(e, 'minSize'),
												preLimitSize: this.getSplitterItemSingleParam(
													e,
													'preLimitSize',
												),
											},
											next: {
												minSize: this.getSplitterItemSingleParam(i, 'minSize'),
												preLimitSize: this.getSplitterItemSingleParam(
													i,
													'preLimitSize',
												),
											},
										},
									};
									return (
										p < l
											? (this.fireEvent('onNextLimit', d),
												(0, a.dispatch)(
													'onNextLimit.hs.layoutSplitter',
													this.el,
													d,
												))
											: c < r &&
												(this.fireEvent('onPrevLimit', d),
												(0, a.dispatch)(
													'onPrevLimit.hs.layoutSplitter',
													this.el,
													d,
												)),
										c <= s &&
											(this.fireEvent('onPrevPreLimit', d),
											(0, a.dispatch)(
												'onPrevPreLimit.hs.layoutSplitter',
												this.el,
												d,
											)),
										p <= u &&
											(this.fireEvent('onNextPreLimit', d),
											(0, a.dispatch)(
												'onNextPreLimit.hs.layoutSplitter',
												this.el,
												d,
											)),
										this.fireEvent('drag', d),
										(0, a.dispatch)('drag.hs.layoutSplitter', this.el, d),
										{ previousSize: c, nextSize: p }
									);
								}),
								(e.prototype.applySizes = function (t, e, i, n) {
									var o = i.previousSize,
										r = i.nextSize,
										l = (o / n) * 100;
									this.updateSplitterItemParam(t, l),
										(t.style.flex = ''.concat(l.toFixed(1), ' 1 0'));
									var a = (r / n) * 100;
									this.updateSplitterItemParam(e, a),
										(e.style.flex = ''.concat(a.toFixed(1), ' 1 0'));
								}),
								(e.prototype.getSplitterItemSingleParam = function (t, e) {
									try {
										return this.getSplitterItemParsedParam(t)[e];
									} catch (t) {
										return (
											console.log(
												'There is no parameter with this name in the object.',
											),
											!1
										);
									}
								}),
								(e.prototype.getData = function (t) {
									var e,
										i,
										n = t.closest(
											'[data-hs-layout-splitter-horizontal-group], [data-hs-layout-splitter-vertical-group]',
										);
									if (!n)
										throw new Error(
											'Element is not inside a valid layout splitter container.',
										);
									var o = n.matches(
											'[data-hs-layout-splitter-horizontal-group]',
										),
										r = this.getContainerSize(n, o),
										l = this.getSplitterItemSingleParam(t, 'dynamicSize') || 0,
										a = this.getMaxFlexSize(t, 'minSize', r),
										s = this.getMaxFlexSize(t, 'preLimitSize', r),
										u = (a / r) * 100,
										c = (s / r) * 100;
									return {
										el: t,
										dynamicSize: +((l / 100) * r).toFixed(),
										dynamicFlexSize: l,
										minSize: +a.toFixed(),
										minFlexSize: u,
										preLimitSize: +s.toFixed(),
										preLimitFlexSize: c,
										static: {
											minSize:
												null !==
													(e = this.getSplitterItemSingleParam(t, 'minSize')) &&
												void 0 !== e
													? e
													: null,
											preLimitSize:
												null !==
													(i = this.getSplitterItemSingleParam(
														t,
														'preLimitSize',
													)) && void 0 !== i
													? i
													: null,
										},
									};
								}),
								(e.prototype.setSplitterItemSize = function (t, e) {
									this.updateSplitterItemParam(t, e),
										(t.style.flex = ''.concat(e.toFixed(1), ' 1 0'));
								}),
								(e.prototype.updateFlexValues = function (t) {
									var e = this,
										i = 0,
										n = window.innerWidth;
									if (
										(t.forEach(function (t) {
											var o = t.id,
												r = t.breakpoints,
												l = document.getElementById(o);
											if (l) {
												var a = (function (t) {
													for (
														var e = Object.keys(t)
																.map(Number)
																.sort(function (t, e) {
																	return t - e;
																}),
															i = e.length - 1;
														i >= 0;
														i--
													)
														if (n >= e[i]) return t[e[i]];
													return 0;
												})(r);
												e.updateSplitterItemParam(l, a),
													(l.style.flex = ''.concat(a.toFixed(1), ' 1 0')),
													(i += a);
											}
										}),
										100 !== i)
									) {
										var o = 100 / i;
										t.forEach(function (t) {
											var i = t.id,
												n = document.getElementById(i);
											if (n) {
												var r = parseFloat(n.style.flex.split(' ')[0]) * o;
												e.updateSplitterItemParam(n, r),
													(n.style.flex = ''.concat(r.toFixed(1), ' 1 0'));
											}
										});
									}
								}),
								(e.prototype.destroy = function () {
									var t = this;
									this.onControlPointerDownListener &&
										(this.onControlPointerDownListener.forEach(function (t) {
											var e = t.el,
												i = t.fn;
											e.removeEventListener('pointerdown', i);
										}),
										(this.onControlPointerDownListener = null)),
										this.horizontalSplitters.forEach(function (t) {
											t.items.forEach(function (t) {
												t.style.flex = '';
											});
										}),
										this.verticalSplitters.forEach(function (t) {
											t.items.forEach(function (t) {
												t.style.flex = '';
											});
										}),
										this.horizontalControls.forEach(function (e) {
											var i = e.el;
											t.isSplittersAddedManually
												? (i.style.display = 'none')
												: i.remove();
										}),
										this.verticalControls.forEach(function (e) {
											var i = e.el;
											t.isSplittersAddedManually
												? (i.style.display = 'none')
												: i.remove();
										}),
										(this.horizontalControls = []),
										(this.verticalControls = []),
										(window.$hsLayoutSplitterCollection =
											window.$hsLayoutSplitterCollection.filter(function (e) {
												return e.element.el !== t.el;
											})),
										0 === window.$hsLayoutSplitterCollection.length &&
											e.isListenersInitialized &&
											(document.removeEventListener(
												'pointermove',
												e.onDocumentPointerMove,
											),
											document.removeEventListener(
												'pointerup',
												e.onDocumentPointerUp,
											),
											(e.isListenersInitialized = !1));
								}),
								(e.findInCollection = function (t) {
									return (
										window.$hsLayoutSplitterCollection.find(function (i) {
											return t instanceof e
												? i.element.el === t.el
												: 'string' == typeof t
													? i.element.el === document.querySelector(t)
													: i.element.el === t;
										}) || null
									);
								}),
								(e.autoInit = function () {
									window.$hsLayoutSplitterCollection ||
										((window.$hsLayoutSplitterCollection = []),
										window.addEventListener('pointerup', function () {
											if (!window.$hsLayoutSplitterCollection) return !1;
											var t = document.querySelector(
													'.hs-layout-splitter-control.dragging',
												),
												i = document.querySelectorAll(
													'[data-hs-layout-splitter-item].dragging',
												);
											if (!t) return !1;
											var n = e.getInstance(
												t.closest('[data-hs-layout-splitter]'),
												!0,
											);
											t.classList.remove('dragging'),
												i.forEach(function (t) {
													return t.classList.remove('dragging');
												}),
												(n.element.isDragging = !1);
										})),
										window.$hsLayoutSplitterCollection &&
											(window.$hsLayoutSplitterCollection =
												window.$hsLayoutSplitterCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-layout-splitter]:not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												window.$hsLayoutSplitterCollection.find(function (e) {
													var i;
													return (
														(null === (i = null == e ? void 0 : e.element) ||
														void 0 === i
															? void 0
															: i.el) === t
													);
												}) || new e(t);
											});
								}),
								(e.getInstance = function (t, e) {
									var i = window.$hsLayoutSplitterCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return i ? (e ? i : i.element.el) : null;
								}),
								(e.on = function (t, i, n) {
									var o = e.findInCollection(i);
									o && (o.element.events[t] = n);
								}),
								(e.isListenersInitialized = !1),
								(e.onDocumentPointerMove = function (t) {
									var i = document.querySelector(
										'.hs-layout-splitter-control.dragging',
									);
									if (i) {
										var n = e.getInstance(
											i.closest('[data-hs-layout-splitter]'),
											!0,
										);
										if (n && n.element.isDragging) {
											var o = n.element.activeSplitter;
											o &&
												('vertical' === o.direction
													? n.element.onPointerMoveHandler(t, o, 'vertical')
													: n.element.onPointerMoveHandler(t, o, 'horizontal'));
										}
									}
								}),
								(e.onDocumentPointerUp = function () {
									var t = document.querySelector(
										'.hs-layout-splitter-control.dragging',
									);
									if (t) {
										var i = e.getInstance(
											t.closest('[data-hs-layout-splitter]'),
											!0,
										);
										i && i.element.controlPointerUp();
									}
								}),
								e
							);
						})(l(i(961)).default);
					window.addEventListener('load', function () {
						s.autoInit();
					}),
						'undefined' != typeof window && (window.HSLayoutSplitter = s),
						(e.default = s);
				},
				292: function (t, e) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var i = this;
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
									var i = n(t);
									'auto' !== i && (i = parseInt(i, 10)) > e && (e = i);
								}),
								e
							);
						});
					e.stringToBoolean = function (t) {
						return 'true' === t;
					};
					e.getClassProperty = function (t, e, i) {
						return (
							void 0 === i && (i = ''),
							(window.getComputedStyle(t).getPropertyValue(e) || i).replace(
								' ',
								'',
							)
						);
					};
					e.getClassPropertyAlt = function (t, e, i) {
						void 0 === i && (i = '');
						var n = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (n = t);
							}),
							n.match(/:(.*)]/) ? n.match(/:(.*)]/)[1] : i
						);
					};
					var n = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = n;
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
						for (var i = t.children, n = 0; n < i.length; n++)
							if (i[n] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, i, n, o) {
						void 0 === i && (i = 'auto'),
							void 0 === n && (n = 10),
							void 0 === o && (o = null);
						var r = e.getBoundingClientRect(),
							l = o ? o.getBoundingClientRect() : null,
							a = window.innerHeight,
							s = l ? r.top - l.top : r.top,
							u = (o ? l.bottom : a) - r.bottom,
							c = t.clientHeight + n;
						return 'bottom' === i
							? u >= c
							: 'top' === i
								? s >= c
								: s >= c || u >= c;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var o = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								o(t.parentElement))
						);
					};
					e.isParentOrElementHidden = o;
					e.isJson = function (t) {
						if ('string' != typeof t) return !1;
						var e = t.trim()[0],
							i = t.trim().slice(-1);
						if (('{' === e && '}' === i) || ('[' === e && ']' === i))
							try {
								return JSON.parse(t), !0;
							} catch (t) {
								return !1;
							}
						return !1;
					};
					e.debounce = function (t, e) {
						var n;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var o = [], r = 0; r < arguments.length; r++)
									o[r] = arguments[r];
								clearTimeout(n),
									(n = setTimeout(function () {
										t.apply(i, o);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, i) {
						void 0 === i && (i = null);
						var n = new CustomEvent(t, {
							detail: { payload: i },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(n);
					};
					e.afterTransition = function (t, e) {
						var i = function () {
								e(), t.removeEventListener('transitionend', i, !0);
							},
							n = window.getComputedStyle(t),
							o = n.getPropertyValue('transition-duration');
						'none' !== n.getPropertyValue('transition-property') &&
						parseFloat(o) > 0
							? t.addEventListener('transitionend', i, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, i, n) {
						void 0 === i && (i = ' '),
							void 0 === n && (n = 'add'),
							t.split(i).forEach(function (t) {
								return 'add' === n ? e.classList.add(t) : e.classList.remove(t);
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
		var i = (function i(n) {
			var o = e[n];
			if (void 0 !== o) return o.exports;
			var r = (e[n] = { exports: {} });
			return t[n].call(r.exports, r, r.exports, i), r.exports;
		})(812);
		return i;
	})(),
);
