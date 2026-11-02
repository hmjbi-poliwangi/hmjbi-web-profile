declare module "animejs" {
    export interface AnimeParams {
        targets?: unknown;
        [key: string]: unknown;
    }

    export function animate(targets: unknown, params: AnimeParams): unknown;
    export function stagger(value: number | string | number[], params?: unknown): unknown;
    export function createTimeline(params?: AnimeParams): unknown;
    export const utils: {
        set(targets: unknown, params: Record<string, unknown>): void;
    };

    const anime: {
        animate: typeof animate;
        stagger: typeof stagger;
        createTimeline: typeof createTimeline;
        utils: typeof utils;
    };

    export default anime;
}
