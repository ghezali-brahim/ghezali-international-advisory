'use client';

import { useEffect, useRef, useState, Children, type FC, type ReactNode } from 'react';

// Animation Hook
export const useAnimation = <T extends HTMLElement = HTMLElement>(options: IntersectionObserverInit = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible] as const;
};

// Fade In Animation
export const FadeIn: FC<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, duration = 0.6, direction = 'up', className = '' }) => {
  const [ref, isVisible] = useAnimation<HTMLDivElement>();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration * 1000} ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Stagger Animation for Lists
export const StaggerContainer: FC<{
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 100 }) => {
  const [ref, isVisible] = useAnimation<HTMLDivElement>();
  const [childVisibility, setChildVisibility] = useState<boolean[]>([]);

  useEffect(() => {
    if (isVisible && childVisibility.length === 0) {
      const childrenArray = Children.toArray(children);
      const newVisibility = new Array(childrenArray.length).fill(false);
      
      childrenArray.forEach((_, index) => {
        setTimeout(() => {
          setChildVisibility(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * staggerDelay);
      });
    }
  }, [isVisible, children, staggerDelay, childVisibility.length]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <FadeIn
          key={index}
          delay={index * staggerDelay}
          className={childVisibility[index] ? 'opacity-100' : 'opacity-0'}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
};

// Counter Animation
export const AnimatedCounter: FC<{
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}> = ({ end, duration = 2000, prefix = '', suffix = '', className = '' }) => {
  const [ref, isVisible] = useAnimation<HTMLSpanElement>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Typing Animation
export const TypingAnimation: FC<{
  texts: string[];
  speed?: number;
  pauseTime?: number;
  className?: string;
}> = ({ texts, speed = 100, pauseTime = 2000, className = '' }) => {
  const [ref, isVisible] = useAnimation<HTMLSpanElement>();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, speed, pauseTime, isVisible]);

  return (
    <span ref={ref} className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Hover Animation Wrapper
export const HoverAnimation: FC<{
  children: ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
}> = ({ children, scale = 1.05, rotate = 0, className = '' }) => {
  return (
    <div
      className={`transition-all duration-300 hover:scale-${scale * 100} hover:rotate-${rotate} ${className}`}
      style={{
        transform: `scale(1) rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
};

// Loading Spinner
const spinnerBorderTClasses: Record<'yellow' | 'white' | 'black' | 'gray', string> = {
  yellow: 'border-t-yellow-600',
  white: 'border-t-white',
  black: 'border-t-black',
  gray: 'border-t-gray-600',
};

export const LoadingSpinner: FC<{
  size?: 'sm' | 'md' | 'lg';
  color?: 'yellow' | 'white' | 'black' | 'gray';
  className?: string;
}> = ({ size = 'md', color = 'yellow', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 ${spinnerBorderTClasses[color]} ${sizeClasses[size]} ${className}`}
    />
  );
};

// Pulse Animation
export const Pulse: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
};

// Bounce Animation
export const Bounce: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`animate-bounce ${className}`}>
      {children}
    </div>
  );
};

// Slide In Animation
export const SlideIn: FC<{
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const [ref, isVisible] = useAnimation<HTMLDivElement>();

  const getTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-100%)';
      case 'right': return 'translateX(100%)';
      case 'up': return 'translateY(-100%)';
      case 'down': return 'translateY(100%)';
      default: return 'translateX(-100%)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Parallax Scroll Animation
export const ParallaxScroll: FC<{
  children: ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const [ref, isVisible] = useAnimation<HTMLDivElement>();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, ref]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

const animationsExport = {
  FadeIn,
  StaggerContainer,
  AnimatedCounter,
  TypingAnimation,
  HoverAnimation,
  LoadingSpinner,
  Pulse,
  Bounce,
  SlideIn,
  ParallaxScroll,
};
export default animationsExport;
