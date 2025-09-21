declare module "scroll-lock" {
    interface ScrollLock {
        disablePageScroll: (target?: Element | Element[] | NodeList) => void;
        enablePageScroll: (target?: Element | Element[] | NodeList) => void;
        clearQueueScrollLocks: () => void;
        getScrollState: () => boolean;
        getTargetScrollBarWidth: (target?: Element) => number;
    }

    const scrollLock: ScrollLock;
    export default scrollLock;
}