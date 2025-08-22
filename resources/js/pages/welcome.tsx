import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Users, MessageSquare, Calendar, Award, Shield, ArrowRight, CheckCircle, Star, Play, TrendingUp, GraduationCap, Heart, Lightbulb, Target, Rocket, Sparkles, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
    const [showDemo, setShowDemo] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.theme;
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setCurrentTheme(savedTheme);
        } else {
            setCurrentTheme('light');
        }
    }, []);

    const updateTheme = (theme: 'light' | 'dark') => {
        setCurrentTheme(theme);
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    const schools = [
        {
            initials: 'SHS',
            name: 'St. Helena High School',
            shortName: 'St. Helena',
            review: 'Excellent platform for parent communication',
            rating: 5,
            color: 'from-blue-500 to-blue-600'
        },
        {
            initials: 'PHS',
            name: 'Port Elizabeth High School',
            shortName: 'Port Elizabeth',
            review: 'Game-changer for our school community',
            rating: 5,
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            initials: 'CHS',
            name: 'Cape Town High School',
            shortName: 'Cape Town',
            review: 'Outstanding parent engagement results',
            rating: 5,
            color: 'from-purple-500 to-purple-600'
        },
        {
            initials: 'RHS',
            name: 'Rustenburg High School',
            shortName: 'Rustenburg',
            review: 'Highly recommend for all schools',
            rating: 5,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <>
            <Head title="ConnectEd-SA - Connecting Schools, Parents & Children">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-200/50 dark:bg-slate-900/90 dark:border-emerald-800/50 animate-in slide-in-from-top-2 duration-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                        <GraduationCap className="h-6 w-6 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                        ConnectEd-SA
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                <a href="#features" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                                    Features
                                </a>
                                <a href="#how-it-works" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                                    How It Works
                                </a>
                                <a href="#pricing" className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                                    Pricing
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="inline-flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                                {[
                                    { value: 'light' as const, icon: Sun },
                                    { value: 'dark' as const, icon: Moon }
                                ].map(({ value, icon: Icon }) => (
                                    <button
                                        key={value}
                                        onClick={() => updateTheme(value)}
                                        className={`flex items-center rounded-md px-3 py-1.5 text-sm transition-colors ${
                                            currentTheme === value
                                                ? 'bg-white shadow-sm dark:bg-slate-700 dark:text-slate-100'
                                                : 'text-slate-500 hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700/60 dark:hover:text-slate-100'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </button>
                                ))}
                            </div>
                            
                            {auth.user ? (
                                <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25">
                                    <Link href={route('dashboard')}>
                                        Dashboard
                                    </Link>
                                </Button>
                            ) : (
                                <>
                                    <Button variant="ghost" asChild className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
                                        <Link href={route('login')}>
                                            Log in
                                        </Link>
                                    </Button>
                                    <Button asChild className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 shadow-lg shadow-emerald-500/25 text-white">
                                        <Link href={route('register')}>
                                            Get Started
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-950/20 dark:to-teal-950/20 overflow-hidden relative">
                <div className="absolute inset-0 opacity-60" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1fae5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <Badge variant="secondary" className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Revolutionizing Education in South Africa
                            </Badge>
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 leading-tight">
                                Stay Connected with Your
                                <span className="block bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    Child's Education
                                </span>
                            </h1>
                            
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 leading-relaxed">
                                ConnectEd-SA bridges the gap between schools, parents, and children. 
                                Stay updated on homework, assignments, and progress while maintaining open communication with teachers.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                                <Button asChild size="lg" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg h-auto shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300">
                                    <Link href={route('register')}>
                                        Start Free Trial
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" onClick={() => setShowDemo(true)} className="text-lg px-6 py-3 h-auto border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/20">
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </div>
                            
                            <div className="mt-12 flex items-center space-x-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                                <div className="flex items-center space-x-3">
                                    <div className="flex -space-x-2">
                                        {schools.map((school) => (
                                            <TooltipProvider key={school.initials}>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className={`w-10 h-10 bg-gradient-to-br ${school.color} rounded-full border-4 border-white dark:border-slate-800 shadow-lg flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:scale-110 transition-transform duration-200`}>
                                                            {school.initials}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="max-w-xs p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 [&[data-state]]:bg-white dark:[&[data-state]]:bg-slate-800">
                                                        <div className="text-center">
                                                            <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-lg">{school.shortName}</h4>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{school.name}</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{school.review}</p>
                                                            <div className="flex justify-center space-x-1">
                                                                {[...Array(school.rating)].map((_, i) => (
                                                                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">500+ Schools Trust Us</span>
                                </div>
                                <Separator orientation="vertical" className="h-8" />
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">4.9/5 Rating</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                            <div className="relative">
                                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl shadow-emerald-500/10 border border-emerald-100 dark:border-emerald-800/50">
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-6">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                                <BookOpen className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 dark:text-white">Math Assignment</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">Due: Tomorrow</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">Complete exercises 1-15</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">Show all working steps</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">Submit online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25 animate-bounce" style={{ animationDelay: '0s' }}>
                                    <Target className="h-10 w-10 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/25 animate-bounce" style={{ animationDelay: '1s' }}>
                                    <Heart className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25 animate-bounce" style={{ animationDelay: '2s' }}>
                                    <Lightbulb className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <Badge variant="outline" className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Powerful Features
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Everything You Need to Stay Connected
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 leading-relaxed">
                            Our comprehensive platform provides all the tools needed for effective communication 
                            and educational oversight.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "Homework & Assignments",
                                description: "Children receive and submit homework assignments, while parents stay informed about upcoming deadlines and completed work.",
                                color: "emerald",
                                gradient: "from-emerald-500 to-teal-500"
                            },
                            {
                                icon: MessageSquare,
                                title: "Direct Communication",
                                description: "Teachers and parents can communicate directly through secure messaging, ensuring everyone stays in the loop.",
                                color: "blue",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Calendar,
                                title: "Progress Tracking",
                                description: "Monitor your child's academic progress, attendance, and performance with detailed reports and analytics.",
                                color: "purple",
                                gradient: "from-purple-500 to-violet-500"
                            },
                            {
                                icon: Users,
                                title: "Parent-Teacher Collaboration",
                                description: "Foster strong partnerships between parents and teachers for better educational outcomes.",
                                color: "amber",
                                gradient: "from-amber-500 to-orange-500"
                            },
                            {
                                icon: Award,
                                title: "Achievement Recognition",
                                description: "Celebrate your child's accomplishments and milestones with digital badges and recognition systems.",
                                color: "rose",
                                gradient: "from-rose-500 to-pink-500"
                            },
                            {
                                icon: Shield,
                                title: "Secure & Private",
                                description: "Your family's educational data is protected with enterprise-grade security and privacy controls.",
                                color: "indigo",
                                gradient: "from-indigo-500 to-blue-500"
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700" style={{ animationDelay: `${index * 100}ms` }}>
                                <CardHeader className="pb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${feature.color}-500/25`}>
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-slate-900 dark:text-white">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-800 dark:via-emerald-950/20 dark:to-teal-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                            <Heart className="h-4 w-4 mr-2" />
                            What Schools Say
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Trusted by Leading Schools
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Hear from principals and educators who have transformed their school's parent engagement
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                                        SHS
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Sarah Johnson</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Principal, St. Helena High</p>
                                    </div>
                                </div>
                                <blockquote className="text-slate-700 dark:text-slate-300 italic">
                                    "ConnectEd-SA has revolutionized how we communicate with parents. Our parent engagement has increased by 300% since implementation."
                                </blockquote>
                            </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                                        PHS
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Michael Chen</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Principal, Port Elizabeth High</p>
                                    </div>
                                </div>
                                <blockquote className="text-slate-700 dark:text-slate-300 italic">
                                    "The platform's ease of use and comprehensive features have made parent-teacher communication seamless and effective."
                                </blockquote>
                            </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                                        CHS
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Dr. Lisa Mbeki</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Principal, Cape Town High</p>
                                    </div>
                                </div>
                                <blockquote className="text-slate-700 dark:text-slate-300 italic">
                                    "Our students' academic performance has improved significantly since parents became more involved through ConnectEd-SA."
                                </blockquote>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-800 dark:via-emerald-950/20 dark:to-teal-950/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <Badge variant="outline" className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                            <Globe className="h-4 w-4 mr-2" />
                            Simple Process
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            How ConnectEd-SA Works
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 leading-relaxed">
                            Simple steps to get started and transform your child's educational experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                step: "1",
                                title: "School Registration",
                                description: "Schools register and set up their ConnectEd-SA portal with teacher accounts and student rosters.",
                                icon: GraduationCap,
                                gradient: "from-emerald-500 to-teal-500"
                            },
                            {
                                step: "2",
                                title: "Parent & Student Setup",
                                description: "Parents create accounts and link to their children's profiles, while students get access to their learning dashboard.",
                                icon: Users,
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                step: "3",
                                title: "Start Learning & Communicating",
                                description: "Begin receiving assignments, tracking progress, and maintaining open communication between all parties.",
                                icon: Rocket,
                                gradient: "from-purple-500 to-violet-500"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center group animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="relative mb-8">
                                    <div className={`w-24 h-24 bg-gradient-to-br ${item.gradient} text-white rounded-3xl flex items-center justify-center text-4xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-${item.gradient.split('-')[1]}-500/25`}>
                                        {item.step}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                        <item.icon className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                            <Badge variant="outline" className="mb-6 bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Why Choose Us
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                                Why Schools Choose ConnectEd-SA
                            </h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Improved Parent Engagement",
                                        description: "Increase parent participation and involvement in their children's education.",
                                        icon: "📈"
                                    },
                                    {
                                        title: "Better Student Outcomes",
                                        description: "Students perform better when parents are actively involved in their learning.",
                                        icon: "🎯"
                                    },
                                    {
                                        title: "Streamlined Communication",
                                        description: "Reduce administrative overhead with centralized communication tools.",
                                        icon: "💬"
                                    },
                                    {
                                        title: "Data-Driven Insights",
                                        description: "Access comprehensive analytics to improve teaching strategies and student support.",
                                        icon: "📊"
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start group">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-2xl">{benefit.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">{benefit.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                            <Card className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-10 text-white border-0 shadow-2xl shadow-emerald-500/25 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-30" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundSize: '60px 60px'
                                }}></div>
                                <CardHeader className="relative z-10">
                                    <CardTitle className="text-3xl text-white mb-2">Join Thousands of Schools</CardTitle>
                                    <CardDescription className="text-emerald-100 text-lg">
                                        Already trusted by educational institutions across South Africa to improve parent engagement and student success.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="grid grid-cols-3 gap-8 text-center">
                                        <div className="group">
                                            <div className="text-5xl font-bold group-hover:scale-110 transition-transform duration-300">500+</div>
                                            <div className="text-emerald-100 text-lg">Schools</div>
                                        </div>
                                        <div className="group">
                                            <div className="text-5xl font-bold group-hover:scale-110 transition-transform duration-300">50K+</div>
                                            <div className="text-emerald-100 text-lg">Students</div>
                                        </div>
                                        <div className="group">
                                            <div className="text-5xl font-bold group-hover:scale-110 transition-transform duration-300">100K+</div>
                                            <div className="text-emerald-100 text-lg">Parents</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight">
                        Ready to Transform Your Child's Education?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 leading-relaxed">
                        Join ConnectEd-SA today and experience the difference that connected learning makes for your family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <Button asChild size="default" variant="secondary" className="px-6 py-3 bg-white text-emerald-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <Link href={route('register')}>
                                Start Free Trial
                            </Link>
                        </Button>
                        <Button asChild size="default" variant="secondary" className="px-6 py-3 bg-white text-emerald-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-3000">
                            <Link href={route('login')}>
                                Sign In
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                    <GraduationCap className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-400">ConnectEd-SA</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Connecting schools, parents, and children for better educational outcomes.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Platform</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#features" className="hover:text-emerald-400 transition-colors duration-300">Features</a></li>
                                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors duration-300">How It Works</a></li>
                                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors duration-300">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Support</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Help Center</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Contact Us</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Connect</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <Separator className="my-12 bg-slate-800" />
                    <div className="text-center text-slate-400">
                        <p>&copy; 2024 ConnectEd-SA. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Demo Modal */}
            <Dialog open={showDemo} onOpenChange={setShowDemo}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-slate-900 dark:text-white">
                            🎬 ConnectEd-SA Demo
                        </DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full max-w-2xl mx-auto bg-black rounded-lg overflow-hidden">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&rel=0"
                                title="ConnectEd-SA Demo"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-slate-800 dark:text-slate-200 text-base font-medium">
                            Experience the future of education communication! 🚀
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
