!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t();
	else if ('function' == typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o];
	}
})(self, () =>
	(() => {
		'use strict';
		var e = {
				170: (e, t, n) => {
					n.r(t),
						n.d(t, {
							afterMain: () => E,
							afterRead: () => w,
							afterWrite: () => T,
							applyStyles: () => M,
							arrow: () => G,
							auto: () => a,
							basePlacements: () => l,
							beforeMain: () => b,
							beforeRead: () => m,
							beforeWrite: () => O,
							bottom: () => r,
							clippingParents: () => u,
							computeStyles: () => ne,
							createPopper: () => Me,
							createPopperBase: () => _e,
							createPopperLite: () => je,
							detectOverflow: () => ye,
							end: () => f,
							eventListeners: () => re,
							flip: () => we,
							hide: () => Ee,
							left: () => s,
							main: () => x,
							modifierPhases: () => S,
							offset: () => Oe,
							placements: () => g,
							popper: () => d,
							popperGenerator: () => Ae,
							popperOffsets: () => Le,
							preventOverflow: () => Te,
							read: () => y,
							reference: () => h,
							right: () => i,
							start: () => c,
							top: () => o,
							variationPlacements: () => v,
							viewport: () => p,
							write: () => L,
						});
					var o = 'top',
						r = 'bottom',
						i = 'right',
						s = 'left',
						a = 'auto',
						l = [o, r, i, s],
						c = 'start',
						f = 'end',
						u = 'clippingParents',
						p = 'viewport',
						d = 'popper',
						h = 'reference',
						v = l.reduce(function (e, t) {
							return e.concat([t + '-' + c, t + '-' + f]);
						}, []),
						g = [].concat(l, [a]).reduce(function (e, t) {
							return e.concat([t, t + '-' + c, t + '-' + f]);
						}, []),
						m = 'beforeRead',
						y = 'read',
						w = 'afterRead',
						b = 'beforeMain',
						x = 'main',
						E = 'afterMain',
						O = 'beforeWrite',
						L = 'write',
						T = 'afterWrite',
						S = [m, y, w, b, x, E, O, L, T];
					function C(e) {
						return e ? (e.nodeName || '').toLowerCase() : null;
					}
					function I(e) {
						if (null == e) return window;
						if ('[object Window]' !== e.toString()) {
							var t = e.ownerDocument;
							return (t && t.defaultView) || window;
						}
						return e;
					}
					function P(e) {
						return e instanceof I(e).Element || e instanceof Element;
					}
					function A(e) {
						return e instanceof I(e).HTMLElement || e instanceof HTMLElement;
					}
					function _(e) {
						return (
							'undefined' != typeof ShadowRoot &&
							(e instanceof I(e).ShadowRoot || e instanceof ShadowRoot)
						);
					}
					const M = {
						name: 'applyStyles',
						enabled: !0,
						phase: 'write',
						fn: function (e) {
							var t = e.state;
							Object.keys(t.elements).forEach(function (e) {
								var n = t.styles[e] || {},
									o = t.attributes[e] || {},
									r = t.elements[e];
								A(r) &&
									C(r) &&
									(Object.assign(r.style, n),
									Object.keys(o).forEach(function (e) {
										var t = o[e];
										!1 === t
											? r.removeAttribute(e)
											: r.setAttribute(e, !0 === t ? '' : t);
									}));
							});
						},
						effect: function (e) {
							var t = e.state,
								n = {
									popper: {
										position: t.options.strategy,
										left: '0',
										top: '0',
										margin: '0',
									},
									arrow: { position: 'absolute' },
									reference: {},
								};
							return (
								Object.assign(t.elements.popper.style, n.popper),
								(t.styles = n),
								t.elements.arrow &&
									Object.assign(t.elements.arrow.style, n.arrow),
								function () {
									Object.keys(t.elements).forEach(function (e) {
										var o = t.elements[e],
											r = t.attributes[e] || {},
											i = Object.keys(
												t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
											).reduce(function (e, t) {
												return (e[t] = ''), e;
											}, {});
										A(o) &&
											C(o) &&
											(Object.assign(o.style, i),
											Object.keys(r).forEach(function (e) {
												o.removeAttribute(e);
											}));
									});
								}
							);
						},
						requires: ['computeStyles'],
					};
					function j(e) {
						return e.split('-')[0];
					}
					var H = Math.max,
						k = Math.min,
						D = Math.round;
					function B() {
						var e = navigator.userAgentData;
						return null != e && e.brands && Array.isArray(e.brands)
							? e.brands
									.map(function (e) {
										return e.brand + '/' + e.version;
									})
									.join(' ')
							: navigator.userAgent;
					}
					function R() {
						return !/^((?!chrome|android).)*safari/i.test(B());
					}
					function Y(e, t, n) {
						void 0 === t && (t = !1), void 0 === n && (n = !1);
						var o = e.getBoundingClientRect(),
							r = 1,
							i = 1;
						t &&
							A(e) &&
							((r = (e.offsetWidth > 0 && D(o.width) / e.offsetWidth) || 1),
							(i = (e.offsetHeight > 0 && D(o.height) / e.offsetHeight) || 1));
						var s = (P(e) ? I(e) : window).visualViewport,
							a = !R() && n,
							l = (o.left + (a && s ? s.offsetLeft : 0)) / r,
							c = (o.top + (a && s ? s.offsetTop : 0)) / i,
							f = o.width / r,
							u = o.height / i;
						return {
							width: f,
							height: u,
							top: c,
							right: l + f,
							bottom: c + u,
							left: l,
							x: l,
							y: c,
						};
					}
					function W(e) {
						var t = Y(e),
							n = e.offsetWidth,
							o = e.offsetHeight;
						return (
							Math.abs(t.width - n) <= 1 && (n = t.width),
							Math.abs(t.height - o) <= 1 && (o = t.height),
							{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
						);
					}
					function N(e, t) {
						var n = t.getRootNode && t.getRootNode();
						if (e.contains(t)) return !0;
						if (n && _(n)) {
							var o = t;
							do {
								if (o && e.isSameNode(o)) return !0;
								o = o.parentNode || o.host;
							} while (o);
						}
						return !1;
					}
					function V(e) {
						return I(e).getComputedStyle(e);
					}
					function q(e) {
						return ['table', 'td', 'th'].indexOf(C(e)) >= 0;
					}
					function F(e) {
						return ((P(e) ? e.ownerDocument : e.document) || window.document)
							.documentElement;
					}
					function K(e) {
						return 'html' === C(e)
							? e
							: e.assignedSlot ||
									e.parentNode ||
									(_(e) ? e.host : null) ||
									F(e);
					}
					function $(e) {
						return A(e) && 'fixed' !== V(e).position ? e.offsetParent : null;
					}
					function U(e) {
						for (
							var t = I(e), n = $(e);
							n && q(n) && 'static' === V(n).position;

						)
							n = $(n);
						return n &&
							('html' === C(n) ||
								('body' === C(n) && 'static' === V(n).position))
							? t
							: n ||
									(function (e) {
										var t = /firefox/i.test(B());
										if (
											/Trident/i.test(B()) &&
											A(e) &&
											'fixed' === V(e).position
										)
											return null;
										var n = K(e);
										for (
											_(n) && (n = n.host);
											A(n) && ['html', 'body'].indexOf(C(n)) < 0;

										) {
											var o = V(n);
											if (
												'none' !== o.transform ||
												'none' !== o.perspective ||
												'paint' === o.contain ||
												-1 !==
													['transform', 'perspective'].indexOf(o.willChange) ||
												(t && 'filter' === o.willChange) ||
												(t && o.filter && 'none' !== o.filter)
											)
												return n;
											n = n.parentNode;
										}
										return null;
									})(e) ||
									t;
					}
					function z(e) {
						return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
					}
					function X(e, t, n) {
						return H(e, k(t, n));
					}
					function J(e) {
						return Object.assign(
							{},
							{ top: 0, right: 0, bottom: 0, left: 0 },
							e,
						);
					}
					function Z(e, t) {
						return t.reduce(function (t, n) {
							return (t[n] = e), t;
						}, {});
					}
					const G = {
						name: 'arrow',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t,
								n = e.state,
								a = e.name,
								c = e.options,
								f = n.elements.arrow,
								u = n.modifiersData.popperOffsets,
								p = j(n.placement),
								d = z(p),
								h = [s, i].indexOf(p) >= 0 ? 'height' : 'width';
							if (f && u) {
								var v = (function (e, t) {
										return J(
											'number' !=
												typeof (e =
													'function' == typeof e
														? e(
																Object.assign({}, t.rects, {
																	placement: t.placement,
																}),
															)
														: e)
												? e
												: Z(e, l),
										);
									})(c.padding, n),
									g = W(f),
									m = 'y' === d ? o : s,
									y = 'y' === d ? r : i,
									w =
										n.rects.reference[h] +
										n.rects.reference[d] -
										u[d] -
										n.rects.popper[h],
									b = u[d] - n.rects.reference[d],
									x = U(f),
									E = x
										? 'y' === d
											? x.clientHeight || 0
											: x.clientWidth || 0
										: 0,
									O = w / 2 - b / 2,
									L = v[m],
									T = E - g[h] - v[y],
									S = E / 2 - g[h] / 2 + O,
									C = X(L, S, T),
									I = d;
								n.modifiersData[a] =
									(((t = {})[I] = C), (t.centerOffset = C - S), t);
							}
						},
						effect: function (e) {
							var t = e.state,
								n = e.options.element,
								o = void 0 === n ? '[data-popper-arrow]' : n;
							null != o &&
								('string' != typeof o ||
									(o = t.elements.popper.querySelector(o))) &&
								N(t.elements.popper, o) &&
								(t.elements.arrow = o);
						},
						requires: ['popperOffsets'],
						requiresIfExists: ['preventOverflow'],
					};
					function Q(e) {
						return e.split('-')[1];
					}
					var ee = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
					function te(e) {
						var t,
							n = e.popper,
							a = e.popperRect,
							l = e.placement,
							c = e.variation,
							u = e.offsets,
							p = e.position,
							d = e.gpuAcceleration,
							h = e.adaptive,
							v = e.roundOffsets,
							g = e.isFixed,
							m = u.x,
							y = void 0 === m ? 0 : m,
							w = u.y,
							b = void 0 === w ? 0 : w,
							x = 'function' == typeof v ? v({ x: y, y: b }) : { x: y, y: b };
						(y = x.x), (b = x.y);
						var E = u.hasOwnProperty('x'),
							O = u.hasOwnProperty('y'),
							L = s,
							T = o,
							S = window;
						if (h) {
							var C = U(n),
								P = 'clientHeight',
								A = 'clientWidth';
							if (
								(C === I(n) &&
									'static' !== V((C = F(n))).position &&
									'absolute' === p &&
									((P = 'scrollHeight'), (A = 'scrollWidth')),
								l === o || ((l === s || l === i) && c === f))
							)
								(T = r),
									(b -=
										(g && C === S && S.visualViewport
											? S.visualViewport.height
											: C[P]) - a.height),
									(b *= d ? 1 : -1);
							if (l === s || ((l === o || l === r) && c === f))
								(L = i),
									(y -=
										(g && C === S && S.visualViewport
											? S.visualViewport.width
											: C[A]) - a.width),
									(y *= d ? 1 : -1);
						}
						var _,
							M = Object.assign({ position: p }, h && ee),
							j =
								!0 === v
									? (function (e, t) {
											var n = e.x,
												o = e.y,
												r = t.devicePixelRatio || 1;
											return { x: D(n * r) / r || 0, y: D(o * r) / r || 0 };
										})({ x: y, y: b }, I(n))
									: { x: y, y: b };
						return (
							(y = j.x),
							(b = j.y),
							d
								? Object.assign(
										{},
										M,
										(((_ = {})[T] = O ? '0' : ''),
										(_[L] = E ? '0' : ''),
										(_.transform =
											(S.devicePixelRatio || 1) <= 1
												? 'translate(' + y + 'px, ' + b + 'px)'
												: 'translate3d(' + y + 'px, ' + b + 'px, 0)'),
										_),
									)
								: Object.assign(
										{},
										M,
										(((t = {})[T] = O ? b + 'px' : ''),
										(t[L] = E ? y + 'px' : ''),
										(t.transform = ''),
										t),
									)
						);
					}
					const ne = {
						name: 'computeStyles',
						enabled: !0,
						phase: 'beforeWrite',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = n.gpuAcceleration,
								r = void 0 === o || o,
								i = n.adaptive,
								s = void 0 === i || i,
								a = n.roundOffsets,
								l = void 0 === a || a,
								c = {
									placement: j(t.placement),
									variation: Q(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r,
									isFixed: 'fixed' === t.options.strategy,
								};
							null != t.modifiersData.popperOffsets &&
								(t.styles.popper = Object.assign(
									{},
									t.styles.popper,
									te(
										Object.assign({}, c, {
											offsets: t.modifiersData.popperOffsets,
											position: t.options.strategy,
											adaptive: s,
											roundOffsets: l,
										}),
									),
								)),
								null != t.modifiersData.arrow &&
									(t.styles.arrow = Object.assign(
										{},
										t.styles.arrow,
										te(
											Object.assign({}, c, {
												offsets: t.modifiersData.arrow,
												position: 'absolute',
												adaptive: !1,
												roundOffsets: l,
											}),
										),
									)),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-placement': t.placement,
								}));
						},
						data: {},
					};
					var oe = { passive: !0 };
					const re = {
						name: 'eventListeners',
						enabled: !0,
						phase: 'write',
						fn: function () {},
						effect: function (e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								r = o.scroll,
								i = void 0 === r || r,
								s = o.resize,
								a = void 0 === s || s,
								l = I(t.elements.popper),
								c = [].concat(
									t.scrollParents.reference,
									t.scrollParents.popper,
								);
							return (
								i &&
									c.forEach(function (e) {
										e.addEventListener('scroll', n.update, oe);
									}),
								a && l.addEventListener('resize', n.update, oe),
								function () {
									i &&
										c.forEach(function (e) {
											e.removeEventListener('scroll', n.update, oe);
										}),
										a && l.removeEventListener('resize', n.update, oe);
								}
							);
						},
						data: {},
					};
					var ie = {
						left: 'right',
						right: 'left',
						bottom: 'top',
						top: 'bottom',
					};
					function se(e) {
						return e.replace(/left|right|bottom|top/g, function (e) {
							return ie[e];
						});
					}
					var ae = { start: 'end', end: 'start' };
					function le(e) {
						return e.replace(/start|end/g, function (e) {
							return ae[e];
						});
					}
					function ce(e) {
						var t = I(e);
						return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
					}
					function fe(e) {
						return Y(F(e)).left + ce(e).scrollLeft;
					}
					function ue(e) {
						var t = V(e),
							n = t.overflow,
							o = t.overflowX,
							r = t.overflowY;
						return /auto|scroll|overlay|hidden/.test(n + r + o);
					}
					function pe(e) {
						return ['html', 'body', '#document'].indexOf(C(e)) >= 0
							? e.ownerDocument.body
							: A(e) && ue(e)
								? e
								: pe(K(e));
					}
					function de(e, t) {
						var n;
						void 0 === t && (t = []);
						var o = pe(e),
							r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
							i = I(o),
							s = r ? [i].concat(i.visualViewport || [], ue(o) ? o : []) : o,
							a = t.concat(s);
						return r ? a : a.concat(de(K(s)));
					}
					function he(e) {
						return Object.assign({}, e, {
							left: e.x,
							top: e.y,
							right: e.x + e.width,
							bottom: e.y + e.height,
						});
					}
					function ve(e, t, n) {
						return t === p
							? he(
									(function (e, t) {
										var n = I(e),
											o = F(e),
											r = n.visualViewport,
											i = o.clientWidth,
											s = o.clientHeight,
											a = 0,
											l = 0;
										if (r) {
											(i = r.width), (s = r.height);
											var c = R();
											(c || (!c && 'fixed' === t)) &&
												((a = r.offsetLeft), (l = r.offsetTop));
										}
										return { width: i, height: s, x: a + fe(e), y: l };
									})(e, n),
								)
							: P(t)
								? (function (e, t) {
										var n = Y(e, !1, 'fixed' === t);
										return (
											(n.top = n.top + e.clientTop),
											(n.left = n.left + e.clientLeft),
											(n.bottom = n.top + e.clientHeight),
											(n.right = n.left + e.clientWidth),
											(n.width = e.clientWidth),
											(n.height = e.clientHeight),
											(n.x = n.left),
											(n.y = n.top),
											n
										);
									})(t, n)
								: he(
										(function (e) {
											var t,
												n = F(e),
												o = ce(e),
												r = null == (t = e.ownerDocument) ? void 0 : t.body,
												i = H(
													n.scrollWidth,
													n.clientWidth,
													r ? r.scrollWidth : 0,
													r ? r.clientWidth : 0,
												),
												s = H(
													n.scrollHeight,
													n.clientHeight,
													r ? r.scrollHeight : 0,
													r ? r.clientHeight : 0,
												),
												a = -o.scrollLeft + fe(e),
												l = -o.scrollTop;
											return (
												'rtl' === V(r || n).direction &&
													(a += H(n.clientWidth, r ? r.clientWidth : 0) - i),
												{ width: i, height: s, x: a, y: l }
											);
										})(F(e)),
									);
					}
					function ge(e, t, n, o) {
						var r =
								'clippingParents' === t
									? (function (e) {
											var t = de(K(e)),
												n =
													['absolute', 'fixed'].indexOf(V(e).position) >= 0 &&
													A(e)
														? U(e)
														: e;
											return P(n)
												? t.filter(function (e) {
														return P(e) && N(e, n) && 'body' !== C(e);
													})
												: [];
										})(e)
									: [].concat(t),
							i = [].concat(r, [n]),
							s = i[0],
							a = i.reduce(
								function (t, n) {
									var r = ve(e, n, o);
									return (
										(t.top = H(r.top, t.top)),
										(t.right = k(r.right, t.right)),
										(t.bottom = k(r.bottom, t.bottom)),
										(t.left = H(r.left, t.left)),
										t
									);
								},
								ve(e, s, o),
							);
						return (
							(a.width = a.right - a.left),
							(a.height = a.bottom - a.top),
							(a.x = a.left),
							(a.y = a.top),
							a
						);
					}
					function me(e) {
						var t,
							n = e.reference,
							a = e.element,
							l = e.placement,
							u = l ? j(l) : null,
							p = l ? Q(l) : null,
							d = n.x + n.width / 2 - a.width / 2,
							h = n.y + n.height / 2 - a.height / 2;
						switch (u) {
							case o:
								t = { x: d, y: n.y - a.height };
								break;
							case r:
								t = { x: d, y: n.y + n.height };
								break;
							case i:
								t = { x: n.x + n.width, y: h };
								break;
							case s:
								t = { x: n.x - a.width, y: h };
								break;
							default:
								t = { x: n.x, y: n.y };
						}
						var v = u ? z(u) : null;
						if (null != v) {
							var g = 'y' === v ? 'height' : 'width';
							switch (p) {
								case c:
									t[v] = t[v] - (n[g] / 2 - a[g] / 2);
									break;
								case f:
									t[v] = t[v] + (n[g] / 2 - a[g] / 2);
							}
						}
						return t;
					}
					function ye(e, t) {
						void 0 === t && (t = {});
						var n = t,
							s = n.placement,
							a = void 0 === s ? e.placement : s,
							c = n.strategy,
							f = void 0 === c ? e.strategy : c,
							v = n.boundary,
							g = void 0 === v ? u : v,
							m = n.rootBoundary,
							y = void 0 === m ? p : m,
							w = n.elementContext,
							b = void 0 === w ? d : w,
							x = n.altBoundary,
							E = void 0 !== x && x,
							O = n.padding,
							L = void 0 === O ? 0 : O,
							T = J('number' != typeof L ? L : Z(L, l)),
							S = b === d ? h : d,
							C = e.rects.popper,
							I = e.elements[E ? S : b],
							A = ge(
								P(I) ? I : I.contextElement || F(e.elements.popper),
								g,
								y,
								f,
							),
							_ = Y(e.elements.reference),
							M = me({
								reference: _,
								element: C,
								strategy: 'absolute',
								placement: a,
							}),
							j = he(Object.assign({}, C, M)),
							H = b === d ? j : _,
							k = {
								top: A.top - H.top + T.top,
								bottom: H.bottom - A.bottom + T.bottom,
								left: A.left - H.left + T.left,
								right: H.right - A.right + T.right,
							},
							D = e.modifiersData.offset;
						if (b === d && D) {
							var B = D[a];
							Object.keys(k).forEach(function (e) {
								var t = [i, r].indexOf(e) >= 0 ? 1 : -1,
									n = [o, r].indexOf(e) >= 0 ? 'y' : 'x';
								k[e] += B[n] * t;
							});
						}
						return k;
					}
					const we = {
						name: 'flip',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								f = e.name;
							if (!t.modifiersData[f]._skip) {
								for (
									var u = n.mainAxis,
										p = void 0 === u || u,
										d = n.altAxis,
										h = void 0 === d || d,
										m = n.fallbackPlacements,
										y = n.padding,
										w = n.boundary,
										b = n.rootBoundary,
										x = n.altBoundary,
										E = n.flipVariations,
										O = void 0 === E || E,
										L = n.allowedAutoPlacements,
										T = t.options.placement,
										S = j(T),
										C =
											m ||
											(S === T || !O
												? [se(T)]
												: (function (e) {
														if (j(e) === a) return [];
														var t = se(e);
														return [le(e), t, le(t)];
													})(T)),
										I = [T].concat(C).reduce(function (e, n) {
											return e.concat(
												j(n) === a
													? (function (e, t) {
															void 0 === t && (t = {});
															var n = t,
																o = n.placement,
																r = n.boundary,
																i = n.rootBoundary,
																s = n.padding,
																a = n.flipVariations,
																c = n.allowedAutoPlacements,
																f = void 0 === c ? g : c,
																u = Q(o),
																p = u
																	? a
																		? v
																		: v.filter(function (e) {
																				return Q(e) === u;
																			})
																	: l,
																d = p.filter(function (e) {
																	return f.indexOf(e) >= 0;
																});
															0 === d.length && (d = p);
															var h = d.reduce(function (t, n) {
																return (
																	(t[n] = ye(e, {
																		placement: n,
																		boundary: r,
																		rootBoundary: i,
																		padding: s,
																	})[j(n)]),
																	t
																);
															}, {});
															return Object.keys(h).sort(function (e, t) {
																return h[e] - h[t];
															});
														})(t, {
															placement: n,
															boundary: w,
															rootBoundary: b,
															padding: y,
															flipVariations: O,
															allowedAutoPlacements: L,
														})
													: n,
											);
										}, []),
										P = t.rects.reference,
										A = t.rects.popper,
										_ = new Map(),
										M = !0,
										H = I[0],
										k = 0;
									k < I.length;
									k++
								) {
									var D = I[k],
										B = j(D),
										R = Q(D) === c,
										Y = [o, r].indexOf(B) >= 0,
										W = Y ? 'width' : 'height',
										N = ye(t, {
											placement: D,
											boundary: w,
											rootBoundary: b,
											altBoundary: x,
											padding: y,
										}),
										V = Y ? (R ? i : s) : R ? r : o;
									P[W] > A[W] && (V = se(V));
									var q = se(V),
										F = [];
									if (
										(p && F.push(N[B] <= 0),
										h && F.push(N[V] <= 0, N[q] <= 0),
										F.every(function (e) {
											return e;
										}))
									) {
										(H = D), (M = !1);
										break;
									}
									_.set(D, F);
								}
								if (M)
									for (
										var K = function (e) {
												var t = I.find(function (t) {
													var n = _.get(t);
													if (n)
														return n.slice(0, e).every(function (e) {
															return e;
														});
												});
												if (t) return (H = t), 'break';
											},
											$ = O ? 3 : 1;
										$ > 0;
										$--
									) {
										if ('break' === K($)) break;
									}
								t.placement !== H &&
									((t.modifiersData[f]._skip = !0),
									(t.placement = H),
									(t.reset = !0));
							}
						},
						requiresIfExists: ['offset'],
						data: { _skip: !1 },
					};
					function be(e, t, n) {
						return (
							void 0 === n && (n = { x: 0, y: 0 }),
							{
								top: e.top - t.height - n.y,
								right: e.right - t.width + n.x,
								bottom: e.bottom - t.height + n.y,
								left: e.left - t.width - n.x,
							}
						);
					}
					function xe(e) {
						return [o, i, r, s].some(function (t) {
							return e[t] >= 0;
						});
					}
					const Ee = {
						name: 'hide',
						enabled: !0,
						phase: 'main',
						requiresIfExists: ['preventOverflow'],
						fn: function (e) {
							var t = e.state,
								n = e.name,
								o = t.rects.reference,
								r = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = ye(t, { elementContext: 'reference' }),
								a = ye(t, { altBoundary: !0 }),
								l = be(s, o),
								c = be(a, r, i),
								f = xe(l),
								u = xe(c);
							(t.modifiersData[n] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: c,
								isReferenceHidden: f,
								hasPopperEscaped: u,
							}),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-reference-hidden': f,
									'data-popper-escaped': u,
								}));
						},
					};
					const Oe = {
						name: 'offset',
						enabled: !0,
						phase: 'main',
						requires: ['popperOffsets'],
						fn: function (e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								a = n.offset,
								l = void 0 === a ? [0, 0] : a,
								c = g.reduce(function (e, n) {
									return (
										(e[n] = (function (e, t, n) {
											var r = j(e),
												a = [s, o].indexOf(r) >= 0 ? -1 : 1,
												l =
													'function' == typeof n
														? n(Object.assign({}, t, { placement: e }))
														: n,
												c = l[0],
												f = l[1];
											return (
												(c = c || 0),
												(f = (f || 0) * a),
												[s, i].indexOf(r) >= 0 ? { x: f, y: c } : { x: c, y: f }
											);
										})(n, t.rects, l)),
										e
									);
								}, {}),
								f = c[t.placement],
								u = f.x,
								p = f.y;
							null != t.modifiersData.popperOffsets &&
								((t.modifiersData.popperOffsets.x += u),
								(t.modifiersData.popperOffsets.y += p)),
								(t.modifiersData[r] = c);
						},
					};
					const Le = {
						name: 'popperOffsets',
						enabled: !0,
						phase: 'read',
						fn: function (e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = me({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: 'absolute',
								placement: t.placement,
							});
						},
						data: {},
					};
					const Te = {
						name: 'preventOverflow',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								a = e.name,
								l = n.mainAxis,
								f = void 0 === l || l,
								u = n.altAxis,
								p = void 0 !== u && u,
								d = n.boundary,
								h = n.rootBoundary,
								v = n.altBoundary,
								g = n.padding,
								m = n.tether,
								y = void 0 === m || m,
								w = n.tetherOffset,
								b = void 0 === w ? 0 : w,
								x = ye(t, {
									boundary: d,
									rootBoundary: h,
									padding: g,
									altBoundary: v,
								}),
								E = j(t.placement),
								O = Q(t.placement),
								L = !O,
								T = z(E),
								S = 'x' === T ? 'y' : 'x',
								C = t.modifiersData.popperOffsets,
								I = t.rects.reference,
								P = t.rects.popper,
								A =
									'function' == typeof b
										? b(Object.assign({}, t.rects, { placement: t.placement }))
										: b,
								_ =
									'number' == typeof A
										? { mainAxis: A, altAxis: A }
										: Object.assign({ mainAxis: 0, altAxis: 0 }, A),
								M = t.modifiersData.offset
									? t.modifiersData.offset[t.placement]
									: null,
								D = { x: 0, y: 0 };
							if (C) {
								if (f) {
									var B,
										R = 'y' === T ? o : s,
										Y = 'y' === T ? r : i,
										N = 'y' === T ? 'height' : 'width',
										V = C[T],
										q = V + x[R],
										F = V - x[Y],
										K = y ? -P[N] / 2 : 0,
										$ = O === c ? I[N] : P[N],
										J = O === c ? -P[N] : -I[N],
										Z = t.elements.arrow,
										G = y && Z ? W(Z) : { width: 0, height: 0 },
										ee = t.modifiersData['arrow#persistent']
											? t.modifiersData['arrow#persistent'].padding
											: { top: 0, right: 0, bottom: 0, left: 0 },
										te = ee[R],
										ne = ee[Y],
										oe = X(0, I[N], G[N]),
										re = L
											? I[N] / 2 - K - oe - te - _.mainAxis
											: $ - oe - te - _.mainAxis,
										ie = L
											? -I[N] / 2 + K + oe + ne + _.mainAxis
											: J + oe + ne + _.mainAxis,
										se = t.elements.arrow && U(t.elements.arrow),
										ae = se
											? 'y' === T
												? se.clientTop || 0
												: se.clientLeft || 0
											: 0,
										le = null != (B = null == M ? void 0 : M[T]) ? B : 0,
										ce = V + ie - le,
										fe = X(y ? k(q, V + re - le - ae) : q, V, y ? H(F, ce) : F);
									(C[T] = fe), (D[T] = fe - V);
								}
								if (p) {
									var ue,
										pe = 'x' === T ? o : s,
										de = 'x' === T ? r : i,
										he = C[S],
										ve = 'y' === S ? 'height' : 'width',
										ge = he + x[pe],
										me = he - x[de],
										we = -1 !== [o, s].indexOf(E),
										be = null != (ue = null == M ? void 0 : M[S]) ? ue : 0,
										xe = we ? ge : he - I[ve] - P[ve] - be + _.altAxis,
										Ee = we ? he + I[ve] + P[ve] - be - _.altAxis : me,
										Oe =
											y && we
												? (function (e, t, n) {
														var o = X(e, t, n);
														return o > n ? n : o;
													})(xe, he, Ee)
												: X(y ? xe : ge, he, y ? Ee : me);
									(C[S] = Oe), (D[S] = Oe - he);
								}
								t.modifiersData[a] = D;
							}
						},
						requiresIfExists: ['offset'],
					};
					function Se(e, t, n) {
						void 0 === n && (n = !1);
						var o,
							r,
							i = A(t),
							s =
								A(t) &&
								(function (e) {
									var t = e.getBoundingClientRect(),
										n = D(t.width) / e.offsetWidth || 1,
										o = D(t.height) / e.offsetHeight || 1;
									return 1 !== n || 1 !== o;
								})(t),
							a = F(t),
							l = Y(e, s, n),
							c = { scrollLeft: 0, scrollTop: 0 },
							f = { x: 0, y: 0 };
						return (
							(i || (!i && !n)) &&
								(('body' !== C(t) || ue(a)) &&
									(c =
										(o = t) !== I(o) && A(o)
											? {
													scrollLeft: (r = o).scrollLeft,
													scrollTop: r.scrollTop,
												}
											: ce(o)),
								A(t)
									? (((f = Y(t, !0)).x += t.clientLeft), (f.y += t.clientTop))
									: a && (f.x = fe(a))),
							{
								x: l.left + c.scrollLeft - f.x,
								y: l.top + c.scrollTop - f.y,
								width: l.width,
								height: l.height,
							}
						);
					}
					function Ce(e) {
						var t = new Map(),
							n = new Set(),
							o = [];
						function r(e) {
							n.add(e.name),
								[]
									.concat(e.requires || [], e.requiresIfExists || [])
									.forEach(function (e) {
										if (!n.has(e)) {
											var o = t.get(e);
											o && r(o);
										}
									}),
								o.push(e);
						}
						return (
							e.forEach(function (e) {
								t.set(e.name, e);
							}),
							e.forEach(function (e) {
								n.has(e.name) || r(e);
							}),
							o
						);
					}
					var Ie = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
					function Pe() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
							t[n] = arguments[n];
						return !t.some(function (e) {
							return !(e && 'function' == typeof e.getBoundingClientRect);
						});
					}
					function Ae(e) {
						void 0 === e && (e = {});
						var t = e,
							n = t.defaultModifiers,
							o = void 0 === n ? [] : n,
							r = t.defaultOptions,
							i = void 0 === r ? Ie : r;
						return function (e, t, n) {
							void 0 === n && (n = i);
							var r,
								s,
								a = {
									placement: 'bottom',
									orderedModifiers: [],
									options: Object.assign({}, Ie, i),
									modifiersData: {},
									elements: { reference: e, popper: t },
									attributes: {},
									styles: {},
								},
								l = [],
								c = !1,
								f = {
									state: a,
									setOptions: function (n) {
										var r = 'function' == typeof n ? n(a.options) : n;
										u(),
											(a.options = Object.assign({}, i, a.options, r)),
											(a.scrollParents = {
												reference: P(e)
													? de(e)
													: e.contextElement
														? de(e.contextElement)
														: [],
												popper: de(t),
											});
										var s,
											c,
											p = (function (e) {
												var t = Ce(e);
												return S.reduce(function (e, n) {
													return e.concat(
														t.filter(function (e) {
															return e.phase === n;
														}),
													);
												}, []);
											})(
												((s = [].concat(o, a.options.modifiers)),
												(c = s.reduce(function (e, t) {
													var n = e[t.name];
													return (
														(e[t.name] = n
															? Object.assign({}, n, t, {
																	options: Object.assign(
																		{},
																		n.options,
																		t.options,
																	),
																	data: Object.assign({}, n.data, t.data),
																})
															: t),
														e
													);
												}, {})),
												Object.keys(c).map(function (e) {
													return c[e];
												})),
											);
										return (
											(a.orderedModifiers = p.filter(function (e) {
												return e.enabled;
											})),
											a.orderedModifiers.forEach(function (e) {
												var t = e.name,
													n = e.options,
													o = void 0 === n ? {} : n,
													r = e.effect;
												if ('function' == typeof r) {
													var i = r({
															state: a,
															name: t,
															instance: f,
															options: o,
														}),
														s = function () {};
													l.push(i || s);
												}
											}),
											f.update()
										);
									},
									forceUpdate: function () {
										if (!c) {
											var e = a.elements,
												t = e.reference,
												n = e.popper;
											if (Pe(t, n)) {
												(a.rects = {
													reference: Se(
														t,
														U(n),
														'fixed' === a.options.strategy,
													),
													popper: W(n),
												}),
													(a.reset = !1),
													(a.placement = a.options.placement),
													a.orderedModifiers.forEach(function (e) {
														return (a.modifiersData[e.name] = Object.assign(
															{},
															e.data,
														));
													});
												for (var o = 0; o < a.orderedModifiers.length; o++)
													if (!0 !== a.reset) {
														var r = a.orderedModifiers[o],
															i = r.fn,
															s = r.options,
															l = void 0 === s ? {} : s,
															u = r.name;
														'function' == typeof i &&
															(a =
																i({
																	state: a,
																	options: l,
																	name: u,
																	instance: f,
																}) || a);
													} else (a.reset = !1), (o = -1);
											}
										}
									},
									update:
										((r = function () {
											return new Promise(function (e) {
												f.forceUpdate(), e(a);
											});
										}),
										function () {
											return (
												s ||
													(s = new Promise(function (e) {
														Promise.resolve().then(function () {
															(s = void 0), e(r());
														});
													})),
												s
											);
										}),
									destroy: function () {
										u(), (c = !0);
									},
								};
							if (!Pe(e, t)) return f;
							function u() {
								l.forEach(function (e) {
									return e();
								}),
									(l = []);
							}
							return (
								f.setOptions(n).then(function (e) {
									!c && n.onFirstUpdate && n.onFirstUpdate(e);
								}),
								f
							);
						};
					}
					var _e = Ae(),
						Me = Ae({ defaultModifiers: [re, Le, ne, M, Oe, we, Te, G, Ee] }),
						je = Ae({ defaultModifiers: [re, Le, ne, M] });
				},
				223: (e, t) => {
					Object.defineProperty(t, '__esModule', { value: !0 }),
						(t.BREAKPOINTS =
							t.COMBO_BOX_ACCESSIBILITY_KEY_SET =
							t.SELECT_ACCESSIBILITY_KEY_SET =
							t.TABS_ACCESSIBILITY_KEY_SET =
							t.OVERLAY_ACCESSIBILITY_KEY_SET =
							t.DROPDOWN_ACCESSIBILITY_KEY_SET =
							t.POSITIONS =
								void 0),
						(t.POSITIONS = {
							auto: 'auto',
							'auto-start': 'auto-start',
							'auto-end': 'auto-end',
							top: 'top',
							'top-left': 'top-start',
							'top-right': 'top-end',
							bottom: 'bottom',
							'bottom-left': 'bottom-start',
							'bottom-right': 'bottom-end',
							right: 'right',
							'right-start': 'right-start',
							'right-end': 'right-end',
							left: 'left',
							'left-start': 'left-start',
							'left-end': 'left-end',
						}),
						(t.DROPDOWN_ACCESSIBILITY_KEY_SET = [
							'Escape',
							'ArrowUp',
							'ArrowDown',
							'ArrowRight',
							'ArrowLeft',
							'Home',
							'End',
							'Enter',
						]),
						(t.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
						(t.TABS_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
						]),
						(t.SELECT_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
							'Space',
							'Tab',
						]),
						(t.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
						]),
						(t.BREAKPOINTS = {
							xs: 0,
							sm: 640,
							md: 768,
							lg: 1024,
							xl: 1280,
							'2xl': 1536,
						});
				},
				961: (e, t) => {
					Object.defineProperty(t, '__esModule', { value: !0 });
					var n = (function () {
						function e(e, t, n) {
							(this.el = e),
								(this.options = t),
								(this.events = n),
								(this.el = e),
								(this.options = t),
								(this.events = {});
						}
						return (
							(e.prototype.createCollection = function (e, t) {
								var n;
								e.push({
									id:
										(null === (n = null == t ? void 0 : t.el) || void 0 === n
											? void 0
											: n.id) || e.length + 1,
									element: t,
								});
							}),
							(e.prototype.fireEvent = function (e, t) {
								if ((void 0 === t && (t = null), this.events.hasOwnProperty(e)))
									return this.events[e](t);
							}),
							(e.prototype.on = function (e, t) {
								this.events[e] = t;
							}),
							e
						);
					})();
					t.default = n;
				},
				969: function (e, t, n) {
					/*
					 * HSTooltip
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						r =
							(this && this.__extends) ||
							((o = function (e, t) {
								return (
									(o =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (e, t) {
												e.__proto__ = t;
											}) ||
										function (e, t) {
											for (var n in t)
												Object.prototype.hasOwnProperty.call(t, n) &&
													(e[n] = t[n]);
										}),
									o(e, t)
								);
							}),
							function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Class extends value ' +
											String(t) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = e;
								}
								o(e, t),
									(e.prototype =
										null === t
											? Object.create(t)
											: ((n.prototype = t.prototype), new n()));
							}),
						i =
							(this && this.__assign) ||
							function () {
								return (
									(i =
										Object.assign ||
										function (e) {
											for (var t, n = 1, o = arguments.length; n < o; n++)
												for (var r in (t = arguments[n]))
													Object.prototype.hasOwnProperty.call(t, r) &&
														(e[r] = t[r]);
											return e;
										}),
									i.apply(this, arguments)
								);
							},
						s =
							(this && this.__spreadArray) ||
							function (e, t, n) {
								if (n || 2 === arguments.length)
									for (var o, r = 0, i = t.length; r < i; r++)
										(!o && r in t) ||
											(o || (o = Array.prototype.slice.call(t, 0, r)),
											(o[r] = t[r]));
								return e.concat(o || Array.prototype.slice.call(t));
							},
						a =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, '__esModule', { value: !0 });
					var l = n(170),
						c = n(292),
						f = a(n(961)),
						u = n(223),
						p = (function (e) {
							function t(t, n, o) {
								var r = e.call(this, t, n, o) || this;
								return (
									r.el &&
										((r.toggle =
											r.el.querySelector('.hs-tooltip-toggle') || r.el),
										(r.content = r.el.querySelector('.hs-tooltip-content')),
										(r.eventMode =
											(0, c.getClassProperty)(r.el, '--trigger') || 'hover'),
										(r.preventPopper = (0, c.getClassProperty)(
											r.el,
											'--prevent-popper',
											'false',
										)),
										(r.placement = (0, c.getClassProperty)(
											r.el,
											'--placement',
										)),
										(r.strategy = (0, c.getClassProperty)(r.el, '--strategy')),
										(r.scope =
											(0, c.getClassProperty)(r.el, '--scope') || 'parent')),
									r.el && r.toggle && r.content && r.init(),
									r
								);
							}
							return (
								r(t, e),
								(t.prototype.toggleClick = function () {
									this.click();
								}),
								(t.prototype.toggleFocus = function () {
									this.focus();
								}),
								(t.prototype.toggleMouseEnter = function () {
									this.enter();
								}),
								(t.prototype.toggleMouseLeave = function () {
									this.leave();
								}),
								(t.prototype.toggleHandle = function () {
									this.hide(),
										this.toggle.removeEventListener(
											'click',
											this.onToggleHandleListener,
											!0,
										),
										this.toggle.removeEventListener(
											'blur',
											this.onToggleHandleListener,
											!0,
										);
								}),
								(t.prototype.init = function () {
									var e = this;
									this.createCollection(window.$hsTooltipCollection, this),
										'click' === this.eventMode
											? ((this.onToggleClickListener = function () {
													return e.toggleClick();
												}),
												this.toggle.addEventListener(
													'click',
													this.onToggleClickListener,
												))
											: 'focus' === this.eventMode
												? ((this.onToggleFocusListener = function () {
														return e.toggleFocus();
													}),
													this.toggle.addEventListener(
														'click',
														this.onToggleFocusListener,
													))
												: 'hover' === this.eventMode &&
													((this.onToggleMouseEnterListener = function () {
														return e.toggleMouseEnter();
													}),
													(this.onToggleMouseLeaveListener = function () {
														return e.toggleMouseLeave();
													}),
													this.toggle.addEventListener(
														'mouseenter',
														this.onToggleMouseEnterListener,
													),
													this.toggle.addEventListener(
														'mouseleave',
														this.onToggleMouseLeaveListener,
													)),
										'false' === this.preventPopper && this.buildPopper();
								}),
								(t.prototype.enter = function () {
									this._show();
								}),
								(t.prototype.leave = function () {
									this.hide();
								}),
								(t.prototype.click = function () {
									var e = this;
									if (this.el.classList.contains('show')) return !1;
									this._show(),
										(this.onToggleHandleListener = function () {
											setTimeout(function () {
												return e.toggleHandle();
											});
										}),
										this.toggle.addEventListener(
											'click',
											this.onToggleHandleListener,
											!0,
										),
										this.toggle.addEventListener(
											'blur',
											this.onToggleHandleListener,
											!0,
										);
								}),
								(t.prototype.focus = function () {
									var e = this;
									this._show();
									var t = function () {
										e.hide(), e.toggle.removeEventListener('blur', t, !0);
									};
									this.toggle.addEventListener('blur', t, !0);
								}),
								(t.prototype.buildPopper = function () {
									'window' === this.scope &&
										document.body.appendChild(this.content),
										(this.popperInstance = (0, l.createPopper)(
											this.toggle,
											this.content,
											{
												placement: u.POSITIONS[this.placement] || 'top',
												strategy: this.strategy || 'fixed',
												modifiers: [
													{ name: 'offset', options: { offset: [0, 5] } },
												],
											},
										));
								}),
								(t.prototype._show = function () {
									var e = this;
									this.content.classList.remove('hidden'),
										'window' === this.scope &&
											this.content.classList.add('show'),
										'false' === this.preventPopper &&
											(this.popperInstance.setOptions(function (e) {
												return i(i({}, e), {
													modifiers: s(
														s([], e.modifiers, !0),
														[{ name: 'eventListeners', enabled: !0 }],
														!1,
													),
												});
											}),
											this.popperInstance.update()),
										setTimeout(function () {
											e.el.classList.add('show'),
												e.fireEvent('show', e.el),
												(0, c.dispatch)('show.hs.tooltip', e.el, e.el);
										});
								}),
								(t.prototype.show = function () {
									switch (this.eventMode) {
										case 'click':
											this.click();
											break;
										case 'focus':
											this.focus();
											break;
										default:
											this.enter();
									}
									this.toggle.focus(), (this.toggle.style.outline = 'none');
								}),
								(t.prototype.hide = function () {
									var e = this;
									this.el.classList.remove('show'),
										'window' === this.scope &&
											this.content.classList.remove('show'),
										'false' === this.preventPopper &&
											this.popperInstance.setOptions(function (e) {
												return i(i({}, e), {
													modifiers: s(
														s([], e.modifiers, !0),
														[{ name: 'eventListeners', enabled: !1 }],
														!1,
													),
												});
											}),
										this.fireEvent('hide', this.el),
										(0, c.dispatch)('hide.hs.tooltip', this.el, this.el),
										(0, c.afterTransition)(this.content, function () {
											if (e.el.classList.contains('show')) return !1;
											e.content.classList.add('hidden'),
												(e.toggle.style.outline = '');
										});
								}),
								(t.prototype.destroy = function () {
									var e = this;
									this.el.classList.remove('show'),
										this.content.classList.add('hidden'),
										'click' === this.eventMode
											? this.toggle.removeEventListener(
													'click',
													this.onToggleClickListener,
												)
											: 'focus' === this.eventMode
												? this.toggle.removeEventListener(
														'click',
														this.onToggleFocusListener,
													)
												: 'hover' === this.eventMode &&
													(this.toggle.removeEventListener(
														'mouseenter',
														this.onToggleMouseEnterListener,
													),
													this.toggle.removeEventListener(
														'mouseleave',
														this.onToggleMouseLeaveListener,
													)),
										this.toggle.removeEventListener(
											'click',
											this.onToggleHandleListener,
											!0,
										),
										this.toggle.removeEventListener(
											'blur',
											this.onToggleHandleListener,
											!0,
										),
										this.popperInstance.destroy(),
										(this.popperInstance = null),
										(window.$hsTooltipCollection =
											window.$hsTooltipCollection.filter(function (t) {
												return t.element.el !== e.el;
											}));
								}),
								(t.findInCollection = function (e) {
									return (
										window.$hsTooltipCollection.find(function (n) {
											return e instanceof t
												? n.element.el === e.el
												: 'string' == typeof e
													? n.element.el === document.querySelector(e)
													: n.element.el === e;
										}) || null
									);
								}),
								(t.getInstance = function (e, t) {
									void 0 === t && (t = !1);
									var n = window.$hsTooltipCollection.find(function (t) {
										return (
											t.element.el ===
											('string' == typeof e ? document.querySelector(e) : e)
										);
									});
									return n ? (t ? n : n.element.el) : null;
								}),
								(t.autoInit = function () {
									window.$hsTooltipCollection ||
										(window.$hsTooltipCollection = []),
										window.$hsTooltipCollection &&
											(window.$hsTooltipCollection =
												window.$hsTooltipCollection.filter(function (e) {
													var t = e.element;
													return document.contains(t.el);
												})),
										document
											.querySelectorAll(
												'.hs-tooltip:not(.--prevent-on-load-init)',
											)
											.forEach(function (e) {
												window.$hsTooltipCollection.find(function (t) {
													var n;
													return (
														(null === (n = null == t ? void 0 : t.element) ||
														void 0 === n
															? void 0
															: n.el) === e
													);
												}) || new t(e);
											});
								}),
								(t.show = function (e) {
									var n = t.findInCollection(e);
									n && n.element.show();
								}),
								(t.hide = function (e) {
									var n = t.findInCollection(e);
									n && n.element.hide();
								}),
								(t.on = function (e, n, o) {
									var r = t.findInCollection(n);
									r && (r.element.events[e] = o);
								}),
								t
							);
						})(f.default);
					window.addEventListener('load', function () {
						p.autoInit();
					}),
						'undefined' != typeof window && (window.HSTooltip = p),
						(t.default = p);
				},
				292: function (e, t) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(t, '__esModule', { value: !0 }),
						(t.menuSearchHistory =
							t.classToClassList =
							t.htmlToElement =
							t.afterTransition =
							t.dispatch =
							t.debounce =
							t.isJson =
							t.isDirectChild =
							t.isFormElement =
							t.isParentOrElementHidden =
							t.isEnoughSpace =
							t.isIpadOS =
							t.isIOS =
							t.getZIndex =
							t.getClassPropertyAlt =
							t.getClassProperty =
							t.stringToBoolean =
								void 0),
						(t.getHighestZIndex = function (e) {
							var t = Number.NEGATIVE_INFINITY;
							return (
								e.forEach(function (e) {
									var n = o(e);
									'auto' !== n && (n = parseInt(n, 10)) > t && (t = n);
								}),
								t
							);
						});
					t.stringToBoolean = function (e) {
						return 'true' === e;
					};
					t.getClassProperty = function (e, t, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(e).getPropertyValue(t) || n).replace(
								' ',
								'',
							)
						);
					};
					t.getClassPropertyAlt = function (e, t, n) {
						void 0 === n && (n = '');
						var o = '';
						return (
							e.classList.forEach(function (e) {
								e.includes(t) && (o = e);
							}),
							o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
						);
					};
					var o = function (e) {
						return window.getComputedStyle(e).getPropertyValue('z-index');
					};
					t.getZIndex = o;
					t.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					t.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					t.isDirectChild = function (e, t) {
						for (var n = e.children, o = 0; o < n.length; o++)
							if (n[o] === t) return !0;
						return !1;
					};
					t.isEnoughSpace = function (e, t, n, o, r) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === r && (r = null);
						var i = t.getBoundingClientRect(),
							s = r ? r.getBoundingClientRect() : null,
							a = window.innerHeight,
							l = s ? i.top - s.top : i.top,
							c = (r ? s.bottom : a) - i.bottom,
							f = e.clientHeight + o;
						return 'bottom' === n
							? c >= f
							: 'top' === n
								? l >= f
								: l >= f || c >= f;
					};
					t.isFormElement = function (e) {
						return (
							e instanceof HTMLInputElement ||
							e instanceof HTMLTextAreaElement ||
							e instanceof HTMLSelectElement
						);
					};
					var r = function (e) {
						return (
							!!e &&
							('none' === window.getComputedStyle(e).display ||
								r(e.parentElement))
						);
					};
					t.isParentOrElementHidden = r;
					t.isJson = function (e) {
						if ('string' != typeof e) return !1;
						var t = e.trim()[0],
							n = e.trim().slice(-1);
						if (('{' === t && '}' === n) || ('[' === t && ']' === n))
							try {
								return JSON.parse(e), !0;
							} catch (e) {
								return !1;
							}
						return !1;
					};
					t.debounce = function (e, t) {
						var o;
						return (
							void 0 === t && (t = 200),
							function () {
								for (var r = [], i = 0; i < arguments.length; i++)
									r[i] = arguments[i];
								clearTimeout(o),
									(o = setTimeout(function () {
										e.apply(n, r);
									}, t));
							}
						);
					};
					t.dispatch = function (e, t, n) {
						void 0 === n && (n = null);
						var o = new CustomEvent(e, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						t.dispatchEvent(o);
					};
					t.afterTransition = function (e, t) {
						var n = function () {
								t(), e.removeEventListener('transitionend', n, !0);
							},
							o = window.getComputedStyle(e),
							r = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(r) > 0
							? e.addEventListener('transitionend', n, !0)
							: t();
					};
					t.htmlToElement = function (e) {
						var t = document.createElement('template');
						return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
					};
					t.classToClassList = function (e, t, n, o) {
						void 0 === n && (n = ' '),
							void 0 === o && (o = 'add'),
							e.split(n).forEach(function (e) {
								return 'add' === o ? t.classList.add(e) : t.classList.remove(e);
							});
					};
					t.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (e) {
							this.historyIndex = e;
						},
						existsInHistory: function (e) {
							return e > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			t = {};
		function n(o) {
			var r = t[o];
			if (void 0 !== r) return r.exports;
			var i = (t[o] = { exports: {} });
			return e[o].call(i.exports, i, i.exports, n), i.exports;
		}
		return (
			(n.d = (e, t) => {
				for (var o in t)
					n.o(t, o) &&
						!n.o(e, o) &&
						Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
			}),
			(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(n.r = (e) => {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			}),
			n(969)
		);
	})(),
);
