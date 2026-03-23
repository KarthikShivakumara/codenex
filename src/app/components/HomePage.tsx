import { Navbar } from "./Navbar";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "motion/react";
import {
  Code2,
  Trophy,
  Users,
  Presentation,
  FolderKanban,
  Linkedin,
  Instagram,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Toaster position="top-right" />

      <div className="relative z-10">
        <HeroSection />
        <ActivitiesSection />
        <CompaniesSection />
        <TeamSection />
        <JoinSection />
        <AboutSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div
            className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#0B0F1A] via-[#1a2332] to-[#0B0F1A] flex items-center justify-center border-4 border-[#0A84FF] relative"
            style={{
              boxShadow:
                "0 0 60px 20px rgba(10, 132, 255, 0.4), inset 0 0 30px rgba(10, 132, 255, 0.2)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 60px 20px rgba(10, 132, 255, 0.4)",
                  "0 0 80px 30px rgba(10, 132, 255, 0.6)",
                  "0 0 60px 20px rgba(10, 132, 255, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
  <img
    src="/images/club-logo.jpg"
    alt="Coding Club Logo"
    className="w-full h-full object-contain"
  />
</div>
</div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">Code</span>{" "}
          <span className="text-[#0A84FF]">Nex</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-mono mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
Next Gen Coding Evolution
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Join the premier coding community where innovation meets excellence.
          We empower students to master programming, participate in competitive
          coding, and build groundbreaking projects.
        </motion.p>

        {/* Vision and Mission Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <GlassCard
            icon={<Target className="w-8 h-8 text-[#0A84FF]" />}
            title="Our Vision"
            description="To cultivate a thriving ecosystem of innovative programmers who push the boundaries of technology and create solutions that matter."
          />
          <GlassCard
            icon={<Lightbulb className="w-8 h-8 text-[#0A84FF]" />}
            title="Our Mission"
            description="Empower students with cutting-edge coding skills, foster collaborative learning, and prepare future tech leaders for top tech companies."
          />
        </motion.div>
      </div>
    </section>
  );
}

function GlassCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30 overflow-hidden group"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 40px rgba(10, 132, 255, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ActivitiesSection() {
  const activities = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Coding Relay",
      description:
        "A Coding challenge event where participants solve programming problems in relay format, encouraging teamwokr and quick problem solving\nDate : 11-03-2026",
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Idea to Impact: 24-Hour Build",
      description:"A 24-hour innovation challenge where students convert ideas into working solutions through collaborative coding.\nDate : 25-03-2026",
    },
  ];

  return (
    <section id="activities" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-[#0A84FF]">Activities</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Engage, Learn, and Excel through diverse coding experiences
          </p>
        </motion.div>

<div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ActivityCard {...activity} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30 overflow-hidden group h-full"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 60px rgba(10, 132, 255, 0.4)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="relative z-10">
        <motion.div
          className="text-[#0A84FF] mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Glowing corner accent */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0A84FF] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ zIndex: 0 }}
      />
    </motion.div>
  );
}

