/**
 * Tracking absolute position of elements while scrolling
 */
export interface Coordinates {
    top: number
    left: number
    width: number
    height: number
}

/**
 * Controll all the behaviours of animations
 */
export interface AnimationController<P = unknown> {
    /**
     * The original animation parent.
     */
    readonly parent: Element
    /**
     * A function that enables future animations.
     */
    enable: () => void
    /**
     * A function that disables future animations.
     */
    disable: () => void
    /**
     * A function that returns true if the animations are currently enabled.
     */
    isEnabled: () => boolean
    /**
     * (Svelte Specific) A function that runs if the parameters are changed.
     */
    update?: (newParams: P) => void
    /**
     * (Svelte Specific) A function that runs when the componnet is removed from the DOM.
     */
    destroy?: () => void
}

export interface AnimateOptions {

    /**
     * The duration of the animation in milliseconds.(for a single sequence)
     */
    duration: number
    /**
     * The type of easing to use.
     * Default: ease-in-out
     */
    easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | (object & string)
    /**
     * Ignore a user’s "reduce motion" setting and enable animations. It is not
     * recommended to use this.
     */
    disrespectUserMotionPreference?: boolean
}

/**
 * for developing your own animation plugin with custom css
 */
export interface AnimationPlugin {
    <T extends 'add' | 'remove' | 'remain'>(
        el: Element,
        action: T,
        newCoordinates?: T extends 'add' | 'remain' | 'remove'
            ? Coordinates
            : undefined,
        oldCoordinates?: T extends 'remain' ? Coordinates : undefined
    ): KeyframeEffect | [KeyframeEffect, AnimationPluginOptions]
}

export interface AnimationPluginOptions {
    // provide your own css styles or disable style reset
    styleReset: CSSStyleDeclaration | false
}
