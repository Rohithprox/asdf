'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Award,
  Beaker,
  Palette,
  Users,
  Trophy,
  Target,
  ChevronRight,
  Star,
  School,
  BookOpenCheck,
  Presentation,
  GraduationCap as TeacherIcon,
  Medal
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Footer from '@/components/shared/Footer';

const AcademicsPage = () => {
  const sections = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'junior', label: 'Jr. School', icon: School },
    { id: 'middle', label: 'Middle School', icon: BookOpenCheck },
    { id: 'senior', label: 'Sr. School', icon: GraduationCap },
    { id: 'faculty', label: 'Our Faculty', icon: TeacherIcon },
    { id: 'results', label: 'Results', icon: Medal }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mb-6">
      <h2 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 whitespace-nowrap">
        {children}
      </h2>
      <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] min-h-[300px] lg:min-h-[400px]">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/85 to-orange-700/80 mix-blend-multiply" />
        
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/academics-hero.jpg"
            alt="Academics at Rainbow School"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content overlay with additional gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-patrick"
          >
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl architect"
          >
            Nurturing minds through innovative learning and holistic development
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Quick Jump Section */}
        <div className="mb-16">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                variants={item}
                className="group"
              >
                <Card className="border-pink-100 hover:border-pink-300 transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <section.icon className="w-6 h-6 mx-auto mb-2 text-pink-600 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-gray-600 group-hover:text-pink-600">{section.label}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Curriculum Section */}
        <section id="curriculum" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <SectionTitle>Our Curriculum</SectionTitle>
              <p className="text-gray-600 mb-6">
                Our comprehensive curriculum is designed to foster academic excellence while nurturing creativity and critical thinking. We follow the CBSE curriculum enhanced with international best practices.
              </p>
              <div className="space-y-4">
                <Card className="border-pink-100">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-pink-100">
                      <Star className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">CBSE Aligned</h3>
                      <p className="text-sm text-gray-600">Following the latest CBSE guidelines with enhanced learning outcomes</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-pink-100">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-pink-100">
                      <Target className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Holistic Development</h3>
                      <p className="text-sm text-gray-600">Focus on academic, physical, emotional, and social growth</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-pink-100">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-pink-100">
                      <Users className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Personalized Learning</h3>
                      <p className="text-sm text-gray-600">Adaptive teaching methods catering to individual student needs</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/curriculum.jpg"
                alt="Curriculum"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Junior School */}
        <section id="junior" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/junior-school.jpg"
                alt="Junior School"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle>Junior School Programme</SectionTitle>
              <p className="text-gray-600 mb-6">
                Our junior school program focuses on building strong foundations through engaging, student-centered learning experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Phonics-based reading",
                  "Number concepts",
                  "Environmental awareness",
                  "Creative expression",
                  "Physical development",
                  "Social skills",
                  "Basic computer skills",
                  "Value education"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Middle School */}
        <section id="middle" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <SectionTitle>Middle School Programme</SectionTitle>
              <p className="text-gray-600 mb-6">
                The middle school years are crucial for developing academic rigor and exploring diverse interests.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Core Academics",
                    items: ["Mathematics", "Science", "Languages", "Social Studies"]
                  },
                  {
                    title: "Skills Development",
                    items: ["Critical thinking", "Research skills", "Digital literacy", "Communication"]
                  },
                  {
                    title: "Extra-Curricular",
                    items: ["Sports", "Arts", "Music", "Clubs"]
                  }
                ].map((group, idx) => (
                  <Card key={idx} className="border-pink-100">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{group.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, i) => (
                          <Badge key={i} variant="secondary" className="bg-pink-100 text-pink-700">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/middle-school.jpg"
                alt="Middle School"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Senior School */}
        <section id="senior" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <SectionTitle>Senior School Programme</SectionTitle>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Science Stream",
                  icon: Beaker,
                  subjects: ["Physics", "Chemistry", "Biology/Computer Science", "Mathematics"],
                  color: "pink"
                },
                {
                  title: "Commerce Stream",
                  icon: Trophy,
                  subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
                  color: "purple"
                },
                {
                  title: "Humanities Stream",
                  icon: BookOpen,
                  subjects: ["History", "Geography", "Political Science", "Economics"],
                  color: "blue"
                }
              ].map((stream, idx) => (
                <Card key={idx} className={`border-${stream.color}-100`}>
                  <CardHeader>
                    <div className={`p-2 rounded-lg bg-${stream.color}-100 w-fit`}>
                      <stream.icon className={`w-6 h-6 text-${stream.color}-600`} />
                    </div>
                    <CardTitle className="mt-4">{stream.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stream.subjects.map((subject, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ChevronRight className={`w-4 h-4 text-${stream.color}-500`} />
                          <span className="text-gray-600">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <SectionTitle>Our Faculty</SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Head of Sciences",
                  image: "/images/faculty1.jpg",
                  qualifications: ["Ph.D. in Physics", "15+ years experience"]
                },
                {
                  name: "Prof. Michael Chen",
                  role: "Mathematics Department",
                  image: "/images/faculty2.jpg",
                  qualifications: ["M.Sc. Mathematics", "Advanced Teaching Certification"]
                },
                {
                  name: "Ms. Emily Williams",
                  role: "English Literature",
                  image: "/images/faculty3.jpg",
                  qualifications: ["M.A. English", "Cambridge CELTA"]
                }
              ].map((faculty, idx) => (
                <Card key={idx} className="overflow-hidden group">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                      <p className="text-gray-200 mb-2">{faculty.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {faculty.qualifications.map((qual, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                            {qual}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section id="results" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <SectionTitle>Academic Results</SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle>Class XII Results 2023</CardTitle>
                  <CardDescription>Outstanding achievements across streams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "School Average", value: "92.3%" },
                      { label: "Students Scoring Above 90%", value: "45%" },
                      { label: "100% Pass Rate", value: "Yes" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-semibold text-purple-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle>Class X Results 2023</CardTitle>
                  <CardDescription>Exceptional academic performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "School Average", value: "89.8%" },
                      { label: "Students Scoring Above 90%", value: "38%" },
                      { label: "100% Pass Rate", value: "Yes" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-semibold text-purple-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsPage; 