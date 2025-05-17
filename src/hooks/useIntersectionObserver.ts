import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = <T extends Element>(
  options: IntersectionObserverOptions = {},
  once: boolean = false
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const { root = null, rootMargin = '0px', threshold = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (once && entry.isIntersecting && element) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, once]);

  return [elementRef, isIntersecting];
};