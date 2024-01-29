export * from './src/image-preview';
export declare const WilImagePreview: import("@vangle/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>>, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    props: {
        imgList: {
            type: ArrayConstructor;
            default: () => {
                url: string;
            }[];
        };
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        closeOnPressEscape: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
    setup(__props: any, { expose: __expose, emit: __emit }: {
        expose: any;
        emit: any;
    }): {
        modules: import("vue").Ref<import("swiper/types").SwiperModule[]>;
        props: any;
        swiperDom: import("vue").Ref<null>;
        main_img: import("vue").Ref<null>;
        bottomImageList: import("vue").Ref<never[]>;
        showPreview: import("vue").Ref<boolean>;
        isActiveImg: import("vue").Ref<string>;
        isActiveIndex: import("vue").Ref<number>;
        scaleValue: import("vue").Ref<number>;
        rotateValue: import("vue").Ref<number>;
        animationD: import("vue").Ref<string>;
        emits: any;
        setSwiper: (dom: any) => void;
        toPrev: () => void;
        toNext: () => void;
        handleChooseImg: (item: any, index: any) => void;
        largeImage: () => void;
        reduceImage: () => void;
        resetImage: () => void;
        anticlockwise: () => void;
        clockwise: () => void;
        closePreview: () => void;
        DO_defineComponent: typeof import("vue").defineComponent;
        readonly Navigation: import("swiper/types").SwiperModule;
        readonly Pagination: import("swiper/types").SwiperModule;
        readonly Scrollbar: import("swiper/types").SwiperModule;
        readonly A11y: import("swiper/types").SwiperModule;
        readonly Autoplay: import("swiper/types").SwiperModule;
        readonly Swiper: import("vue").DefineComponent<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            wrapperTag: {
                type: StringConstructor;
                default: string;
            };
            modules: {
                type: ArrayConstructor;
                default: undefined;
            };
            init: {
                type: BooleanConstructor;
                default: undefined;
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal" | undefined>;
                default: "vertical" | "horizontal" | undefined;
            };
            touchEventsTarget: {
                type: import("vue").PropType<"container" | "wrapper" | undefined>;
                default: undefined;
            };
            initialSlide: {
                type: NumberConstructor;
                default: undefined;
            };
            speed: {
                type: NumberConstructor;
                default: undefined;
            };
            cssMode: {
                type: BooleanConstructor;
                default: undefined;
            };
            updateOnWindowResize: {
                type: BooleanConstructor;
                default: undefined;
            };
            resizeObserver: {
                type: BooleanConstructor;
                default: undefined;
            };
            nested: {
                type: BooleanConstructor;
                default: undefined;
            };
            focusableElements: {
                type: StringConstructor;
                default: undefined;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            height: {
                type: NumberConstructor;
                default: undefined;
            };
            preventInteractionOnTransition: {
                type: BooleanConstructor;
                default: undefined;
            };
            userAgent: {
                type: StringConstructor;
                default: undefined;
            };
            url: {
                type: StringConstructor;
                default: undefined;
            };
            edgeSwipeDetection: {
                type: BooleanConstructor | StringConstructor;
                default: undefined;
            };
            edgeSwipeThreshold: {
                type: NumberConstructor;
                default: undefined;
            };
            autoHeight: {
                type: BooleanConstructor;
                default: undefined;
            };
            setWrapperSize: {
                type: BooleanConstructor;
                default: undefined;
            };
            virtualTranslate: {
                type: BooleanConstructor;
                default: undefined;
            };
            effect: {
                type: import("vue").PropType<"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards" | undefined>;
                default: undefined;
            };
            breakpoints: {
                type: import("vue").PropType<{
                    [width: number]: import("swiper").SwiperOptions;
                    [ratio: string]: import("swiper").SwiperOptions;
                } | undefined>;
                default: undefined;
            };
            spaceBetween: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerView: {
                type: import("vue").PropType<number | "auto" | undefined>;
                default: undefined;
            };
            slidesPerGroup: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerGroupSkip: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerGroupAuto: {
                type: BooleanConstructor;
                default: undefined;
            };
            centeredSlides: {
                type: BooleanConstructor;
                default: undefined;
            };
            centeredSlidesBounds: {
                type: BooleanConstructor;
                default: undefined;
            };
            slidesOffsetBefore: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesOffsetAfter: {
                type: NumberConstructor;
                default: undefined;
            };
            normalizeSlideIndex: {
                type: BooleanConstructor;
                default: undefined;
            };
            centerInsufficientSlides: {
                type: BooleanConstructor;
                default: undefined;
            };
            watchOverflow: {
                type: BooleanConstructor;
                default: undefined;
            };
            roundLengths: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            touchAngle: {
                type: NumberConstructor;
                default: undefined;
            };
            simulateTouch: {
                type: BooleanConstructor;
                default: undefined;
            };
            shortSwipes: {
                type: BooleanConstructor;
                default: undefined;
            };
            longSwipes: {
                type: BooleanConstructor;
                default: undefined;
            };
            longSwipesRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            longSwipesMs: {
                type: NumberConstructor;
                default: undefined;
            };
            followFinger: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowTouchMove: {
                type: BooleanConstructor;
                default: undefined;
            };
            threshold: {
                type: NumberConstructor;
                default: undefined;
            };
            touchMoveStopPropagation: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchStartPreventDefault: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchStartForcePreventDefault: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchReleaseOnEdges: {
                type: BooleanConstructor;
                default: undefined;
            };
            uniqueNavElements: {
                type: BooleanConstructor;
                default: undefined;
            };
            resistance: {
                type: BooleanConstructor;
                default: undefined;
            };
            resistanceRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            watchSlidesProgress: {
                type: BooleanConstructor;
                default: undefined;
            };
            grabCursor: {
                type: BooleanConstructor;
                default: undefined;
            };
            preventClicks: {
                type: BooleanConstructor;
                default: undefined;
            };
            preventClicksPropagation: {
                type: BooleanConstructor;
                default: undefined;
            };
            slideToClickedSlide: {
                type: BooleanConstructor;
                default: undefined;
            };
            preloadImages: {
                type: BooleanConstructor;
                default: undefined;
            };
            updateOnImagesReady: {
                type: BooleanConstructor;
                default: undefined;
            };
            loop: {
                type: BooleanConstructor;
                default: undefined;
            };
            loopAdditionalSlides: {
                type: NumberConstructor;
                default: undefined;
            };
            loopedSlides: {
                type: NumberConstructor;
                default: undefined;
            };
            loopFillGroupWithBlank: {
                type: BooleanConstructor;
                default: undefined;
            };
            loopPreventsSlide: {
                type: BooleanConstructor;
                default: undefined;
            };
            rewind: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowSlidePrev: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowSlideNext: {
                type: BooleanConstructor;
                default: undefined;
            };
            swipeHandler: {
                type: BooleanConstructor;
                default: undefined;
            };
            noSwiping: {
                type: BooleanConstructor;
                default: undefined;
            };
            noSwipingClass: {
                type: StringConstructor;
                default: undefined;
            };
            noSwipingSelector: {
                type: StringConstructor;
                default: undefined;
            };
            passiveListeners: {
                type: BooleanConstructor;
                default: undefined;
            };
            containerModifierClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideBlankClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideActiveClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateActiveClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideVisibleClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideNextClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateNextClass: {
                type: StringConstructor;
                default: undefined;
            };
            slidePrevClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicatePrevClass: {
                type: StringConstructor;
                default: undefined;
            };
            wrapperClass: {
                type: StringConstructor;
                default: undefined;
            };
            runCallbacksOnInit: {
                type: BooleanConstructor;
                default: undefined;
            };
            observer: {
                type: BooleanConstructor;
                default: undefined;
            };
            observeParents: {
                type: BooleanConstructor;
                default: undefined;
            };
            observeSlideChildren: {
                type: BooleanConstructor;
                default: undefined;
            };
            a11y: {
                type: import("vue").PropType<boolean | import("swiper/types").A11yOptions>;
                default: undefined;
            };
            autoplay: {
                type: import("vue").PropType<boolean | import("swiper/types").AutoplayOptions>;
                default: undefined;
            };
            controller: {
                type: import("vue").PropType<import("swiper/types").ControllerOptions>;
                default: undefined;
            };
            coverflowEffect: {
                type: import("vue").PropType<import("swiper/types").CoverflowEffectOptions>;
                default: undefined;
            };
            cubeEffect: {
                type: import("vue").PropType<import("swiper/types").CubeEffectOptions>;
                default: undefined;
            };
            fadeEffect: {
                type: import("vue").PropType<import("swiper/types").FadeEffectOptions>;
                default: undefined;
            };
            flipEffect: {
                type: import("vue").PropType<import("swiper/types").FlipEffectOptions>;
                default: undefined;
            };
            creativeEffect: {
                type: import("vue").PropType<import("swiper/types").CreativeEffectOptions>;
                default: undefined;
            };
            cardsEffect: {
                type: import("vue").PropType<import("swiper/types").CardsEffectOptions>;
                default: undefined;
            };
            hashNavigation: {
                type: import("vue").PropType<boolean | import("swiper/types").HashNavigationOptions>;
                default: undefined;
            };
            history: {
                type: import("vue").PropType<boolean | import("swiper/types").HistoryOptions>;
                default: undefined;
            };
            keyboard: {
                type: import("vue").PropType<boolean | import("swiper/types").KeyboardOptions>;
                default: undefined;
            };
            lazy: {
                type: import("vue").PropType<boolean | import("swiper/types").LazyOptions>;
                default: undefined;
            };
            mousewheel: {
                type: import("vue").PropType<boolean | import("swiper/types").MousewheelOptions>;
                default: undefined;
            };
            navigation: {
                type: import("vue").PropType<boolean | import("swiper/types").NavigationOptions>;
                default: undefined;
            };
            pagination: {
                type: import("vue").PropType<boolean | import("swiper/types").PaginationOptions>;
                default: undefined;
            };
            parallax: {
                type: import("vue").PropType<boolean | import("swiper/types").ParallaxOptions>;
                default: undefined;
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("swiper/types").ScrollbarOptions>;
                default: undefined;
            };
            thumbs: {
                type: import("vue").PropType<import("swiper/types").ThumbsOptions>;
                default: undefined;
            };
            virtual: {
                type: import("vue").PropType<boolean | import("swiper/types").VirtualOptions>;
                default: undefined;
            };
            zoom: {
                type: import("vue").PropType<boolean | import("swiper/types").ZoomOptions>;
                default: undefined;
            };
            freeMode: {
                type: import("vue").PropType<boolean | import("swiper/types").FreeModeOptions>;
                default: undefined;
            };
            grid: {
                type: import("vue").PropType<import("swiper/types").GridOptions>;
                default: undefined;
            };
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            swiper: (swiper: import("swiper/types/swiper-class").default) => void;
            autoplayStart: (swiper: import("swiper/types/swiper-class").default) => void;
            autoplayStop: (swiper: import("swiper/types/swiper-class").default) => void;
            autoplay: (swiper: import("swiper/types/swiper-class").default) => void;
            hashChange: (swiper: import("swiper/types/swiper-class").default) => void;
            hashSet: (swiper: import("swiper/types/swiper-class").default) => void;
            keyPress: (swiper: import("swiper/types/swiper-class").default, keyCode: string) => void;
            lazyImageLoad: (swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, imageEl: HTMLElement) => void;
            lazyImageReady: (swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, imageEl: HTMLElement) => void;
            navigationHide: (swiper: import("swiper/types/swiper-class").default) => void;
            navigationShow: (swiper: import("swiper/types/swiper-class").default) => void;
            paginationRender: (swiper: import("swiper/types/swiper-class").default, paginationEl: HTMLElement) => void;
            paginationUpdate: (swiper: import("swiper/types/swiper-class").default, paginationEl: HTMLElement) => void;
            paginationHide: (swiper: import("swiper/types/swiper-class").default) => void;
            paginationShow: (swiper: import("swiper/types/swiper-class").default) => void;
            scroll: (swiper: import("swiper/types/swiper-class").default, event: WheelEvent) => void;
            scrollbarDragStart: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            scrollbarDragMove: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            scrollbarDragEnd: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            zoomChange: (swiper: import("swiper/types/swiper-class").default, scale: number, imageEl: HTMLElement, slideEl: HTMLElement) => void;
            init: (swiper: import("swiper/types/swiper-class").default) => any;
            beforeDestroy: (swiper: import("swiper/types/swiper-class").default) => void;
            slideChange: (swiper: import("swiper/types/swiper-class").default) => void;
            slideChangeTransitionStart: (swiper: import("swiper/types/swiper-class").default) => void;
            slideChangeTransitionEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            slideNextTransitionStart: (swiper: import("swiper/types/swiper-class").default) => void;
            slideNextTransitionEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            slidePrevTransitionStart: (swiper: import("swiper/types/swiper-class").default) => void;
            slidePrevTransitionEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            transitionStart: (swiper: import("swiper/types/swiper-class").default) => void;
            transitionEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            touchStart: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            touchMove: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            touchMoveOpposite: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            sliderMove: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            touchEnd: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            click: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            tap: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            doubleTap: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            imagesReady: (swiper: import("swiper/types/swiper-class").default) => void;
            progress: (swiper: import("swiper/types/swiper-class").default, progress: number) => void;
            reachBeginning: (swiper: import("swiper/types/swiper-class").default) => void;
            reachEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            toEdge: (swiper: import("swiper/types/swiper-class").default) => void;
            fromEdge: (swiper: import("swiper/types/swiper-class").default) => void;
            setTranslate: (swiper: import("swiper/types/swiper-class").default, translate: number) => void;
            setTransition: (swiper: import("swiper/types/swiper-class").default, transition: number) => void;
            resize: (swiper: import("swiper/types/swiper-class").default) => void;
            observerUpdate: (swiper: import("swiper/types/swiper-class").default) => void;
            beforeLoopFix: (swiper: import("swiper/types/swiper-class").default) => void;
            loopFix: (swiper: import("swiper/types/swiper-class").default) => void;
            breakpoint: (swiper: import("swiper/types/swiper-class").default, breakpointParams: import("swiper").SwiperOptions) => void;
            _beforeBreakpoint: (swiper: import("swiper/types/swiper-class").default, breakpointParams: import("swiper").SwiperOptions) => void;
            _containerClasses: (swiper: import("swiper/types/swiper-class").default, classNames: string) => void;
            _slideClass: (swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, classNames: string) => void;
            _slideClasses: (swiper: import("swiper/types/swiper-class").default, slides: {
                slideEl: HTMLElement;
                classNames: string;
                index: number;
            }[]) => void;
            _swiper: (swiper: import("swiper/types/swiper-class").default) => void;
            _freeModeNoMomentumRelease: (swiper: import("swiper/types/swiper-class").default) => void;
            activeIndexChange: (swiper: import("swiper/types/swiper-class").default) => void;
            snapIndexChange: (swiper: import("swiper/types/swiper-class").default) => void;
            realIndexChange: (swiper: import("swiper/types/swiper-class").default) => void;
            afterInit: (swiper: import("swiper/types/swiper-class").default) => void;
            beforeInit: (swiper: import("swiper/types/swiper-class").default) => void;
            beforeResize: (swiper: import("swiper/types/swiper-class").default) => void;
            beforeSlideChangeStart: (swiper: import("swiper/types/swiper-class").default) => void;
            beforeTransitionStart: (swiper: import("swiper/types/swiper-class").default, speed: number, internal: any) => void;
            changeDirection: (swiper: import("swiper/types/swiper-class").default) => void;
            doubleClick: (swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => void;
            destroy: (swiper: import("swiper/types/swiper-class").default) => void;
            momentumBounce: (swiper: import("swiper/types/swiper-class").default) => void;
            orientationchange: (swiper: import("swiper/types/swiper-class").default) => void;
            slideResetTransitionStart: (swiper: import("swiper/types/swiper-class").default) => void;
            slideResetTransitionEnd: (swiper: import("swiper/types/swiper-class").default) => void;
            sliderFirstMove: (swiper: import("swiper/types/swiper-class").default, event: TouchEvent) => void;
            slidesLengthChange: (swiper: import("swiper/types/swiper-class").default) => void;
            slidesGridLengthChange: (swiper: import("swiper/types/swiper-class").default) => void;
            snapGridLengthChange: (swiper: import("swiper/types/swiper-class").default) => void;
            update: (swiper: import("swiper/types/swiper-class").default) => void;
            lock: (swiper: import("swiper/types/swiper-class").default) => void;
            unlock: (swiper: import("swiper/types/swiper-class").default) => void;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            wrapperTag: {
                type: StringConstructor;
                default: string;
            };
            modules: {
                type: ArrayConstructor;
                default: undefined;
            };
            init: {
                type: BooleanConstructor;
                default: undefined;
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal" | undefined>;
                default: "vertical" | "horizontal" | undefined;
            };
            touchEventsTarget: {
                type: import("vue").PropType<"container" | "wrapper" | undefined>;
                default: undefined;
            };
            initialSlide: {
                type: NumberConstructor;
                default: undefined;
            };
            speed: {
                type: NumberConstructor;
                default: undefined;
            };
            cssMode: {
                type: BooleanConstructor;
                default: undefined;
            };
            updateOnWindowResize: {
                type: BooleanConstructor;
                default: undefined;
            };
            resizeObserver: {
                type: BooleanConstructor;
                default: undefined;
            };
            nested: {
                type: BooleanConstructor;
                default: undefined;
            };
            focusableElements: {
                type: StringConstructor;
                default: undefined;
            };
            width: {
                type: NumberConstructor;
                default: undefined;
            };
            height: {
                type: NumberConstructor;
                default: undefined;
            };
            preventInteractionOnTransition: {
                type: BooleanConstructor;
                default: undefined;
            };
            userAgent: {
                type: StringConstructor;
                default: undefined;
            };
            url: {
                type: StringConstructor;
                default: undefined;
            };
            edgeSwipeDetection: {
                type: BooleanConstructor | StringConstructor;
                default: undefined;
            };
            edgeSwipeThreshold: {
                type: NumberConstructor;
                default: undefined;
            };
            autoHeight: {
                type: BooleanConstructor;
                default: undefined;
            };
            setWrapperSize: {
                type: BooleanConstructor;
                default: undefined;
            };
            virtualTranslate: {
                type: BooleanConstructor;
                default: undefined;
            };
            effect: {
                type: import("vue").PropType<"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards" | undefined>;
                default: undefined;
            };
            breakpoints: {
                type: import("vue").PropType<{
                    [width: number]: import("swiper").SwiperOptions;
                    [ratio: string]: import("swiper").SwiperOptions;
                } | undefined>;
                default: undefined;
            };
            spaceBetween: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerView: {
                type: import("vue").PropType<number | "auto" | undefined>;
                default: undefined;
            };
            slidesPerGroup: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerGroupSkip: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesPerGroupAuto: {
                type: BooleanConstructor;
                default: undefined;
            };
            centeredSlides: {
                type: BooleanConstructor;
                default: undefined;
            };
            centeredSlidesBounds: {
                type: BooleanConstructor;
                default: undefined;
            };
            slidesOffsetBefore: {
                type: NumberConstructor;
                default: undefined;
            };
            slidesOffsetAfter: {
                type: NumberConstructor;
                default: undefined;
            };
            normalizeSlideIndex: {
                type: BooleanConstructor;
                default: undefined;
            };
            centerInsufficientSlides: {
                type: BooleanConstructor;
                default: undefined;
            };
            watchOverflow: {
                type: BooleanConstructor;
                default: undefined;
            };
            roundLengths: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            touchAngle: {
                type: NumberConstructor;
                default: undefined;
            };
            simulateTouch: {
                type: BooleanConstructor;
                default: undefined;
            };
            shortSwipes: {
                type: BooleanConstructor;
                default: undefined;
            };
            longSwipes: {
                type: BooleanConstructor;
                default: undefined;
            };
            longSwipesRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            longSwipesMs: {
                type: NumberConstructor;
                default: undefined;
            };
            followFinger: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowTouchMove: {
                type: BooleanConstructor;
                default: undefined;
            };
            threshold: {
                type: NumberConstructor;
                default: undefined;
            };
            touchMoveStopPropagation: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchStartPreventDefault: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchStartForcePreventDefault: {
                type: BooleanConstructor;
                default: undefined;
            };
            touchReleaseOnEdges: {
                type: BooleanConstructor;
                default: undefined;
            };
            uniqueNavElements: {
                type: BooleanConstructor;
                default: undefined;
            };
            resistance: {
                type: BooleanConstructor;
                default: undefined;
            };
            resistanceRatio: {
                type: NumberConstructor;
                default: undefined;
            };
            watchSlidesProgress: {
                type: BooleanConstructor;
                default: undefined;
            };
            grabCursor: {
                type: BooleanConstructor;
                default: undefined;
            };
            preventClicks: {
                type: BooleanConstructor;
                default: undefined;
            };
            preventClicksPropagation: {
                type: BooleanConstructor;
                default: undefined;
            };
            slideToClickedSlide: {
                type: BooleanConstructor;
                default: undefined;
            };
            preloadImages: {
                type: BooleanConstructor;
                default: undefined;
            };
            updateOnImagesReady: {
                type: BooleanConstructor;
                default: undefined;
            };
            loop: {
                type: BooleanConstructor;
                default: undefined;
            };
            loopAdditionalSlides: {
                type: NumberConstructor;
                default: undefined;
            };
            loopedSlides: {
                type: NumberConstructor;
                default: undefined;
            };
            loopFillGroupWithBlank: {
                type: BooleanConstructor;
                default: undefined;
            };
            loopPreventsSlide: {
                type: BooleanConstructor;
                default: undefined;
            };
            rewind: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowSlidePrev: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowSlideNext: {
                type: BooleanConstructor;
                default: undefined;
            };
            swipeHandler: {
                type: BooleanConstructor;
                default: undefined;
            };
            noSwiping: {
                type: BooleanConstructor;
                default: undefined;
            };
            noSwipingClass: {
                type: StringConstructor;
                default: undefined;
            };
            noSwipingSelector: {
                type: StringConstructor;
                default: undefined;
            };
            passiveListeners: {
                type: BooleanConstructor;
                default: undefined;
            };
            containerModifierClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideBlankClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideActiveClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateActiveClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideVisibleClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideNextClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicateNextClass: {
                type: StringConstructor;
                default: undefined;
            };
            slidePrevClass: {
                type: StringConstructor;
                default: undefined;
            };
            slideDuplicatePrevClass: {
                type: StringConstructor;
                default: undefined;
            };
            wrapperClass: {
                type: StringConstructor;
                default: undefined;
            };
            runCallbacksOnInit: {
                type: BooleanConstructor;
                default: undefined;
            };
            observer: {
                type: BooleanConstructor;
                default: undefined;
            };
            observeParents: {
                type: BooleanConstructor;
                default: undefined;
            };
            observeSlideChildren: {
                type: BooleanConstructor;
                default: undefined;
            };
            a11y: {
                type: import("vue").PropType<boolean | import("swiper/types").A11yOptions>;
                default: undefined;
            };
            autoplay: {
                type: import("vue").PropType<boolean | import("swiper/types").AutoplayOptions>;
                default: undefined;
            };
            controller: {
                type: import("vue").PropType<import("swiper/types").ControllerOptions>;
                default: undefined;
            };
            coverflowEffect: {
                type: import("vue").PropType<import("swiper/types").CoverflowEffectOptions>;
                default: undefined;
            };
            cubeEffect: {
                type: import("vue").PropType<import("swiper/types").CubeEffectOptions>;
                default: undefined;
            };
            fadeEffect: {
                type: import("vue").PropType<import("swiper/types").FadeEffectOptions>;
                default: undefined;
            };
            flipEffect: {
                type: import("vue").PropType<import("swiper/types").FlipEffectOptions>;
                default: undefined;
            };
            creativeEffect: {
                type: import("vue").PropType<import("swiper/types").CreativeEffectOptions>;
                default: undefined;
            };
            cardsEffect: {
                type: import("vue").PropType<import("swiper/types").CardsEffectOptions>;
                default: undefined;
            };
            hashNavigation: {
                type: import("vue").PropType<boolean | import("swiper/types").HashNavigationOptions>;
                default: undefined;
            };
            history: {
                type: import("vue").PropType<boolean | import("swiper/types").HistoryOptions>;
                default: undefined;
            };
            keyboard: {
                type: import("vue").PropType<boolean | import("swiper/types").KeyboardOptions>;
                default: undefined;
            };
            lazy: {
                type: import("vue").PropType<boolean | import("swiper/types").LazyOptions>;
                default: undefined;
            };
            mousewheel: {
                type: import("vue").PropType<boolean | import("swiper/types").MousewheelOptions>;
                default: undefined;
            };
            navigation: {
                type: import("vue").PropType<boolean | import("swiper/types").NavigationOptions>;
                default: undefined;
            };
            pagination: {
                type: import("vue").PropType<boolean | import("swiper/types").PaginationOptions>;
                default: undefined;
            };
            parallax: {
                type: import("vue").PropType<boolean | import("swiper/types").ParallaxOptions>;
                default: undefined;
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("swiper/types").ScrollbarOptions>;
                default: undefined;
            };
            thumbs: {
                type: import("vue").PropType<import("swiper/types").ThumbsOptions>;
                default: undefined;
            };
            virtual: {
                type: import("vue").PropType<boolean | import("swiper/types").VirtualOptions>;
                default: undefined;
            };
            zoom: {
                type: import("vue").PropType<boolean | import("swiper/types").ZoomOptions>;
                default: undefined;
            };
            freeMode: {
                type: import("vue").PropType<boolean | import("swiper/types").FreeModeOptions>;
                default: undefined;
            };
            grid: {
                type: import("vue").PropType<import("swiper/types").GridOptions>;
                default: undefined;
            };
        }>> & {
            on_beforeBreakpoint?: ((swiper: import("swiper/types/swiper-class").default, breakpointParams: import("swiper").SwiperOptions) => any) | undefined;
            on_containerClasses?: ((swiper: import("swiper/types/swiper-class").default, classNames: string) => any) | undefined;
            on_slideClass?: ((swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, classNames: string) => any) | undefined;
            on_slideClasses?: ((swiper: import("swiper/types/swiper-class").default, slides: {
                slideEl: HTMLElement;
                classNames: string;
                index: number;
            }[]) => any) | undefined;
            on_swiper?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            on_freeModeNoMomentumRelease?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeDestroy?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onClick?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onInit?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onAutoplay?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSwiper?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onAutoplayStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onAutoplayStop?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onHashChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onHashSet?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onKeyPress?: ((swiper: import("swiper/types/swiper-class").default, keyCode: string) => any) | undefined;
            onLazyImageLoad?: ((swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, imageEl: HTMLElement) => any) | undefined;
            onLazyImageReady?: ((swiper: import("swiper/types/swiper-class").default, slideEl: HTMLElement, imageEl: HTMLElement) => any) | undefined;
            onNavigationHide?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onNavigationShow?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onPaginationRender?: ((swiper: import("swiper/types/swiper-class").default, paginationEl: HTMLElement) => any) | undefined;
            onPaginationUpdate?: ((swiper: import("swiper/types/swiper-class").default, paginationEl: HTMLElement) => any) | undefined;
            onPaginationHide?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onPaginationShow?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onScroll?: ((swiper: import("swiper/types/swiper-class").default, event: WheelEvent) => any) | undefined;
            onScrollbarDragStart?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onScrollbarDragMove?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onScrollbarDragEnd?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onZoomChange?: ((swiper: import("swiper/types/swiper-class").default, scale: number, imageEl: HTMLElement, slideEl: HTMLElement) => any) | undefined;
            onSlideChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideChangeTransitionStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideChangeTransitionEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideNextTransitionStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideNextTransitionEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlidePrevTransitionStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlidePrevTransitionEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onTransitionStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onTransitionEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onTouchStart?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onTouchMove?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onTouchMoveOpposite?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onSliderMove?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onTouchEnd?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onTap?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onDoubleTap?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onImagesReady?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onProgress?: ((swiper: import("swiper/types/swiper-class").default, progress: number) => any) | undefined;
            onReachBeginning?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onReachEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onToEdge?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onFromEdge?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSetTranslate?: ((swiper: import("swiper/types/swiper-class").default, translate: number) => any) | undefined;
            onSetTransition?: ((swiper: import("swiper/types/swiper-class").default, transition: number) => any) | undefined;
            onResize?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onObserverUpdate?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeLoopFix?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onLoopFix?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBreakpoint?: ((swiper: import("swiper/types/swiper-class").default, breakpointParams: import("swiper").SwiperOptions) => any) | undefined;
            onActiveIndexChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSnapIndexChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onRealIndexChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onAfterInit?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeInit?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeResize?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeSlideChangeStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onBeforeTransitionStart?: ((swiper: import("swiper/types/swiper-class").default, speed: number, internal: any) => any) | undefined;
            onChangeDirection?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onDoubleClick?: ((swiper: import("swiper/types/swiper-class").default, event: MouseEvent | TouchEvent | PointerEvent) => any) | undefined;
            onDestroy?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onMomentumBounce?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onOrientationchange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideResetTransitionStart?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlideResetTransitionEnd?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSliderFirstMove?: ((swiper: import("swiper/types/swiper-class").default, event: TouchEvent) => any) | undefined;
            onSlidesLengthChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSlidesGridLengthChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onSnapGridLengthChange?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onUpdate?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onLock?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
            onUnlock?: ((swiper: import("swiper/types/swiper-class").default) => any) | undefined;
        }, {
            width: number;
            height: number;
            effect: "slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards" | undefined;
            tag: string;
            wrapperTag: string;
            modules: unknown[];
            init: boolean;
            direction: "vertical" | "horizontal" | undefined;
            touchEventsTarget: "container" | "wrapper" | undefined;
            initialSlide: number;
            speed: number;
            cssMode: boolean;
            updateOnWindowResize: boolean;
            resizeObserver: boolean;
            nested: boolean;
            focusableElements: string;
            preventInteractionOnTransition: boolean;
            userAgent: string;
            url: string;
            edgeSwipeDetection: string | boolean;
            edgeSwipeThreshold: number;
            autoHeight: boolean;
            setWrapperSize: boolean;
            virtualTranslate: boolean;
            breakpoints: {
                [width: number]: import("swiper").SwiperOptions;
                [ratio: string]: import("swiper").SwiperOptions;
            } | undefined;
            spaceBetween: number;
            slidesPerView: number | "auto" | undefined;
            slidesPerGroup: number;
            slidesPerGroupSkip: number;
            slidesPerGroupAuto: boolean;
            centeredSlides: boolean;
            centeredSlidesBounds: boolean;
            slidesOffsetBefore: number;
            slidesOffsetAfter: number;
            normalizeSlideIndex: boolean;
            centerInsufficientSlides: boolean;
            watchOverflow: boolean;
            roundLengths: boolean;
            touchRatio: number;
            touchAngle: number;
            simulateTouch: boolean;
            shortSwipes: boolean;
            longSwipes: boolean;
            longSwipesRatio: number;
            longSwipesMs: number;
            followFinger: boolean;
            allowTouchMove: boolean;
            threshold: number;
            touchMoveStopPropagation: boolean;
            touchStartPreventDefault: boolean;
            touchStartForcePreventDefault: boolean;
            touchReleaseOnEdges: boolean;
            uniqueNavElements: boolean;
            resistance: boolean;
            resistanceRatio: number;
            watchSlidesProgress: boolean;
            grabCursor: boolean;
            preventClicks: boolean;
            preventClicksPropagation: boolean;
            slideToClickedSlide: boolean;
            preloadImages: boolean;
            updateOnImagesReady: boolean;
            loop: boolean;
            loopAdditionalSlides: number;
            loopedSlides: number;
            loopFillGroupWithBlank: boolean;
            loopPreventsSlide: boolean;
            rewind: boolean;
            allowSlidePrev: boolean;
            allowSlideNext: boolean;
            swipeHandler: boolean;
            noSwiping: boolean;
            noSwipingClass: string;
            noSwipingSelector: string;
            passiveListeners: boolean;
            containerModifierClass: string;
            slideClass: string;
            slideBlankClass: string;
            slideActiveClass: string;
            slideDuplicateActiveClass: string;
            slideVisibleClass: string;
            slideDuplicateClass: string;
            slideNextClass: string;
            slideDuplicateNextClass: string;
            slidePrevClass: string;
            slideDuplicatePrevClass: string;
            wrapperClass: string;
            runCallbacksOnInit: boolean;
            observer: boolean;
            observeParents: boolean;
            observeSlideChildren: boolean;
            a11y: boolean | import("swiper/types").A11yOptions;
            autoplay: boolean | import("swiper/types").AutoplayOptions;
            controller: import("swiper/types").ControllerOptions;
            coverflowEffect: import("swiper/types").CoverflowEffectOptions;
            cubeEffect: import("swiper/types").CubeEffectOptions;
            fadeEffect: import("swiper/types").FadeEffectOptions;
            flipEffect: import("swiper/types").FlipEffectOptions;
            creativeEffect: import("swiper/types").CreativeEffectOptions;
            cardsEffect: import("swiper/types").CardsEffectOptions;
            hashNavigation: boolean | import("swiper/types").HashNavigationOptions;
            history: boolean | import("swiper/types").HistoryOptions;
            keyboard: boolean | import("swiper/types").KeyboardOptions;
            lazy: boolean | import("swiper/types").LazyOptions;
            mousewheel: boolean | import("swiper/types").MousewheelOptions;
            navigation: boolean | import("swiper/types").NavigationOptions;
            pagination: boolean | import("swiper/types").PaginationOptions;
            parallax: boolean | import("swiper/types").ParallaxOptions;
            scrollbar: boolean | import("swiper/types").ScrollbarOptions;
            thumbs: import("swiper/types").ThumbsOptions;
            virtual: boolean | import("swiper/types").VirtualOptions;
            zoom: boolean | import("swiper/types").ZoomOptions;
            freeMode: boolean | import("swiper/types").FreeModeOptions;
            grid: import("swiper/types").GridOptions;
        }, {}>;
        readonly SwiperSlide: import("vue").DefineComponent<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            swiperRef: {
                type: import("vue").PropType<import("swiper/types/swiper-class").default>;
                required: false;
            };
            zoom: {
                type: BooleanConstructor;
                default: undefined;
            };
            virtualIndex: {
                type: StringConstructor | NumberConstructor;
                default: undefined;
            };
        }, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            swiperRef: {
                type: import("vue").PropType<import("swiper/types/swiper-class").default>;
                required: false;
            };
            zoom: {
                type: BooleanConstructor;
                default: undefined;
            };
            virtualIndex: {
                type: StringConstructor | NumberConstructor;
                default: undefined;
            };
        }>>, {
            tag: string;
            zoom: boolean;
            virtualIndex: string | number;
        }, {}>;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        ref: typeof import("vue").ref;
        watchEffect: typeof import("vue").watchEffect;
    };
}> & Record<string, any>;
export default WilImagePreview;
