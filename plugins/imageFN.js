export default function (ctx, inject) {
  const lazyLoad = () => {
    const elements = document.querySelectorAll(
      '[data-srcset],[data-src], [data-bgimage]'
    )
    elements.forEach((element, i) => {
      if (
        element.getBoundingClientRect().top - window.innerHeight <
        window.pageYOffset
      ) {
        if (!element.dataset.bgimage && element.dataset.src) {
          element.setAttribute('src', element.dataset.src)
          element.removeAttribute('data-src')
        } else if (element.dataset.srcset) {
          element.setAttribute('srcset', element.dataset.srcset)
          element.removeAttribute('data-srcset')
        } else {
          element.removeAttribute('data-bgimage')
        }
      }
    })
  }
  function findCompatibleSizeImg(imgSizes, sourceUrl) {
    //  if sizes array not exist
    if (!imgSizes?.length) return sourceUrl

    return imgSizes.reduce((prev, curr) =>
      Math.abs(curr.height + curr.width - this.imgSize) <
      Math.abs(prev - this.imgSize)
        ? curr
        : prev
    ).sourceUrl
  }
  inject('imageFN', { lazyLoad, findCompatibleSizeImg })
}
