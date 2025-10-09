// import { MouseParallax, ScrollParallax } from "react-just-parallax";

// const PracticeOne: React.FC = () => {
//   return (
//     <>
//       <div style={{ height: "200vh", padding: "100px" }}>
//         <ScrollParallax isAbsolutelyPositioned>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRiWwCMJ9R8DoD4nRtNv0J-XHgJ-lwBarSA&s"
//             alt="demo"
//             width={300}
//           />
//         </ScrollParallax>
//       </div>

//       <div style={{ height: "100vh" }}>
//         <MouseParallax enableOnTouchDevice>
//           <h1>سلام سعید 👋</h1>
//         </MouseParallax>
//       </div>
//     </>
//   );
// };

// export default PracticeOne;

// BentoGrid.jsx

const items = [
  {
    id: 1,
    title: "About",
    desc: "A short intro",
    classes: "col-span-1 md:col-span-2 md:row-span-2 bg-indigo-600 text-white",
  },
  {
    id: 2,
    title: "Projects",
    desc: "Recent work",
    classes: "col-span-1 md:col-span-2 bg-white",
  },
  {
    id: 3,
    title: "Blog",
    desc: "Latest posts",
    classes: "col-span-1 bg-slate-100",
  },
  {
    id: 4,
    title: "Contact",
    desc: "Get in touch",
    classes: "col-span-1 bg-rose-100",
  },
  {
    id: 5,
    title: "Case Study",
    desc: "Featured case",
    classes: "col-span-1 md:col-span-2 bg-gray-100",
  },
  {
    id: 6,
    title: "Gallery",
    desc: "Images",
    classes: "col-span-1 bg-emerald-100",
  },
];

export default function PracticeOne() {
  return (
    <section className="p-6">
      {/* gridAutoRows با inline style مشخص شده تا ارتفاع ردیف‌ها ثابت و قابل پیش‌بینی باشد */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        style={{ gridAutoRows: "10rem" }}
      >
        {items.map((it) => (
          <a
            key={it.id}
            href="#"
            // classes از آبجکت می‌آید: col-span / row-span و رنگ پس‌زمینه
            className={`group ${it.classes} rounded-xl shadow-md overflow-hidden flex items-end p-4 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`}
            aria-label={it.title}
          >
            <div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="text-sm opacity-80">{it.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
