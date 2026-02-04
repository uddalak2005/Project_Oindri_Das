import { ArrowRight } from "lucide-react"

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white px-6 sm:px-12 pt-20 pb-10">

            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                {/* Left: Heading */}
                <div>
                    <p className="text-4xl sm:text-6xl md:text-8xl tracking-tight leading-tight text-white font-light">
                        Let’s Connect<br></br>There
                    </p>

                    <p className="mt-6 max-w-md text-white/70 md:text-base sm:text-lg">
                        Open to collaborations in research, academics, creative projects,
                        and meaningful work that creates impact.
                    </p>
                </div>

                {/* Right: CTA */}
                <a
                    href="mailto:yourmail@gmail.com"
                    className="
            group flex items-center gap-2
            bg-white/10 hover:bg-white/20
            rounded-full px-3 py-3
            transition-all duration-300
          "
                    style={{ textDecoration: 'none' }}
                >
                    {/* Icon Circle */}
                    <div
                        className="
              w-10 h-10 sm:w-15 sm:h-15 rounded-full
              bg-black text-black
              flex items-center justify-center
              group-hover:translate-x-1 transition p-2
            "
                    >
                        <ArrowRight size={40} color="#ffb703" />
                    </div>

                    <span className="text-white font-medium lg:text-xl p-2 text-sm" >
                        Mail Me
                    </span>
                </a>
            </div>

            {/* Divider */}
            <div className="my-14 h-px w-full bg-white/10" />

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-10 text-sm text-white/60">

                {/* Identity */}
                <div>
                    <p className="text-white font-medium text-lg">
                        Oindri Das
                    </p>
                    <p className="mt-2 max-w-xs">
                        Research • Academics • Creative Expression
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        {["Google Scholar", "LinkedIn"].map((item) => (
                            <span
                                key={item}
                                className="
                  cursor-pointer
                  hover:text-[#cd4631]
                  transition
                "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <p className="text-white font-medium mb-2">
                        Contact
                    </p>
                    <p className="hover:text-[#ffb703] transition cursor-pointer">
                        yourmail@gmail.com
                    </p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 text-center text-xs text-white/40">
                © {new Date().getFullYear()} Oindri Das. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
