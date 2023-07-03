type Element = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement

export const setAriaValues = (element: Element, observer: ResizeObserver) => {
    if (element.getAttribute('aria-expanded') === 'false') {
        observer.unobserve(element.nextElementSibling as HTMLUListElement)
        element.nextElementSibling?.removeAttribute('aria-hidden')
        element.setAttribute('aria-expanded', 'true')
        return
    }
    observer.observe(element.nextElementSibling as HTMLUListElement)
    element.setAttribute('aria-expanded', 'false')
}