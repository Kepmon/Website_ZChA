type Element = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement
export const setAriaValues = (element: Element) => {
    if (element.getAttribute('aria-expanded') === 'false') {
        element.setAttribute('aria-expanded', 'true')
        return
    }
    element.setAttribute('aria-expanded', 'false')
}