export default function init() {
    return { useDrag, useWheel, useUp, isMobile };
}

type DragFn = (x: number, y: number, e: MouseEvent | TouchEvent) => void;

type DragMap = [
    (e: MouseEvent) => void,
    (e: TouchEvent) => void,
    ((e: MouseEvent) => void)?,
    ((e: TouchEvent) => void)?
];

const dragFnMap = new Map<DragFn, DragMap>();

/**
 * 是否是移动设备
 */
export const isMobile = matchMedia('(max-width: 600px)').matches;

/**
 * 向一个元素添加拖拽事件
 * @param ele 目标元素，当为全局拖拽时，传入数组表示所有元素共用一个全局拖拽函数
 * @param fn 推拽时触发的函数，传入x y和鼠标事件或点击事件
 * @param ondown 鼠标按下时执行的函数
 * @param global 是否全局拖拽，即拖拽后鼠标或手指离开元素后是否依然视为正在拖拽
 */
export function useDrag(
    ele: HTMLElement | HTMLElement[],
    fn: DragFn,
    ondown?: DragFn,
    onup?: (e: MouseEvent | TouchEvent) => void,
    global: boolean = false
) {
    let down = false;

    const md = (e: MouseEvent) => {
        down = true;
        if (ondown) ondown(e.clientX, e.clientY, e);
    };
    const td = (e: TouchEvent) => {
        down = true;
        if (ondown) ondown(e.touches[0].clientX, e.touches[0].clientY, e);
    };

    if (ele instanceof Array) {
        ele.forEach(v => {
            v.addEventListener('mousedown', md);
            v.addEventListener('touchstart', td);
        });
    } else {
        ele.addEventListener('mousedown', md);
        ele.addEventListener('touchstart', td);
    }

    const target = global ? document : ele;

    const mouseFn = (e: MouseEvent) => {
        if (!down) return;
        fn(e.clientX, e.clientY, e);
    };

    const touchFn = (e: TouchEvent) => {
        if (!down) return;
        fn(e.touches[0].clientX, e.touches[0].clientY, e);
    };

    const mouseUp = (e: MouseEvent) => {
        if (!down) return;
        onup && onup(e);
        down = false;
    };

    const touchUp = (e: TouchEvent) => {
        if (!down) return;
        onup && onup(e);
        down = false;
    };

    if (target instanceof Array) {
        target.forEach(v => {
            v.addEventListener('mouseup', mouseUp);
            v.addEventListener('touchend', touchUp);
            v.addEventListener('mousemove', mouseFn);
            v.addEventListener('touchmove', touchFn);
        });
    } else {
        target.addEventListener('mouseup', mouseUp as EventListener);
        target.addEventListener('touchend', touchUp as EventListener);
        target.addEventListener('mousemove', mouseFn as EventListener);
        target.addEventListener('touchmove', touchFn as EventListener);
    }
    dragFnMap.set(fn, [mouseFn, touchFn, mouseUp, touchUp]);
}

/**
 * 去除一个全局拖拽函数
 * @param fn 要去除的函数
 */
export function cancelGlobalDrag(fn: DragFn): void {
    const fns = dragFnMap.get(fn);
    dragFnMap.delete(fn);
    if (!fns) return;
    document.removeEventListener('mousemove', fns[0]);
    document.removeEventListener('touchmove', fns[1]);
    document.removeEventListener('mouseup', fns[0]);
    document.removeEventListener('touchend', fns[1]);
}

/**
 * 当触发滚轮时执行函数
 * @param ele 目标元素
 * @param fn 当滚轮触发时执行的函数
 */
export function useWheel(
    ele: HTMLElement,
    fn: (x: number, y: number, z: number, e: WheelEvent) => void
): void {
    ele.addEventListener('wheel', e => {
        fn(e.deltaX, e.deltaY, e.deltaZ, e);
    });
}

/**
 * 当鼠标或手指松开时执行函数
 * @param ele 目标元素
 * @param fn 当鼠标或手指松开时执行的函数
 */
export function useUp(ele: HTMLElement, fn: DragFn): void {
    ele.addEventListener('mouseup', e => {
        fn(e.clientX, e.clientY, e);
    });
    ele.addEventListener('touchend', e => {
        fn(e.touches[0].clientX, e.touches[0].clientY, e);
    });
}

/**
 * 当鼠标或手指按下时执行函数
 * @param ele 目标元素
 * @param fn 当鼠标或手指按下时执行的函数
 */
export function useDown(ele: HTMLElement, fn: DragFn): void {
    ele.addEventListener('mousedown', e => {
        fn(e.clientX, e.clientY, e);
    });
    ele.addEventListener('touchstart', e => {
        fn(e.touches[0].clientX, e.touches[0].clientY, e);
    });
}