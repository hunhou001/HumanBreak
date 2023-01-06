import { sleep } from 'mutate-animate';
import { Component, markRaw, ref, Ref, watch } from 'vue';
import Book from '../ui/book.vue';
import Toolbox from '../ui/toolbox.vue';
import Equipbox from '../ui/equipbox.vue';
import Settings from '../ui/settings.vue';
import Desc from '../ui/desc.vue';
import Skill from '../ui/skill.vue';
import SkillTree from '../ui/skillTree.vue';
import Fly from '../ui/fly.vue';

export const bookOpened = ref(false);
export const toolOpened = ref(false);
export const equipOpened = ref(false);
export const showStatusBar = ref(false);
export const settingsOpened = ref(false);
export const descOpened = ref(false);
export const skillOpened = ref(false);
export const skillTreeOpened = ref(false);
export const flyOpened = ref(false);
export const showStudiedSkill = ref(false);

export const transition = ref(true);
export const noClosePanel = ref(false);

let app: HTMLDivElement;

/** ui声明列表 */
const UI_LIST: [Ref<boolean>, Component][] = [
    [bookOpened, Book],
    [toolOpened, Toolbox],
    [equipOpened, Equipbox],
    [settingsOpened, Settings],
    [descOpened, Desc],
    [skillOpened, Skill],
    [skillTreeOpened, SkillTree],
    [flyOpened, Fly]
];

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
                if (uiStack.value.length === 1) {
                    hideApp(index);
                } else {
                    uiStack.value.splice(index, 1);
                }
            }
        });
    });
    return {
        uiStack,
        transition,
        bookOpened,
        toolOpened,
        equipOpened,
        showStatusBar,
        settingsOpened,
        descOpened,
        skillOpened,
        skillTreeOpened,
        flyOpened,
        showStudiedSkill
    };
}

async function showApp() {
    core.lockControl();
    if (transition.value) {
        app.style.transition = 'all 0.6s linear';
    } else {
        app.style.transition = 'none';
    }
    app.style.display = 'flex';
    await sleep(50);
    app.style.opacity = '1';
}

async function hideApp(index: number) {
    if (transition.value) {
        app.style.transition = 'all 0.6s linear';
        app.style.opacity = '0';
        await sleep(600);
    } else {
        app.style.transition = '';
        app.style.opacity = '0';
    }
    uiStack.value.splice(index, 1);
    app.style.display = 'none';
    if (!noClosePanel.value) core.closePanel();
    noClosePanel.value = false;
}
