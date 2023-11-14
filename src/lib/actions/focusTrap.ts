import * as _focusTrap from 'focus-trap';

const defaults = {
    clickOutsideDeactivates: true
};

/**
 * Implements a focus trap (using https://github.com/focus-trap/focus-trap)
 *
 * Example usage:
 *
 * <div use:focusTrap={{ onDeactivate: myCloseFunction }}>...</div>
 *
 * @param element the element using this action
 * @param options see https://github.com/focus-trap/focus-trap#createoptions
 */
export function focusTrap(element: HTMLElement, options = {}) {
    const trap = _focusTrap.createFocusTrap(element, {...defaults, ...options});
    trap.activate();

    return {
        destroy() {
            trap.deactivate();
        }
    };
}