function CompaniesSection() {
  const companies = [
    { name: "Google", logo: "/images/companies/google-logo.png" },
    { name: "Microsoft", logo: "/images/companies/microsoft-logo.jpeg" },
    { name: "Amazon", logo: "/images/companies/amazon-logo.jpeg" },
    { name: "Adobe", logo: "/images/companies/adobe-logo.png" },
    { name: "Meta", logo: "/images/companies/meta-logo.jpeg" },
    { name: "Oracle", logo: "/images/companies/oracle-logo.jpeg" },
    { name: "Nvidia", logo: "/images/companies/nvidia-logo.jpeg" },
    { name: "Apple", logo: "/images/companies/apple-logo.jpeg" },
  ];

  return (
    <section id="companies" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[#0A84FF]">Targeted</span> Companies
          </h2>
          <p className="text-gray-400 text-lg">
            We prepare you for careers at leading tech giants
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 h-40 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30 flex flex-col items-center justify-center gap-4"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 50px rgba(10,132,255,0.5)",
                }}
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-xl font-semibold text-white">
                  {company.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Mrs. Pooja A",
      role: "Faculty Coordinator",
      photo: "/images/faculty/Pooja A.jpg",
    },
    {
      name: "Ms. Jayshri",
      role: "Faculty Coordinator",
      photo: "/images/faculty/Jayshree.jpg",
    },
    {
      name: "Ashraya M",
      role: "Student President",
      photo: "/images/students/president.jpg",
    },
    {
      name: "Kishore Biradar",
      role: "Vice-President",
      photo: "/images/students/vice-president.jpg",
    },
    {
      name: "Karthik S",
      role: "Secretary",
      photo: "/images/students/secretary.png",
    },
    {
      name: "Keerthana K M",
      role: "Treasurer",
      photo: "/images/students/treasurer.jpg",
    },
    {
      name: "K Harshavardhan",
      role: "PR Head",
      photo: "/images/students/prhead.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-[#0A84FF]">Team</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Meet the passionate leaders driving our community
          </p>
        </motion.div>

        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          {teamMembers.map((member, index) => {
            const offset = index - currentIndex;
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  x: offset * 300,
                  scale: isCenter ? 1 : 0.7,
                  opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.4,
                  filter: isCenter ? "blur(0px)" : "blur(3px)",
                  zIndex: isCenter ? 10 : 5 - absOffset,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div
  className="w-48 h-48 rounded-full border-4 border-[#0A84FF] mx-auto overflow-hidden"
  style={{
    boxShadow: isCenter
      ? "0 0 60px rgba(10, 132, 255, 0.6)"
      : "0 0 30px rgba(10, 132, 255, 0.3)",
  }}
>
  <img
    src={member.photo}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#0A84FF] font-mono">{member.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  const [formData, setFormData] = useState({
    teamName: "",
    member1Name: "",
    member1Email: "",
    member1Branch: "",
    member1Semester: "",
    member1USN: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    member4Name: "",
    member4Email: "",
    contactNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock: Generate Access ID
    const accessId = `ACC${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    toast.success(`Registration Successful! Your Access ID: ${accessId}`, {
      description: "Access ID has been sent to all team member emails.",
      duration: 5000,
    });
    // Reset form
    setFormData({
      teamName: "",
      member1Name: "",
      member1Email: "",
      member1Branch: "",
      member1Semester: "",
      member1USN: "",
      member2Name: "",
      member2Email: "",
      member3Name: "",
      member3Email: "",
      member4Name: "",
      member4Email: "",
      contactNumber: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="join" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[#0A84FF]">Join</span> Our Community
          </h2>
          <p className="text-gray-400 text-lg">
            Register your team and embark on your coding journey
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                name="teamName"
                required
                value={formData.teamName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                style={{
                  boxShadow: "0 0 0 0 rgba(10, 132, 255, 0)",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 20px rgba(10, 132, 255, 0.3)")
                }
                onBlur={(e) =>
                  (e.target.style.boxShadow = "0 0 0 0 rgba(10, 132, 255, 0)")
                }
              />
            </div>

            {/* Team Leader */}
            <div className="border-t border-[#0A84FF]/30 pt-6">
              <h3 className="text-xl font-bold text-[#0A84FF] mb-4">
                Team Leader (Member 1)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="member1Name"
                  placeholder="Full Name *"
                  required
                  value={formData.member1Name}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  name="member1Email"
                  placeholder="Email *"
                  required
                  value={formData.member1Email}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
                <input
                  type="text"
                  name="member1Branch"
                  placeholder="Branch *"
                  required
                  value={formData.member1Branch}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
                <input
                  type="text"
                  name="member1Semester"
                  placeholder="Semester *"
                  required
                  value={formData.member1Semester}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
                <input
                  type="text"
                  name="member1USN"
                  placeholder="USN *"
                  required
                  value={formData.member1USN}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Team Contact Number *"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Other Members */}
            {[2, 3, 4].map((num) => (
              <div key={num} className="border-t border-[#0A84FF]/30 pt-6">
                <h3 className="text-lg font-bold text-gray-300 mb-4">
                  Team Member {num} (Optional)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name={`member${num}Name`}
                    placeholder="Full Name"
                    value={
                      formData[`member${num}Name` as keyof typeof formData]
                    }
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    name={`member${num}Email`}
                    placeholder="Email"
                    value={
                      formData[`member${num}Email` as keyof typeof formData]
                    }
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
                  />
                </div>
              </div>
            ))}

            <motion.button
              type="submit"
              className="w-full py-4 px-6 bg-[#0A84FF] text-white font-bold text-lg rounded-lg hover:bg-[#0066CC] transition-colors"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(10, 132, 255, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Register Team
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[#0A84FF]">About</span> Us
          </h2>
        </motion.div>

        <motion.div
          className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            The Coding Club is a vibrant community of passionate programmers,
            innovators, and tech enthusiasts. Founded with the vision to
            democratize coding education and foster a culture of continuous
            learning, we've grown into one of the most active technical clubs on
            campus.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Through our diverse range of activities - from competitive
            programming contests to collaborative hackathons, technical
            workshops to industry expert sessions - we provide a comprehensive
            platform for students to enhance their coding skills, build
            real-world projects, and prepare for successful careers in
            technology.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Join us in our mission to create the next generation of tech leaders
            and innovators. Whether you're a beginner taking your first steps in
            programming or an experienced coder looking to push your limits, the
            Coding Club welcomes you!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/codenex-coding-club-7002bb3b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white/5 border border-[#0A84FF]/30 flex items-center justify-center text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white transition-colors"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(10, 132, 255, 0.6)",
            }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/codenex.club?igsh=MWptNzNhYW9nOHU1eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white/5 border border-[#0A84FF]/30 flex items-center justify-center text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white transition-colors"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(10, 132, 255, 0.6)",
            }}
          >
            <Instagram className="w-8 h-8" />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 text-gray-500 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>© 2026 Coding Club. All rights reserved.</p>
          <p className="mt-2">Made with 💙 by the Coding Club Secretary Karthik S</p>
        </motion.div>
      </div>
    </section>
  );
}
