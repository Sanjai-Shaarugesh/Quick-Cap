var t = {
		189: (t, e, s) => {
			s.d(e, { LO: () => i });
			const i = { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };
		},
		615: (t, e, s) => {
			s.d(e, { A: () => i });
			class i {
				constructor(t, e, s) {
					(this.el = t),
						(this.options = e),
						(this.events = s),
						(this.el = t),
						(this.options = e),
						(this.events = {});
				}
				createCollection(t, e) {
					var s;
					t.push({
						id:
							(null === (s = null == e ? void 0 : e.el) || void 0 === s
								? void 0
								: s.id) || t.length + 1,
						element: e,
					});
				}
				fireEvent(t, e = null) {
					if (this.events.hasOwnProperty(t)) return this.events[t](e);
				}
				on(t, e) {
					this.events[t] = e;
				}
			}
		},
		926: (t, e, s) => {
			s.d(e, { en: () => r, fc: () => n, sg: () => i });
			const i = (t, e = 200) => {
					let s;
					return (...i) => {
						clearTimeout(s),
							(s = setTimeout(() => {
								t.apply(void 0, i);
							}, e));
					};
				},
				n = (t) => {
					const e = document.createElement('template');
					return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
				},
				r = (t, e, s = ' ', i = 'add') => {
					t.split(s).forEach((t) =>
						'add' === i ? e.classList.add(t) : e.classList.remove(t),
					);
				};
		},
	},
	e = {};
