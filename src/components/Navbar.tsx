import { Code2, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";

export const Navbar = ({
  active,
  onChangeSection,
}: {
  active: string;
  onChangeSection: (id: string) => void;
}) => {
  const navItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Skills", icon: Code },
    { name: "Projects", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      id="Home"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <div className="bg-gradient-blue p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
            M.Logeshwaran
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item,idx) => {
            const Icon = item.icon;
            return (
              <div 
              key={idx}
              className="flex flex-col">
                <a
                  className="flex items-center gap-2 rounded-full px-1 text-primary font-medium cursor-pointer"
                  onClick={() => onChangeSection(item.name.toLocaleLowerCase())}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </a>
                {
                    active==item.name.toLocaleLowerCase()&&<motion.div 
                    layoutId="underline" 
                    transition={{
                        type:"spring",
                        stiffness:150,
                        damping:10
                    }}
                    className="h-px rounded-full w-[90%] flex self-center bg-linear-to-r from-portfolio-blue via-portfolio-cyan to-portfolio-purple"/>
                }
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
