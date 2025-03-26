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
				223: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.BREAKPOINTS =
							e.COMBO_BOX_ACCESSIBILITY_KEY_SET =
							e.SELECT_ACCESSIBILITY_KEY_SET =
							e.TABS_ACCESSIBILITY_KEY_SET =
							e.OVERLAY_ACCESSIBILITY_KEY_SET =
							e.DROPDOWN_ACCESSIBILITY_KEY_SET =
							e.POSITIONS =
								void 0),
						(e.POSITIONS = {
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
						(e.DROPDOWN_ACCESSIBILITY_KEY_SET = [
							'Escape',
							'ArrowUp',
							'ArrowDown',
							'ArrowRight',
							'ArrowLeft',
							'Home',
							'End',
							'Enter',
						]),
						(e.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
						(e.TABS_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
						]),
						(e.SELECT_ACCESSIBILITY_KEY_SET = [
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
						(e.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
						]),
						(e.BREAKPOINTS = {
							xs: 0,
							sm: 640,
							md: 768,
							lg: 1024,
							xl: 1280,
							'2xl': 1536,
						});
				},
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
				442: function (t, e, i) {
					/*
					 * HSSelect
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
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
						s =
							(this && this.__assign) ||
							function () {
								return (
									(s =
										Object.assign ||
										function (t) {
											for (var e, i = 1, n = arguments.length; i < n; i++)
												for (var o in (e = arguments[i]))
													Object.prototype.hasOwnProperty.call(e, o) &&
														(t[o] = e[o]);
											return t;
										}),
									s.apply(this, arguments)
								);
							},
						r =
							(this && this.__awaiter) ||
							function (t, e, i, n) {
								return new (i || (i = Promise))(function (o, s) {
									function r(t) {
										try {
											a(n.next(t));
										} catch (t) {
											s(t);
										}
									}
									function l(t) {
										try {
											a(n.throw(t));
										} catch (t) {
											s(t);
										}
									}
									function a(t) {
										var e;
										t.done
											? o(t.value)
											: ((e = t.value),
												e instanceof i
													? e
													: new i(function (t) {
															t(e);
														})).then(r, l);
									}
									a((n = n.apply(t, e || [])).next());
								});
							},
						l =
							(this && this.__generator) ||
							function (t, e) {
								var i,
									n,
									o,
									s,
									r = {
										label: 0,
										sent: function () {
											if (1 & o[0]) throw o[1];
											return o[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(s = { next: l(0), throw: l(1), return: l(2) }),
									'function' == typeof Symbol &&
										(s[Symbol.iterator] = function () {
											return this;
										}),
									s
								);
								function l(l) {
									return function (a) {
										return (function (l) {
											if (i)
												throw new TypeError('Generator is already executing.');
											for (; s && ((s = 0), l[0] && (r = 0)), r; )
												try {
													if (
														((i = 1),
														n &&
															(o =
																2 & l[0]
																	? n.return
																	: l[0]
																		? n.throw ||
																			((o = n.return) && o.call(n), 0)
																		: n.next) &&
															!(o = o.call(n, l[1])).done)
													)
														return o;
													switch (
														((n = 0), o && (l = [2 & l[0], o.value]), l[0])
													) {
														case 0:
														case 1:
															o = l;
															break;
														case 4:
															return r.label++, { value: l[1], done: !1 };
														case 5:
															r.label++, (n = l[1]), (l = [0]);
															continue;
														case 7:
															(l = r.ops.pop()), r.trys.pop();
															continue;
														default:
															if (
																!((o = r.trys),
																(o = o.length > 0 && o[o.length - 1]) ||
																	(6 !== l[0] && 2 !== l[0]))
															) {
																r = 0;
																continue;
															}
															if (
																3 === l[0] &&
																(!o || (l[1] > o[0] && l[1] < o[3]))
															) {
																r.label = l[1];
																break;
															}
															if (6 === l[0] && r.label < o[1]) {
																(r.label = o[1]), (o = l);
																break;
															}
															if (o && r.label < o[2]) {
																(r.label = o[2]), r.ops.push(l);
																break;
															}
															o[2] && r.ops.pop(), r.trys.pop();
															continue;
													}
													l = e.call(t, r);
												} catch (t) {
													(l = [6, t]), (n = 0);
												} finally {
													i = o = 0;
												}
											if (5 & l[0]) throw l[1];
											return { value: l[0] ? l[1] : void 0, done: !0 };
										})([l, a]);
									};
								}
							},
						a =
							(this && this.__spreadArray) ||
							function (t, e, i) {
								if (i || 2 === arguments.length)
									for (var n, o = 0, s = e.length; o < s; o++)
										(!n && o in e) ||
											(n || (n = Array.prototype.slice.call(e, 0, o)),
											(n[o] = e[o]));
								return t.concat(n || Array.prototype.slice.call(e));
							},
						d =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var c = i(292),
						p = d(i(961)),
						u = i(223),
						h = (function (t) {
							function e(e, i) {
								var n,
									o,
									r,
									l,
									a = t.call(this, e, i) || this;
								a.optionId = 0;
								var d = e.getAttribute('data-hs-select'),
									c = d ? JSON.parse(d) : {},
									p = s(s({}, c), i);
								return (
									(a.value =
										(null == p ? void 0 : p.value) || a.el.value || null),
									(a.placeholder =
										(null == p ? void 0 : p.placeholder) || 'Select...'),
									(a.hasSearch = (null == p ? void 0 : p.hasSearch) || !1),
									(a.minSearchLength =
										null !== (n = null == p ? void 0 : p.minSearchLength) &&
										void 0 !== n
											? n
											: 0),
									(a.preventSearchFocus =
										(null == p ? void 0 : p.preventSearchFocus) || !1),
									(a.mode = (null == p ? void 0 : p.mode) || 'default'),
									(a.viewport =
										void 0 !== (null == p ? void 0 : p.viewport)
											? document.querySelector(null == p ? void 0 : p.viewport)
											: null),
									(a.isOpened = Boolean(null == p ? void 0 : p.isOpened) || !1),
									(a.isMultiple = a.el.hasAttribute('multiple') || !1),
									(a.isDisabled = a.el.hasAttribute('disabled') || !1),
									(a.selectedItems = []),
									(a.apiUrl = (null == p ? void 0 : p.apiUrl) || null),
									(a.apiQuery = (null == p ? void 0 : p.apiQuery) || null),
									(a.apiOptions = (null == p ? void 0 : p.apiOptions) || null),
									(a.apiSearchQueryKey =
										(null == p ? void 0 : p.apiSearchQueryKey) || null),
									(a.apiDataPart =
										(null == p ? void 0 : p.apiDataPart) || null),
									(a.apiFieldsMap =
										(null == p ? void 0 : p.apiFieldsMap) || null),
									(a.apiIconTag = (null == p ? void 0 : p.apiIconTag) || null),
									(a.wrapperClasses =
										(null == p ? void 0 : p.wrapperClasses) || null),
									(a.toggleTag = (null == p ? void 0 : p.toggleTag) || null),
									(a.toggleClasses =
										(null == p ? void 0 : p.toggleClasses) || null),
									(a.toggleCountText =
										void 0 === typeof (null == p ? void 0 : p.toggleCountText)
											? null
											: p.toggleCountText),
									(a.toggleCountTextPlacement =
										(null == p ? void 0 : p.toggleCountTextPlacement) ||
										'postfix'),
									(a.toggleCountTextMinItems =
										(null == p ? void 0 : p.toggleCountTextMinItems) || 1),
									(a.toggleCountTextMode =
										(null == p ? void 0 : p.toggleCountTextMode) ||
										'countAfterLimit'),
									(a.toggleSeparators = {
										items:
											(null === (o = null == p ? void 0 : p.toggleSeparators) ||
											void 0 === o
												? void 0
												: o.items) || ', ',
										betweenItemsAndCounter:
											(null === (r = null == p ? void 0 : p.toggleSeparators) ||
											void 0 === r
												? void 0
												: r.betweenItemsAndCounter) || 'and',
									}),
									(a.tagsItemTemplate =
										(null == p ? void 0 : p.tagsItemTemplate) || null),
									(a.tagsItemClasses =
										(null == p ? void 0 : p.tagsItemClasses) || null),
									(a.tagsInputId =
										(null == p ? void 0 : p.tagsInputId) || null),
									(a.tagsInputClasses =
										(null == p ? void 0 : p.tagsInputClasses) || null),
									(a.dropdownTag =
										(null == p ? void 0 : p.dropdownTag) || null),
									(a.dropdownClasses =
										(null == p ? void 0 : p.dropdownClasses) || null),
									(a.dropdownDirectionClasses =
										(null == p ? void 0 : p.dropdownDirectionClasses) || null),
									(a.dropdownSpace =
										(null == p ? void 0 : p.dropdownSpace) || 10),
									(a.dropdownPlacement =
										(null == p ? void 0 : p.dropdownPlacement) || null),
									(a.dropdownVerticalFixedPlacement =
										(null == p ? void 0 : p.dropdownVerticalFixedPlacement) ||
										null),
									(a.dropdownScope =
										(null == p ? void 0 : p.dropdownScope) || 'parent'),
									(a.searchTemplate =
										(null == p ? void 0 : p.searchTemplate) || null),
									(a.searchWrapperTemplate =
										(null == p ? void 0 : p.searchWrapperTemplate) || null),
									(a.searchWrapperClasses =
										(null == p ? void 0 : p.searchWrapperClasses) ||
										'bg-white p-2 sticky top-0'),
									(a.searchId = (null == p ? void 0 : p.searchId) || null),
									(a.searchLimit =
										(null == p ? void 0 : p.searchLimit) || 1 / 0),
									(a.isSearchDirectMatch =
										void 0 === (null == p ? void 0 : p.isSearchDirectMatch) ||
										(null == p ? void 0 : p.isSearchDirectMatch)),
									(a.searchClasses =
										(null == p ? void 0 : p.searchClasses) ||
										'block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 py-2 px-3 my-2 mx-4'),
									(a.searchPlaceholder =
										(null == p ? void 0 : p.searchPlaceholder) || 'Search...'),
									(a.searchNoResultTemplate =
										(null == p ? void 0 : p.searchNoResultTemplate) ||
										'<span></span>'),
									(a.searchNoResultText =
										(null == p ? void 0 : p.searchNoResultText) ||
										'No results found'),
									(a.searchNoResultClasses =
										(null == p ? void 0 : p.searchNoResultClasses) ||
										'px-4 text-sm text-gray-800 dark:text-neutral-200'),
									(a.optionAllowEmptyOption =
										void 0 !==
											(null == p ? void 0 : p.optionAllowEmptyOption) &&
										(null == p ? void 0 : p.optionAllowEmptyOption)),
									(a.optionTemplate =
										(null == p ? void 0 : p.optionTemplate) || null),
									(a.optionTag = (null == p ? void 0 : p.optionTag) || null),
									(a.optionClasses =
										(null == p ? void 0 : p.optionClasses) || null),
									(a.extraMarkup =
										(null == p ? void 0 : p.extraMarkup) || null),
									(a.descriptionClasses =
										(null == p ? void 0 : p.descriptionClasses) || null),
									(a.iconClasses =
										(null == p ? void 0 : p.iconClasses) || null),
									(a.isAddTagOnEnter =
										null === (l = null == p ? void 0 : p.isAddTagOnEnter) ||
										void 0 === l ||
										l),
									(a.animationInProcess = !1),
									(a.selectOptions = []),
									(a.remoteOptions = []),
									(a.tagsInputHelper = null),
									a.init(),
									a
								);
							}
							return (
								o(e, t),
								(e.prototype.wrapperClick = function (t) {
									t.target.closest('[data-hs-select-dropdown]') ||
										t.target.closest('[data-tag-value]') ||
										this.tagsInput.focus();
								}),
								(e.prototype.toggleClick = function () {
									if (this.isDisabled) return !1;
									this.toggleFn();
								}),
								(e.prototype.tagsInputFocus = function () {
									this.isOpened || this.open();
								}),
								(e.prototype.tagsInputInput = function () {
									this.calculateInputWidth();
								}),
								(e.prototype.tagsInputInputSecond = function (t) {
									this.searchOptions(t.target.value);
								}),
								(e.prototype.tagsInputKeydown = function (t) {
									if ('Enter' === t.key && this.isAddTagOnEnter) {
										var e = t.target.value;
										if (
											this.selectOptions.find(function (t) {
												return t.val === e;
											})
										)
											return !1;
										this.addSelectOption(e, e),
											this.buildOption(e, e),
											this.dropdown
												.querySelector('[data-value="'.concat(e, '"]'))
												.click(),
											this.resetTagsInputField();
									}
								}),
								(e.prototype.searchInput = function (t) {
									var e = t.target.value;
									this.apiUrl ? this.remoteSearch(e) : this.searchOptions(e);
								}),
								(e.prototype.setValue = function (t) {
									((this.value = t), this.clearSelections(), Array.isArray(t))
										? 'tags' === this.mode
											? (this.unselectMultipleItems(),
												this.selectMultipleItems(),
												(this.selectedItems = []),
												this.wrapper
													.querySelectorAll('[data-tag-value]')
													.forEach(function (t) {
														return t.remove();
													}),
												this.setTagsItems(),
												this.reassignTagsInputPlaceholder(
													this.value.length ? '' : this.placeholder,
												))
											: ((this.toggleTextWrapper.innerHTML = this.value.length
													? this.stringFromValue()
													: this.placeholder),
												this.unselectMultipleItems(),
												this.selectMultipleItems())
										: (this.setToggleTitle(),
											this.toggle.querySelector('[data-icon]') &&
												this.setToggleIcon(),
											this.toggle.querySelector('[data-title]') &&
												this.setToggleTitle(),
											this.selectSingleItem());
								}),
								(e.prototype.init = function () {
									this.createCollection(window.$hsSelectCollection, this),
										this.build();
								}),
								(e.prototype.build = function () {
									var t = this;
									if (
										((this.el.style.display = 'none'),
										this.el.children &&
											Array.from(this.el.children)
												.filter(function (e) {
													return (
														t.optionAllowEmptyOption ||
														(!t.optionAllowEmptyOption &&
															e.value &&
															'' !== e.value)
													);
												})
												.forEach(function (e) {
													var i = e.getAttribute('data-hs-select-option');
													t.selectOptions = a(
														a([], t.selectOptions, !0),
														[
															{
																title: e.textContent,
																val: e.value,
																disabled: e.disabled,
																options:
																	'undefined' !== i ? JSON.parse(i) : null,
															},
														],
														!1,
													);
												}),
										this.isMultiple)
									) {
										var e = Array.from(this.el.children).filter(function (t) {
											return t.selected;
										});
										if (e) {
											var i = [];
											e.forEach(function (t) {
												i.push(t.value);
											}),
												(this.value = i);
										}
									}
									this.buildWrapper(),
										'tags' === this.mode
											? this.buildTags()
											: this.buildToggle(),
										this.buildDropdown(),
										this.extraMarkup && this.buildExtraMarkup();
								}),
								(e.prototype.buildWrapper = function () {
									var t = this;
									(this.wrapper = document.createElement('div')),
										this.wrapper.classList.add('hs-select', 'relative'),
										'tags' === this.mode &&
											((this.onWrapperClickListener = function (e) {
												return t.wrapperClick(e);
											}),
											this.wrapper.addEventListener(
												'click',
												this.onWrapperClickListener,
											)),
										this.wrapperClasses &&
											(0, c.classToClassList)(
												this.wrapperClasses,
												this.wrapper,
											),
										this.el.before(this.wrapper),
										this.wrapper.append(this.el);
								}),
								(e.prototype.buildExtraMarkup = function () {
									var t = this,
										e = function (e) {
											var i = (0, c.htmlToElement)(e);
											return t.wrapper.append(i), i;
										},
										i = function (e) {
											e.classList.contains('--prevent-click') ||
												e.addEventListener('click', function (e) {
													e.stopPropagation(), t.toggleFn();
												});
										};
									if (Array.isArray(this.extraMarkup))
										this.extraMarkup.forEach(function (t) {
											var n = e(t);
											i(n);
										});
									else {
										var n = e(this.extraMarkup);
										i(n);
									}
								}),
								(e.prototype.buildToggle = function () {
									var t,
										e,
										i,
										n,
										o = this;
									(this.toggleTextWrapper = document.createElement('span')),
										this.toggleTextWrapper.classList.add('truncate'),
										(this.toggle = (0, c.htmlToElement)(
											this.toggleTag || '<div></div>',
										)),
										(i = this.toggle.querySelector('[data-icon]')),
										(n = this.toggle.querySelector('[data-title]')),
										!this.isMultiple && i && this.setToggleIcon(),
										!this.isMultiple && n && this.setToggleTitle(),
										this.isMultiple
											? (this.toggleTextWrapper.innerHTML = this.value.length
													? this.stringFromValue()
													: this.placeholder)
											: (this.toggleTextWrapper.innerHTML =
													(null === (t = this.getItemByValue(this.value)) ||
													void 0 === t
														? void 0
														: t.title) || this.placeholder),
										n || this.toggle.append(this.toggleTextWrapper),
										this.toggleClasses &&
											(0, c.classToClassList)(this.toggleClasses, this.toggle),
										this.isDisabled && this.toggle.classList.add('disabled'),
										this.wrapper && this.wrapper.append(this.toggle),
										(null === (e = this.toggle) || void 0 === e
											? void 0
											: e.ariaExpanded) &&
											(this.isOpened
												? (this.toggle.ariaExpanded = 'true')
												: (this.toggle.ariaExpanded = 'false')),
										(this.onToggleClickListener = function () {
											return o.toggleClick();
										}),
										this.toggle.addEventListener(
											'click',
											this.onToggleClickListener,
										);
								}),
								(e.prototype.setToggleIcon = function () {
									var t,
										e = this.getItemByValue(this.value),
										i = this.toggle.querySelector('[data-icon]');
									if (i) {
										i.innerHTML = '';
										var n = (0, c.htmlToElement)(
											this.apiUrl && this.apiIconTag
												? this.apiIconTag || ''
												: (null === (t = null == e ? void 0 : e.options) ||
													void 0 === t
														? void 0
														: t.icon) || '',
										);
										this.value &&
											this.apiUrl &&
											this.apiIconTag &&
											e[this.apiFieldsMap.icon] &&
											(n.src = e[this.apiFieldsMap.icon] || ''),
											i.append(n),
											n
												? i.classList.remove('hidden')
												: i.classList.add('hidden');
									}
								}),
								(e.prototype.setToggleTitle = function () {
									var t,
										e = this.toggle.querySelector('[data-title]');
									e &&
										((e.innerHTML =
											(null === (t = this.getItemByValue(this.value)) ||
											void 0 === t
												? void 0
												: t.title) || this.placeholder),
										e.classList.add('truncate'),
										this.toggle.append(e));
								}),
								(e.prototype.buildTags = function () {
									this.isDisabled && this.wrapper.classList.add('disabled'),
										this.buildTagsInput(),
										this.setTagsItems();
								}),
								(e.prototype.reassignTagsInputPlaceholder = function (t) {
									(this.tagsInput.placeholder = t),
										(this.tagsInputHelper.innerHTML = t),
										this.calculateInputWidth();
								}),
								(e.prototype.buildTagsItem = function (t) {
									var e,
										i,
										n,
										o,
										s,
										r,
										l,
										a,
										d = this,
										p = this.getItemByValue(t),
										u = document.createElement('div');
									if (
										(u.setAttribute('data-tag-value', t),
										this.tagsItemClasses &&
											(0, c.classToClassList)(this.tagsItemClasses, u),
										this.tagsItemTemplate &&
											((s = (0, c.htmlToElement)(this.tagsItemTemplate)),
											u.append(s)),
										(null === (e = null == p ? void 0 : p.options) ||
										void 0 === e
											? void 0
											: e.icon) || this.apiIconTag)
									) {
										var h = (0, c.htmlToElement)(
											this.apiUrl && this.apiIconTag
												? this.apiIconTag
												: null === (i = null == p ? void 0 : p.options) ||
													  void 0 === i
													? void 0
													: i.icon,
										);
										this.apiUrl &&
											this.apiIconTag &&
											p[this.apiFieldsMap.icon] &&
											(h.src = p[this.apiFieldsMap.icon] || ''),
											(a = s
												? s.querySelector('[data-icon]')
												: document.createElement('span')).append(h),
											s || u.append(a);
									}
									!s ||
										!s.querySelector('[data-icon]') ||
										(null === (n = null == p ? void 0 : p.options) ||
										void 0 === n
											? void 0
											: n.icon) ||
										this.apiUrl ||
										this.apiIconTag ||
										p[
											null === (o = this.apiFieldsMap) || void 0 === o
												? void 0
												: o.icon
										] ||
										s.querySelector('[data-icon]').classList.add('hidden'),
										((r = s
											? s.querySelector('[data-title]')
											: document.createElement('span')).textContent =
											p.title || ''),
										s || u.append(r),
										s
											? (l = s.querySelector('[data-remove]'))
											: (((l = document.createElement('span')).textContent =
													'X'),
												u.append(l)),
										l.addEventListener('click', function () {
											(d.value = d.value.filter(function (e) {
												return e !== t;
											})),
												(d.selectedItems = d.selectedItems.filter(function (e) {
													return e !== t;
												})),
												d.value.length ||
													d.reassignTagsInputPlaceholder(d.placeholder),
												d.unselectMultipleItems(),
												d.selectMultipleItems(),
												u.remove(),
												d.triggerChangeEventForNativeSelect();
										}),
										this.wrapper.append(u);
								}),
								(e.prototype.getItemByValue = function (t) {
									var e = this;
									return this.apiUrl
										? this.remoteOptions.find(function (i) {
												return (
													''.concat(i[e.apiFieldsMap.val]) === t ||
													i[e.apiFieldsMap.title] === t
												);
											})
										: this.selectOptions.find(function (e) {
												return e.val === t;
											});
								}),
								(e.prototype.setTagsItems = function () {
									var t = this;
									this.value &&
										this.value.forEach(function (e) {
											t.selectedItems.includes(e) || t.buildTagsItem(e),
												(t.selectedItems = t.selectedItems.includes(e)
													? t.selectedItems
													: a(a([], t.selectedItems, !0), [e], !1));
										});
								}),
								(e.prototype.buildTagsInput = function () {
									var t = this;
									(this.tagsInput = document.createElement('input')),
										this.tagsInputId && (this.tagsInput.id = this.tagsInputId),
										this.tagsInputClasses &&
											(0, c.classToClassList)(
												this.tagsInputClasses,
												this.tagsInput,
											),
										(this.onTagsInputFocusListener = function () {
											return t.tagsInputFocus();
										}),
										(this.onTagsInputInputListener = function () {
											return t.tagsInputInput();
										}),
										(this.onTagsInputInputSecondListener = (0, c.debounce)(
											function (e) {
												return t.tagsInputInputSecond(e);
											},
										)),
										(this.onTagsInputKeydownListener = function (e) {
											return t.tagsInputKeydown(e);
										}),
										this.tagsInput.addEventListener(
											'focus',
											this.onTagsInputFocusListener,
										),
										this.tagsInput.addEventListener(
											'input',
											this.onTagsInputInputListener,
										),
										this.tagsInput.addEventListener(
											'input',
											this.onTagsInputInputSecondListener,
										),
										this.tagsInput.addEventListener(
											'keydown',
											this.onTagsInputKeydownListener,
										),
										this.wrapper.append(this.tagsInput),
										setTimeout(function () {
											t.adjustInputWidth(),
												t.reassignTagsInputPlaceholder(
													t.value.length ? '' : t.placeholder,
												);
										});
								}),
								(e.prototype.buildDropdown = function () {
									var t = this;
									(this.dropdown = (0, c.htmlToElement)(
										this.dropdownTag || '<div></div>',
									)),
										this.dropdown.setAttribute('data-hs-select-dropdown', ''),
										'parent' === this.dropdownScope &&
											(this.dropdown.classList.add('absolute'),
											this.dropdownVerticalFixedPlacement ||
												this.dropdown.classList.add('top-full')),
										(this.dropdown.role = 'listbox'),
										(this.dropdown.tabIndex = -1),
										(this.dropdown.ariaOrientation = 'vertical'),
										this.isOpened || this.dropdown.classList.add('hidden'),
										this.dropdownClasses &&
											(0, c.classToClassList)(
												this.dropdownClasses,
												this.dropdown,
											),
										this.wrapper && this.wrapper.append(this.dropdown),
										this.dropdown && this.hasSearch && this.buildSearch(),
										this.selectOptions &&
											this.selectOptions.forEach(function (e, i) {
												return t.buildOption(
													e.title,
													e.val,
													e.disabled,
													e.selected,
													e.options,
													''.concat(i),
												);
											}),
										this.apiUrl && this.optionsFromRemoteData(),
										'window' === this.dropdownScope && this.buildPopper();
								}),
								(e.prototype.buildPopper = function () {
									'undefined' != typeof Popper &&
										Popper.createPopper &&
										(document.body.appendChild(this.dropdown),
										(this.popperInstance = Popper.createPopper(
											'tags' === this.mode ? this.wrapper : this.toggle,
											this.dropdown,
											{
												placement:
													u.POSITIONS[this.dropdownPlacement] || 'bottom',
												strategy: 'fixed',
												modifiers: [
													{ name: 'offset', options: { offset: [0, 5] } },
												],
											},
										)));
								}),
								(e.prototype.updateDropdownWidth = function () {
									var t = 'tags' === this.mode ? this.wrapper : this.toggle;
									this.dropdown.style.width = ''.concat(t.clientWidth, 'px');
								}),
								(e.prototype.buildSearch = function () {
									var t,
										e = this;
									(this.searchWrapper = (0, c.htmlToElement)(
										this.searchWrapperTemplate || '<div></div>',
									)),
										this.searchWrapperClasses &&
											(0, c.classToClassList)(
												this.searchWrapperClasses,
												this.searchWrapper,
											),
										(t = this.searchWrapper.querySelector('[data-input]'));
									var i = (0, c.htmlToElement)(
										this.searchTemplate || '<input type="text" />',
									);
									(this.search =
										'INPUT' === i.tagName
											? i
											: i.querySelector(':scope input')),
										(this.search.placeholder = this.searchPlaceholder),
										this.searchClasses &&
											(0, c.classToClassList)(this.searchClasses, this.search),
										this.searchId && (this.search.id = this.searchId),
										(this.onSearchInputListener = (0, c.debounce)(function (t) {
											return e.searchInput(t);
										})),
										this.search.addEventListener(
											'input',
											this.onSearchInputListener,
										),
										t ? t.append(i) : this.searchWrapper.append(i),
										this.dropdown.append(this.searchWrapper);
								}),
								(e.prototype.buildOption = function (t, e, i, n, o, s, r) {
									var l,
										d = this;
									void 0 === i && (i = !1),
										void 0 === n && (n = !1),
										void 0 === s && (s = '1');
									var p = null,
										u = null,
										h = (0, c.htmlToElement)(this.optionTag || '<div></div>');
									if (
										(h.setAttribute('data-value', e),
										h.setAttribute('data-title-value', t),
										h.setAttribute('tabIndex', s),
										h.classList.add('cursor-pointer'),
										h.setAttribute('data-id', r || ''.concat(this.optionId)),
										r || this.optionId++,
										i && h.classList.add('disabled'),
										n &&
											(this.isMultiple
												? (this.value = a(a([], this.value, !0), [e], !1))
												: (this.value = e)),
										this.optionTemplate &&
											((p = (0, c.htmlToElement)(this.optionTemplate)),
											h.append(p)),
										p
											? (p.querySelector('[data-title]').textContent = t || '')
											: (h.textContent = t || ''),
										o)
									) {
										if (o.icon) {
											var g = (0, c.htmlToElement)(
												null !== (l = this.apiIconTag) && void 0 !== l
													? l
													: o.icon,
											);
											if (
												(g.classList.add('max-w-full'),
												this.apiUrl &&
													(g.setAttribute('alt', t),
													g.setAttribute('src', o.icon)),
												p)
											)
												p.querySelector('[data-icon]').append(g);
											else {
												var v = (0, c.htmlToElement)('<div></div>');
												this.iconClasses &&
													(0, c.classToClassList)(this.iconClasses, v),
													v.append(g),
													h.append(v);
											}
										}
										if (o.description)
											if (p)
												(u = p.querySelector('[data-description]')) &&
													u.append(o.description);
											else {
												var f = (0, c.htmlToElement)('<div></div>');
												(f.textContent = o.description),
													this.descriptionClasses &&
														(0, c.classToClassList)(this.descriptionClasses, f),
													h.append(f);
											}
									}
									p &&
										p.querySelector('[data-icon]') &&
										!o &&
										!(null == o ? void 0 : o.icon) &&
										p.querySelector('[data-icon]').classList.add('hidden'),
										this.value &&
											(this.isMultiple
												? this.value.includes(e)
												: this.value === e) &&
											h.classList.add('selected'),
										i ||
											h.addEventListener('click', function () {
												return d.onSelectOption(e);
											}),
										this.optionClasses &&
											(0, c.classToClassList)(this.optionClasses, h),
										this.dropdown && this.dropdown.append(h),
										n && this.setNewValue();
								}),
								(e.prototype.buildOptionFromRemoteData = function (
									t,
									e,
									i,
									n,
									o,
									s,
									r,
								) {
									void 0 === i && (i = !1),
										void 0 === n && (n = !1),
										void 0 === o && (o = '1'),
										o
											? this.buildOption(t, e, i, n, r, o, s)
											: alert(
													'ID parameter is required for generating remote options! Please check your API endpoint have it.',
												);
								}),
								(e.prototype.buildOptionsFromRemoteData = function (t) {
									var e = this;
									t.forEach(function (t, i) {
										var n = null,
											o = '',
											s = '',
											r = {
												id: '',
												val: '',
												title: '',
												icon: null,
												description: null,
												rest: {},
											};
										Object.keys(t).forEach(function (i) {
											var l;
											t[e.apiFieldsMap.id] && (n = t[e.apiFieldsMap.id]),
												(t[e.apiFieldsMap.val] || t[e.apiFieldsMap.title]) &&
													(s =
														t[e.apiFieldsMap.val] || t[e.apiFieldsMap.title]),
												t[e.apiFieldsMap.title] &&
													(o = t[e.apiFieldsMap.title]),
												t[e.apiFieldsMap.icon] &&
													(r.icon = t[e.apiFieldsMap.icon]),
												t[
													null === (l = e.apiFieldsMap) || void 0 === l
														? void 0
														: l.description
												] && (r.description = t[e.apiFieldsMap.description]),
												(r.rest[i] = t[i]);
										}),
											e.buildOriginalOption(o, ''.concat(s), n, !1, !1, r),
											e.buildOptionFromRemoteData(
												o,
												''.concat(s),
												!1,
												!1,
												''.concat(i),
												n,
												r,
											);
									}),
										this.sortElements(this.el, 'option'),
										this.sortElements(this.dropdown, '[data-value]');
								}),
								(e.prototype.optionsFromRemoteData = function () {
									return r(this, arguments, void 0, function (t) {
										var e;
										return (
											void 0 === t && (t = ''),
											l(this, function (i) {
												switch (i.label) {
													case 0:
														return [4, this.apiRequest(t)];
													case 1:
														return (
															(e = i.sent()),
															(this.remoteOptions = e),
															e.length
																? this.buildOptionsFromRemoteData(
																		this.remoteOptions,
																	)
																: console.log(
																		'There is no data were responded!',
																	),
															[2]
														);
												}
											})
										);
									});
								}),
								(e.prototype.apiRequest = function () {
									return r(this, arguments, void 0, function (t) {
										var e, i, n, o, s, r;
										return (
											void 0 === t && (t = ''),
											l(this, function (l) {
												switch (l.label) {
													case 0:
														return (
															l.trys.push([0, 3, , 4]),
															(e = this.apiUrl),
															(i = this.apiSearchQueryKey
																? ''
																		.concat(this.apiSearchQueryKey, '=')
																		.concat(t.toLowerCase())
																: null),
															(n = ''.concat(this.apiQuery)),
															(o = this.apiOptions || {}),
															i && (e += '?'.concat(i)),
															this.apiQuery &&
																(e += ''.concat(i ? '&' : '?').concat(n)),
															[4, fetch(e, o)]
														);
													case 1:
														return [4, l.sent().json()];
													case 2:
														return (
															(s = l.sent()),
															[2, this.apiDataPart ? s[this.apiDataPart] : s]
														);
													case 3:
														return (r = l.sent()), console.error(r), [3, 4];
													case 4:
														return [2];
												}
											})
										);
									});
								}),
								(e.prototype.sortElements = function (t, e) {
									var i = Array.from(t.querySelectorAll(e));
									i.sort(function (t, e) {
										var i =
												t.classList.contains('selected') ||
												t.hasAttribute('selected'),
											n =
												e.classList.contains('selected') ||
												e.hasAttribute('selected');
										return i && !n ? -1 : !i && n ? 1 : 0;
									}),
										i.forEach(function (e) {
											return t.appendChild(e);
										});
								}),
								(e.prototype.remoteSearch = function (t) {
									return r(this, void 0, void 0, function () {
										var e,
											i,
											n,
											o,
											s,
											r = this;
										return l(this, function (l) {
											switch (l.label) {
												case 0:
													return t.length <= this.minSearchLength
														? [4, this.apiRequest('')]
														: [3, 2];
												case 1:
													return (
														(e = l.sent()),
														(this.remoteOptions = e),
														Array.from(
															this.dropdown.querySelectorAll('[data-value]'),
														).forEach(function (t) {
															return t.remove();
														}),
														Array.from(
															this.el.querySelectorAll('option[value]'),
														).forEach(function (t) {
															t.remove();
														}),
														e.length
															? this.buildOptionsFromRemoteData(e)
															: console.log('No data responded!'),
														[2, !1]
													);
												case 2:
													return [4, this.apiRequest(t)];
												case 3:
													return (
														(i = l.sent()),
														(this.remoteOptions = i),
														(n = i.map(function (t) {
															return ''.concat(t.id);
														})),
														null,
														(s =
															this.dropdown.querySelectorAll('[data-value]')),
														this.el
															.querySelectorAll('[data-hs-select-option]')
															.forEach(function (t) {
																var e,
																	i = t.getAttribute('data-id');
																n.includes(i) ||
																	(null === (e = r.value) || void 0 === e
																		? void 0
																		: e.includes(t.value)) ||
																	r.destroyOriginalOption(t.value);
															}),
														s.forEach(function (t) {
															var e,
																i = t.getAttribute('data-id');
															n.includes(i) ||
															(null === (e = r.value) || void 0 === e
																? void 0
																: e.includes(t.getAttribute('data-value')))
																? (n = n.filter(function (t) {
																		return t !== i;
																	}))
																: r.destroyOption(t.getAttribute('data-value'));
														}),
														(o = i.filter(function (t) {
															return n.includes(''.concat(t.id));
														})).length
															? this.buildOptionsFromRemoteData(o)
															: console.log('No data responded!'),
														[2]
													);
											}
										});
									});
								}),
								(e.prototype.destroyOption = function (t) {
									var e = this.dropdown.querySelector(
										'[data-value="'.concat(t, '"]'),
									);
									if (!e) return !1;
									e.remove();
								}),
								(e.prototype.buildOriginalOption = function (t, e, i, n, o, s) {
									var r = (0, c.htmlToElement)('<option></option>');
									r.setAttribute('value', e),
										n && r.setAttribute('disabled', 'disabled'),
										o && r.setAttribute('selected', 'selected'),
										i && r.setAttribute('data-id', i),
										r.setAttribute('data-hs-select-option', JSON.stringify(s)),
										(r.innerText = t),
										this.el.append(r);
								}),
								(e.prototype.destroyOriginalOption = function (t) {
									var e = this.el.querySelector('[value="'.concat(t, '"]'));
									if (!e) return !1;
									e.remove();
								}),
								(e.prototype.buildTagsInputHelper = function () {
									(this.tagsInputHelper = document.createElement('span')),
										(this.tagsInputHelper.style.fontSize =
											window.getComputedStyle(this.tagsInput).fontSize),
										(this.tagsInputHelper.style.fontFamily =
											window.getComputedStyle(this.tagsInput).fontFamily),
										(this.tagsInputHelper.style.fontWeight =
											window.getComputedStyle(this.tagsInput).fontWeight),
										(this.tagsInputHelper.style.letterSpacing =
											window.getComputedStyle(this.tagsInput).letterSpacing),
										(this.tagsInputHelper.style.visibility = 'hidden'),
										(this.tagsInputHelper.style.whiteSpace = 'pre'),
										(this.tagsInputHelper.style.position = 'absolute'),
										this.wrapper.appendChild(this.tagsInputHelper);
								}),
								(e.prototype.calculateInputWidth = function () {
									this.tagsInputHelper.textContent =
										this.tagsInput.value || this.tagsInput.placeholder;
									var t =
											parseInt(
												window.getComputedStyle(this.tagsInput).paddingLeft,
											) +
											parseInt(
												window.getComputedStyle(this.tagsInput).paddingRight,
											),
										e =
											parseInt(
												window.getComputedStyle(this.tagsInput).borderLeftWidth,
											) +
											parseInt(
												window.getComputedStyle(this.tagsInput)
													.borderRightWidth,
											),
										i = this.tagsInputHelper.offsetWidth + t + e,
										n =
											this.wrapper.offsetWidth -
											(parseInt(
												window.getComputedStyle(this.wrapper).paddingLeft,
											) +
												parseInt(
													window.getComputedStyle(this.wrapper).paddingRight,
												));
									this.tagsInput.style.width = ''.concat(
										Math.min(i, n) + 2,
										'px',
									);
								}),
								(e.prototype.adjustInputWidth = function () {
									this.buildTagsInputHelper(), this.calculateInputWidth();
								}),
								(e.prototype.onSelectOption = function (t) {
									var e = this;
									if (
										(this.clearSelections(),
										this.isMultiple
											? ((this.value = this.value.includes(t)
													? Array.from(this.value).filter(function (e) {
															return e !== t;
														})
													: a(a([], Array.from(this.value), !0), [t], !1)),
												this.selectMultipleItems(),
												this.setNewValue())
											: ((this.value = t),
												this.selectSingleItem(),
												this.setNewValue()),
										this.fireEvent('change', this.value),
										'tags' === this.mode)
									) {
										var i = this.selectedItems.filter(function (t) {
											return !e.value.includes(t);
										});
										i.length &&
											i.forEach(function (t) {
												(e.selectedItems = e.selectedItems.filter(function (e) {
													return e !== t;
												})),
													e.wrapper
														.querySelector('[data-tag-value="'.concat(t, '"]'))
														.remove();
											}),
											this.resetTagsInputField();
									}
									this.isMultiple ||
										(this.toggle.querySelector('[data-icon]') &&
											this.setToggleIcon(),
										this.toggle.querySelector('[data-title]') &&
											this.setToggleTitle(),
										this.close(!0)),
										this.value.length ||
											'tags' !== this.mode ||
											this.reassignTagsInputPlaceholder(this.placeholder),
										this.isOpened &&
											'tags' === this.mode &&
											this.tagsInput &&
											this.tagsInput.focus(),
										this.triggerChangeEventForNativeSelect();
								}),
								(e.prototype.triggerChangeEventForNativeSelect = function () {
									var t = new Event('change', { bubbles: !0 });
									this.el.dispatchEvent(t),
										(0, c.dispatch)('change.hs.select', this.el, this.value);
								}),
								(e.prototype.addSelectOption = function (t, e, i, n, o) {
									this.selectOptions = a(
										a([], this.selectOptions, !0),
										[
											{
												title: t,
												val: e,
												disabled: i,
												selected: n,
												options: o,
											},
										],
										!1,
									);
								}),
								(e.prototype.removeSelectOption = function (t, e) {
									if (
										(void 0 === e && (e = !1),
										!!!this.selectOptions.some(function (e) {
											return e.val === t;
										}))
									)
										return !1;
									(this.selectOptions = this.selectOptions.filter(function (e) {
										return e.val !== t;
									})),
										(this.value = e
											? this.value.filter(function (e) {
													return e !== t;
												})
											: t);
								}),
								(e.prototype.resetTagsInputField = function () {
									(this.tagsInput.value = ''),
										this.reassignTagsInputPlaceholder(''),
										this.searchOptions('');
								}),
								(e.prototype.clearSelections = function () {
									Array.from(this.dropdown.children).forEach(function (t) {
										t.classList.contains('selected') &&
											t.classList.remove('selected');
									}),
										Array.from(this.el.children).forEach(function (t) {
											t.selected && (t.selected = !1);
										});
								}),
								(e.prototype.setNewValue = function () {
									var t;
									'tags' === this.mode
										? this.setTagsItems()
										: (
													null === (t = this.value) || void 0 === t
														? void 0
														: t.length
											  )
											? (this.toggleTextWrapper.innerHTML =
													this.stringFromValue())
											: (this.toggleTextWrapper.innerHTML = this.placeholder);
								}),
								(e.prototype.stringFromValueBasic = function (t) {
									var e,
										i = this,
										n = [],
										o = '';
									if (
										(t.forEach(function (t) {
											i.isMultiple
												? i.value.includes(t.val) && n.push(t.title)
												: i.value === t.val && n.push(t.title);
										}),
										void 0 !== this.toggleCountText &&
											null !== this.toggleCountText &&
											n.length >= this.toggleCountTextMinItems)
									)
										if ('nItemsAndCount' === this.toggleCountTextMode) {
											var s = n.slice(0, this.toggleCountTextMinItems - 1),
												r = [s.join(this.toggleSeparators.items)],
												l = ''.concat(n.length - s.length);
											if (
												((null ===
													(e = null == this ? void 0 : this.toggleSeparators) ||
												void 0 === e
													? void 0
													: e.betweenItemsAndCounter) &&
													r.push(this.toggleSeparators.betweenItemsAndCounter),
												this.toggleCountText)
											)
												switch (this.toggleCountTextPlacement) {
													case 'postfix-no-space':
														r.push(''.concat(l).concat(this.toggleCountText));
														break;
													case 'prefix-no-space':
														r.push(''.concat(this.toggleCountText).concat(l));
														break;
													case 'prefix':
														r.push(
															''.concat(this.toggleCountText, ' ').concat(l),
														);
														break;
													default:
														r.push(
															''.concat(l, ' ').concat(this.toggleCountText),
														);
												}
											o = r.join(' ');
										} else
											o = ''.concat(n.length, ' ').concat(this.toggleCountText);
									else o = n.join(this.toggleSeparators.items);
									return o;
								}),
								(e.prototype.stringFromValueRemoteData = function () {
									var t = this,
										e = this.dropdown.querySelectorAll('[data-title-value]'),
										i = [],
										n = '';
									if (
										(e.forEach(function (e) {
											var n = e.getAttribute('data-value'),
												o = e.getAttribute('data-title-value');
											t.isMultiple
												? t.value.includes(n) && i.push(o)
												: t.value === n && i.push(o);
										}),
										this.toggleCountText &&
											'' !== this.toggleCountText &&
											i.length >= this.toggleCountTextMinItems)
									)
										if ('nItemsAndCount' === this.toggleCountTextMode) {
											var o = i.slice(0, this.toggleCountTextMinItems - 1);
											n = ''
												.concat(o.join(this.toggleSeparators.items), ' ')
												.concat(
													this.toggleSeparators.betweenItemsAndCounter,
													' ',
												)
												.concat(i.length - o.length, ' ')
												.concat(this.toggleCountText);
										} else
											n = ''.concat(i.length, ' ').concat(this.toggleCountText);
									else n = i.join(this.toggleSeparators.items);
									return n;
								}),
								(e.prototype.stringFromValue = function () {
									return this.apiUrl
										? this.stringFromValueRemoteData()
										: this.stringFromValueBasic(this.selectOptions);
								}),
								(e.prototype.selectSingleItem = function () {
									var t = this;
									Array.from(this.el.children).find(function (e) {
										return t.value === e.value;
									}).selected = !0;
									var e = Array.from(this.dropdown.children).find(function (e) {
										return t.value === e.getAttribute('data-value');
									});
									e && e.classList.add('selected');
								}),
								(e.prototype.selectMultipleItems = function () {
									var t = this;
									Array.from(this.dropdown.children)
										.filter(function (e) {
											return t.value.includes(e.getAttribute('data-value'));
										})
										.forEach(function (t) {
											return t.classList.add('selected');
										}),
										Array.from(this.el.children)
											.filter(function (e) {
												return t.value.includes(e.value);
											})
											.forEach(function (t) {
												return (t.selected = !0);
											});
								}),
								(e.prototype.unselectMultipleItems = function () {
									Array.from(this.dropdown.children).forEach(function (t) {
										return t.classList.remove('selected');
									}),
										Array.from(this.el.children).forEach(function (t) {
											return (t.selected = !1);
										});
								}),
								(e.prototype.searchOptions = function (t) {
									var e = this;
									if (t.length <= this.minSearchLength)
										return (
											this.searchNoResult &&
												(this.searchNoResult.remove(),
												(this.searchNoResult = null)),
											this.dropdown
												.querySelectorAll('[data-value]')
												.forEach(function (t) {
													t.classList.remove('hidden');
												}),
											!1
										);
									this.searchNoResult &&
										(this.searchNoResult.remove(),
										(this.searchNoResult = null)),
										(this.searchNoResult = (0, c.htmlToElement)(
											this.searchNoResultTemplate,
										)),
										(this.searchNoResult.innerText = this.searchNoResultText),
										(0, c.classToClassList)(
											this.searchNoResultClasses,
											this.searchNoResult,
										);
									var i,
										n = this.dropdown.querySelectorAll('[data-value]'),
										o = !1;
									this.searchLimit && (i = 0),
										n.forEach(function (n) {
											var s,
												r = n
													.getAttribute('data-title-value')
													.toLocaleLowerCase();
											if (e.isSearchDirectMatch)
												s =
													!r.includes(t.toLowerCase()) ||
													(e.searchLimit && i >= e.searchLimit);
											else {
												var l = t
													? t
															.split('')
															.map(function (t) {
																return /\w/.test(t)
																	? ''.concat(t, '[\\W_]*')
																	: '\\W*';
															})
															.join('')
													: '';
												s =
													!new RegExp(l, 'i').test(r.trim()) ||
													(e.searchLimit && i >= e.searchLimit);
											}
											s
												? n.classList.add('hidden')
												: (n.classList.remove('hidden'),
													(o = !0),
													e.searchLimit && i++);
										}),
										o || this.dropdown.append(this.searchNoResult);
								}),
								(e.prototype.eraseToggleIcon = function () {
									var t = this.toggle.querySelector('[data-icon]');
									t && ((t.innerHTML = null), t.classList.add('hidden'));
								}),
								(e.prototype.eraseToggleTitle = function () {
									var t = this.toggle.querySelector('[data-title]');
									t
										? (t.innerHTML = this.placeholder)
										: (this.toggleTextWrapper.innerHTML = this.placeholder);
								}),
								(e.prototype.toggleFn = function () {
									this.isOpened ? this.close() : this.open();
								}),
								(e.prototype.destroy = function () {
									this.wrapper &&
										this.wrapper.removeEventListener(
											'click',
											this.onWrapperClickListener,
										),
										this.toggle &&
											this.toggle.removeEventListener(
												'click',
												this.onToggleClickListener,
											),
										this.tagsInput &&
											(this.tagsInput.removeEventListener(
												'focus',
												this.onTagsInputFocusListener,
											),
											this.tagsInput.removeEventListener(
												'input',
												this.onTagsInputInputListener,
											),
											this.tagsInput.removeEventListener(
												'input',
												this.onTagsInputInputSecondListener,
											),
											this.tagsInput.removeEventListener(
												'keydown',
												this.onTagsInputKeydownListener,
											)),
										this.search &&
											this.search.removeEventListener(
												'input',
												this.onSearchInputListener,
											);
									var t = this.el.parentElement.parentElement;
									this.el.classList.remove('hidden'),
										(this.el.style.display = ''),
										t.prepend(this.el),
										t.querySelector('.hs-select').remove(),
										(this.wrapper = null);
								}),
								(e.prototype.open = function () {
									var t,
										e = this,
										i =
											(null ===
												(t =
													null === window || void 0 === window
														? void 0
														: window.$hsSelectCollection) || void 0 === t
												? void 0
												: t.find(function (t) {
														return t.element.isOpened;
													})) || null;
									if ((i && i.element.close(), this.animationInProcess))
										return !1;
									(this.animationInProcess = !0),
										'window' === this.dropdownScope &&
											this.dropdown.classList.add('invisible'),
										this.dropdown.classList.remove('hidden'),
										this.recalculateDirection(),
										setTimeout(function () {
											var t;
											(null === (t = null == e ? void 0 : e.toggle) ||
											void 0 === t
												? void 0
												: t.ariaExpanded) && (e.toggle.ariaExpanded = 'true'),
												e.wrapper.classList.add('active'),
												e.dropdown.classList.add('opened'),
												e.dropdown.classList.contains('w-full') &&
													'window' === e.dropdownScope &&
													e.updateDropdownWidth(),
												e.popperInstance &&
													'window' === e.dropdownScope &&
													(e.popperInstance.update(),
													e.dropdown.classList.remove('invisible')),
												e.hasSearch &&
													!e.preventSearchFocus &&
													e.search.focus(),
												(e.animationInProcess = !1);
										}),
										(this.isOpened = !0);
								}),
								(e.prototype.close = function (t) {
									var e,
										i,
										n,
										o,
										s = this;
									if ((void 0 === t && (t = !1), this.animationInProcess))
										return !1;
									(this.animationInProcess = !0),
										(null === (e = null == this ? void 0 : this.toggle) ||
										void 0 === e
											? void 0
											: e.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
										this.wrapper.classList.remove('active'),
										this.dropdown.classList.remove(
											'opened',
											'bottom-full',
											'top-full',
										),
										(null === (i = this.dropdownDirectionClasses) ||
										void 0 === i
											? void 0
											: i.bottom) &&
											this.dropdown.classList.remove(
												this.dropdownDirectionClasses.bottom,
											),
										(null === (n = this.dropdownDirectionClasses) ||
										void 0 === n
											? void 0
											: n.top) &&
											this.dropdown.classList.remove(
												this.dropdownDirectionClasses.top,
											),
										(this.dropdown.style.marginTop = ''),
										(this.dropdown.style.marginBottom = ''),
										(0, c.afterTransition)(this.dropdown, function () {
											s.dropdown.classList.add('hidden'),
												s.hasSearch &&
													((s.search.value = ''),
													s.search.dispatchEvent(
														new Event('input', { bubbles: !0 }),
													),
													s.search.blur()),
												t && s.toggle.focus(),
												(s.animationInProcess = !1);
										}),
										null ===
											(o = this.dropdown.querySelector(
												'.hs-select-option-highlighted',
											)) ||
											void 0 === o ||
											o.classList.remove('hs-select-option-highlighted'),
										(this.isOpened = !1);
								}),
								(e.prototype.addOption = function (t) {
									var e = this,
										i = ''.concat(this.selectOptions.length),
										n = function (t) {
											var n = t.title,
												o = t.val,
												s = t.disabled,
												r = t.selected,
												l = t.options;
											!!e.selectOptions.some(function (t) {
												return t.val === o;
											}) ||
												(e.addSelectOption(n, o, s, r, l),
												e.buildOption(n, o, s, r, l, i),
												e.buildOriginalOption(n, o, null, s, r, l),
												r && !e.isMultiple && e.onSelectOption(o));
										};
									Array.isArray(t)
										? t.forEach(function (t) {
												n(t);
											})
										: n(t);
								}),
								(e.prototype.removeOption = function (t) {
									var e = this,
										i = function (t, i) {
											void 0 === i && (i = !1),
												!!e.selectOptions.some(function (e) {
													return e.val === t;
												}) &&
													(e.removeSelectOption(t, i),
													e.destroyOption(t),
													e.destroyOriginalOption(t),
													e.value === t &&
														((e.value = null),
														e.eraseToggleTitle(),
														e.eraseToggleIcon()));
										};
									Array.isArray(t)
										? t.forEach(function (t) {
												i(t, e.isMultiple);
											})
										: i(t, this.isMultiple),
										this.setNewValue();
								}),
								(e.prototype.recalculateDirection = function () {
									var t, e, i, n;
									if (
										(null == this
											? void 0
											: this.dropdownVerticalFixedPlacement) &&
										(this.dropdown.classList.contains('bottom-full') ||
											this.dropdown.classList.contains('top-full'))
									)
										return !1;
									'top' ===
									(null == this ? void 0 : this.dropdownVerticalFixedPlacement)
										? (this.dropdown.classList.add('bottom-full'),
											(this.dropdown.style.marginBottom = ''.concat(
												this.dropdownSpace,
												'px',
											)))
										: 'bottom' ===
											  (null == this
													? void 0
													: this.dropdownVerticalFixedPlacement)
											? (this.dropdown.classList.add('top-full'),
												(this.dropdown.style.marginTop = ''.concat(
													this.dropdownSpace,
													'px',
												)))
											: (0, c.isEnoughSpace)(
														this.dropdown,
														this.toggle || this.tagsInput,
														'bottom',
														this.dropdownSpace,
														this.viewport,
												  )
												? (this.dropdown.classList.remove('bottom-full'),
													(null === (t = this.dropdownDirectionClasses) ||
													void 0 === t
														? void 0
														: t.bottom) &&
														this.dropdown.classList.remove(
															this.dropdownDirectionClasses.bottom,
														),
													(this.dropdown.style.marginBottom = ''),
													this.dropdown.classList.add('top-full'),
													(null === (e = this.dropdownDirectionClasses) ||
													void 0 === e
														? void 0
														: e.top) &&
														this.dropdown.classList.add(
															this.dropdownDirectionClasses.top,
														),
													(this.dropdown.style.marginTop = ''.concat(
														this.dropdownSpace,
														'px',
													)))
												: (this.dropdown.classList.remove('top-full'),
													(null === (i = this.dropdownDirectionClasses) ||
													void 0 === i
														? void 0
														: i.top) &&
														this.dropdown.classList.remove(
															this.dropdownDirectionClasses.top,
														),
													(this.dropdown.style.marginTop = ''),
													this.dropdown.classList.add('bottom-full'),
													(null === (n = this.dropdownDirectionClasses) ||
													void 0 === n
														? void 0
														: n.bottom) &&
														this.dropdown.classList.add(
															this.dropdownDirectionClasses.bottom,
														),
													(this.dropdown.style.marginBottom = ''.concat(
														this.dropdownSpace,
														'px',
													)));
								}),
								(e.findInCollection = function (t) {
									return (
										window.$hsSelectCollection.find(function (i) {
											return t instanceof e
												? i.element.el === t.el
												: 'string' == typeof t
													? i.element.el === document.querySelector(t)
													: i.element.el === t;
										}) || null
									);
								}),
								(e.getInstance = function (t, e) {
									var i = window.$hsSelectCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return i ? (e ? i : i.element) : null;
								}),
								(e.autoInit = function () {
									window.$hsSelectCollection ||
										((window.$hsSelectCollection = []),
										window.addEventListener('click', function (t) {
											var i = t.target;
											e.closeCurrentlyOpened(i);
										}),
										document.addEventListener('keydown', function (t) {
											return e.accessibility(t);
										})),
										window.$hsSelectCollection &&
											(window.$hsSelectCollection =
												window.$hsSelectCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-select]:not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												if (
													!window.$hsSelectCollection.find(function (e) {
														var i;
														return (
															(null === (i = null == e ? void 0 : e.element) ||
															void 0 === i
																? void 0
																: i.el) === t
														);
													})
												) {
													var i = t.getAttribute('data-hs-select'),
														n = i ? JSON.parse(i) : {};
													new e(t, n);
												}
											});
								}),
								(e.open = function (t) {
									var i = e.findInCollection(t);
									i && !i.element.isOpened && i.element.open();
								}),
								(e.close = function (t) {
									var i = e.findInCollection(t);
									i && i.element.isOpened && i.element.close();
								}),
								(e.closeCurrentlyOpened = function (t) {
									if (
										(void 0 === t && (t = null),
										!t.closest('.hs-select.active') &&
											!t.closest('[data-hs-select-dropdown].opened'))
									) {
										var e =
											window.$hsSelectCollection.filter(function (t) {
												return t.element.isOpened;
											}) || null;
										e &&
											e.forEach(function (t) {
												t.element.close();
											});
									}
								}),
								(e.accessibility = function (t) {
									if (
										window.$hsSelectCollection.find(function (t) {
											return t.element.isOpened;
										}) &&
										u.SELECT_ACCESSIBILITY_KEY_SET.includes(t.code) &&
										!t.metaKey
									)
										switch (t.code) {
											case 'Escape':
												t.preventDefault(), this.onEscape();
												break;
											case 'ArrowUp':
												t.preventDefault(),
													t.stopImmediatePropagation(),
													this.onArrow();
												break;
											case 'ArrowDown':
												t.preventDefault(),
													t.stopImmediatePropagation(),
													this.onArrow(!1);
												break;
											case 'Tab':
												t.preventDefault(),
													t.stopImmediatePropagation(),
													this.onTab(t.shiftKey);
												break;
											case 'Home':
												t.preventDefault(),
													t.stopImmediatePropagation(),
													this.onStartEnd();
												break;
											case 'End':
												t.preventDefault(),
													t.stopImmediatePropagation(),
													this.onStartEnd(!1);
												break;
											case 'Enter':
											case 'Space':
												t.preventDefault(), this.onEnter(t);
										}
								}),
								(e.onEscape = function () {
									var t = window.$hsSelectCollection.find(function (t) {
										return t.element.isOpened;
									});
									t && t.element.close();
								}),
								(e.onArrow = function (t) {
									void 0 === t && (t = !0);
									var e = window.$hsSelectCollection.find(function (t) {
										return t.element.isOpened;
									});
									if (e) {
										var i = e.element.dropdown;
										if (!i) return !1;
										var n = (
												t
													? Array.from(
															i.querySelectorAll(':scope > *:not(.hidden)'),
														).reverse()
													: Array.from(
															i.querySelectorAll(':scope > *:not(.hidden)'),
														)
											).filter(function (t) {
												return !t.classList.contains('disabled');
											}),
											o =
												i.querySelector('.hs-select-option-highlighted') ||
												i.querySelector('.selected');
										o || n[0].classList.add('hs-select-option-highlighted');
										var s = n.findIndex(function (t) {
											return t === o;
										});
										s + 1 < n.length && s++,
											n[s].focus(),
											o && o.classList.remove('hs-select-option-highlighted'),
											n[s].classList.add('hs-select-option-highlighted');
									}
								}),
								(e.onTab = function (t) {
									void 0 === t && (t = !0);
									var e = window.$hsSelectCollection.find(function (t) {
										return t.element.isOpened;
									});
									if (e) {
										var i = e.element.dropdown;
										if (!i) return !1;
										var n = (
												t
													? Array.from(
															i.querySelectorAll(':scope >  *:not(.hidden)'),
														).reverse()
													: Array.from(
															i.querySelectorAll(':scope >  *:not(.hidden)'),
														)
											).filter(function (t) {
												return !t.classList.contains('disabled');
											}),
											o =
												i.querySelector('.hs-select-option-highlighted') ||
												i.querySelector('.selected');
										o || n[0].classList.add('hs-select-option-highlighted');
										var s = n.findIndex(function (t) {
											return t === o;
										});
										if (!(s + 1 < n.length))
											return (
												o && o.classList.remove('hs-select-option-highlighted'),
												e.element.close(),
												e.element.toggle.focus(),
												!1
											);
										n[++s].focus(),
											o && o.classList.remove('hs-select-option-highlighted'),
											n[s].classList.add('hs-select-option-highlighted');
									}
								}),
								(e.onStartEnd = function (t) {
									void 0 === t && (t = !0);
									var e = window.$hsSelectCollection.find(function (t) {
										return t.element.isOpened;
									});
									if (e) {
										var i = e.element.dropdown;
										if (!i) return !1;
										var n = (
												t
													? Array.from(
															i.querySelectorAll(':scope >  *:not(.hidden)'),
														)
													: Array.from(
															i.querySelectorAll(':scope >  *:not(.hidden)'),
														).reverse()
											).filter(function (t) {
												return !t.classList.contains('disabled');
											}),
											o = i.querySelector('.hs-select-option-highlighted');
										n.length &&
											(n[0].focus(),
											o && o.classList.remove('hs-select-option-highlighted'),
											n[0].classList.add('hs-select-option-highlighted'));
									}
								}),
								(e.onEnter = function (t) {
									var e = t.target.previousSibling;
									if (
										window.$hsSelectCollection.find(function (t) {
											return t.element.el === e;
										})
									) {
										var i = window.$hsSelectCollection.find(function (t) {
												return t.element.isOpened;
											}),
											n = window.$hsSelectCollection.find(function (t) {
												return t.element.el === e;
											});
										i.element.close(), n.element.open();
									} else {
										(n = window.$hsSelectCollection.find(function (t) {
											return t.element.isOpened;
										})) &&
											n.element.onSelectOption(t.target.dataset.value || '');
									}
								}),
								e
							);
						})(p.default);
					window.addEventListener('load', function () {
						h.autoInit();
					}),
						document.addEventListener('scroll', function () {
							if (!window.$hsSelectCollection) return !1;
							var t = window.$hsSelectCollection.find(function (t) {
								return t.element.isOpened;
							});
							t && t.element.recalculateDirection();
						}),
						'undefined' != typeof window && (window.HSSelect = h),
						(e.default = h);
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
						var s = e.getBoundingClientRect(),
							r = o ? o.getBoundingClientRect() : null,
							l = window.innerHeight,
							a = r ? s.top - r.top : s.top,
							d = (o ? r.bottom : l) - s.bottom,
							c = t.clientHeight + n;
						return 'bottom' === i
							? d >= c
							: 'top' === i
								? a >= c
								: a >= c || d >= c;
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
								for (var o = [], s = 0; s < arguments.length; s++)
									o[s] = arguments[s];
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
			var s = (e[n] = { exports: {} });
			return t[n].call(s.exports, s, s.exports, i), s.exports;
		})(442);
		return i;
	})(),
);