function s(i) {
	var n = e[i];
	if (void 0 !== n) return n.exports;
	var r = (e[i] = { exports: {} });
	return t[i](r, r.exports, s), r.exports;
}
(s.d = (t, e) => {
	for (var i in e)
		s.o(e, i) &&
			!s.o(t, i) &&
			Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
}),
	(s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var i = {};
s.d(i, { A: () => h });
var n = s(926),
	r = s(615),
	o = s(189);
/*
 * HSCarousel
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends r.A {
	constructor(t, e) {
		var s, i, n, r, o;
		super(t, e);
		const l = t.getAttribute('data-hs-carousel'),
			h = l ? JSON.parse(l) : {},
			a = Object.assign(Object.assign({}, h), e);
		(this.currentIndex = a.currentIndex || 0),
			(this.loadingClasses = a.loadingClasses
				? `${a.loadingClasses}`.split(',')
				: null),
			(this.dotsItemClasses = a.dotsItemClasses ? a.dotsItemClasses : null),
			(this.isAutoHeight = void 0 !== a.isAutoHeight && a.isAutoHeight),
			(this.isAutoPlay = void 0 !== a.isAutoPlay && a.isAutoPlay),
			(this.isCentered = void 0 !== a.isCentered && a.isCentered),
			(this.isDraggable = void 0 !== a.isDraggable && a.isDraggable),
			(this.isInfiniteLoop = void 0 !== a.isInfiniteLoop && a.isInfiniteLoop),
			(this.isRTL = void 0 !== a.isRTL && a.isRTL),
			(this.isSnap = void 0 !== a.isSnap && a.isSnap),
			(this.hasSnapSpacers = void 0 === a.hasSnapSpacers || a.hasSnapSpacers),
			(this.speed = a.speed || 4e3),
			(this.updateDelay = a.updateDelay || 0),
			(this.slidesQty = a.slidesQty || 1),
			(this.loadingClassesRemove = (
				null === (s = this.loadingClasses) || void 0 === s ? void 0 : s[0]
			)
				? this.loadingClasses[0].split(' ')
				: 'opacity-0'),
			(this.loadingClassesAdd = (
				null === (i = this.loadingClasses) || void 0 === i ? void 0 : i[1]
			)
				? this.loadingClasses[1].split(' ')
				: ''),
			(this.afterLoadingClassesAdd = (
				null === (n = this.loadingClasses) || void 0 === n ? void 0 : n[2]
			)
				? this.loadingClasses[2].split(' ')
				: ''),
			(this.container = this.el.querySelector('.hs-carousel') || null),
			(this.inner = this.el.querySelector('.hs-carousel-body') || null),
			(this.slides = this.el.querySelectorAll('.hs-carousel-slide') || []),
			(this.prev = this.el.querySelector('.hs-carousel-prev') || null),
			(this.next = this.el.querySelector('.hs-carousel-next') || null),
			(this.dots = this.el.querySelector('.hs-carousel-pagination') || null),
			(this.info = this.el.querySelector('.hs-carousel-info') || null),
			(this.infoTotal =
				(null === (r = null == this ? void 0 : this.info) || void 0 === r
					? void 0
					: r.querySelector('.hs-carousel-info-total')) || null),
			(this.infoCurrent =
				(null === (o = null == this ? void 0 : this.info) || void 0 === o
					? void 0
					: o.querySelector('.hs-carousel-info-current')) || null),
			(this.sliderWidth = this.el.getBoundingClientRect().width),
			(this.isDragging = !1),
			(this.dragStartX = null),
			(this.initialTranslateX = null),
			(this.touchX = { start: 0, end: 0 }),
			(this.resizeContainer = document.querySelector('body')),
			(this.resizeContainerWidth = 0),
			this.init();
	}
	setIsSnap() {
		const t = this.container.getBoundingClientRect(),
			e = t.left + t.width / 2;
		let s = null,
			i = null,
			n = 1 / 0;
		Array.from(this.inner.children).forEach((t) => {
			const i = t.getBoundingClientRect(),
				r = this.inner.getBoundingClientRect(),
				o = i.left + i.width / 2 - r.left,
				l = Math.abs(e - (r.left + o));
			l < n && ((n = l), (s = t));
		}),
			s && (i = Array.from(this.slides).findIndex((t) => t === s)),
			this.setIndex(i),
			this.dots && this.setCurrentDot();
	}
	prevClick() {
		this.goToPrev(), this.isAutoPlay && (this.resetTimer(), this.setTimer());
	}
	nextClick() {
		this.goToNext(), this.isAutoPlay && (this.resetTimer(), this.setTimer());
	}
	containerScroll() {
		clearTimeout(this.isScrolling),
			(this.isScrolling = setTimeout(() => {
				this.setIsSnap();
			}, 100));
	}
	elementTouchStart(t) {
		this.touchX.start = t.changedTouches[0].screenX;
	}
	elementTouchEnd(t) {
		(this.touchX.end = t.changedTouches[0].screenX), this.detectDirection();
	}
	innerMouseDown(t) {
		this.handleDragStart(t);
	}
	innerTouchStart(t) {
		this.handleDragStart(t);
	}
	documentMouseMove(t) {
		this.handleDragMove(t);
	}
	documentTouchMove(t) {
		this.handleDragMove(t);
	}
	documentMouseUp() {
		this.handleDragEnd();
	}
	documentTouchEnd() {
		this.handleDragEnd();
	}
	dotClick(t) {
		this.goTo(t), this.isAutoPlay && (this.resetTimer(), this.setTimer());
	}
	init() {
		this.createCollection(window.$hsCarouselCollection, this),
			this.inner &&
				(this.calculateWidth(),
				this.isDraggable && !this.isSnap && this.initDragHandling()),
			this.prev &&
				((this.onPrevClickListener = () => this.prevClick()),
				this.prev.addEventListener('click', this.onPrevClickListener)),
			this.next &&
				((this.onNextClickListener = () => this.nextClick()),
				this.next.addEventListener('click', this.onNextClickListener)),
			this.dots && this.initDots(),
			this.info && this.buildInfo(),
			this.slides.length &&
				(this.addCurrentClass(),
				this.isInfiniteLoop || this.addDisabledClass(),
				this.isAutoPlay && this.autoPlay()),
			setTimeout(() => {
				this.isSnap && this.setIsSnap(),
					this.loadingClassesRemove &&
						('string' == typeof this.loadingClassesRemove
							? this.inner.classList.remove(this.loadingClassesRemove)
							: this.inner.classList.remove(...this.loadingClassesRemove)),
					this.loadingClassesAdd &&
						('string' == typeof this.loadingClassesAdd
							? this.inner.classList.add(this.loadingClassesAdd)
							: this.inner.classList.add(...this.loadingClassesAdd)),
					this.inner &&
						this.afterLoadingClassesAdd &&
						setTimeout(() => {
							'string' == typeof this.afterLoadingClassesAdd
								? this.inner.classList.add(this.afterLoadingClassesAdd)
								: this.inner.classList.add(...this.afterLoadingClassesAdd);
						});
			}, 400),
			this.isSnap &&
				((this.onContainerScrollListener = () => this.containerScroll()),
				this.container.addEventListener(
					'scroll',
					this.onContainerScrollListener,
				)),
			this.el.classList.add('init'),
			this.isSnap ||
				((this.onElementTouchStartListener = (t) => this.elementTouchStart(t)),
				(this.onElementTouchEndListener = (t) => this.elementTouchEnd(t)),
				this.el.addEventListener(
					'touchstart',
					this.onElementTouchStartListener,
				),
				this.el.addEventListener('touchend', this.onElementTouchEndListener)),
			this.observeResize();
	}
	initDragHandling() {
		const t = this.inner;
		(this.onInnerMouseDownListener = (t) => this.innerMouseDown(t)),
			(this.onInnerTouchStartListener = (t) => this.innerTouchStart(t)),
			(this.onDocumentMouseMoveListener = (t) => this.documentMouseMove(t)),
			(this.onDocumentTouchMoveListener = (t) => this.documentTouchMove(t)),
			(this.onDocumentMouseUpListener = () => this.documentMouseUp()),
			(this.onDocumentTouchEndListener = () => this.documentTouchEnd()),
			t &&
				(t.addEventListener('mousedown', this.onInnerMouseDownListener),
				t.addEventListener('touchstart', this.onInnerTouchStartListener, {
					passive: !0,
				}),
				document.addEventListener(
					'mousemove',
					this.onDocumentMouseMoveListener,
				),
				document.addEventListener(
					'touchmove',
					this.onDocumentTouchMoveListener,
					{ passive: !1 },
				),
				document.addEventListener('mouseup', this.onDocumentMouseUpListener),
				document.addEventListener('touchend', this.onDocumentTouchEndListener));
	}
	getTranslateXValue() {
		var t;
		const e = window.getComputedStyle(this.inner).transform;
		if ('none' !== e) {
			const s =
				null === (t = e.match(/matrix.*\((.+)\)/)) || void 0 === t
					? void 0
					: t[1].split(', ');
			if (s) {
				let t = parseFloat(6 === s.length ? s[4] : s[12]);
				return this.isRTL && (t = -t), isNaN(t) || 0 === t ? 0 : -t;
			}
		}
		return 0;
	}
	removeClickEventWhileDragging(t) {
		t.preventDefault();
	}
	handleDragStart(t) {
		t.preventDefault(),
			(this.isDragging = !0),
			(this.dragStartX = this.getEventX(t)),
			(this.initialTranslateX = this.isRTL
				? this.getTranslateXValue()
				: -this.getTranslateXValue()),
			this.inner.classList.add('dragging');
	}
	handleDragMove(t) {
		if (!this.isDragging) return;
		this.inner.querySelectorAll('a:not(.prevented-click)').forEach((t) => {
			t.classList.add('prevented-click'),
				t.addEventListener('click', this.removeClickEventWhileDragging);
		});
		let e = this.getEventX(t) - this.dragStartX;
		this.isRTL && (e = -e);
		const s = this.initialTranslateX + e;
		this.setTranslate(
			(() => {
				let t =
					(this.sliderWidth * this.slides.length) / this.getCurrentSlidesQty() -
					this.sliderWidth;
				const e = this.sliderWidth,
					i = (e - e / this.getCurrentSlidesQty()) / 2,
					n = this.isCentered ? i : 0;
				this.isCentered && (t += i);
				const r = -t;
				return this.isRTL
					? s < n
						? n
						: s > t
							? r
							: -s
					: s > n
						? n
						: s < -t
							? r
							: s;
			})(),
		);
	}
	handleDragEnd() {
		if (!this.isDragging) return;
		this.isDragging = !1;
		const t = this.sliderWidth / this.getCurrentSlidesQty(),
			e = this.getTranslateXValue();
		let s = Math.round(e / t);
		this.isRTL && (s = Math.round(e / t)),
			this.inner.classList.remove('dragging'),
			setTimeout(() => {
				this.calculateTransform(s),
					this.dots && this.setCurrentDot(),
					(this.dragStartX = null),
					(this.initialTranslateX = null),
					this.inner.querySelectorAll('a.prevented-click').forEach((t) => {
						t.classList.remove('prevented-click'),
							t.removeEventListener(
								'click',
								this.removeClickEventWhileDragging,
							);
					});
			});
	}
	getEventX(t) {
		return t instanceof MouseEvent ? t.clientX : t.touches[0].clientX;
	}
	getCurrentSlidesQty() {
		if ('object' == typeof this.slidesQty) {
			const t = document.body.clientWidth;
			let e = 0;
			return (
				Object.keys(this.slidesQty).forEach((s) => {
					t >= (typeof s + 1 == 'number' ? this.slidesQty[s] : o.LO[s]) &&
						(e = this.slidesQty[s]);
				}),
				e
			);
		}
		return this.slidesQty;
	}
	buildSnapSpacers() {
		const t = this.inner.querySelector('.hs-snap-before'),
			e = this.inner.querySelector('.hs-snap-after');
		t && t.remove(), e && e.remove();
		const s = this.sliderWidth,
			i = s / 2 - s / this.getCurrentSlidesQty() / 2,
			r = (0, n.fc)(
				`<div class="hs-snap-before" style="height: 100%; width: ${i}px"></div>`,
			),
			o = (0, n.fc)(
				`<div class="hs-snap-after" style="height: 100%; width: ${i}px"></div>`,
			);
		this.inner.prepend(r), this.inner.appendChild(o);
	}
	initDots() {
		this.el.querySelectorAll('.hs-carousel-pagination-item').length
			? this.setDots()
			: this.buildDots(),
			this.dots && this.setCurrentDot();
	}
	buildDots() {
		this.dots.innerHTML = '';
		const t =
			!this.isCentered && this.slidesQty
				? this.slides.length - (this.getCurrentSlidesQty() - 1)
				: this.slides.length;
		for (let e = 0; e < t; e++) {
			const t = this.buildSingleDot(e);
			this.dots.append(t);
		}
	}
	setDots() {
		(this.dotsItems = this.dots.querySelectorAll(
			'.hs-carousel-pagination-item',
		)),
			this.dotsItems.forEach((t, e) => {
				const s = t.getAttribute('data-carousel-pagination-item-target');
				this.singleDotEvents(t, s ? +s : e);
			});
	}
	goToCurrentDot() {
		const t = this.dots,
			e = t.getBoundingClientRect(),
			s = t.scrollLeft,
			i = t.scrollTop,
			n = t.clientWidth,
			r = t.clientHeight,
			o = this.dotsItems[this.currentIndex],
			l = o.getBoundingClientRect(),
			h = l.left - e.left + s,
			a = h + o.clientWidth,
			d = l.top - e.top + i,
			c = d + o.clientHeight;
		let u = s,
			g = i;
		(h < s || a > s + n) && (u = a - n),
			(d < i || c > i + r) && (g = c - r),
			t.scrollTo({ left: u, top: g, behavior: 'smooth' });
	}
	buildInfo() {
		this.infoTotal && this.setInfoTotal(),
			this.infoCurrent && this.setInfoCurrent();
	}
	setInfoTotal() {
		this.infoTotal.innerText = `${this.slides.length}`;
	}
	setInfoCurrent() {
		this.infoCurrent.innerText = `${this.currentIndex + 1}`;
	}
	buildSingleDot(t) {
		const e = (0, n.fc)('<span></span>');
		return (
			this.dotsItemClasses && (0, n.en)(this.dotsItemClasses, e),
			this.singleDotEvents(e, t),
			e
		);
	}
	singleDotEvents(t, e) {
		(this.onDotClickListener = () => this.dotClick(e)),
			t.addEventListener('click', this.onDotClickListener);
	}
	observeResize() {
		new ResizeObserver(
			(0, n.sg)((t) => {
				for (let e of t) {
					const t = e.contentRect.width;
					t !== this.resizeContainerWidth &&
						(this.recalculateWidth(),
						this.dots && this.initDots(),
						this.addCurrentClass(),
						(this.resizeContainerWidth = t));
				}
			}, this.updateDelay),
		).observe(this.resizeContainer);
	}
	calculateWidth() {
		this.isSnap ||
			(this.inner.style.width =
				(this.sliderWidth * this.slides.length) / this.getCurrentSlidesQty() +
				'px'),
			this.slides.forEach((t) => {
				t.style.width = this.sliderWidth / this.getCurrentSlidesQty() + 'px';
			}),
			this.calculateTransform();
	}
	addCurrentClass() {
		if (this.isSnap) {
			const t = Math.floor(this.getCurrentSlidesQty() / 2);
			for (let e = 0; e < this.slides.length; e++) {
				const s = this.slides[e];
				e <= this.currentIndex + t && e >= this.currentIndex - t
					? s.classList.add('active')
					: s.classList.remove('active');
			}
		} else {
			const t = this.isCentered
				? this.currentIndex +
					this.getCurrentSlidesQty() +
					(this.getCurrentSlidesQty() - 1)
				: this.currentIndex + this.getCurrentSlidesQty();
			this.slides.forEach((e, s) => {
				s >= this.currentIndex && s < t
					? e.classList.add('active')
					: e.classList.remove('active');
			});
		}
	}
	setCurrentDot() {
		const t = (t, e) => {
			let s = !1;
			const i = Math.floor(this.getCurrentSlidesQty() / 2);
			(s =
				this.isSnap && !this.hasSnapSpacers
					? e ===
						(this.getCurrentSlidesQty() % 2 == 0
							? this.currentIndex - i + 1
							: this.currentIndex - i)
					: e === this.currentIndex),
				s ? t.classList.add('active') : t.classList.remove('active');
		};
		this.dotsItems
			? this.dotsItems.forEach((e, s) => t(e, s))
			: this.dots.querySelectorAll(':scope > *').forEach((e, s) => t(e, s));
	}
	setElementToDisabled(t) {
		t.classList.add('disabled'),
			('BUTTON' !== t.tagName && 'INPUT' !== t.tagName) ||
				t.setAttribute('disabled', 'disabled');
	}
	unsetElementToDisabled(t) {
		t.classList.remove('disabled'),
			('BUTTON' !== t.tagName && 'INPUT' !== t.tagName) ||
				t.removeAttribute('disabled');
	}
	addDisabledClass() {
		if (!this.prev || !this.next) return !1;
		const t = getComputedStyle(this.inner).getPropertyValue('gap'),
			e = Math.floor(this.getCurrentSlidesQty() / 2);
		let s = 0,
			i = 0,
			n = !1,
			r = !1;
		this.isSnap
			? ((s = this.currentIndex),
				(i = this.hasSnapSpacers
					? this.slides.length - 1
					: this.slides.length - e - 1),
				(n = this.hasSnapSpacers
					? 0 === s
					: this.getCurrentSlidesQty() % 2 == 0
						? s - e < 0
						: s - e == 0),
				(r =
					s >= i &&
					this.container.scrollLeft +
						this.container.clientWidth +
						(parseFloat(t) || 0) >=
						this.container.scrollWidth))
			: ((s = this.currentIndex),
				(i = this.isCentered
					? this.slides.length -
						this.getCurrentSlidesQty() +
						(this.getCurrentSlidesQty() - 1)
					: this.slides.length - this.getCurrentSlidesQty()),
				(n = 0 === s),
				(r = s >= i)),
			n
				? (this.unsetElementToDisabled(this.next),
					this.setElementToDisabled(this.prev))
				: r
					? (this.unsetElementToDisabled(this.prev),
						this.setElementToDisabled(this.next))
					: (this.unsetElementToDisabled(this.prev),
						this.unsetElementToDisabled(this.next));
	}
	autoPlay() {
		this.setTimer();
	}
	setTimer() {
		this.timer = setInterval(() => {
			this.currentIndex === this.slides.length - 1
				? this.goTo(0)
				: this.goToNext();
		}, this.speed);
	}
	resetTimer() {
		clearInterval(this.timer);
	}
	detectDirection() {
		const { start: t, end: e } = this.touchX;
		e < t && this.goToNext(), e > t && this.goToPrev();
	}
	calculateTransform(t) {
		void 0 !== t && (this.currentIndex = t),
			this.currentIndex > this.slides.length - this.getCurrentSlidesQty() &&
				!this.isCentered &&
				(this.currentIndex = this.slides.length - this.getCurrentSlidesQty());
		const e = this.sliderWidth,
			s = e / this.getCurrentSlidesQty();
		let i = this.currentIndex * s;
		if (
			(this.isSnap &&
				!this.isCentered &&
				this.container.scrollLeft < e &&
				this.container.scrollLeft + s / 2 > e &&
				(this.container.scrollLeft = this.container.scrollWidth),
			this.isCentered && !this.isSnap)
		) {
			const t = (e - s) / 2;
			if (0 === this.currentIndex) i = -t;
			else if (
				this.currentIndex >=
				this.slides.length -
					this.getCurrentSlidesQty() +
					(this.getCurrentSlidesQty() - 1)
			) {
				i = this.slides.length * s - e + t;
			} else i = this.currentIndex * s - t;
		}
		this.isSnap ||
			(this.inner.style.transform = this.isRTL
				? `translate(${i}px, 0px)`
				: `translate(${-i}px, 0px)`),
			this.isAutoHeight &&
				(this.inner.style.height = `${this.slides[this.currentIndex].clientHeight}px`),
			this.dotsItems && this.goToCurrentDot(),
			this.addCurrentClass(),
			this.isInfiniteLoop || this.addDisabledClass(),
			this.isSnap && this.hasSnapSpacers && this.buildSnapSpacers(),
			this.infoCurrent && this.setInfoCurrent();
	}
	setTranslate(t) {
		this.inner.style.transform = this.isRTL
			? `translate(${-t}px, 0px)`
			: `translate(${t}px, 0px)`;
	}
	setIndex(t) {
		(this.currentIndex = t),
			this.addCurrentClass(),
			this.isInfiniteLoop || this.addDisabledClass();
	}
	recalculateWidth() {
		(this.sliderWidth = this.inner.parentElement.getBoundingClientRect().width),
			this.calculateWidth(),
			this.sliderWidth !==
				this.inner.parentElement.getBoundingClientRect().width &&
				this.recalculateWidth();
	}
	goToPrev() {
		if (
			(this.currentIndex > 0
				? this.currentIndex--
				: (this.currentIndex = this.slides.length - this.getCurrentSlidesQty()),
			this.isSnap)
		) {
			const t = this.sliderWidth / this.getCurrentSlidesQty();
			this.container.scrollBy({
				left: Math.max(-this.container.scrollLeft, -t),
				behavior: 'smooth',
			}),
				this.addCurrentClass(),
				this.isInfiniteLoop || this.addDisabledClass();
		} else this.calculateTransform();
		this.dots && this.setCurrentDot();
	}
	goToNext() {
		const t = this.isCentered
			? this.slides.length -
				this.getCurrentSlidesQty() +
				(this.getCurrentSlidesQty() - 1)
			: this.slides.length - this.getCurrentSlidesQty();
		if (
			(this.currentIndex < t ? this.currentIndex++ : (this.currentIndex = 0),
			this.isSnap)
		) {
			const t = this.sliderWidth / this.getCurrentSlidesQty(),
				e = this.container.scrollWidth - this.container.clientWidth;
			this.container.scrollBy({
				left: Math.min(t, e - this.container.scrollLeft),
				behavior: 'smooth',
			}),
				this.addCurrentClass(),
				this.isInfiniteLoop || this.addDisabledClass();
		} else this.calculateTransform();
		this.dots && this.setCurrentDot();
	}
	goTo(t) {
		const e = this.currentIndex;
		if (((this.currentIndex = t), this.isSnap)) {
			const t = this.sliderWidth / this.getCurrentSlidesQty(),
				s =
					e > this.currentIndex ? e - this.currentIndex : this.currentIndex - e,
				i = e > this.currentIndex ? -t * s : t * s;
			this.container.scrollBy({ left: i, behavior: 'smooth' }),
				this.addCurrentClass(),
				this.isInfiniteLoop || this.addDisabledClass();
		} else this.calculateTransform();
		this.dots && this.setCurrentDot();
	}
	destroy() {
		var t, e;
		if (
			(this.loadingClassesAdd &&
				('string' == typeof this.loadingClassesAdd
					? this.inner.classList.remove(this.loadingClassesAdd)
					: this.inner.classList.remove(...this.loadingClassesAdd)),
			this.inner &&
				this.afterLoadingClassesAdd &&
				setTimeout(() => {
					'string' == typeof this.afterLoadingClassesAdd
						? this.inner.classList.remove(this.afterLoadingClassesAdd)
						: this.inner.classList.remove(...this.afterLoadingClassesAdd);
				}),
			this.el.classList.remove('init'),
			this.inner.classList.remove('dragging'),
			this.slides.forEach((t) => t.classList.remove('active')),
			(null === (t = null == this ? void 0 : this.dotsItems) || void 0 === t
				? void 0
				: t.length) &&
				this.dotsItems.forEach((t) => t.classList.remove('active')),
			this.prev.classList.remove('disabled'),
			this.next.classList.remove('disabled'),
			(this.inner.style.width = ''),
			this.slides.forEach((t) => (t.style.width = '')),
			this.isSnap || (this.inner.style.transform = ''),
			this.isAutoHeight && (this.inner.style.height = ''),
			this.prev.removeEventListener('click', this.onPrevClickListener),
			this.next.removeEventListener('click', this.onNextClickListener),
			this.container.removeEventListener(
				'scroll',
				this.onContainerScrollListener,
			),
			this.el.removeEventListener(
				'touchstart',
				this.onElementTouchStartListener,
			),
			this.el.removeEventListener('touchend', this.onElementTouchEndListener),
			this.inner.removeEventListener(
				'mousedown',
				this.onInnerMouseDownListener,
			),
			this.inner.removeEventListener(
				'touchstart',
				this.onInnerTouchStartListener,
			),
			document.removeEventListener(
				'mousemove',
				this.onDocumentMouseMoveListener,
			),
			document.removeEventListener(
				'touchmove',
				this.onDocumentTouchMoveListener,
			),
			document.removeEventListener('mouseup', this.onDocumentMouseUpListener),
			document.removeEventListener('touchend', this.onDocumentTouchEndListener),
			this.inner.querySelectorAll('a:not(.prevented-click)').forEach((t) => {
				t.classList.remove('prevented-click'),
					t.removeEventListener('click', this.removeClickEventWhileDragging);
			}),
			(null === (e = null == this ? void 0 : this.dotsItems) || void 0 === e
				? void 0
				: e.length) || this.dots.querySelectorAll(':scope > *').length)
		) {
			(
				(null == this ? void 0 : this.dotsItems) ||
				this.dots.querySelectorAll(':scope > *')
			).forEach((t) => t.removeEventListener('click', this.onDotClickListener)),
				(this.dots.innerHTML = null);
		}
		this.inner.querySelector('.hs-snap-before').remove(),
			this.inner.querySelector('.hs-snap-after').remove(),
			(this.dotsItems = null),
			(this.isDragging = !1),
			(this.dragStartX = null),
			(this.initialTranslateX = null),
			(window.$hsCarouselCollection = window.$hsCarouselCollection.filter(
				({ element: t }) => t.el !== this.el,
			));
	}
	static getInstance(t, e) {
		const s = window.$hsCarouselCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return s ? (e ? s : s.element) : null;
	}
	static autoInit() {
		window.$hsCarouselCollection || (window.$hsCarouselCollection = []),
			window.$hsCarouselCollection &&
				(window.$hsCarouselCollection = window.$hsCarouselCollection.filter(
					({ element: t }) => document.contains(t.el),
				)),
			document
				.querySelectorAll('[data-hs-carousel]:not(.--prevent-on-load-init)')
				.forEach((t) => {
					window.$hsCarouselCollection.find((e) => {
						var s;
						return (
							(null === (s = null == e ? void 0 : e.element) || void 0 === s
								? void 0
								: s.el) === t
						);
					}) || new l(t);
				});
	}
}
window.addEventListener('load', () => {
	l.autoInit();
}),
	'undefined' != typeof window && (window.HSCarousel = l);
const h = l;
var a = i.A;
export { a as default };
