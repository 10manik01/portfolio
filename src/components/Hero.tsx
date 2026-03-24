import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// Currently using project images as placeholders for personal gallery photos
const p1 = import.meta.env.BASE_URL + 'images/autonomous_waterbot.mp4';
const p2 = import.meta.env.BASE_URL + 'images/fitplay.png';
const p3 = import.meta.env.BASE_URL + 'images/covid.png';
const IMAGE_AUTOPLAY_DELAY = 4500;

type GalleryItem = {
  src: string;
  alt: string;
  type: 'image' | 'video';
};

function GalleryMedia({
  item,
  isActive,
  onVideoEnded
}: {
  item: GalleryItem;
  isActive: boolean;
  onVideoEnded: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item.type !== 'video' || !videoRef.current) return;

    if (isActive) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play().catch(() => {});
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isActive, item.type]);

  if (item.type === 'video') {
    return (
      <video
        ref={videoRef}
        src={item.src}
        muted
        playsInline
        preload="metadata"
        onEnded={onVideoEnded}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <motion.img
      initial={{ scale: 1.05 }}
      animate={{ scale: isActive ? 1.15 : 1.05 }}
      transition={{ duration: 20, ease: "linear" }}
      src={item.src}
      alt={item.alt}
      className="absolute inset-0 w-full h-full object-cover origin-center"
    />
  );
}

export function Hero() {
  const mediaItems: GalleryItem[] = [
    { src: p1, alt: 'Autonomous Water Waste Robot Demo', type: 'video' },
    { src: p2, alt: 'Gallery Image 2', type: 'image' },
    { src: p3, alt: 'Gallery Image 3', type: 'image' }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Custom Cursor & 3D Tilt state
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  // 3D Parallax Tilt for the entire container
  const rotateX = useTransform(mouseYSpring, [-500, 500], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-500, 500], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of the container
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    cursorX.set(e.clientX - 28);
    cursorY.set(e.clientY - 28);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const syncAutoplayForSlide = (swiper: SwiperType) => {
    const activeItem = mediaItems[swiper.realIndex];

    if (activeItem?.type === 'video') {
      swiper.autoplay.stop();
      return;
    }

    swiper.params.autoplay = {
      ...(typeof swiper.params.autoplay === 'object' ? swiper.params.autoplay : {}),
      delay: IMAGE_AUTOPLAY_DELAY,
      disableOnInteraction: false
    };
    swiper.autoplay.start();
  };

  const handleVideoEnded = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section id="home" className="pt-4 sm:pt-8 md:pt-12 pb-14 sm:pb-20 px-3 sm:px-4 md:px-8 lg:px-16 w-full relative perspective-[2000px]">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[54vh] min-h-[360px] max-h-[520px] sm:h-[75vh] sm:max-h-none md:h-[82vh] 2xl:h-[88vh] rounded-[1.5rem] sm:rounded-2xl md:rounded-[2.75rem] p-1.5 sm:p-3 md:p-[14px] overflow-hidden cursor-default sm:cursor-none border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] shadow-[0_35px_90px_-28px_rgba(15,23,42,0.45)] dark:shadow-[0_40px_90px_-24px_rgba(0,0,0,0.65)]"
      >
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2.75rem] bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.18),transparent_32%)] pointer-events-none" />
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2.75rem] bg-gradient-to-br from-white/45 via-white/10 to-transparent dark:from-white/10 dark:via-white/[0.03] dark:to-transparent pointer-events-none" />
        <div className="absolute left-4 top-4 h-20 w-20 sm:left-6 sm:top-6 sm:h-24 sm:w-24 rounded-full bg-green-400/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 right-4 h-24 w-24 sm:bottom-6 sm:right-6 sm:h-28 sm:w-28 rounded-full bg-red-500/15 blur-3xl pointer-events-none" />

        {/* Custom "DRAG" Cursor - Only visible when hovering the container */}
        <motion.div 
          className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-[rgba(255,255,255,0.96)] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
        >
          DRAG
        </motion.div>

        <div
          className="absolute inset-[6px] sm:inset-[10px] md:inset-[14px] overflow-hidden rounded-[1.25rem] sm:rounded-[2.1rem] border border-white/15 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-[1px] rounded-[1.15rem] sm:rounded-[2rem] border border-white/8 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(34,197,94,0.08))] pointer-events-none z-20" />

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncAutoplayForSlide(swiper);
            }}
            onSlideChange={syncAutoplayForSlide}
            spaceBetween={0}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
                rotate: [0, 0, -2],
                opacity: 0,
                scale: 0.85
              },
              next: {
                translate: ['100%', 0, 0],
                rotate: [0, 0, 2],
                shadow: true,
              },
            }}
            loop={true}
            speed={1800} // Ultra-slow, deeply cinematic transition speed
            autoplay={{
              delay: IMAGE_AUTOPLAY_DELAY,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (_, className) => {
                return `<span class="${className} w-12 h-1 rounded-full bg-white/30 backdrop-blur-md transition-all duration-700 mx-1.5 border border-white/10 hover:bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.2)]"></span>`;
              },
              el: '.custom-pagination'
            }}
            modules={[Autoplay, EffectCreative, Pagination]}
            className="w-full h-full relative group/hero"
          >
            {mediaItems.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className="w-full h-full relative overflow-hidden bg-black">
                    <GalleryMedia item={item} isActive={isActive} onVideoEnded={handleVideoEnded} />
                    
                    {/* Ultra-soft edge darkening */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none mix-blend-multiply" />
                  </div>
                )}
              </SwiperSlide>
            ))}

            <div className="absolute inset-0 z-30 pointer-events-none">
              <div className="absolute left-4 bottom-4 sm:left-5 sm:bottom-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[rgba(255,255,255,0.85)]">
                    Visual Gallery
                  </span>
                </div>
              </div>

              {/* <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="max-w-[300px] rounded-[1.4rem] border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-green-300/90">
                    Selected Frames
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed text-[rgba(255,255,255,0.78)]">
                    A more cinematic window into my perspective, process, and visual storytelling.
                  </p>
                </div>
              </div> */}
            </div>

            {/* Top Interface: Sleek Pagination */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-8 md:p-12 z-40 flex justify-center items-start pointer-events-none">
              {/* Custom Interactive Line Pagination */}
              <div className="custom-pagination flex items-center justify-center pointer-events-auto drop-shadow-2xl" />
            </div>

          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
