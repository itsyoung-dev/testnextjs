import { ClerkProvider } from '@clerk/nextjs';
import { inter } from '@/lib/scripts/font';
import '@/lib/styles/main.scss';

export default function Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="h-full w-full flex items-center justify-center">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}

