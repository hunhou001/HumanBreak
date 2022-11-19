import { sleep } from 'mutate-animate';
import { Component, markRaw, ref, Ref, watch } from 'vue';
import Book from '../ui/book.vue';

export const bookOpened = ref(false);

let app: HTMLDivElement;

/** ui声明列表 */
const UI_LIST: [Ref<boolean>, Component][] = [[bookOpened, Book]];

/** ui栈 */
export const uiStack = ref<Component[]>([]);

export default function init() {
    app = document.getElementById('root') as HTMLDivElement;
    UI_LIST.forEach(([ref, com]) => {
        watch(ref, n => {
            if (n === true) {
                uiStack.value.push(markRaw(com));
                showApp();
            } else {
                const index = uiStack.value.findIndex(v => v === com);
                uiStack.value.splice(index);
                if (uiStack.value.length === 0) {
                    hideApp();
                }
            }
        });
    });
    return { uiStack, bookOpened };
}

async function showApp() {
    app.style.display = 'flex';
    await sleep(50);
    app.style.opacity = '1';
    core.lockControl();
}

async function hideApp() {
    app.style.opacity = '0';
    await sleep(600);
    app.style.display = 'none';
    core.unlockControl();
}
