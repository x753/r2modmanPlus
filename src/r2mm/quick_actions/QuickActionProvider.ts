import { Vue } from 'vue-property-decorator';

let provider: () => QuickActionProvider;

export function setQuickActionProvider(quickActionProvider: () => QuickActionProvider) {
    provider = quickActionProvider;
}

export function quickAction() {
    if (provider === undefined) {
        throw new Error("Quick Action Provider has not been set");
    }
    return provider();
}

export type QuickAction = {
    name: () => string;
    displayName: () => string;
    icon: () => string;
    onClick: (eventBus: Vue) => void;
}

export interface QuickActionProvider {

    getQuickActions: () => QuickAction[];
    getQuickAction: (name: string) => QuickAction | undefined;
    getDefaultQuickActions: () => QuickAction[];

}
