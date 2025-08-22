import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 p-10 text-slate-900 lg:flex dark:border-r">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(209,250,229,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                <Link href={route('home')} className="relative z-20 flex items-center text-lg font-medium">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 mr-3">
                        <AppLogoIcon/>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        ConnectEd-SA
                    </span>
                </Link>
                <div className="relative z-20 mt-auto">
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Welcome Back to
                                <span className="block bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    ConnectEd-SA
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Stay connected with your child's education journey. 
                                Access assignments, track progress, and communicate with teachers.
                            </p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Quick Access</h3>
                                    <p className="text-sm text-slate-600">Your educational dashboard</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-sm text-slate-700">View assignments</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-sm text-slate-700">Track progress</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-sm text-slate-700">Message teachers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link href={route('home')} className="relative z-20 flex items-center justify-center lg:hidden">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                <AppLogoIcon />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                ConnectEd-SA
                            </h1>
                        </div>
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">{description}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
