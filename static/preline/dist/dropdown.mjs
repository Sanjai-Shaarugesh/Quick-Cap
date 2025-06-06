var e = {
		316: (e, t, n) => {
			function o(e) {
				if (null == e) return window;
				if ('[object Window]' !== e.toString()) {
					var t = e.ownerDocument;
					return (t && t.defaultView) || window;
				}
				return e;
			}
			function i(e) {
				return e instanceof o(e).Element || e instanceof Element;
			}
			function r(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
			}
			function s(e) {
				return (
					'undefined' != typeof ShadowRoot &&
					(e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
				);
			}
			n.d(t, { n4: () => ge });
			var l = Math.max,
				a = Math.min,
				c = Math.round;
			function d() {
				var e = navigator.userAgentData;
				return null != e && e.brands && Array.isArray(e.brands)
					? e.brands
							.map(function (e) {
								return e.brand + '/' + e.version;
							})
							.join(' ')
					: navigator.userAgent;
			}
			function u() {
				return !/^((?!chrome|android).)*safari/i.test(d());
			}
			function p(e, t, n) {
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				var s = e.getBoundingClientRect(),
					l = 1,
					a = 1;
				t &&
					r(e) &&
					((l = (e.offsetWidth > 0 && c(s.width) / e.offsetWidth) || 1),
					(a = (e.offsetHeight > 0 && c(s.height) / e.offsetHeight) || 1));
				var d = (i(e) ? o(e) : window).visualViewport,
					p = !u() && n,
					f = (s.left + (p && d ? d.offsetLeft : 0)) / l,
					h = (s.top + (p && d ? d.offsetTop : 0)) / a,
					m = s.width / l,
					g = s.height / a;
				return {
					width: m,
					height: g,
					top: h,
					right: f + m,
					bottom: h + g,
					left: f,
					x: f,
					y: h,
				};
			}
			function f(e) {
				var t = o(e);
				return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
			}
			function h(e) {
				return e ? (e.nodeName || '').toLowerCase() : null;
			}
			function m(e) {
				return ((i(e) ? e.ownerDocument : e.document) || window.document)
					.documentElement;
			}
			function g(e) {
				return p(m(e)).left + f(e).scrollLeft;
			}
			function w(e) {
				return o(e).getComputedStyle(e);
			}
			function y(e) {
				var t = w(e),
					n = t.overflow,
					o = t.overflowX,
					i = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + i + o);
			}
			function v(e, t, n) {
				void 0 === n && (n = !1);
				var i,
					s,
					l = r(t),
					a =
						r(t) &&
						(function (e) {
							var t = e.getBoundingClientRect(),
								n = c(t.width) / e.offsetWidth || 1,
								o = c(t.height) / e.offsetHeight || 1;
							return 1 !== n || 1 !== o;
						})(t),
					d = m(t),
					u = p(e, a, n),
					w = { scrollLeft: 0, scrollTop: 0 },
					v = { x: 0, y: 0 };
				return (
					(l || (!l && !n)) &&
						(('body' !== h(t) || y(d)) &&
							(w =
								(i = t) !== o(i) && r(i)
									? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
									: f(i)),
						r(t)
							? (((v = p(t, !0)).x += t.clientLeft), (v.y += t.clientTop))
							: d && (v.x = g(d))),
					{
						x: u.left + w.scrollLeft - v.x,
						y: u.top + w.scrollTop - v.y,
						width: u.width,
						height: u.height,
					}
				);
			}
			function b(e) {
				var t = p(e),
					n = e.offsetWidth,
					o = e.offsetHeight;
				return (
					Math.abs(t.width - n) <= 1 && (n = t.width),
					Math.abs(t.height - o) <= 1 && (o = t.height),
					{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
				);
			}
			function x(e) {
				return 'html' === h(e)
					? e
					: e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || m(e);
			}
			function E(e) {
				return ['html', 'body', '#document'].indexOf(h(e)) >= 0
					? e.ownerDocument.body
					: r(e) && y(e)
						? e
						: E(x(e));
			}
			function L(e, t) {
				var n;
				void 0 === t && (t = []);
				var i = E(e),
					r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
					s = o(i),
					l = r ? [s].concat(s.visualViewport || [], y(i) ? i : []) : i,
					a = t.concat(l);
				return r ? a : a.concat(L(x(l)));
			}
			function C(e) {
				return ['table', 'td', 'th'].indexOf(h(e)) >= 0;
			}
			function O(e) {
				return r(e) && 'fixed' !== w(e).position ? e.offsetParent : null;
			}
			function P(e) {
				for (var t = o(e), n = O(e); n && C(n) && 'static' === w(n).position; )
					n = O(n);
				return n &&
					('html' === h(n) || ('body' === h(n) && 'static' === w(n).position))
					? t
					: n ||
							(function (e) {
								var t = /firefox/i.test(d());
								if (/Trident/i.test(d()) && r(e) && 'fixed' === w(e).position)
									return null;
								var n = x(e);
								for (
									s(n) && (n = n.host);
									r(n) && ['html', 'body'].indexOf(h(n)) < 0;

								) {
									var o = w(n);
									if (
										'none' !== o.transform ||
										'none' !== o.perspective ||
										'paint' === o.contain ||
										-1 !== ['transform', 'perspective'].indexOf(o.willChange) ||
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
			var A = 'top',
				D = 'bottom',
				S = 'right',
				k = 'left',
				M = 'auto',
				j = [A, D, S, k],
				I = 'start',
				q = 'end',
				H = 'clippingParents',
				T = 'viewport',
				V = 'popper',
				$ = 'reference',
				R = j.reduce(function (e, t) {
					return e.concat([t + '-' + I, t + '-' + q]);
				}, []),
				W = [].concat(j, [M]).reduce(function (e, t) {
					return e.concat([t, t + '-' + I, t + '-' + q]);
				}, []),
				B = [
					'beforeRead',
					'read',
					'afterRead',
					'beforeMain',
					'main',
					'afterMain',
					'beforeWrite',
					'write',
					'afterWrite',
				];
			function z(e) {
				var t = new Map(),
					n = new Set(),
					o = [];
				function i(e) {
					n.add(e.name),
						[]
							.concat(e.requires || [], e.requiresIfExists || [])
							.forEach(function (e) {
								if (!n.has(e)) {
									var o = t.get(e);
									o && i(o);
								}
							}),
						o.push(e);
				}
				return (
					e.forEach(function (e) {
						t.set(e.name, e);
					}),
					e.forEach(function (e) {
						n.has(e.name) || i(e);
					}),
					o
				);
			}
			var F = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
			function _() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
					t[n] = arguments[n];
				return !t.some(function (e) {
					return !(e && 'function' == typeof e.getBoundingClientRect);
				});
			}
			function N(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					r = t.defaultOptions,
					s = void 0 === r ? F : r;
				return function (e, t, n) {
					void 0 === n && (n = s);
					var r,
						l,
						a = {
							placement: 'bottom',
							orderedModifiers: [],
							options: Object.assign({}, F, s),
							modifiersData: {},
							elements: { reference: e, popper: t },
							attributes: {},
							styles: {},
						},
						c = [],
						d = !1,
						u = {
							state: a,
							setOptions: function (n) {
								var r = 'function' == typeof n ? n(a.options) : n;
								p(),
									(a.options = Object.assign({}, s, a.options, r)),
									(a.scrollParents = {
										reference: i(e)
											? L(e)
											: e.contextElement
												? L(e.contextElement)
												: [],
										popper: L(t),
									});
								var l,
									d,
									f = (function (e) {
										var t = z(e);
										return B.reduce(function (e, n) {
											return e.concat(
												t.filter(function (e) {
													return e.phase === n;
												}),
											);
										}, []);
									})(
										((l = [].concat(o, a.options.modifiers)),
										(d = l.reduce(function (e, t) {
											var n = e[t.name];
											return (
												(e[t.name] = n
													? Object.assign({}, n, t, {
															options: Object.assign({}, n.options, t.options),
															data: Object.assign({}, n.data, t.data),
														})
													: t),
												e
											);
										}, {})),
										Object.keys(d).map(function (e) {
											return d[e];
										})),
									);
								return (
									(a.orderedModifiers = f.filter(function (e) {
										return e.enabled;
									})),
									a.orderedModifiers.forEach(function (e) {
										var t = e.name,
											n = e.options,
											o = void 0 === n ? {} : n,
											i = e.effect;
										if ('function' == typeof i) {
											var r = i({ state: a, name: t, instance: u, options: o }),
												s = function () {};
											c.push(r || s);
										}
									}),
									u.update()
								);
							},
							forceUpdate: function () {
								if (!d) {
									var e = a.elements,
										t = e.reference,
										n = e.popper;
									if (_(t, n)) {
										(a.rects = {
											reference: v(t, P(n), 'fixed' === a.options.strategy),
											popper: b(n),
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
												var i = a.orderedModifiers[o],
													r = i.fn,
													s = i.options,
													l = void 0 === s ? {} : s,
													c = i.name;
												'function' == typeof r &&
													(a =
														r({ state: a, options: l, name: c, instance: u }) ||
														a);
											} else (a.reset = !1), (o = -1);
									}
								}
							},
							update:
								((r = function () {
									return new Promise(function (e) {
										u.forceUpdate(), e(a);
									});
								}),
								function () {
									return (
										l ||
											(l = new Promise(function (e) {
												Promise.resolve().then(function () {
													(l = void 0), e(r());
												});
											})),
										l
									);
								}),
							destroy: function () {
								p(), (d = !0);
							},
						};
					if (!_(e, t)) return u;
					function p() {
						c.forEach(function (e) {
							return e();
						}),
							(c = []);
					}
					return (
						u.setOptions(n).then(function (e) {
							!d && n.onFirstUpdate && n.onFirstUpdate(e);
						}),
						u
					);
				};
			}
			var U = { passive: !0 };
			function X(e) {
				return e.split('-')[0];
			}
			function G(e) {
				return e.split('-')[1];
			}
			function J(e) {
				return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
			}
			function K(e) {
				var t,
					n = e.reference,
					o = e.element,
					i = e.placement,
					r = i ? X(i) : null,
					s = i ? G(i) : null,
					l = n.x + n.width / 2 - o.width / 2,
					a = n.y + n.height / 2 - o.height / 2;
				switch (r) {
					case A:
						t = { x: l, y: n.y - o.height };
						break;
					case D:
						t = { x: l, y: n.y + n.height };
						break;
					case S:
						t = { x: n.x + n.width, y: a };
						break;
					case k:
						t = { x: n.x - o.width, y: a };
						break;
					default:
						t = { x: n.x, y: n.y };
				}
				var c = r ? J(r) : null;
				if (null != c) {
					var d = 'y' === c ? 'height' : 'width';
					switch (s) {
						case I:
							t[c] = t[c] - (n[d] / 2 - o[d] / 2);
							break;
						case q:
							t[c] = t[c] + (n[d] / 2 - o[d] / 2);
					}
				}
				return t;
			}
			var Y = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
			function Z(e) {
				var t,
					n = e.popper,
					i = e.popperRect,
					r = e.placement,
					s = e.variation,
					l = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					u = e.adaptive,
					p = e.roundOffsets,
					f = e.isFixed,
					h = l.x,
					g = void 0 === h ? 0 : h,
					y = l.y,
					v = void 0 === y ? 0 : y,
					b = 'function' == typeof p ? p({ x: g, y: v }) : { x: g, y: v };
				(g = b.x), (v = b.y);
				var x = l.hasOwnProperty('x'),
					E = l.hasOwnProperty('y'),
					L = k,
					C = A,
					O = window;
				if (u) {
					var M = P(n),
						j = 'clientHeight',
						I = 'clientWidth';
					if (
						(M === o(n) &&
							'static' !== w((M = m(n))).position &&
							'absolute' === a &&
							((j = 'scrollHeight'), (I = 'scrollWidth')),
						r === A || ((r === k || r === S) && s === q))
					)
						(C = D),
							(v -=
								(f && M === O && O.visualViewport
									? O.visualViewport.height
									: M[j]) - i.height),
							(v *= d ? 1 : -1);
					if (r === k || ((r === A || r === D) && s === q))
						(L = S),
							(g -=
								(f && M === O && O.visualViewport
									? O.visualViewport.width
									: M[I]) - i.width),
							(g *= d ? 1 : -1);
				}
				var H,
					T = Object.assign({ position: a }, u && Y),
					V =
						!0 === p
							? (function (e, t) {
									var n = e.x,
										o = e.y,
										i = t.devicePixelRatio || 1;
									return { x: c(n * i) / i || 0, y: c(o * i) / i || 0 };
								})({ x: g, y: v }, o(n))
							: { x: g, y: v };
				return (
					(g = V.x),
					(v = V.y),
					d
						? Object.assign(
								{},
								T,
								(((H = {})[C] = E ? '0' : ''),
								(H[L] = x ? '0' : ''),
								(H.transform =
									(O.devicePixelRatio || 1) <= 1
										? 'translate(' + g + 'px, ' + v + 'px)'
										: 'translate3d(' + g + 'px, ' + v + 'px, 0)'),
								H),
							)
						: Object.assign(
								{},
								T,
								(((t = {})[C] = E ? v + 'px' : ''),
								(t[L] = x ? g + 'px' : ''),
								(t.transform = ''),
								t),
							)
				);
			}
			const Q = {
				name: 'offset',
				enabled: !0,
				phase: 'main',
				requires: ['popperOffsets'],
				fn: function (e) {
					var t = e.state,
						n = e.options,
						o = e.name,
						i = n.offset,
						r = void 0 === i ? [0, 0] : i,
						s = W.reduce(function (e, n) {
							return (
								(e[n] = (function (e, t, n) {
									var o = X(e),
										i = [k, A].indexOf(o) >= 0 ? -1 : 1,
										r =
											'function' == typeof n
												? n(Object.assign({}, t, { placement: e }))
												: n,
										s = r[0],
										l = r[1];
									return (
										(s = s || 0),
										(l = (l || 0) * i),
										[k, S].indexOf(o) >= 0 ? { x: l, y: s } : { x: s, y: l }
									);
								})(n, t.rects, r)),
								e
							);
						}, {}),
						l = s[t.placement],
						a = l.x,
						c = l.y;
					null != t.modifiersData.popperOffsets &&
						((t.modifiersData.popperOffsets.x += a),
						(t.modifiersData.popperOffsets.y += c)),
						(t.modifiersData[o] = s);
				},
			};
			var ee = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
			function te(e) {
				return e.replace(/left|right|bottom|top/g, function (e) {
					return ee[e];
				});
			}
			var ne = { start: 'end', end: 'start' };
			function oe(e) {
				return e.replace(/start|end/g, function (e) {
					return ne[e];
				});
			}
			function ie(e, t) {
				var n = t.getRootNode && t.getRootNode();
				if (e.contains(t)) return !0;
				if (n && s(n)) {
					var o = t;
					do {
						if (o && e.isSameNode(o)) return !0;
						o = o.parentNode || o.host;
					} while (o);
				}
				return !1;
			}
			function re(e) {
				return Object.assign({}, e, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height,
				});
			}
			function se(e, t, n) {
				return t === T
					? re(
							(function (e, t) {
								var n = o(e),
									i = m(e),
									r = n.visualViewport,
									s = i.clientWidth,
									l = i.clientHeight,
									a = 0,
									c = 0;
								if (r) {
									(s = r.width), (l = r.height);
									var d = u();
									(d || (!d && 'fixed' === t)) &&
										((a = r.offsetLeft), (c = r.offsetTop));
								}
								return { width: s, height: l, x: a + g(e), y: c };
							})(e, n),
						)
					: i(t)
						? (function (e, t) {
								var n = p(e, !1, 'fixed' === t);
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
						: re(
								(function (e) {
									var t,
										n = m(e),
										o = f(e),
										i = null == (t = e.ownerDocument) ? void 0 : t.body,
										r = l(
											n.scrollWidth,
											n.clientWidth,
											i ? i.scrollWidth : 0,
											i ? i.clientWidth : 0,
										),
										s = l(
											n.scrollHeight,
											n.clientHeight,
											i ? i.scrollHeight : 0,
											i ? i.clientHeight : 0,
										),
										a = -o.scrollLeft + g(e),
										c = -o.scrollTop;
									return (
										'rtl' === w(i || n).direction &&
											(a += l(n.clientWidth, i ? i.clientWidth : 0) - r),
										{ width: r, height: s, x: a, y: c }
									);
								})(m(e)),
							);
			}
			function le(e, t, n, o) {
				var s =
						'clippingParents' === t
							? (function (e) {
									var t = L(x(e)),
										n =
											['absolute', 'fixed'].indexOf(w(e).position) >= 0 && r(e)
												? P(e)
												: e;
									return i(n)
										? t.filter(function (e) {
												return i(e) && ie(e, n) && 'body' !== h(e);
											})
										: [];
								})(e)
							: [].concat(t),
					c = [].concat(s, [n]),
					d = c[0],
					u = c.reduce(
						function (t, n) {
							var i = se(e, n, o);
							return (
								(t.top = l(i.top, t.top)),
								(t.right = a(i.right, t.right)),
								(t.bottom = a(i.bottom, t.bottom)),
								(t.left = l(i.left, t.left)),
								t
							);
						},
						se(e, d, o),
					);
				return (
					(u.width = u.right - u.left),
					(u.height = u.bottom - u.top),
					(u.x = u.left),
					(u.y = u.top),
					u
				);
			}
			function ae(e) {
				return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
			}
			function ce(e, t) {
				return t.reduce(function (t, n) {
					return (t[n] = e), t;
				}, {});
			}
			function de(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					r = void 0 === o ? e.placement : o,
					s = n.strategy,
					l = void 0 === s ? e.strategy : s,
					a = n.boundary,
					c = void 0 === a ? H : a,
					d = n.rootBoundary,
					u = void 0 === d ? T : d,
					f = n.elementContext,
					h = void 0 === f ? V : f,
					g = n.altBoundary,
					w = void 0 !== g && g,
					y = n.padding,
					v = void 0 === y ? 0 : y,
					b = ae('number' != typeof v ? v : ce(v, j)),
					x = h === V ? $ : V,
					E = e.rects.popper,
					L = e.elements[w ? x : h],
					C = le(i(L) ? L : L.contextElement || m(e.elements.popper), c, u, l),
					O = p(e.elements.reference),
					P = K({
						reference: O,
						element: E,
						strategy: 'absolute',
						placement: r,
					}),
					k = re(Object.assign({}, E, P)),
					M = h === V ? k : O,
					I = {
						top: C.top - M.top + b.top,
						bottom: M.bottom - C.bottom + b.bottom,
						left: C.left - M.left + b.left,
						right: M.right - C.right + b.right,
					},
					q = e.modifiersData.offset;
				if (h === V && q) {
					var R = q[r];
					Object.keys(I).forEach(function (e) {
						var t = [S, D].indexOf(e) >= 0 ? 1 : -1,
							n = [A, D].indexOf(e) >= 0 ? 'y' : 'x';
						I[e] += R[n] * t;
					});
				}
				return I;
			}
			function ue(e, t, n) {
				return l(e, a(t, n));
			}
			const pe = {
				name: 'preventOverflow',
				enabled: !0,
				phase: 'main',
				fn: function (e) {
					var t = e.state,
						n = e.options,
						o = e.name,
						i = n.mainAxis,
						r = void 0 === i || i,
						s = n.altAxis,
						c = void 0 !== s && s,
						d = n.boundary,
						u = n.rootBoundary,
						p = n.altBoundary,
						f = n.padding,
						h = n.tether,
						m = void 0 === h || h,
						g = n.tetherOffset,
						w = void 0 === g ? 0 : g,
						y = de(t, {
							boundary: d,
							rootBoundary: u,
							padding: f,
							altBoundary: p,
						}),
						v = X(t.placement),
						x = G(t.placement),
						E = !x,
						L = J(v),
						C = 'x' === L ? 'y' : 'x',
						O = t.modifiersData.popperOffsets,
						M = t.rects.reference,
						j = t.rects.popper,
						q =
							'function' == typeof w
								? w(Object.assign({}, t.rects, { placement: t.placement }))
								: w,
						H =
							'number' == typeof q
								? { mainAxis: q, altAxis: q }
								: Object.assign({ mainAxis: 0, altAxis: 0 }, q),
						T = t.modifiersData.offset
							? t.modifiersData.offset[t.placement]
							: null,
						V = { x: 0, y: 0 };
					if (O) {
						if (r) {
							var $,
								R = 'y' === L ? A : k,
								W = 'y' === L ? D : S,
								B = 'y' === L ? 'height' : 'width',
								z = O[L],
								F = z + y[R],
								_ = z - y[W],
								N = m ? -j[B] / 2 : 0,
								U = x === I ? M[B] : j[B],
								K = x === I ? -j[B] : -M[B],
								Y = t.elements.arrow,
								Z = m && Y ? b(Y) : { width: 0, height: 0 },
								Q = t.modifiersData['arrow#persistent']
									? t.modifiersData['arrow#persistent'].padding
									: { top: 0, right: 0, bottom: 0, left: 0 },
								ee = Q[R],
								te = Q[W],
								ne = ue(0, M[B], Z[B]),
								oe = E
									? M[B] / 2 - N - ne - ee - H.mainAxis
									: U - ne - ee - H.mainAxis,
								ie = E
									? -M[B] / 2 + N + ne + te + H.mainAxis
									: K + ne + te + H.mainAxis,
								re = t.elements.arrow && P(t.elements.arrow),
								se = re
									? 'y' === L
										? re.clientTop || 0
										: re.clientLeft || 0
									: 0,
								le = null != ($ = null == T ? void 0 : T[L]) ? $ : 0,
								ae = z + ie - le,
								ce = ue(m ? a(F, z + oe - le - se) : F, z, m ? l(_, ae) : _);
							(O[L] = ce), (V[L] = ce - z);
						}
						if (c) {
							var pe,
								fe = 'x' === L ? A : k,
								he = 'x' === L ? D : S,
								me = O[C],
								ge = 'y' === C ? 'height' : 'width',
								we = me + y[fe],
								ye = me - y[he],
								ve = -1 !== [A, k].indexOf(v),
								be = null != (pe = null == T ? void 0 : T[C]) ? pe : 0,
								xe = ve ? we : me - M[ge] - j[ge] - be + H.altAxis,
								Ee = ve ? me + M[ge] + j[ge] - be - H.altAxis : ye,
								Le =
									m && ve
										? (function (e, t, n) {
												var o = ue(e, t, n);
												return o > n ? n : o;
											})(xe, me, Ee)
										: ue(m ? xe : we, me, m ? Ee : ye);
							(O[C] = Le), (V[C] = Le - me);
						}
						t.modifiersData[o] = V;
					}
				},
				requiresIfExists: ['offset'],
			};
			const fe = {
				name: 'arrow',
				enabled: !0,
				phase: 'main',
				fn: function (e) {
					var t,
						n = e.state,
						o = e.name,
						i = e.options,
						r = n.elements.arrow,
						s = n.modifiersData.popperOffsets,
						l = X(n.placement),
						a = J(l),
						c = [k, S].indexOf(l) >= 0 ? 'height' : 'width';
					if (r && s) {
						var d = (function (e, t) {
								return ae(
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
										: ce(e, j),
								);
							})(i.padding, n),
							u = b(r),
							p = 'y' === a ? A : k,
							f = 'y' === a ? D : S,
							h =
								n.rects.reference[c] +
								n.rects.reference[a] -
								s[a] -
								n.rects.popper[c],
							m = s[a] - n.rects.reference[a],
							g = P(r),
							w = g
								? 'y' === a
									? g.clientHeight || 0
									: g.clientWidth || 0
								: 0,
							y = h / 2 - m / 2,
							v = d[p],
							x = w - u[c] - d[f],
							E = w / 2 - u[c] / 2 + y,
							L = ue(v, E, x),
							C = a;
						n.modifiersData[o] =
							(((t = {})[C] = L), (t.centerOffset = L - E), t);
					}
				},
				effect: function (e) {
					var t = e.state,
						n = e.options.element,
						o = void 0 === n ? '[data-popper-arrow]' : n;
					null != o &&
						('string' != typeof o ||
							(o = t.elements.popper.querySelector(o))) &&
						ie(t.elements.popper, o) &&
						(t.elements.arrow = o);
				},
				requires: ['popperOffsets'],
				requiresIfExists: ['preventOverflow'],
			};
			function he(e, t, n) {
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
			function me(e) {
				return [A, S, D, k].some(function (t) {
					return e[t] >= 0;
				});
			}
			var ge = N({
				defaultModifiers: [
					{
						name: 'eventListeners',
						enabled: !0,
						phase: 'write',
						fn: function () {},
						effect: function (e) {
							var t = e.state,
								n = e.instance,
								i = e.options,
								r = i.scroll,
								s = void 0 === r || r,
								l = i.resize,
								a = void 0 === l || l,
								c = o(t.elements.popper),
								d = [].concat(
									t.scrollParents.reference,
									t.scrollParents.popper,
								);
							return (
								s &&
									d.forEach(function (e) {
										e.addEventListener('scroll', n.update, U);
									}),
								a && c.addEventListener('resize', n.update, U),
								function () {
									s &&
										d.forEach(function (e) {
											e.removeEventListener('scroll', n.update, U);
										}),
										a && c.removeEventListener('resize', n.update, U);
								}
							);
						},
						data: {},
					},
					{
						name: 'popperOffsets',
						enabled: !0,
						phase: 'read',
						fn: function (e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = K({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: 'absolute',
								placement: t.placement,
							});
						},
						data: {},
					},
					{
						name: 'computeStyles',
						enabled: !0,
						phase: 'beforeWrite',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = n.gpuAcceleration,
								i = void 0 === o || o,
								r = n.adaptive,
								s = void 0 === r || r,
								l = n.roundOffsets,
								a = void 0 === l || l,
								c = {
									placement: X(t.placement),
									variation: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: i,
									isFixed: 'fixed' === t.options.strategy,
								};
							null != t.modifiersData.popperOffsets &&
								(t.styles.popper = Object.assign(
									{},
									t.styles.popper,
									Z(
										Object.assign({}, c, {
											offsets: t.modifiersData.popperOffsets,
											position: t.options.strategy,
											adaptive: s,
											roundOffsets: a,
										}),
									),
								)),
								null != t.modifiersData.arrow &&
									(t.styles.arrow = Object.assign(
										{},
										t.styles.arrow,
										Z(
											Object.assign({}, c, {
												offsets: t.modifiersData.arrow,
												position: 'absolute',
												adaptive: !1,
												roundOffsets: a,
											}),
										),
									)),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-placement': t.placement,
								}));
						},
						data: {},
					},
					{
						name: 'applyStyles',
						enabled: !0,
						phase: 'write',
						fn: function (e) {
							var t = e.state;
							Object.keys(t.elements).forEach(function (e) {
								var n = t.styles[e] || {},
									o = t.attributes[e] || {},
									i = t.elements[e];
								r(i) &&
									h(i) &&
									(Object.assign(i.style, n),
									Object.keys(o).forEach(function (e) {
										var t = o[e];
										!1 === t
											? i.removeAttribute(e)
											: i.setAttribute(e, !0 === t ? '' : t);
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
											i = t.attributes[e] || {},
											s = Object.keys(
												t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
											).reduce(function (e, t) {
												return (e[t] = ''), e;
											}, {});
										r(o) &&
											h(o) &&
											(Object.assign(o.style, s),
											Object.keys(i).forEach(function (e) {
												o.removeAttribute(e);
											}));
									});
								}
							);
						},
						requires: ['computeStyles'],
					},
					Q,
					{
						name: 'flip',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (
									var i = n.mainAxis,
										r = void 0 === i || i,
										s = n.altAxis,
										l = void 0 === s || s,
										a = n.fallbackPlacements,
										c = n.padding,
										d = n.boundary,
										u = n.rootBoundary,
										p = n.altBoundary,
										f = n.flipVariations,
										h = void 0 === f || f,
										m = n.allowedAutoPlacements,
										g = t.options.placement,
										w = X(g),
										y =
											a ||
											(w === g || !h
												? [te(g)]
												: (function (e) {
														if (X(e) === M) return [];
														var t = te(e);
														return [oe(e), t, oe(t)];
													})(g)),
										v = [g].concat(y).reduce(function (e, n) {
											return e.concat(
												X(n) === M
													? (function (e, t) {
															void 0 === t && (t = {});
															var n = t,
																o = n.placement,
																i = n.boundary,
																r = n.rootBoundary,
																s = n.padding,
																l = n.flipVariations,
																a = n.allowedAutoPlacements,
																c = void 0 === a ? W : a,
																d = G(o),
																u = d
																	? l
																		? R
																		: R.filter(function (e) {
																				return G(e) === d;
																			})
																	: j,
																p = u.filter(function (e) {
																	return c.indexOf(e) >= 0;
																});
															0 === p.length && (p = u);
															var f = p.reduce(function (t, n) {
																return (
																	(t[n] = de(e, {
																		placement: n,
																		boundary: i,
																		rootBoundary: r,
																		padding: s,
																	})[X(n)]),
																	t
																);
															}, {});
															return Object.keys(f).sort(function (e, t) {
																return f[e] - f[t];
															});
														})(t, {
															placement: n,
															boundary: d,
															rootBoundary: u,
															padding: c,
															flipVariations: h,
															allowedAutoPlacements: m,
														})
													: n,
											);
										}, []),
										b = t.rects.reference,
										x = t.rects.popper,
										E = new Map(),
										L = !0,
										C = v[0],
										O = 0;
									O < v.length;
									O++
								) {
									var P = v[O],
										q = X(P),
										H = G(P) === I,
										T = [A, D].indexOf(q) >= 0,
										V = T ? 'width' : 'height',
										$ = de(t, {
											placement: P,
											boundary: d,
											rootBoundary: u,
											altBoundary: p,
											padding: c,
										}),
										B = T ? (H ? S : k) : H ? D : A;
									b[V] > x[V] && (B = te(B));
									var z = te(B),
										F = [];
									if (
										(r && F.push($[q] <= 0),
										l && F.push($[B] <= 0, $[z] <= 0),
										F.every(function (e) {
											return e;
										}))
									) {
										(C = P), (L = !1);
										break;
									}
									E.set(P, F);
								}
								if (L)
									for (
										var _ = function (e) {
												var t = v.find(function (t) {
													var n = E.get(t);
													if (n)
														return n.slice(0, e).every(function (e) {
															return e;
														});
												});
												if (t) return (C = t), 'break';
											},
											N = h ? 3 : 1;
										N > 0;
										N--
									) {
										if ('break' === _(N)) break;
									}
								t.placement !== C &&
									((t.modifiersData[o]._skip = !0),
									(t.placement = C),
									(t.reset = !0));
							}
						},
						requiresIfExists: ['offset'],
						data: { _skip: !1 },
					},
					pe,
					fe,
					{
						name: 'hide',
						enabled: !0,
						phase: 'main',
						requiresIfExists: ['preventOverflow'],
						fn: function (e) {
							var t = e.state,
								n = e.name,
								o = t.rects.reference,
								i = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								s = de(t, { elementContext: 'reference' }),
								l = de(t, { altBoundary: !0 }),
								a = he(s, o),
								c = he(l, i, r),
								d = me(a),
								u = me(c);
							(t.modifiersData[n] = {
								referenceClippingOffsets: a,
								popperEscapeOffsets: c,
								isReferenceHidden: d,
								hasPopperEscaped: u,
							}),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-reference-hidden': d,
									'data-popper-escaped': u,
								}));
						},
					},
				],
			});
		},
		189: (e, t, n) => {
			n.d(t, { In: () => i, lP: () => o });
			const o = {
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
				},
				i = [
					'Escape',
					'ArrowUp',
					'ArrowDown',
					'ArrowRight',
					'ArrowLeft',
					'Home',
					'End',
					'Enter',
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
			n.d(t, {
				BF: () => r,
				IM: () => d,
				JD: () => a,
				PK: () => o,
				gj: () => i,
				un: () => s,
				yd: () => c,
				zG: () => l,
			});
			/*
			 * @version: 2.7.0
			 * @author: Preline Labs Ltd.
			 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
			 * Copyright 2024 Preline Labs Ltd.
			 */
			const o = (e) => 'true' === e,
				i = (e, t, n = '') =>
					(window.getComputedStyle(e).getPropertyValue(t) || n).replace(
						' ',
						'',
					),
				r = (e, t, n = '') => {
					let o = '';
					return (
						e.classList.forEach((e) => {
							e.includes(t) && (o = e);
						}),
						o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
					);
				};
			const s = () =>
					!!/iPad|iPhone|iPod/.test(navigator.platform) ||
					(navigator.maxTouchPoints &&
						navigator.maxTouchPoints > 2 &&
						/MacIntel/.test(navigator.platform)),
				l = () =>
					navigator.maxTouchPoints &&
					navigator.maxTouchPoints > 2 &&
					/MacIntel/.test(navigator.platform),
				a = (e, t, n = null) => {
					const o = new CustomEvent(e, {
						detail: { payload: n },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(o);
				},
				c = (e, t) => {
					const n = () => {
							t(), e.removeEventListener('transitionend', n, !0);
						},
						o = window.getComputedStyle(e),
						i = o.getPropertyValue('transition-duration');
					'none' !== o.getPropertyValue('transition-property') &&
					parseFloat(i) > 0
						? e.addEventListener('transitionend', n, !0)
						: t();
				},
				d = {
					historyIndex: -1,
					addHistory(e) {
						this.historyIndex = e;
					},
					existsInHistory(e) {
						return e > this.historyIndex;
					},
					clearHistory() {
						this.historyIndex = -1;
					},
				};
		},
	},
	t = {};
function n(o) {
	var i = t[o];
	if (void 0 !== i) return i.exports;
	var r = (t[o] = { exports: {} });
	return e[o](r, r.exports, n), r.exports;
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
var i = n(926),
	r = n(316),
	s = n(615),
	l = n(189);
/*
 * HSDropdown
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class a extends s.A {
	constructor(e, t, n) {
		super(e, t, n),
			(this.toggle =
				this.el.querySelector(':scope > .hs-dropdown-toggle') ||
				this.el.querySelector(
					':scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle',
				) ||
				this.el.children[0]),
			(this.closers =
				Array.from(this.el.querySelectorAll(':scope .hs-dropdown-close')) ||
				null),
			(this.menu = this.el.querySelector(':scope > .hs-dropdown-menu')),
			(this.eventMode = (0, i.gj)(this.el, '--trigger', 'click')),
			(this.closeMode = (0, i.gj)(this.el, '--auto-close', 'true')),
			(this.hasAutofocus = (0, i.PK)(
				(0, i.gj)(this.el, '--has-autofocus', 'true') || 'true',
			)),
			(this.animationInProcess = !1),
			(this.onCloserClickListener = []),
			this.toggle && this.menu && this.init();
	}
	elementMouseEnter() {
		this.onMouseEnterHandler();
	}
	elementMouseLeave() {
		this.onMouseLeaveHandler();
	}
	toggleClick(e) {
		this.onClickHandler(e);
	}
	toggleContextMenu(e) {
		e.preventDefault(), this.onContextMenuHandler(e);
	}
	closerClick() {
		this.close();
	}
	init() {
		if (
			(this.createCollection(window.$hsDropdownCollection, this),
			this.toggle.disabled)
		)
			return !1;
		this.toggle && this.buildToggle(),
			this.menu && this.buildMenu(),
			this.closers && this.buildClosers(),
			(0, i.un)() ||
				(0, i.zG)() ||
				((this.onElementMouseEnterListener = () => this.elementMouseEnter()),
				(this.onElementMouseLeaveListener = () => this.elementMouseLeave()),
				this.el.addEventListener(
					'mouseenter',
					this.onElementMouseEnterListener,
				),
				this.el.addEventListener(
					'mouseleave',
					this.onElementMouseLeaveListener,
				));
	}
	resizeHandler() {
		(this.eventMode = (0, i.gj)(this.el, '--trigger', 'click')),
			(this.closeMode = (0, i.gj)(this.el, '--auto-close', 'true'));
	}
	buildToggle() {
		var e;
		(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
			? void 0
			: e.ariaExpanded) &&
			(this.el.classList.contains('open')
				? (this.toggle.ariaExpanded = 'true')
				: (this.toggle.ariaExpanded = 'false')),
			'contextmenu' === this.eventMode
				? ((this.onToggleContextMenuListener = (e) =>
						this.toggleContextMenu(e)),
					this.toggle.addEventListener(
						'contextmenu',
						this.onToggleContextMenuListener,
					))
				: ((this.onToggleClickListener = (e) => this.toggleClick(e)),
					this.toggle.addEventListener('click', this.onToggleClickListener));
	}
	buildMenu() {
		this.menu.role = this.menu.getAttribute('role') || 'menu';
		const e = this.menu.querySelectorAll('[role="menuitemcheckbox"]'),
			t = this.menu.querySelectorAll('[role="menuitemradio"]');
		e.forEach((e) => e.addEventListener('click', () => this.selectCheckbox(e))),
			t.forEach((e) => e.addEventListener('click', () => this.selectRadio(e)));
	}
	buildClosers() {
		this.closers.forEach((e) => {
			this.onCloserClickListener.push({ el: e, fn: () => this.closerClick() }),
				e.addEventListener(
					'click',
					this.onCloserClickListener.find((t) => t.el === e).fn,
				);
		});
	}
	getScrollbarSize() {
		let e = document.createElement('div');
		(e.style.overflow = 'scroll'),
			(e.style.width = '100px'),
			(e.style.height = '100px'),
			document.body.appendChild(e);
		let t = e.offsetWidth - e.clientWidth;
		return document.body.removeChild(e), t;
	}
	onContextMenuHandler(e) {
		const t = {
			getBoundingClientRect:
				(() => new DOMRect(), () => new DOMRect(e.clientX, e.clientY, 0, 0)),
		};
		a.closeCurrentlyOpened(),
			this.el.classList.contains('open') &&
			!this.menu.classList.contains('hidden')
				? (this.close(),
					(document.body.style.overflow = ''),
					(document.body.style.paddingRight = ''))
				: ((document.body.style.overflow = 'hidden'),
					(document.body.style.paddingRight = `${this.getScrollbarSize()}px`),
					this.open(t));
	}
	onClickHandler(e) {
		this.el.classList.contains('open') &&
		!this.menu.classList.contains('hidden')
			? this.close()
			: this.open();
	}
	onMouseEnterHandler() {
		if ('hover' !== this.eventMode) return !1;
		this.el._popper && this.forceClearState(),
			!this.el.classList.contains('open') &&
				this.menu.classList.contains('hidden') &&
				this.open();
	}
	onMouseLeaveHandler() {
		if ('hover' !== this.eventMode) return !1;
		this.el.classList.contains('open') &&
			!this.menu.classList.contains('hidden') &&
			this.close();
	}
	destroyPopper() {
		const e = (
			window.getComputedStyle(this.el).getPropertyValue('--scope') || ''
		).replace(' ', '');
		this.menu.classList.remove('block'),
			this.menu.classList.add('hidden'),
			(this.menu.style.inset = null),
			(this.menu.style.position = null),
			this.el && this.el._popper && this.el._popper.destroy(),
			'window' === e && this.el.appendChild(this.menu),
			(this.animationInProcess = !1);
	}
	absoluteStrategyModifiers() {
		return [
			{
				name: 'applyStyles',
				fn: (e) => {
					const t = (
							window.getComputedStyle(this.el).getPropertyValue('--strategy') ||
							'absolute'
						).replace(' ', ''),
						n = (
							window.getComputedStyle(this.el).getPropertyValue('--adaptive') ||
							'adaptive'
						).replace(' ', '');
					(e.state.elements.popper.style.position = t),
						(e.state.elements.popper.style.transform =
							'adaptive' === n ? e.state.styles.popper.transform : null),
						(e.state.elements.popper.style.top = null),
						(e.state.elements.popper.style.bottom = null),
						(e.state.elements.popper.style.left = null),
						(e.state.elements.popper.style.right = null),
						(e.state.elements.popper.style.margin = 0);
				},
			},
		];
	}
	focusElement() {
		const e = this.menu.querySelector('[autofocus]');
		if (!e) return !1;
		e.focus();
	}
	setupPopper(e) {
		const t = e || this.el,
			n = (
				window.getComputedStyle(this.el).getPropertyValue('--placement') || ''
			).replace(' ', ''),
			o = (
				window.getComputedStyle(this.el).getPropertyValue('--flip') || 'true'
			).replace(' ', ''),
			i = (
				window.getComputedStyle(this.el).getPropertyValue('--strategy') ||
				'fixed'
			).replace(' ', ''),
			s = parseInt(
				(
					window.getComputedStyle(this.el).getPropertyValue('--offset') || '10'
				).replace(' ', ''),
			),
			a = (
				window
					.getComputedStyle(this.el)
					.getPropertyValue('--gpu-acceleration') || 'true'
			).replace(' ', '');
		return (0, r.n4)(t, this.menu, {
			placement: l.lP[n] || 'bottom-start',
			strategy: i,
			modifiers: [
				...('fixed' !== i ? this.absoluteStrategyModifiers() : []),
				{ name: 'flip', enabled: 'true' === o },
				{ name: 'offset', options: { offset: [0, s] } },
				{
					name: 'computeStyles',
					options: { adaptive: 'fixed' === i, gpuAcceleration: 'true' === a },
				},
			],
		});
	}
	selectCheckbox(e) {
		e.ariaChecked = 'true' === e.ariaChecked ? 'false' : 'true';
	}
	selectRadio(e) {
		if ('true' === e.ariaChecked) return !1;
		const t = e.closest('.group').querySelectorAll('[role="menuitemradio"]');
		Array.from(t)
			.filter((t) => t !== e)
			.forEach((e) => {
				e.ariaChecked = 'false';
			}),
			(e.ariaChecked = 'true');
	}
	calculatePopperPosition(e) {
		const t = this.setupPopper(e);
		t.forceUpdate();
		const n = t.state.placement;
		return t.destroy(), n;
	}
	open(e) {
		if (this.el.classList.contains('open') || this.animationInProcess)
			return !1;
		const t = e || this.el;
		this.animationInProcess = !0;
		const n = (
				window.getComputedStyle(this.el).getPropertyValue('--scope') || ''
			).replace(' ', ''),
			o = (
				window.getComputedStyle(this.el).getPropertyValue('--placement') || ''
			).replace(' ', ''),
			s = (
				window.getComputedStyle(this.el).getPropertyValue('--flip') || 'true'
			).replace(' ', ''),
			a = (
				window.getComputedStyle(this.el).getPropertyValue('--strategy') ||
				'fixed'
			).replace(' ', ''),
			c = parseInt(
				(
					window.getComputedStyle(this.el).getPropertyValue('--offset') || '10'
				).replace(' ', ''),
			),
			d = (
				window
					.getComputedStyle(this.el)
					.getPropertyValue('--gpu-acceleration') || 'true'
			).replace(' ', '');
		'window' === n && document.body.appendChild(this.menu),
			'static' !== a &&
				(this.el._popper = (0, r.n4)(t, this.menu, {
					placement: l.lP[o] || 'bottom-start',
					strategy: a,
					modifiers: [
						...('fixed' !== a ? this.absoluteStrategyModifiers() : []),
						{ name: 'flip', enabled: 'true' === s },
						{ name: 'offset', options: { offset: [0, c] } },
						{
							name: 'computeStyles',
							options: {
								adaptive: 'fixed' === a,
								gpuAcceleration: 'true' === d,
							},
						},
					],
				})),
			(this.menu.style.margin = null),
			this.menu.classList.remove('hidden'),
			this.menu.classList.add('block'),
			setTimeout(() => {
				var e;
				(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
					? void 0
					: e.ariaExpanded) && (this.toggle.ariaExpanded = 'true'),
					this.el.classList.add('open'),
					'window' === n && this.menu.classList.add('open'),
					(this.animationInProcess = !1),
					this.hasAutofocus && this.focusElement();
			}),
			this.fireEvent('open', this.el),
			(0, i.JD)('open.hs.dropdown', this.el, this.el);
	}
	close(e = !0) {
		if (this.animationInProcess || !this.el.classList.contains('open'))
			return !1;
		const t = (
			window.getComputedStyle(this.el).getPropertyValue('--scope') || ''
		).replace(' ', '');
		if (
			((this.animationInProcess = !0),
			'window' === t && this.menu.classList.remove('open'),
			e)
		) {
			const e =
				this.el.querySelector('[data-hs-dropdown-transition]') || this.menu;
			(0, i.yd)(e, () => this.destroyPopper());
		} else this.destroyPopper();
		(() => {
			var e;
			(this.menu.style.margin = null),
				(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
					? void 0
					: e.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
				this.el.classList.remove('open'),
				this.fireEvent('close', this.el),
				(0, i.JD)('close.hs.dropdown', this.el, this.el);
		})();
	}
	forceClearState() {
		this.destroyPopper(),
			(this.menu.style.margin = null),
			this.el.classList.remove('open');
	}
	destroy() {
		(0, i.un)() ||
			(0, i.zG)() ||
			(this.el.removeEventListener(
				'mouseenter',
				this.onElementMouseEnterListener,
			),
			this.el.removeEventListener(
				'mouseleave',
				() => this.onElementMouseLeaveListener,
			),
			(this.onElementMouseEnterListener = null),
			(this.onElementMouseLeaveListener = null)),
			this.toggle.removeEventListener('click', this.onToggleClickListener),
			(this.onToggleClickListener = null),
			this.closers.length &&
				(this.closers.forEach((e) => {
					e.removeEventListener(
						'click',
						this.onCloserClickListener.find((t) => t.el === e).fn,
					);
				}),
				(this.onCloserClickListener = null)),
			this.el.classList.remove('open'),
			this.destroyPopper(),
			(window.$hsDropdownCollection = window.$hsDropdownCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const n = window.$hsDropdownCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return n ? (t ? n : n.element.el) : null;
	}
	static autoInit() {
		if (!window.$hsDropdownCollection) {
			(window.$hsDropdownCollection = []),
				document.addEventListener('keydown', (e) => a.accessibility(e)),
				window.addEventListener('click', (e) => {
					const t = e.target;
					a.closeCurrentlyOpened(t);
				});
			let e = window.innerWidth;
			window.addEventListener('resize', () => {
				window.innerWidth !== e &&
					((e = innerWidth), a.closeCurrentlyOpened(null, !1));
			});
		}
		window.$hsDropdownCollection &&
			(window.$hsDropdownCollection = window.$hsDropdownCollection.filter(
				({ element: e }) => document.contains(e.el),
			)),
			document
				.querySelectorAll('.hs-dropdown:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsDropdownCollection.find((t) => {
						var n;
						return (
							(null === (n = null == t ? void 0 : t.element) || void 0 === n
								? void 0
								: n.el) === e
						);
					}) || new a(e);
				});
	}
	static open(e) {
		const t = window.$hsDropdownCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && t.element.menu.classList.contains('hidden') && t.element.open();
	}
	static close(e) {
		const t = window.$hsDropdownCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && !t.element.menu.classList.contains('hidden') && t.element.close();
	}
	static accessibility(e) {
		this.history = i.IM;
		const t = window.$hsDropdownCollection.find((e) =>
			e.element.el.classList.contains('open'),
		);
		if (
			t &&
			(l.In.includes(e.code) ||
				(4 === e.code.length && e.code[e.code.length - 1].match(/^[A-Z]*$/))) &&
			!e.metaKey &&
			!t.element.menu.querySelector('input:focus') &&
			!t.element.menu.querySelector('textarea:focus')
		)
			switch (e.code) {
				case 'Escape':
					t.element.menu.querySelector('.hs-select.active') ||
						(e.preventDefault(), this.onEscape(e));
					break;
				case 'Enter':
					t.element.menu.querySelector('.hs-select button:focus') ||
						t.element.menu.querySelector('.hs-collapse-toggle:focus') ||
						this.onEnter(e);
					break;
				case 'ArrowUp':
					e.preventDefault(), e.stopImmediatePropagation(), this.onArrow();
					break;
				case 'ArrowDown':
					e.preventDefault(), e.stopImmediatePropagation(), this.onArrow(!1);
					break;
				case 'ArrowRight':
					e.preventDefault(),
						e.stopImmediatePropagation(),
						this.onArrowX(e, 'right');
					break;
				case 'ArrowLeft':
					e.preventDefault(),
						e.stopImmediatePropagation(),
						this.onArrowX(e, 'left');
					break;
				case 'Home':
					e.preventDefault(), e.stopImmediatePropagation(), this.onStartEnd();
					break;
				case 'End':
					e.preventDefault(), e.stopImmediatePropagation(), this.onStartEnd(!1);
					break;
				default:
					e.preventDefault(), this.onFirstLetter(e.key);
			}
	}
	static onEscape(e) {
		const t = e.target.closest('.hs-dropdown.open');
		if (window.$hsDropdownCollection.find((e) => e.element.el === t)) {
			const e = window.$hsDropdownCollection.find((e) => e.element.el === t);
			e && (e.element.close(), e.element.toggle.focus());
		} else this.closeCurrentlyOpened();
	}
	static onEnter(e) {
		var t;
		const n = e.target,
			{ element: o } =
				null !==
					(t = window.$hsDropdownCollection.find(
						(e) => e.element.el === n.closest('.hs-dropdown'),
					)) && void 0 !== t
					? t
					: null;
		if (o && n.classList.contains('hs-dropdown-toggle'))
			e.preventDefault(), o.open();
		else if (o && 'menuitemcheckbox' === n.getAttribute('role'))
			o.selectCheckbox(n), o.close();
		else {
			if (!o || 'menuitemradio' !== n.getAttribute('role')) return !1;
			o.selectRadio(n), o.close();
		}
	}
	static onArrow(e = !0) {
		const t = window.$hsDropdownCollection.find((e) =>
			e.element.el.classList.contains('open'),
		);
		if (t) {
			const n = t.element.menu;
			if (!n) return !1;
			const o = e
					? Array.from(
							n.querySelectorAll(
								'a:not([hidden]), .hs-dropdown > button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])',
							),
						).reverse()
					: Array.from(
							n.querySelectorAll(
								'a:not([hidden]), .hs-dropdown > button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])',
							),
						),
				i = Array.from(o)
					.filter((e) => {
						const t = e;
						return null === t.closest('[hidden]') && null !== t.offsetParent;
					})
					.filter((e) => !e.classList.contains('disabled')),
				r = n.querySelector(
					'a:focus, button:focus, [role="button"]:focus, [role^="menuitem"]:focus',
				);
			let s = i.findIndex((e) => e === r);
			s + 1 < i.length && s++, i[s].focus();
		}
	}
	static onArrowX(e, t) {
		var n, o;
		const i = e.target,
			r = i.closest('.hs-dropdown.open'),
			s =
				!!r && !(null == r ? void 0 : r.parentElement.closest('.hs-dropdown')),
			l =
				null !== (n = a.getInstance(i.closest('.hs-dropdown'), !0)) &&
				void 0 !== n
					? n
					: null,
			c = l.element.menu.querySelector(
				'a, button, [role="button"], [role^="menuitem"]',
			);
		if (s && !i.classList.contains('hs-dropdown-toggle')) return !1;
		const d =
			null !== (o = a.getInstance(i.closest('.hs-dropdown.open'), !0)) &&
			void 0 !== o
				? o
				: null;
		if (
			l.element.el.classList.contains('open') &&
			l.element.el._popper.state.placement.includes(t)
		)
			return c.focus(), !1;
		console.log(l);
		const u = l.element.calculatePopperPosition();
		if (s && !u.includes(t)) return !1;
		u.includes(t) && i.classList.contains('hs-dropdown-toggle')
			? (l.element.open(), c.focus())
			: (d.element.close(!1), d.element.toggle.focus());
	}
	static onStartEnd(e = !0) {
		const t = window.$hsDropdownCollection.find((e) =>
			e.element.el.classList.contains('open'),
		);
		if (t) {
			const n = t.element.menu;
			if (!n) return !1;
			const o = (
				e
					? Array.from(
							n.querySelectorAll(
								'a, button, [role="button"], [role^="menuitem"]',
							),
						)
					: Array.from(
							n.querySelectorAll(
								'a, button, [role="button"], [role^="menuitem"]',
							),
						).reverse()
			).filter((e) => !e.classList.contains('disabled'));
			o.length && o[0].focus();
		}
	}
	static onFirstLetter(e) {
		const t = window.$hsDropdownCollection.find((e) =>
			e.element.el.classList.contains('open'),
		);
		if (t) {
			const n = t.element.menu;
			if (!n) return !1;
			const o = Array.from(
					n.querySelectorAll('a, [role="button"], [role^="menuitem"]'),
				),
				i = () =>
					o.findIndex(
						(t, n) =>
							t.innerText.toLowerCase().charAt(0) === e.toLowerCase() &&
							this.history.existsInHistory(n),
					);
			let r = i();
			-1 === r && (this.history.clearHistory(), (r = i())),
				-1 !== r && (o[r].focus(), this.history.addHistory(r));
		}
	}
	static closeCurrentlyOpened(e = null, t = !0) {
		const n =
			e &&
			e.closest('.hs-dropdown') &&
			e.closest('.hs-dropdown').parentElement.closest('.hs-dropdown')
				? e.closest('.hs-dropdown').parentElement.closest('.hs-dropdown')
				: null;
		let o = n
			? window.$hsDropdownCollection.filter(
					(e) =>
						e.element.el.classList.contains('open') &&
						e.element.menu
							.closest('.hs-dropdown')
							.parentElement.closest('.hs-dropdown') === n,
				)
			: window.$hsDropdownCollection.filter((e) =>
					e.element.el.classList.contains('open'),
				);
		e &&
			e.closest('.hs-dropdown') &&
			'inside' === (0, i.BF)(e.closest('.hs-dropdown'), '--auto-close') &&
			(o = o.filter((t) => t.element.el !== e.closest('.hs-dropdown'))),
			o &&
				o.forEach((e) => {
					if (
						'false' === e.element.closeMode ||
						'outside' === e.element.closeMode
					)
						return !1;
					e.element.close(t);
				}),
			o &&
				o.forEach((e) => {
					if ('contextmenu' !== (0, i.BF)(e.element.el, '--trigger')) return !1;
					(document.body.style.overflow = ''),
						(document.body.style.paddingRight = '');
				});
	}
	static on(e, t, n) {
		const o = window.$hsDropdownCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		o && (o.element.events[e] = n);
	}
}
window.addEventListener('load', () => {
	a.autoInit();
}),
	window.addEventListener('resize', () => {
		window.$hsDropdownCollection || (window.$hsDropdownCollection = []),
			window.$hsDropdownCollection.forEach((e) => e.element.resizeHandler());
	}),
	'undefined' != typeof window && (window.HSDropdown = a);
const c = a;
var d = o.A;
export { d as default };
