import {useEffect} from 'preact/hooks';

const useAnimations = (className: string) => {
  const handleHover = (event: MouseEvent) => {
    const cards = [...document.querySelectorAll('.card')] as HTMLElement[];

    cards.forEach(card => {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  useEffect(() => {
    const grid = document.querySelector(`.${className}`) as HTMLElement;

    grid.addEventListener('mousemove', handleHover);
    return () => grid.removeEventListener('mousemove', handleHover);
  }, []);
};

export default useAnimations;
