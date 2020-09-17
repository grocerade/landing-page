export const handleScrollTo = (ref: React.RefObject<any>) => {
  window.scrollTo({
    top: ref.current.offsetTop - 80,
    behavior: "smooth",
  });
};
